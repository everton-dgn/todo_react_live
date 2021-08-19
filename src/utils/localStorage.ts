import { TodosType } from 'App'

export const setLocalStorage = (key: string, value: TodosType) => {
  const toStringValue = JSON.stringify(value)
  localStorage.setItem(key, toStringValue)
}

export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  return value && JSON.parse(value)
}
