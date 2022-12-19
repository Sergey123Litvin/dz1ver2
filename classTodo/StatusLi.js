import Api from "./Api.js";

class StatusLi {

    #statusLi = [];

    static instance;

    constructor(rerender) { 
        this.getTodos();
        this.rerender = rerender;
    }

    static getInstance(rerender) {
        if(!StatusLi.instance){
            StatusLi.instance = new StatusLi(rerender);
          }
          return StatusLi.instance;
    }

    async getTodos() {
        const todos = await Api.getTodos(1);
        this.#statusLi = todos;
        this.rerender();
    }

    getStatusLi() {
        return this.#statusLi;
    }

    findIndexById(id) {
        return this.#statusLi.findIndex(i => i.id === id)
    }

    editLi(id) {
        const idx = this.findIndexById(id);
        this.#statusLi[idx].editable = !this.#statusLi[idx].editable;
        this.rerender();
    }

    checkedLi(id) {
        const idx = this.findIndexById(id);
        this.#statusLi[idx].checked = !this.#statusLi[idx].checked;
    }

    async saveEditLi(id, text) {
        const status = await Api.saveEditLi(id, text);
        if(status == 200) {
            const idx = this.findIndexById(id);
            this.#statusLi[idx].text = text, this.#statusLi[idx].editable = false;
            this.rerender();
        }
    }

    async removeLi(id) {
        const status = await Api.removeLi(id);
        if(status == 200) {
            const idx = this.findIndexById(id);
            this.#statusLi.splice(idx, 1);
            this.rerender();
        }
    }

    sortUlMaxToMin() {
        this.#statusLi.sort((a, b) => b.id - a.id);
        this.rerender();
    }

    sortUlMinToMax() {
        this.#statusLi.sort((a, b) => a.id - b.id);
        this.rerender();
    }

    clearUlList() {
        this.#statusLi = [];
        this.rerender();
    }

    async addLi(text) {
        const response = await Api.addLi(text);
        if(response[1] == 201) {
            this.#statusLi.push(response[0]);
            this.rerender();
        }
    }

    search(text) {
        const resultSearch = [];

        for(let i = 0; i < this.#statusLi.length; i++) {
            if(this.#statusLi[i].text.includes(text)) {
                resultSearch.push(this.#statusLi[i]);
            }
        }

        this.#statusLi = resultSearch;
        this.rerender();
    }
}

export default StatusLi;