// interface ToDoInterface {
//     id: string;
//     text: string;
// }

class ToDoInterface {
    id: string;
    text: string;

    constructor(toDoTxt: string) {
        this.id = new Date().toISOString();
        this.text = toDoTxt;
    }
}

export default ToDoInterface;