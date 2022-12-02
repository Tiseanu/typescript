import React from "react";

import ToDoInterface from "../models/todo";
import ToDoItem from "./ToDoItem";

import style from './ToDos.module.css';

type TypeValuesProps = {
    items: ToDoInterface[],
    removeFct: (item_value: string) => void
};

const ToDos: React.FC<TypeValuesProps> = (props) => {
    return (
        <ul className={style.todos}>
            {props.items.map((item, k) => (
                <ToDoItem key={k} name={item.text} removeFct={props.removeFct.bind(null, item.text)} />
            ))}
            {/* {props.items.map((item, k) => <li key={k}>{item}</li>)} */}
        </ul>
    );
};

export default ToDos;