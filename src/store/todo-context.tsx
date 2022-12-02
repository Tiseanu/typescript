import React, { useState } from 'react';
import ToDoInterface from "../models/todo";

type TypeValuesProps = {
    itemsCtx: ToDoInterface[],
    AddToDoCtxFct: (item_val: string) => void, // function type definition - defining the returning type value
    removeItemCtxFct: (item_val: string) => void
};

// default -> will need it for the useContext later
export const ToDoContext = React.createContext<TypeValuesProps>({ // 1 argument - in this case an object - interface
    itemsCtx: [],
    AddToDoCtxFct: (item_val: string) => {}, // a concrete function definition
    removeItemCtxFct: (item_val: string) => {}
});

// Creating the Context Provider Component - responsible of managing the context state
interface Props {
    // the PropsWithChildren type is omitted from the props type of a FunctionalComponent after React 18, this means that you have to include the children prop yourself:
    children: React.ReactNode;
  }
const ToDoContextProvider: React.FC<Props> = (props) => { // props.children - is a default prop so we don't need to add it into a type interface obj
        // manage state - set values
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

    const contextValues: TypeValuesProps = {
        itemsCtx: todos,
        AddToDoCtxFct: addTodoFct,
        removeItemCtxFct: removeItem
    };    

    return <ToDoContext.Provider value={contextValues}>{props.children}</ToDoContext.Provider>;
}

export default ToDoContextProvider;