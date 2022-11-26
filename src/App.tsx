import React from 'react';

import ToDos from './components/ToDos';
import ToDoInterface from './models/todo';

function App() {
  // const todoArr:string[] = ['Learn React', 'Learn Typescript']; // this is an array of strings
  const todos = [ // this is now an array of objects
    new ToDoInterface('Learn React'),
    new ToDoInterface('Learn Typescript')
  ];

  return (
    <div>
      <ToDos items={todos} />
    </div>
  );
}

export default App;
