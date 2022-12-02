import React, { useState } from 'react';

import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import ToDoInterface from './models/todo';

function App() {
  // const todoArr:string[] = ['Learn React', 'Learn Typescript']; // this is an array of strings
  const todos = [ // this is now an array of objects
    new ToDoInterface('Learn React'),
    new ToDoInterface('Learn Typescript')
  ];

  const [toDoArr, updateToDoArr] = useState(todos); 

  const addTodoFct = (new_value: string) => { // we don't return anything so we don't need to add a type for the function
    updateToDoArr(...toDoArr, new ToDoInterface(new_value));
  };

  return (
    <div>
      <AddToDo addTodoFct={addTodoFct}  />
      <ToDos items={todos} />
    </div>
  );
}

export default App;
