import axios from 'axios'

export const getTodosRequest = async() => await axios.get('http://localhost:3000/api/todos/')

export const getTodoRequest = async(id) => await axios.get(`http://localhost:3000/api/todos/${id}`)

export const createTodoRequest = async(todo) => await axios.post(`http://localhost:3000/api/todos`, todo)

export const deleteTodoRequest = async(id) => await axios.delete(`http://localhost:3000/api/todos/${id}`)

export const editTodoRequest = async(id, newFields) => await axios.patch(`http://localhost:3000/api/todos/${id}`, newFields)