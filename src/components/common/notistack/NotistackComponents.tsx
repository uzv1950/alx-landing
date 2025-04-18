import { JSXElementConstructor } from 'react'
import { VariantType } from 'notistack'
import NotistackStyle from './NotistackStyle'

const NotistackComponents: Record<VariantType, JSXElementConstructor<any>> = {
  success: NotistackStyle,
  error: NotistackStyle,
  warning: NotistackStyle,
  info: NotistackStyle,
  default: NotistackStyle
}

export default NotistackComponents
