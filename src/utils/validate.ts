const validate = (text: string | undefined) => {
  if (text !== 'undefined') return text?.trim().replaceAll('  ', '')
  else return ''
}

export default validate
