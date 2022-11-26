import React from "react";

import ToDoInterface from "../models/todo";
import ToDoItem from "./ToDoItem";

type TypeValuesProps = {
    items: ToDoInterface[]
};

const ToDos: React.FC<TypeValuesProps> = (props) => {
    return (
        <ul>
            {props.items.map((item, k) => (
                <ToDoItem key={k} name={item.text} />
            ))}
            {/* {props.items.map((item, k) => <li key={k}>{item}</li>)} */}

        </ul>
    );
};

export default ToDos;