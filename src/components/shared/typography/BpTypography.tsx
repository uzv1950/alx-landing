import { FONT_FAMILY_VARIANT, FontVariant } from '@/theme/baseTheme';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { forwardRef, ElementType } from 'react';

export interface BpTypographyProps extends Omit<TypographyProps, 'fontFamily' | 'ref'> {
  label?: string;
  isUpperCase?: boolean;
  fontVariant?: FontVariant;
  fontWeight?: TypographyProps['fontWeight'];
  textAlign?: TypographyProps['textAlign'];
  component: ElementType;
  sx?: TypographyProps['sx'];
}

const BpTypography = forwardRef<HTMLParagraphElement, BpTypographyProps>(
  (
    {
      variant = 'body1',
      label = '',
      isUpperCase = false,
      children,
      color = '#555',
      sx = {},
      fontVariant = undefined,
      fontWeight = 400,
      textAlign = 'inherit',
      component = 'p',
      ...props
    },
    ref
  ) => (
    <Typography
      ref={ref}
      color={color}
      component={component}
      variant={variant}
      fontWeight={fontWeight}
      textAlign={textAlign}
      fontFamily={fontVariant ? FONT_FAMILY_VARIANT[fontVariant] : 'inherit'}
      sx={sx}
      {...props}
    >
      {isUpperCase && label.toUpperCase()}
      {!isUpperCase && label}
      {children}
    </Typography>
  )
);

export default BpTypography;
