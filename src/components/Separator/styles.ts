import styled from 'styled-components'

export const Separator = styled.div<{ margin: string }>`
  display: flex;
  width: 100%;
  height: 0.1rem;
  margin: ${({ margin }) => margin};
  border-radius: 0.5rem;
  background-color: #b1bcd3;
`
