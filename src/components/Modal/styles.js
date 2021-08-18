import styled, { keyframes } from 'styled-components'
import { Close } from '@styled-icons/material-outlined'

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #00000059;
  padding: 2rem;
`

const animation = keyframes`
  to {
    transform: scale(1);
  }
`

export const Modal = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 50rem;
  border-radius: 0.8rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 0.3rem 1.5rem #00000059;
  transform: scale(0);
  background-image: linear-gradient(182deg,#eceff2,#fff);
  animation: ${animation} 0.3s ease-in-out forwards;
`

export const ContainerClose = styled.button`
  border: 0.1rem dashed transparent;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  padding: 0.4rem;
  background-color: transparent;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:focus {
    border: 0.1rem dashed #1a2d5a;
  }

  &:active {
    border: 0.1rem solid #1a2d5a;
  }
`

export const IconClose = styled(Close)`
  width: 2rem;
  height: 2rem;
  fill: #1a2d5a;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`
