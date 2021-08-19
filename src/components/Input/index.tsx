import * as S from 'components/Input/styles'
import { forwardRef, InputHTMLAttributes } from 'react'

export type InputProps = {} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <S.TextField autoFocus ref={ref} {...props} />
})

export default Input
