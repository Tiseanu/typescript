import React from "react";

import ToDoItem from "./ToDoItem";

type TypeValuesProps = {
    items: string[]
};

const ToDos: React.FC<TypeValuesProps> = (props) => {
    return (
        <ul>
            {props.items.map((item, k) => (
                <ToDoItem key={k} name={item} />
            ))}
            {/* {props.items.map((item, k) => <li key={k}>{item}</li>)} */}

        </ul>
    );
};

export default ToDos;