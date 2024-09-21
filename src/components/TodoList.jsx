import { useState } from "react";

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Clean the house" },
    { id: 3, text: "Go for a run" },
    { id: 4, text: "Finish homework" },
    { id: 5, text: "Call mom" },
    { id: 6, text: "Buy groceries" },
    { id: 7, text: "Walk the dog" },
    { id: 8, text: "Read a book" },
    { id: 9, text: "Do laundry" },
    { id: 10, text: "Write code" },
  ];

const TodoList = () => {

    // todos는 SAMPLE_TODOS
    const [todos, setTodos] = useState(SAMPLE_TODOS);
    // 새로 입력될 값을 위해 입력
    const [newTodo, setNewTodo] = useState("");

    // 폼 제출 시, 페이지 새로고침 방지 함수
    const handleSubmit = (event) => {
        event.preventDefault();

        // 유효성 검사
        // newTodo가 공백이거나 빈 문자열이면
        if(newTodo.trim() === "") {
             // 함수 종료
            return;
        }
        // if(newTodo.trim().length === 0) {
        //     return;
        // }
        // if(!newTodo.trim) {
        //     return;
        // }

        // setTodos의 값 
        // (todos에 값이 추가됐을 경우)
        setTodos([{id:crypto.randomUUID(), text: newTodo},...todos,])
        // 중복되지 않는 아이디 +
        // 새로 추가된 값 + 
        // (기존의) SAMPLE_TODOS

        // 폼 초기화 (tbx에 입력된 값 삭제)
        event.target.reset();
        // 여기서 target은 폼
    }

    // tbx의 변경을 감지해 상태에 입력값을 저장하는 함수
    const handleInputChange = (event) => setNewTodo(event.target.value)

    return (
        <div>
            {/* 폼 제출 시, 페이지 새로고침 방지 함수 */}
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="todo"
                value={newTodo}
                // tbx의 변경을 감지해 상태에 입력값을 저장하는 함수
                onChange={handleInputChange}/>
                <button type="submit">Add Todo</button>
                </form>
            <ul>
          {/* map을 사용해서 리스트 출력 */}
            {
                todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                 ))
            }
        </ul>
        </div>
        
    )
}

export default TodoList;



// target: 이벤트가 일어난 대상
// value: 입력한 데이터
// e.target: 이벤트 객체의 target만 가져와서 출력
// e.target.value: input의 value를 가져오므로 입력한 값을 출력

// preventDefault(): 이벤트 발생 시,
// 페이지가 새로 고침되지 않고
// 자바스크립트 코드로 처리되도록 함

// reset 메서드: 모든 input들을 한 번에 초기화 해줌
