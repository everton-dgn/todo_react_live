import { Delete, Edit, Save, MoreVert } from '@styled-icons/material-outlined'
import styled, { css } from 'styled-components'
import CardWrapper from '../CardWrapper'

export const CardContainer = styled(CardWrapper)``

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled.h2<{ done: boolean }>`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`

export const Text = styled.p<{ done: boolean }>`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`

export const BtnOptions = styled.button`
  background-color: transparent;
  border: 0.1rem solid transparent;
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  padding: 1rem 0;
  border-radius: 0.8rem;
  cursor: pointer;
`

export const WrapperButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  position: absolute;
  top: 1rem;
  right: 4rem;
  background-color: #fff;
  padding: 1.5rem 2rem;
  box-shadow: 0.3rem 0.3rem 1rem rgba(26, 45, 90, 0.24);

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 1.4rem;
    right: -1.2rem;
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1.5rem solid #fff;
  }
`

export const WrapperIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-wrap: nowrap;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.8rem;
  padding-right: 2rem;
`

const StylesIcons = css`
  width: 2rem;
  height: 2rem;
  fill: #fff;
`

export const IconMore = styled(MoreVert)`
  fill: #b1bcd3;
  width: 2rem;
`

export const IconEdit = styled(Edit)`
  ${StylesIcons}
`

export const IconDelete = styled(Delete)`
  ${StylesIcons}
`

export const IconSave = styled(Save)`
  ${StylesIcons}
`
