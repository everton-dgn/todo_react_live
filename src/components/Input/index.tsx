import * as S from 'components/Input/styles'
import { forwardRef, InputHTMLAttributes } from 'react'

export type InputProps = {
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <S.Wrapper>
        <S.TextField autoFocus ref={ref} {...props} />
        {error && <S.Small>{error}</S.Small>}
      </S.Wrapper>
    )
  }
)

export default Input
