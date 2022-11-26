import React from "react";
interface TypeValuesProps {
    name: string
};
const ToDoItem: React.FC<TypeValuesProps> = (props) => {
    return (
        <li>{props.name}</li>
    );
};

export default ToDoItem;