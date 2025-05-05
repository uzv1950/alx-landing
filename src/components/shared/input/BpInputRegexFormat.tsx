import { forwardRef } from 'react';

// Definimos las propiedades esperadas por el componente
interface BpInputRegexFormatProps extends React.InputHTMLAttributes<HTMLInputElement> {
  regex: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Componente personalizado con TypeScript
const BpInputRegexFormat = forwardRef<HTMLInputElement, BpInputRegexFormatProps>((props, ref) => {
  const { onChange, value, regex, ...other } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Filtra los caracteres no permitidos usando una expresión regular
    const filteredValue = event.target.value.replace(regex, '');
    // Llama a la función onChange con el valor filtrado
    if (onChange) {
      onChange({ ...event, target: { ...event.target, value: filteredValue } });
    }
  };

  return (
    <input
      {...other} // Pasa todas las propiedades adicionales al input
      ref={ref} // Asigna la referencia (ref) al input
      value={value} // Asigna el valor al input
      onChange={handleChange} // Usa la función handleChange personalizada
    />
  );
});

export default BpInputRegexFormat;
