import { forwardRef, TextareaHTMLAttributes } from 'react'
import * as S from 'components/TextField/styles'

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
