import { ReactNode } from 'react'
import * as S from 'components/CardWrapper/styles'

export type CardWrapperProps = {
  children: ReactNode
  onClick?: () => void
  as?: ReactNode
}

const CardWrapper = ({ children, onClick }: CardWrapperProps) => (
  <S.Wrapper onClick={onClick}>{children}</S.Wrapper>
)

export default CardWrapper
