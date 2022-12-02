import React, { useRef } from "react";
import style from './AddToDo.module.css';

type TypeValuesProps = {
    addTodoFct: (new_value:string) => void // return type is void - cause here we don't do anything with the returned value(not putting in a constant, not outputting the value) => void
};

const AddToDo: React.FC<TypeValuesProps> = (props) => {
    const addedInputItem = useRef<HTMLInputElement>(null); // the ref will be connected to an html input element - we have to set a default value: null

    const AddItem = (e: React.FormEvent) => {
        e.preventDefault();
        // const enteredTxt = addedInputItem.current?.value; // ? signals to TS that it tries to access value and if succeeds - entered value will be stored into the const - if not: null will be the value of const - type inference: string | undefined
        const enteredTxt = addedInputItem.current!.value; // ! is you are sure there will be a new value to be stored into the const - type inference: string
        if (enteredTxt.trim().length === 0) {
            return;
        }
   
        props.addTodoFct(enteredTxt);
        addedInputItem.current!.value = '';
    }

    return (
        <form className={style.form} onSubmit={AddItem}>
            <label htmlFor="itemInput">To do Text:</label>
            <input type="text" id="itemInput" ref={addedInputItem} />
            <button>Add Item</button>
        </form>
    );
};
export default AddToDo;