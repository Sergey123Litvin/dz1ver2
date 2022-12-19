import StatusLi from "./StatusLi.js";

class Controller {

    constructor() {
        this.statusLi = StatusLi.getInstance();
        this.textAddLi;

        this.inputList = document.createElement('input');
        this.searchInput = document.createElement('input');
        this.alertSpan = document.createElement('span');

        this.updateList = this.updateList.bind(this);
        this.sortMaxToMin = this.sortMaxToMin.bind(this);
        this.sortMinToMax = this.sortMinToMax.bind(this);
        this.clearUlList = this.clearUlList.bind(this);
        this.addLi = this.addLi.bind(this);
        this.textAdd = this.textAdd.bind(this);
        this.search = this.search.bind(this);
        this.validate = this.validate.bind(this);
    }

    updateList() {
        this.statusLi.getTodos();
    }

    sortMaxToMin() {
        this.statusLi.sortUlMaxToMin();
    }

    sortMinToMax() {
        this.statusLi.sortUlMinToMax();  
    }

    clearUlList() {
        this.statusLi.clearUlList();
    }
    
    textAdd(e) {
        this.textAddLi = e.target.value;
    }

    validate() {
        if(this.inputList.value === '') {
            this.alertSpan.innerText = 'Enter value!'
        } else {
            this.addLi();
        }
    }

    addLi() {
        this.statusLi.addLi(this.textAddLi);
        this.inputList.value = '';
    }

    search() {
        this.statusLi.search(this.searchInput.value);
    }

    render() {
        this.inputList.addEventListener('input', this.textAdd);

        const addList = document.createElement('button');
        addList.innerText = 'Add';
        addList.addEventListener('click', this.validate);

        const clearAllList = document.createElement('button');
        clearAllList.innerText = 'Clear All';
        clearAllList.addEventListener('click', this.clearUlList);

        const update = document.createElement('button');
        update.innerText = 'Update';
        update.addEventListener('click', this.updateList);

        this.searchInput.placeholder = 'Search';

        const buttonSearch = document.createElement('button');
        buttonSearch.innerText = 'Search';
        buttonSearch.addEventListener('click', this.search);

        const spanSort = document.createElement('span');
        spanSort.innerText = 'Sort:';
        spanSort.style = 'display: block;';

        const buttonMaxToMin = document.createElement('button');
        buttonMaxToMin.innerText = 'Sort max to min';
        buttonMaxToMin.addEventListener('click', this.sortMaxToMin);

        const buttonMinToMax = document.createElement('button');
        buttonMinToMax.innerText = 'Sort min to max';
        buttonMinToMax.addEventListener('click', this.sortMinToMax);

        return [this.inputList, addList,this.alertSpan, clearAllList, update, this.searchInput, buttonSearch, spanSort, buttonMaxToMin, buttonMinToMax];
    }
}

export default Controller;