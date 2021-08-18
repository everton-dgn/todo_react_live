import * as S from './styles'
import { forwardRef } from 'react'

const TextField = forwardRef(({ ...props }, ref) => {
  return (
    <S.TextField ref={ref} {...props} />
  )
})

export default TextField
