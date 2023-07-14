import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask, addTask, deleteTask } from "./store/todoSlice";
import { addText, deleteTodo } from "./store/todoSlice";
import * as S from "./styled"

function App() {
  const [text, setText] = useState({
    content: "",
    description: ""
  })
  
  function onChange(e) {
    setText({
      ...text,
      [e.target.id]: e.target.value
    })
  }

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.data);
  const checkStatus = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch])

  function onSubmit(e) {
    e.preventDefault();
    const content = text.content;
    const description = text.description
    dispatch(addText({ content, description }))
    dispatch(addTask(text));
  }

  function deletebtn(id) {
    dispatch(deleteTask(id));
    dispatch(deleteTodo(id))
    console.log(dispatch(deleteTodo(id)));
  }

  return (
    <div>
      <S.GlobalStyle />
      <S.MainContainer >
        <h1>To Do LIst</h1>
        <form onSubmit={onSubmit}>
          <S.ContentInput
            type="text"
            id="content"
            value={text.content}
            onChange={onChange}
            placeholder="작업 이름"
          />
          <br />
          <S.DescriptionInput
            value={text.description}
            id="description"
            onChange={onChange}
            placeholder="설명"
          />
          <input type="submit" onClick={onSubmit} value="ADD" />
        </form>
        {checkStatus.status === "loading" ? <h2>Loading...</h2> :
          <S.TodosContainer>
            {todos.map((arr, idx) => {
              return (
                <S.TodoContainer key={idx}>
                  <div>
                    <S.DeleteImg src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" onClick={() => deletebtn(arr.id)} />
                  </div>
                  <div>
                    <S.ContentTitle>{arr.content}</S.ContentTitle>
                    <S.ContentDescription>{arr.description}</S.ContentDescription>
                  </div>
                </S.TodoContainer>
              )
            })}
          </S.TodosContainer>
        }
        </S.MainContainer>
    </div>
  );
}


export default App;
