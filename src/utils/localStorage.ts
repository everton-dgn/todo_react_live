import { TodosType } from 'App'

export const setLocalStorage = (key: string, value: TodosType) => {
  const toStringValue = JSON.stringify(value)
  localStorage.setItem(key, toStringValue)
}

export const getLocalStorage = (key: string) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  } catch {
    return null
  }
}
