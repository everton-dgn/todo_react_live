import { useRef, useState, useEffect } from 'react'
import * as C from 'components'
import * as S from 'styles/app'
import IconWhatsApp from 'components/Icon/WhatsApp'
import { getLocalStorage, setLocalStorage } from 'utils/localStorage'
import mask from 'utils/mask'
import validate from 'utils/validate'

export type TodosType = {
  title: string | undefined
  msg: string | undefined
  done: boolean
}[]

export type ErrorType = {
  title: string
  msg: string
}

function App() {
  const [todos, setTodos] = useState<TodosType>([])
  const [modalAddTodo, setModalAddTodo] = useState<boolean>(false)
  const [modalRemoveTodo, setModalRemoveTodo] = useState<boolean>(false)
  const [modalShareTodo, setModalShareTodo] = useState<boolean>(false)
  const [modalEditTodo, setModalEditTodo] = useState<boolean>(false)
  const [indexTodo, setIndexTodo] = useState<number>(0)
  const [activeButtonShare, setActiveButtonShare] = useState<boolean>(true)
  const [error, setError] = useState<ErrorType>({ title: '', msg: '' })

  const inputRef = useRef<HTMLInputElement>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)
  const editInputRef = useRef<HTMLInputElement>(null)
  const editTextFieldRef = useRef<HTMLTextAreaElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const errorMsg =
    'Preenchimento inválido! O campo não pode ficar vazio ou apenas com espaços'

  useEffect(() => {
    if (getLocalStorage('listTodos') !== null) {
      setTodos(getLocalStorage('listTodos'))
    }
  }, [])

  useEffect(() => setLocalStorage('listTodos', todos), [todos])

  const showModalAddTodo = () => setModalAddTodo(prevState => !prevState)
  const showModalRemoveTodo = () => setModalRemoveTodo(prevState => !prevState)
  const showModalEditTodo = () => setModalEditTodo(prevState => !prevState)
  const showModalShareTodo = () => setModalShareTodo(prevState => !prevState)

  const doneTodo = (i: number) => {
    const newTodo = [...todos]
    newTodo[i].done = !todos[i].done
    setTodos(newTodo)
  }

  const clearTextField = () => {
    if (inputRef.current !== null && textRef.current !== null) {
      inputRef.current.value = ''
      textRef.current.value = ''
    }
  }

  const addTodo = () => {
    const validateTitle = validate(inputRef.current?.value) === ''
    const validateMsg = validate(textRef.current?.value) === ''

    if (validateTitle || validateMsg) {
      setError({
        title: validateTitle ? errorMsg : '',
        msg: validateMsg ? errorMsg : ''
      })
      return
    } else {
      setError({ title: '', msg: '' })
    }

    if (inputRef.current !== null && textRef.current !== null) {
      const todo = {
        title: validate(inputRef.current.value),
        msg: validate(textRef.current.value),
        done: false
      }

      setTodos([...todos, todo])
    }

    clearTextField()
    showModalAddTodo()
  }

  const editTodo = () => {
    const validateTitle = validate(editInputRef.current?.value) === ''
    const validateMsg = validate(editTextFieldRef.current?.value) === ''

    if (validateTitle || validateMsg) {
      setError({
        title: validateTitle ? errorMsg : '',
        msg: validateMsg ? errorMsg : ''
      })
      return
    } else {
      setError({ title: '', msg: '' })
    }

    if (editInputRef.current != null && editTextFieldRef.current !== null) {
      const newTodo = [...todos]

      newTodo[indexTodo].title = validate(editInputRef.current.value)
      newTodo[indexTodo].msg = validate(editTextFieldRef.current.value)
      setTodos(newTodo)

      setModalEditTodo(prevState => !prevState)
    }
  }

  const removeTodo = (i: number) => {
    const newTodos = [...todos]
    newTodos.splice(i, 1)
    setTodos(newTodos)

    setModalRemoveTodo(prevState => !prevState)
  }

  const shareWhatsApp = () => {
    const phone = mask(phoneRef)
    const linkBase = `https://api.whatsapp.com/send?phone=55${phone}&text=`
    const redirect = `${linkBase}*${todos[indexTodo].title}*%0a%0a${todos[indexTodo].msg}`

    window.open(redirect, '_blank')

    showModalShareTodo()
  }

  const validatePhone = () => {
    mask(phoneRef)

    if (mask(phoneRef).length === 11) {
      setActiveButtonShare(false)
    } else !activeButtonShare && setActiveButtonShare(true)
  }

  const verifyCompleteTodos = () => {
    return todos.filter(({ done }) => done === true).length
  }

  return (
    <S.Container>
      <C.CardWrapper as="header">
        <S.WrapperHeader>
          <h1>Bem vindo!</h1>

          <C.Button
            size="default"
            color="default"
            onClick={showModalAddTodo}
            txt="Adicionar Tarefa"
            icon={<S.IconAdd />}
            aria-label="Adicionar Todo"
          />
        </S.WrapperHeader>
      </C.CardWrapper>

      <C.CardWrapper>
        <C.CompleteTodos
          completeTodos={verifyCompleteTodos()}
          TotalTodos={todos.length}
        />
      </C.CardWrapper>

      <S.Main>
        {todos.map(({ title, msg, done }, i) => (
          <C.Todo
            key={i}
            setIndexTodo={setIndexTodo}
            index={i}
            showModalRemoveTodo={showModalRemoveTodo}
            showModalEditTodo={showModalEditTodo}
            showModalShareTodo={showModalShareTodo}
            title={title}
            msg={msg}
            done={done}
            doneTodo={doneTodo}
          />
        ))}
      </S.Main>

      {modalAddTodo && (
        <C.Modal title="Atenção" onClick={showModalAddTodo}>
          <C.Input
            type="text"
            ref={inputRef}
            placeholder="Escreva o título da tarefa..."
            error={error.title}
          />

          <C.TextField
            ref={textRef}
            placeholder="Escreva o texto da sua tarefa..."
            error={error.msg}
          />

          <C.Button
            size="default"
            color="default"
            fullWidth={true}
            center={true}
            onClick={addTodo}
            txt="Adicionar Tarefa"
            icon={<S.IconAdd />}
            aria-label="Adicionar Tarefa"
          />
        </C.Modal>
      )}

      {modalEditTodo && (
        <C.Modal title="Atenção" onClick={showModalEditTodo}>
          <C.Input
            type="text"
            defaultValue={todos[indexTodo].title}
            ref={editInputRef}
            placeholder="Escreva o título do seu todo..."
            error={error.title}
          />

          <C.TextField
            defaultValue={todos[indexTodo].msg}
            ref={editTextFieldRef}
            error={error.msg}
          />

          <C.Button
            size="default"
            color="default"
            fullWidth={true}
            center={true}
            onClick={editTodo}
            txt="Salvar Alterações"
            icon={<S.IconSave />}
          />
        </C.Modal>
      )}

      {modalRemoveTodo && (
        <C.Modal title="Atenção" onClick={showModalRemoveTodo}>
          <p>Deseja realmente excluir a tarefa?</p>

          <C.Button
            size="default"
            color="default"
            onClick={() => removeTodo(indexTodo)}
            txt="Excluir a tarefa"
            aria-label="Excluir a tarefa"
            icon={<S.IconDelete />}
            fullWidth={true}
            center={true}
          />
        </C.Modal>
      )}

      {modalShareTodo && (
        <C.Modal title="Compartilhar" onClick={showModalShareTodo}>
          <p>
            Insira o número do celular com DDD para o qual deseja compartilhar o
            todo:
          </p>

          <C.Input
            type="text"
            ref={phoneRef}
            placeholder="(XX) 9XXXX-XXXX"
            onChange={validatePhone}
          />

          <C.Button
            size="default"
            color="default"
            onClick={shareWhatsApp}
            txt="Compartilhar Agora"
            aria-label="Compartilhar Agora"
            icon={<IconWhatsApp size="2rem" />}
            disabled={activeButtonShare}
            fullWidth={true}
            center={true}
          />
        </C.Modal>
      )}
    </S.Container>
  )
}

export default App
