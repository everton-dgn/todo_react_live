import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from 'components/ButtonIcon/styles'

export type ButtonIconProps = {
  icon: ReactNode
  onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const ButtonIcon = ({ icon, ...props }: ButtonIconProps) => {
  return <S.Btn {...props}>{icon}</S.Btn>
}

export default ButtonIcon
