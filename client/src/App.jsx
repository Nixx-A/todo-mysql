import CreateTodo from "./Components/CreateTodo"
import Header from "./Components/Header"
import TodoRender from "./Components/TodoRender"


function App () {

  return (
    <main className="h-screen w-screen bg-primary-500">
      <Header />
      <div className="bg-tertiary-100 m-auto w-[90%] h-[80%] mt-8 rounded overflow-x-hidden overflow-y-scroll">
        <CreateTodo />
        <TodoRender />
      </div>
    </main>
  )
}

export default App
