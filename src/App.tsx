import React, { useState } from 'react';

import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import ToDoInterface from './models/todo';

function App() {
  // const todoArr:string[] = ['Learn React', 'Learn Typescript']; // this is an array of strings
  // const todos = [ // this is now an array of objects
  //   new ToDoInterface('Learn React'),
  //   new ToDoInterface('Learn Typescript')
  // ];

  const [todos, updateToDoArr] = useState<ToDoInterface[]>([]); 

  const addTodoFct = (new_value: string) => { // we don't return anything so we don't need to add a type for the function
    const newToDoObj = new ToDoInterface(new_value);

    updateToDoArr((currentTodo) => { // update state based on prev state - > use a function
        return currentTodo.concat(newToDoObj);
    });
  };

  const removeItem = (item_val: string) => {
    updateToDoArr((currentTodo) => {
        return currentTodo.filter(item => item.text !== item_val);
    });
  };

  return (
    <div>
      <AddToDo addTodoFct={addTodoFct}  />
      <ToDos items={todos} removeFct={removeItem} />
    </div>
  );
}

export default App;
