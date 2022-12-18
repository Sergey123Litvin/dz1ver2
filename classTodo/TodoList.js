import Controller from "./Controller.js";
import UlList from "./UlList.js";
import StatusLi from "./StatusLi.js";

class TodoList {
    constructor() {
        this.StatusLi = StatusLi.getInstance(this.render.bind(this));
    }

    render() {
        const wrapper = document.querySelector(`#todoListContainer`);
        wrapper.innerHTML = '';
        
        const controller = new Controller();
        const ulList = new UlList();

        wrapper.append(...controller.render(), ulList.render());
    }
}

export default TodoList;