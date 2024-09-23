import { useState } from "react";

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Clean the house", completed: false  },
    { id: 3, text: "Go for a run", completed: false  },
    { id: 4, text: "Finish homework", completed: false  },
    { id: 5, text: "Call mom", completed: false  },
    { id: 6, text: "Buy groceries", completed: false  },
    { id: 7, text: "Walk the dog", completed: false  },
    { id: 8, text: "Read a book", completed: false  },
    { id: 9, text: "Do laundry", completed: false  },
    { id: 10, text: "Write code", completed: false  },
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

        const newTodoObj = {
            id: crypto.randomUUID(),
            text: newTodo,
            completed: false,
        }

        // setTodos의 값 
        // (todos에 값이 추가됐을 경우)
        // setTodos([{id:crypto.randomUUID(), text: newTodo, completed: false},...todos,])
        // 중복되지 않는 아이디 +
        // 새로 추가된 값 + 
        // (기존의) SAMPLE_TODOS
        // upadate 됐으니까
        setTodos([newTodoObj, ...todos]);

        // 폼 초기화 (tbx에 입력된 값 삭제)
        event.target.reset();
        // 여기서 target은 폼
    }

    // tbx의 변경을 감지해 상태에 입력값을 저장하는 함수
    const handleInputChange = (event) => setNewTodo(event.target.value)

    // 완료 버튼 클릭 시 
    const toggleCompleted = (id) => { // todo의 id
        // 새로운 배열을 만들 빈 배열을 선언
        const updateTodos = [];
        // todo 배열의 각 항목을 순회
        todos.forEach((todo) => {
            // 순회하고 있는 객체의 id가 사용자가 변경하고 싶어하는 id가 같다면
            if (todo.id === id) {
                // SAMPLE_TODOS 수정
                const newTodo = {
                    // 기존 todo의 id 유지
                    id: todo.id, 
                    // 기존 todo의 text 유지
                    text: todo.text, 
                    // toggle임
                    // 완료 상태면 미완료 상태로
                    // 미완료 상태면 완료 상태로 변경해 줘야함
                    // 기존 값의 반대로
                    completed: !todo.completed,
                }
                // 수정된 항목을 새로운 배열에 추가
                return updateTodos.push(newTodo);
            } else {
                return updateTodos.push(todo);
            }
           
            // 새로운 배열로 update
            // 빈 배열에 todo 값 추가
        });
        // setTodos에 updateTodos를 덮어씌움
        setTodos(updateTodos);

    }

    return (
        <div>
            {/* 폼 제출 시, 페이지 새로고침 방지 함수 호출*/}
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="todo"
                value={newTodo}
                placeholder="입력 ㄱ"
                // tbx의 변경을 감지해 상태에 입력값을 저장하는 함수 호출
                onChange={handleInputChange}/>
                <button type="submit">Add Todo</button>
                </form>
            <ul>
          {/* map을 사용해서 리스트 출력 */}
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        
                        {/* 
                        true나 false를 문자열화 함 → String(todo.completed)
                        */}
                    <p>{todo.text} - {String(todo.completed)}</p>
                    <button onClick={() => toggleCompleted(todo.id)}>완료</button></li>
                 ))
            }
        </ul>
        </div>
        
    )
}

export default TodoList;