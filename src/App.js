import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form.jsx';
import { db } from './firebase.js';
import { uid } from 'uid';
import { set, ref } from 'firebase/database';

function App() {

  const [todo, setTodo] = useState("");

  const handleToDoChange = (e) => {
    setTodo(e.target.value);
  };

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    });

    setTodo("");
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <Form toDoChange={handleToDoChange} write={writeToDatabase} title={todo} />
    </div>
  );
}

export default App;
