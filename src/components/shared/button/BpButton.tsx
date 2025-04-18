import { FC } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { LoadingButtonProps } from '@mui/lab';

export interface BpButtonProps extends Omit<LoadingButtonProps, 'isUppercase'> {
  isUppercase?: boolean;
}
interface ButtonStyledProps extends BpButtonProps {
  isUppercase: boolean;
}

const ButtonStyled = styled(LoadingButton, {
  shouldForwardProp: (prop: string) => !['isUppercase'].includes(prop)
})<ButtonStyledProps>(({ isUppercase, variant, color, theme, disabled }) => ({
  borderRadius: '12px',
  textTransform: isUppercase ? 'uppercase' : 'inherit',
  transition: 'transform 300ms ease',
  ':active': {
    transform: 'scale(1.03)'
  },
  ...(variant === 'outlined' &&
    color === 'primary' && {
      color: theme.palette.primary[500],
      fontWeight: 700,
      border: `1px solid ${theme.palette.primary[500]}`
    }),
  ...(variant === 'outlined' &&
    color === 'primary' &&
    disabled && {
      background: 'transparent !important',
      color: theme.palette.grey[600],
      fontWeight: 600,
      border: `1px solid ${theme.palette.grey[600]}`
    }),
  ...(variant === 'text' &&
    color === 'primary' &&
    disabled && {
      background: 'transparent !important'
    })
}));

const BpButton: FC<BpButtonProps> = ({
  children,
  isUppercase = false,
  color = 'primary',
  loading = false,
  fullWidth = true,
  variant = 'contained',
  disabled = false,
  ...props
}) => (
  <ButtonStyled
    disableElevation
    disabled={disabled || loading}
    color={color}
    isUppercase={isUppercase}
    loading={loading}
    fullWidth={fullWidth}
    variant={variant}
    loadingIndicator={<CircularProgress color="inherit" size={16} />}
    {...props}
  >
    {children}
  </ButtonStyled>
);

export default BpButton;
