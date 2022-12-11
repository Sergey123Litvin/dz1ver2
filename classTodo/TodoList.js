import Controller from "./Controller.js";
import UlList from "./UlList.js";
import StatusLi from "./StatusLi.js";

class TodoList {

    constructor() {
    }

    render() {
        const wrapper = document.querySelector(`#todoListContainer`);

        const controller = new Controller();
        const ulList = new UlList();

        wrapper.append(...controller.render(), ulList.render());
    }
}

export default TodoList;