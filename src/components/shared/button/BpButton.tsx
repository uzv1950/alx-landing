import { FC } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { LoadingButtonProps } from '@mui/lab';
import { FONT_FAMILY_VARIANT, FontVariant } from '@/theme/baseTheme';

export type BpButtonProps = Omit<LoadingButtonProps, 'disableElevation'> & {
  isUppercase?: boolean;
  fontVariant?: FontVariant;
};
interface ButtonStyledProps extends BpButtonProps {
  isUppercase?: boolean;
  fontVariant?: FontVariant;
}

const ButtonStyled = styled(LoadingButton, {
  shouldForwardProp: (prop: string) => !['isUppercase', 'fontVariant', 'styleVariant'].includes(prop)
})<ButtonStyledProps>(({ isUppercase, fontVariant }) => {
  return {
    borderRadius: '12px',
    fontVariant: fontVariant ? FONT_FAMILY_VARIANT[fontVariant] : 'inherit',
    overflow: 'hidden',
    ...(isUppercase && {
      textTransform: 'uppercase'
    })
  };
});

const BpButton: FC<BpButtonProps> = ({
  children,
  isUppercase = false,
  color = 'primary',
  loading = false,
  fullWidth = true,
  variant = 'contained',
  disabled = false,
  fontVariant = 'primary',
  ...props
}) => {
  return (
    <ButtonStyled
      disableElevation
      disabled={disabled || loading}
      color={color}
      isUppercase={isUppercase}
      loading={loading}
      fullWidth={fullWidth}
      variant={variant}
      fontVariant={fontVariant}
      loadingIndicator={<CircularProgress color="inherit" size={16} />}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default BpButton;
