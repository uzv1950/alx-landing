import { Menu, MenuProps } from '@mui/material';
import { useState, useCallback, useMemo, MouseEvent, ReactNode } from 'react';

const PaperProps = {
  elevation: 1,
  sx: {
    overflow: 'visible',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  }
};

type ExcludeMenuProps = Omit<MenuProps, 'open' | 'onClose' | 'anchorEl'>;

type UseMenuResult = {
  Menu: (props: ExcludeMenuProps & { children: ReactNode }) => JSX.Element;
  openMenu: (event: MouseEvent<HTMLElement>) => void;
  closeMenu: () => void;
};

const useMenu = (): UseMenuResult => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const openMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const MenuHook = useMemo(() => {
    const MenuComponent = ({ children, ...props }: MenuProps & { children: ReactNode }) => {
      return (
        <Menu
          {...props}
          open={Boolean(anchorEl)}
          onClose={closeMenu}
          anchorEl={anchorEl}
          slotProps={{
            paper: PaperProps
          }}
        >
          {children}
        </Menu>
      );
    };
    return MenuComponent;
  }, [anchorEl, closeMenu]);

  return {
    Menu: MenuHook,
    openMenu,
    closeMenu
  };
};

export default useMenu;
