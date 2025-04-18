import { ContextProps, useAppContextProvider } from '@/context/app/AppContext';

const useSession = (): ContextProps => {
  const data = useAppContextProvider();

  return data;
};

export default useSession;
