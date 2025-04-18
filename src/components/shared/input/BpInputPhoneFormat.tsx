import { forwardRef } from 'react';
import { PatternFormat, PatternFormatProps } from 'react-number-format';

type CustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

const BpInputPhoneFormat = forwardRef<PatternFormatProps, CustomProps>((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <PatternFormat
      format="+52 (###) ###-####"
      {...other}
      getInputRef={ref}
      valueIsNumericString
      onValueChange={values => {
        if (onChange) {
          onChange({
            target: {
              name: props.name as string,
              value: values.value
            }
          });
        }
      }}
    />
  );
});

BpInputPhoneFormat.displayName = 'BpInputPhoneFormat';

export default BpInputPhoneFormat;
