import { Delete, Edit, Save } from '@styled-icons/material-outlined'
import styled, { css } from 'styled-components'
import CardWrapper from '../CardWrapper'

export const CardContainer = styled(CardWrapper)`
  cursor: pointer;
`

export const WrapperContent = styled.div<{ showPadding: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: ${({ showPadding }) => (showPadding ? '2rem' : '0')};
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

export const WrapperButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
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
  margin-bottom: 1.5rem;
`

const StylesIcons = css`
  width: 1.5rem;
  height: 1.5rem;
  fill: #fff;
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
