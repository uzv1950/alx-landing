import type { FC } from 'react';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { TSessionUser } from '@/types/index';
import { useSession } from 'next-auth/react';
import useAuthService from '@/features/Session/hooks/useAuthService';
import { LoaderMain } from '@/components/layouts';
import { useRouter } from 'next/router';
import useShoppingCart from '@/features/Store/store/useShoppingCart';
import usePreregisterStore from '@/features/Store/store/usePreregisterStore';
import { ErrorRoot } from '@/const/errors';
import useError from '@/hooks/useError';

export type ContextProps = {
  session?: TSessionUser | null;
  updateSession: (args: Partial<TSessionUser>) => void;
  clearSession: () => void;
  clearStoreZustand: () => void;
  refetchSession: () => Promise<void>;
  status: 'loading' | 'authenticated' | 'unauthenticated' | 'error';
};

const INITIAL_STATE: ContextProps = {
  session: null,
  updateSession: () => {},
  clearSession: () => {},
  clearStoreZustand: () => {},
  refetchSession: () => Promise.resolve(),
  status: 'unauthenticated'
};

export const AppContext = createContext(INITIAL_STATE);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const router = useRouter();
  const { showAlert } = useError();
  const { data, status } = useSession();
  const { authValidation, logoutSessionNextAuth } = useAuthService();
  const [session, setSession] = useState<ContextProps>(INITIAL_STATE);
  const [loading, setLoading] = useState(true);
  const { clearCart } = useShoppingCart();
  const { setUser } = usePreregisterStore();

  const clearStoreZustand = () => {
    clearCart();
    setUser(null);
  };

  const fetchSession = async (token: string) => {
    try {
      setLoading(true);
      setSession((prev): ContextProps => ({ ...prev, status: 'loading' }));
      const authSession = await authValidation(token);
      console.log('🚀 ~ fetchSession ~ authSession:', authSession);
      setUser({
        id: authSession.id,
        tenantId: authSession.tenantId
      });
      setSession(
        (prev: ContextProps): ContextProps => ({
          ...prev,
          session: authSession,
          status: 'authenticated'
        })
      );
    } catch (error: any) {
      console.log('🚀 ~ fetchSession ~ error:', error);

      if (error?.message === ErrorRoot.INVALID_TOKEN) {
        logoutSessionNextAuth().then(() => {
          showAlert.error('Sesión expirada');
        });
      }

      setSession(
        (prev: ContextProps): ContextProps => ({
          ...prev,
          status: 'error'
        })
      );

      clearStoreZustand();
    } finally {
      setLoading(false);
    }
  };

  const refetchSession = async () => {
    if (data?.user.accessToken) {
      await fetchSession(data.user.accessToken);
    }
  };

  const clearSession = () => {
    clearStoreZustand();
    setSession(
      (prev: ContextProps): ContextProps => ({
        ...prev,
        session: null,
        status: 'unauthenticated'
      })
    );
  };

  const updateSession = (args: TSessionUser) => {
    setSession(
      (prev): ContextProps => ({
        ...prev,
        session: {
          ...prev.session,
          ...args
        }
      })
    );
  };

  useEffect(() => {
    console.log('🚀 ~ status:', status);
    if (status === 'authenticated' && data.user.accessToken) {
      fetchSession(data.user.accessToken);
    }

    // if (status === 'unauthenticated') {
    //   clearStoreZustand();
    // }
  }, [status, data?.user.accessToken]);

  if (loading && router.pathname.includes('/dashboard')) return <LoaderMain text="Cargando..." />;

  return (
    <AppContext.Provider value={{ ...session, updateSession, clearSession, clearStoreZustand, refetchSession }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContextProvider = () => {
  const context = useContext<ContextProps>(AppContext);

  if (context === undefined) {
    throw new Error('useAppContextProvider must be used within AppContextProvider');
  }

  return context;
};
