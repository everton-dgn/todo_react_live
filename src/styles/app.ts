import { Add, Delete, Save } from '@styled-icons/material-outlined'
import styled, { css } from 'styled-components'
import T from 'theme'

export const Container = styled.div`
  display: grid;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;
  row-gap: 2rem;
  position: relative;
`

export const Main = styled.main`
  display: grid;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`

export const WrapperHeader = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 2rem;

  ${T.breakPoints(490)} {
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
  }
`

const styledIcons = css`
  fill: #fff;
  width: 2rem;
  height: 2rem;
`

export const IconAdd = styled(Add)`
  ${styledIcons}
`

export const IconDelete = styled(Delete)`
  ${styledIcons}
`

export const IconSave = styled(Save)`
  ${styledIcons}
`
