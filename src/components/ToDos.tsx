import React, { useContext } from "react";

import ToDoItem from "./ToDoItem";
import { ToDoContext } from "../store/todo-context";
import style from './ToDos.module.css';

const ToDos: React.FC = (props) => {
    const contextProvider = useContext(ToDoContext);
    
    return (
        <ul className={style.todos}>
            {contextProvider.itemsCtx.map((item, k) => (
                <ToDoItem key={k} name={item.text} removeFct={contextProvider.removeItemCtxFct.bind(null, item.text)} />
            ))}
        </ul>
    );
};

export default ToDos;