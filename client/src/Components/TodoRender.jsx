import { useEffect } from "react"
import { useTodo } from "../context/todoContext"
import TodoCard from "./TodoCard"

export default function TodoRender () {
  const { loadTodos, todos } = useTodo()

  useEffect(() => {
    console.log('render')
    loadTodos() 
  }, [])

  function renderMain () {
    if (todos.length === 0) return <h1 className="text-center">No todos yet</h1>

    return todos.map(todo => <TodoCard key={todo.id} todo={todo} />)
  }

  return (
    <div className="flex flex-col">
      {renderMain()}
    </div>
  )
}
