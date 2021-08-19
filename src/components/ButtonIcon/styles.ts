import styled from 'styled-components'

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #ce1a35, #fd5a41);
  border-radius: 50%;
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  box-shadow: 0 0.2rem 0.8rem #1a2d5a66;
  border: 0.1rem solid #fd5a41;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(to right, #fd5a41, #fd5a41);
  }

  &:active {
    background-image: linear-gradient(to right, #ce1a35, #ce1a35);
  }

  &:focus {
    border: 0.15rem solid #fff;
  }
`
