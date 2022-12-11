import Api from "./Api.js";

class StatusLi {

    #statusLi;

    static instance;

    constructor() { 
        this.getTodos();
    }

    static getInstance() {
        if(!StatusLi.instance){
            StatusLi.instance = new StatusLi();
          }
          return StatusLi.instance;
    }

    async getTodos() {
        const todos = await Api.getTodos(1);
        this.#statusLi = todos;
    }

    getStatusLi() {
        return this.#statusLi;
    }
}

export default StatusLi;