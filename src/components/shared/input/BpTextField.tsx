import { FC } from 'react';
import { styled, TextField, TextFieldProps } from '@mui/material';

const StyledTextField = styled(TextField)(({ size, InputProps }) => ({
  ...(!InputProps?.multiline && {
    ...(size === 'medium' && {
      '& .MuiInputBase-root': {
        height: '46px'
      },
      '& .MuiFormLabel-root': {
        top: '-5px'
      }
    })
  })
}));

const BpTextField: FC<TextFieldProps> = ({
  name,
  variant = 'outlined',
  placeholder = '',
  className = '',
  label = '',
  disabled = false,
  fullWidth = true,
  children,
  value,
  size = 'medium',
  ...props
}) => (
  <StyledTextField
    name={name}
    label={label}
    variant={variant}
    placeholder={placeholder}
    className={`${className}`}
    disabled={disabled}
    fullWidth={fullWidth}
    value={value}
    size={size}
    {...props}
  >
    {children}
  </StyledTextField>
);

export default BpTextField;
