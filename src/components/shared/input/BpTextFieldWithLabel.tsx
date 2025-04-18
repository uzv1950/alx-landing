import { FC } from 'react';
import { FormControl, FormLabel, FormLabelProps, TextFieldProps } from '@mui/material';
import BpTextField from './BpTextField';

export type BpTextFieldWithLabelProps = TextFieldProps & {
  slotProps?: {
    label?: FormLabelProps;
  };
};

const BpTextFieldWithLabel: FC<BpTextFieldWithLabelProps> = ({
  label = 'some label',
  id,
  children,
  slotProps,
  ...props
}) => (
  <FormControl fullWidth>
    <FormLabel
      {...slotProps?.label}
      sx={{
        color: theme => theme.palette.grey[700],
        fontSize: '14px',
        textAlign: 'left',
        ...(slotProps?.label?.sx || {})
      }}
      htmlFor={id}
    >
      {label}
    </FormLabel>
    {!props.SelectProps && <BpTextField {...props} id={id} label="" margin="dense" />}
    {children && props.SelectProps && (
      <BpTextField {...props} id={id} label="" margin="dense">
        {children}
      </BpTextField>
    )}
  </FormControl>
);
export default BpTextFieldWithLabel;
