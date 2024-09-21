// index.css 파일 import
import "./index.css"
// TodoList 파일 import
import TodoList from "./components/TodoList"

function App() {

  return (
    <>
      <div className="main-center">
        {/* TodoList 컴포넌트*/}
        <TodoList />
      </div>
    </>
  )
}

export default App
