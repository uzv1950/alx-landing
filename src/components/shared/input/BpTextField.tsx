import { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ size, InputProps, multiline }) => ({
  ...(!multiline && {
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
