import { FC } from 'react';
import BpButton, { BpButtonProps } from '@/components/shared/button/BpButton';

type Props = Omit<BpButtonProps, 'color' | 'variant' | 'disableRipple'>;

const ButtonTertiary: FC<Props> = ({ children, ...props }) => (
  <BpButton
    {...props}
    variant="text"
    sx={{
      ...props.sx,
      color: 'grey.50',
      backgroundColor: 'transparent',
      transition: 'all 0.6s ease',
      '&:active': {
        border: theme => `1px solid ${theme.palette.grey[50]}`
      },
      '&.Mui-disabled': {
        backgroundColor: 'inherit',
        color: 'grey.600'
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

export default ButtonTertiary;
