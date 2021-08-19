import styled from 'styled-components'

export const TextField = styled.input`
  border-radius: 0.8rem;
  border: 0.1rem solid #fff;
  width: 100%;
  outline: none;
  padding: 2rem;
  min-height: 6rem;
  height: 100%;
  transition: border 0.2s linear;
  word-break: break-word;
  background-color: #f7f8f9;
  box-shadow: inset -0.3rem -0.3rem 0.2rem #fff,
    inset 0.3rem 0.3rem 0.6rem #1a2d5a29;

  &:focus {
    border: 0.1rem solid #1a2d5a;
  }
`
