import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from 'components/Button/styles'

export type StylesComponentsProps = {
  size: 'default' | 'small'
  center?: boolean
  fullWidth?: boolean
  color: 'default' | 'danger' | 'success'
}

export type ButtonProps = {
  txt: string
  onClick: () => void
  icon?: ReactNode
} & StylesComponentsProps &
  ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  txt,
  icon,
  color,
  size,
  disabled,
  fullWidth,
  center,
  onClick
}: ButtonProps) => {
  return (
    <S.Btn
      fullWidth={fullWidth}
      disabled={disabled}
      color={color}
      size={size}
      center={center}
      onClick={onClick}
    >
      {icon}
      {txt}
    </S.Btn>
  )
}

export default Button
