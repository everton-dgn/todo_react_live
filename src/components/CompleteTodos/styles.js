import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const ContainerProgress = styled.div`
  display: flex;
  width: 100%;
  height: 2.4rem;
  border-radius: 3rem;
  margin-top: 2rem;
  background-color: #F7F8F9;
  box-shadow: inset -0.3rem -0.3rem 0.2rem #fff, inset 0.3rem 0.3rem 0.6rem #1a2d5a29;
`

export const Progress = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-image: linear-gradient(to right, #CE1A35, #FD5A41);
  border-radius: 3rem;
  color: #fff;
  width: ${({ percent }) => percent}%;
  font-size: 1.4rem;
  box-shadow: inset 0 -0.3rem 0.2rem rgba(255, 255, 255, 0.22), inset 0.3rem 0.3rem 0.6rem #1a2d5a29;
`
