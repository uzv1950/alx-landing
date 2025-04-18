/* eslint-disable react/jsx-no-useless-fragment */
import { FC, ReactNode } from 'react';

interface IfProps {
  condition: boolean;
  children: ReactNode;
}

const If: FC<IfProps> = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

export default If;
