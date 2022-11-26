// interface ToDoInterface {
//     id: string;
//     text: string;
// }

class ToDoInterface {
    id: string;
    text: string;

    constructor(toDoTxt: string) {
        this.text= toDoTxt;
        this.id = new Date().toISOString();
    }
}

export default ToDoInterface;