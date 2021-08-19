import * as S from 'components/TextField/styles'
import { forwardRef, TextareaHTMLAttributes } from 'react'

export type TextFieldProps = {
  error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ error, ...props }, ref) => {
    return (
      <S.Wrapper>
        <S.TextField ref={ref} {...props} />
        {error && <S.Small>{error}</S.Small>}
      </S.Wrapper>
    )
  }
)

export default TextField
