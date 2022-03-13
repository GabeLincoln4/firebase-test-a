import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form.jsx';
import { db } from './firebase.js';
import { uid } from 'uid';
import { set, ref, onValue, remove, update } from 'firebase/database';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const handleToDoChange = (e) => {
    setTodo(e.target.value);
  };

  //read
  useEffect(() => {
    onValue(ref(db), snapshot => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null){
        Object.values(data).map((todo) => {
          setTodos(oldArray => [...oldArray, todo])
        });
      }
    })
  }, [])

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    });

    setTodo("");
  }

  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempUuid(todo.uuid);
    setTodo(todo.todo);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      todo,
      uuid: tempUuid,
    });

    setTodo("");
    setIsEdit(false);
  };
 
  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <input type="text" onChange={handleToDoChange} value={todo} />
      {isEdit ? (
          <button onClick={handleSubmitChange}>Submit Changes</button>
      ) : (
          <button onClick={writeToDatabase}>Add Todo</button>
      )}
      {todos.map(todo => (
        <div>
          <h1>{todo.todo}</h1>
          <button onClick={() => handleUpdate(todo)}>update</button>
          <button onClick={() => handleDelete(todo)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
