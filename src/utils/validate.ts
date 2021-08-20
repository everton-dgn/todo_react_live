const validate = (text: string | undefined) => {
  if (text !== 'undefined') return text?.trim()
  else return ''
}

export default validate
