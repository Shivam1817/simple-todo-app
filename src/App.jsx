import React, { useEffect, useState } from 'react'

function App(){

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
    .then(async(res)=>{
      const json = await res.json();
      setTodos(json.todos);
    })
  },[])


  const toggleCompleted = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return <div>
    {todos.map(({id,todo, completed}) => <Todo 
    todo = {todo}
    id={id} 
    key={id} 
    completed={completed} 
    toggleCompleted={() => toggleCompleted(id)}/>)}
  </div>
}

function Todo({ id ,todo , completed , toggleCompleted}){
  const todoStyle = {
    border: `2px solid ${completed? 'green': 'red'}`,
    padding: '5px',
    marginBottom: '5px'
  };
  
  return (
  <div style={todoStyle}>
    <h3>Task {id}: {todo}</h3>
    <h5>{completed? "Completed" : "Not Completed"}</h5>
    <button onClick={toggleCompleted}>
        Mark as {completed ? "Not Completed" : "Completed"}
    </button>
  </div>
  );
}

const MemoizedTodo = React.memo(Todo);

export default App