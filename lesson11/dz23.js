// ДЗ 23. Todo list pure js

let statusItems = [];

const todoListContainer = document.querySelector('#todoListContainer');

const inputList = document.createElement('input');
todoListContainer.appendChild(inputList);
inputList.addEventListener('input', validate);

const spanAlertMassege = document.createElement('span');
todoListContainer.appendChild(spanAlertMassege);


const addList = document.createElement('button');
addList.innerText = 'Add';
todoListContainer.appendChild(addList);
addList.addEventListener('click', addLi);

const clearAllList = document.createElement('button');
clearAllList.innerText = 'Clear All';
todoListContainer.appendChild(clearAllList);
clearAllList.addEventListener('click', clearAll);

const ulList = document.createElement('ul');
todoListContainer.appendChild(ulList);

function validate(e) {
    if(/^[ ,.a-zA-Z0-9а-яА-ЯёЁ]+$/.test(e.target.value) || e.target.value.length === 0) {//Разрешено вводить: цифры, латиницу и кирилицу любого регестра, символы только точка и запятая, пробел. Вторая часть решает баг (если ввести значение а затем все удалить, то получим false).
        spanAlertMassege.innerText = '';
        addList.addEventListener('click', addLi);
    } else {
        spanAlertMassege.innerText = 'Invalid value!';
        addList.removeEventListener('click', addLi);
    }
}

function clearAll() {
    ulList.innerHTML = '';
    statusItems = [];
}

function addLi() {
    if(inputList.value === ''){
        spanAlertMassege.innerText = 'Enter value!';
    } else {
        createLiElem();
    }
}

function createLiElem() {
    statusItems.push({
        text: inputList.value,
        checked: false,
        edit: false,
        id: new Date(),
    });
    
    const liItem = document.createElement('li');
    liItem.id = new Date();
   
    renderLi(liItem, statusItems.length - 1); 

    ulList.appendChild(liItem);
    inputList.value = '';
}

function removeLi(e) {
    statusItems.splice(statusItems.findIndex(item => item.id == e.target.parentNode.id), 1);
    e.target.parentNode.remove();
}

function checkedLi(e) {
    statusItems[statusItems.findIndex(item => item.id == e.target.parentNode.id)].checked = e.target.checked;
}

const alertSpan = document.createElement('span');
const saveEditLi = document.createElement('button');

function editLi(e) {
    const parentEvent =  e.target.parentNode;
    parentEvent.innerHTML = '';
    const inputEditLi = document.createElement('input');
    inputEditLi.value = statusItems[statusItems.findIndex(item => item.id == parentEvent.id)].text;
    inputEditLi.addEventListener('input', validateInputLi);
    saveEditLi.innerText = 'Save';
    saveEditLi.addEventListener('click', saveLi);
    const cancelEditLi = document.createElement('button');
    cancelEditLi.innerText = 'Cancel';
    cancelEditLi.addEventListener('click', cancelLi);
    parentEvent.append(inputEditLi, alertSpan, saveEditLi, cancelEditLi);
}

function cancelLi(e) {
    const index = statusItems.findIndex(item => item.id == e.target.parentNode.id);
    parentEvent = e.target.parentNode;
    parentEvent.innerHTML = '';
    renderLi(parentEvent, index);
}

function saveLi(e) {
    const index = statusItems.findIndex(item => item.id == e.target.parentNode.id);
    parentEvent = e.target.parentNode;
    if(parentEvent.firstChild.value === ''){
        alertSpan.innerText = 'Enter value!';
    } else {
    statusItems[index].text = parentEvent.firstChild.value;
    parentEvent.innerHTML = '';
    renderLi(parentEvent, index);
    }
}

function renderLi(parentEvent, index) {
    const checkboxItem = document.createElement('input');
    checkboxItem.type = 'checkbox';
    checkboxItem.checked = statusItems[index].checked;
    checkboxItem.addEventListener('change', checkedLi);
    const span = document.createElement('span');
    span.innerText = statusItems[index].text;
    const editLiItem = document.createElement('button');
    editLiItem.innerText = 'Edit';
    editLiItem.addEventListener('click', editLi);
    const removeLiItem = document.createElement('button');
    removeLiItem.innerText = 'Remove';
    removeLiItem.addEventListener('click', removeLi);
    parentEvent.append(checkboxItem, span, editLiItem, removeLiItem);
}

function validateInputLi(e) {
    if(/^[ ,.a-zA-Z0-9а-яА-ЯёЁ]+$/.test(e.target.value) || e.target.value.length === 0) {//Разрешено вводить: цифры, латиницу и кирилицу любого регестра, символы только точка и запятая, пробел. Вторая часть решает баг (если ввести значение а затем все удалить, то получим false).
        alertSpan.innerText = '';
        alertSpan.innerText = '';
        saveEditLi.addEventListener('click', saveLi);
    } else {
        alertSpan.innerText = 'Invalid value!';
        saveEditLi.removeEventListener('click', saveLi);
    }
}


