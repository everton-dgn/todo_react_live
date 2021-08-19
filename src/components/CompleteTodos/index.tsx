import * as S from 'components/CompleteTodos/styles'
import * as C from 'components'

export type CompleteTodosProps = {
  completeTodos: number
  TotalTodos: number
}

const CompleteTodos = ({ completeTodos, TotalTodos }: CompleteTodosProps) => {
  const roundNumber = (number: number) => parseFloat(number.toFixed(1))

  const percentage = roundNumber((completeTodos / TotalTodos) * 100)

  return (
    <S.Container>
      <h2>Tarefas Completas</h2>

      <C.Separator margin="2rem 0" />

      <p>
        {completeTodos}/{TotalTodos} Tarefas Completas
      </p>

      <S.ContainerProgress>
        <S.Progress title={`${percentage}%`} percent={percentage}>
          {percentage > 4 && percentage + '%'}
        </S.Progress>
      </S.ContainerProgress>
    </S.Container>
  )
}

export default CompleteTodos
