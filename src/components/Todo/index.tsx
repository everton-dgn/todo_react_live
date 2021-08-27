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
  }

  const actionEditTodo = () => {
    showModalEditTodo()
    setIndexTodo(index)
  }

  const actionShareTodo = () => {
    showModalShareTodo()
    setIndexTodo(index)
  }

  const changeDone = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    doneTodo(index)
  }

  return (
    <S.CardContainer onClick={showButtons}>
      <S.WrapperContent showPadding={showActions}>
        <S.Title done={done}>{title}</S.Title>
        <C.Separator />
        <S.Text done={done}>{msg}</S.Text>
      </S.WrapperContent>

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
