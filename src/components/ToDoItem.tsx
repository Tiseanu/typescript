import React from "react";
import style from './ToDoItem.module.css';

interface TypeValuesProps {
    name: string,
    removeFct: () => void
};
const ToDoItem: React.FC<TypeValuesProps> = (props) => {
 
    return (
        <li className={style.item} onClick={props.removeFct}>{props.name}</li>
    );
};

export default ToDoItem;