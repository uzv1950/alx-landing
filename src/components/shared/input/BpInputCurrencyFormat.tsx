import { forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const BpInputCurrencyFormat = forwardRef<HTMLInputElement, CustomProps>((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      prefix="$"
      allowNegative={false}
    />
  );
});

BpInputCurrencyFormat.displayName = 'BpInputCurrencyFormat';

export default BpInputCurrencyFormat;
