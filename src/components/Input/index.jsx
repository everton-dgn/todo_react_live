import * as S from './styles'
import { forwardRef, useEffect } from 'react'

const Input = forwardRef(({ ...props }, ref) => {
  return <S.TextField autoFocus ref={ref} {...props} />
})

export default Input
