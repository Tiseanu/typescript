import React from 'react';

import ToDos from './components/ToDos';
import ToDoInterface from './models/todo';

function App() {
  const todoArr:string[] = ['Learn React', 'Learn Typescript']; // this is an array of strings
  

  return (
    <div>
      <ToDos items={todoArr} />
    </div>
  );
}

export default App;
