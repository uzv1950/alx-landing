import { forwardRef } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

type CustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
} & NumericFormatProps;

const BpInputNumericFormat = forwardRef<NumericFormatProps, CustomProps>((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      allowNegative={false}
      {...other}
    />
  );
});

BpInputNumericFormat.displayName = 'BpInputNumericFormat';

export default BpInputNumericFormat;
