import * as S from 'components/Modal/styles'
import * as C from 'components'
import { ReactNode } from 'react'

export type ModalProps = {
  children: ReactNode
  title: string
  onClick: () => void
}

const Modal = ({ children, title, onClick }: ModalProps) => {
  return (
    <S.Overlay>
      <S.Modal>
        <S.ContainerClose onClick={onClick}>
          <S.IconClose />
        </S.ContainerClose>

        <h2>{title}</h2>

        <C.Separator margin="2rem 0" />

        <S.Content>{children}</S.Content>
      </S.Modal>
    </S.Overlay>
  )
}

export default Modal
