class Controller {

    constructor() {
        
    }

    render() {
        const inputList = document.createElement('input');
        // inputList.addEventListener('input', validate);
          
        const addList = document.createElement('button');
        addList.innerText = 'Add';
        // addList.addEventListener('click', addLi);
        
        const clearAllList = document.createElement('button');
        clearAllList.innerText = 'Clear All';
        // clearAllList.addEventListener('click', clearAll);
        
        const update = document.createElement('button');
        update.innerText = 'Update';
        // update.addEventListener('click', updateList);
        
        const searchInput = document.createElement('input');
        searchInput.placeholder = 'Search';
        
        const buttonSearh = document.createElement('button');
        buttonSearh.innerText = 'Search';
        // buttonSearh.addEventListener('click', searchListItem);
        
        const spanSort = document.createElement('span');
        spanSort.innerText = 'Sort:';
        spanSort.style = 'display: block;';
        const formSort = document.createElement('form');
        formSort.action = '#';
        const inputSortMinToMax = document.createElement('input');
        inputSortMinToMax.type = 'radio';
        inputSortMinToMax.name = 'sort';
        inputSortMinToMax.value = 'sortMinToMax';
        inputSortMinToMax.id = 'sortMinToMax';
        const labelSortMinToMax = document.createElement('label');
        labelSortMinToMax.for = 'sortMinToMax';
        labelSortMinToMax.innerText = 'sort min to max';
        const inputSortMaxToMin = document.createElement('input');
        inputSortMaxToMin.type = 'radio';
        inputSortMaxToMin.name = 'sort';
        inputSortMaxToMin.value = 'sortMaxToMin';
        inputSortMaxToMin.id = 'sortMaxToMin';
        const labelSortMaxToMin = document.createElement('label');
        labelSortMaxToMin.for = 'ssortMaxToMin';
        labelSortMaxToMin.innerText = 'sort max to min';
        formSort.append(inputSortMinToMax, labelSortMinToMax, inputSortMaxToMin, labelSortMaxToMin);
        
        // formSort.addEventListener('change', sortItem);
        return [inputList, addList, clearAllList, update, searchInput, buttonSearh, spanSort, formSort]
    }
і
}

export default Controller;