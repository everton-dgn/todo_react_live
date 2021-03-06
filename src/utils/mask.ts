import { RefObject } from 'react'

const mask = (number: RefObject<HTMLInputElement>) => {
  if (number.current === null) return ''

  let value = number.current.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')

  number.current.value = value

  return value.replace(/\D/g, '')
}

export default mask
