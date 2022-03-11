import { setUserProperties } from 'firebase/analytics';
import React, {useState} from 'react';
import app from '../firebase.js';

function Form(props){

    // const [title, setTitle] = useState('');

    // const handleOnChange = (e) => {
    //     setTitle(e.target.value);
    // };

    // const createToDo = () => {
    //     const todoRef = app.database().ref("Todo");
    //     const todo = {
    //         title,
    //         complete: false,
    //     };

    //     todoRef.push(todo);
    // };

    return(
        <div>
            <input type="text" onChange={props.toDoChange} value={props.title} />
            <button onClick={props.write}>Add Todo</button>
        </div>
    );
}

export default Form;