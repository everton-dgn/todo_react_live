import * as S from 'components/TextField/styles'
import { forwardRef, TextareaHTMLAttributes } from 'react'

export type TextFieldProps = {} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ ...props }, ref) => {
    return <S.TextField ref={ref} {...props} />
  }
)

export default TextField
