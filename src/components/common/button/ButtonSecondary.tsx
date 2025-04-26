import { FC } from 'react';
import BpButton, { BpButtonProps } from '@/components/shared/button/BpButton';

type Props = Omit<BpButtonProps, 'color' | 'variant'>;

const ButtonSecondary: FC<Props> = ({ children, ...props }) => (
  <BpButton
    {...props}
    sx={{
      ...props.sx,
      color: 'grey.50',
      backgroundColor: 'transparent',
      border: theme => `1px solid ${theme.palette.grey[50]}`,
      transition: 'all 0.6s ease',
      '&.Mui-disabled': {
        backgroundColor: 'inherit',
        color: 'grey.600',
        border: theme => `1px solid ${theme.palette.grey[700]}`
      },
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0px 4px 12px 0px #47656F33'
      }
    }}
  >
    {children}
  </BpButton>
);

export default ButtonSecondary;
