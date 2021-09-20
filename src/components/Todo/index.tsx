import { useState } from 'react'
import * as C from 'components'
import IconWhatsApp from 'components/Icon/WhatsApp'
import * as S from 'components/Todo/styles'

export type TodoProps = {
  title: string | undefined
  msg: string | undefined
  done: boolean
  showModalRemoveTodo: () => void
  showModalShareTodo: () => void
  showModalEditTodo: () => void
  doneTodo: (state: number) => void
  setIndexTodo: (state: number) => void
  index: number
}

const Todo = ({
  title,
  msg,
  done,
  showModalRemoveTodo,
  showModalShareTodo,
  showModalEditTodo,
  doneTodo,
  setIndexTodo,
  index
}: TodoProps) => {
  const [showActions, setShowActions] = useState<boolean>(false)

  const showButtons = () => {
    setShowActions(prevState => !prevState)
  }

  const actionRemoveTodo = () => {
    showModalRemoveTodo()
    setIndexTodo(index)
    setShowActions(false)
  }

  const actionEditTodo = () => {
    showModalEditTodo()
    setIndexTodo(index)
    setShowActions(false)
  }

  const actionShareTodo = () => {
    showModalShareTodo()
    setIndexTodo(index)
    setShowActions(false)
  }

  const changeDone = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    doneTodo(index)
    setShowActions(false)
  }

  return (
    <S.CardContainer>
      <S.WrapperContent>
        <S.Title done={done}>{title}</S.Title>
        <C.Separator />
        <S.Text done={done}>{msg}</S.Text>
      </S.WrapperContent>

      <S.BtnOptions onClick={showButtons}>
        <S.IconMore />
      </S.BtnOptions>

      {showActions && (
        <S.WrapperButtons>
          <S.WrapperIcons>
            <C.ButtonIcon
              onClick={actionRemoveTodo}
              icon={<S.IconDelete />}
              title="Deletar tarefa"
              aria-label="Deletar tarefa"
            />
            <C.ButtonIcon
              onClick={actionEditTodo}
              icon={<S.IconEdit />}
              title="Editar tarefa"
              aria-label="Editar tarefa"
            />
            <C.ButtonIcon
              onClick={actionShareTodo}
              icon={<IconWhatsApp />}
              title="Compartilhar tarefa"
              aria-label="Compartilhar tarefa"
            />
          </S.WrapperIcons>

          <C.Button
            onClick={changeDone}
            txt={done ? 'Concluído' : 'Concluir'}
            aria-label={done ? 'Concluído' : 'Concluir'}
            color={done ? 'success' : 'danger'}
            size="small"
          />
        </S.WrapperButtons>
      )}
    </S.CardContainer>
  )
}

export default Todo
