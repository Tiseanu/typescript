import React from 'react';

import ToDoContextProvider from './store/todo-context';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <ToDoContextProvider>
      <AddToDo />
      <ToDos />
    </ToDoContextProvider>
  );
}

export default App;
