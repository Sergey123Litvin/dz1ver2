// ДЗ 23. Todo list pure js
// ДЗ 25. Local storage
// ДЗ 26. Доделать Todo List

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

const update = document.createElement('button');
update.innerText = 'Update';
todoListContainer.appendChild(update);
update.addEventListener('click', updateList);

const searchInput = document.createElement('input');
searchInput.placeholder = 'Search';
todoListContainer.appendChild(searchInput);

const buttonSearh = document.createElement('button');
buttonSearh.innerText = 'Search';
todoListContainer.appendChild(buttonSearh);
buttonSearh.addEventListener('click', searchListItem);

const spanSort = document.createElement('span');
spanSort.innerText = 'Sort:';
spanSort.style = 'display: block;';
todoListContainer.appendChild(spanSort);
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
todoListContainer.appendChild(formSort);

formSort.addEventListener('change', sortItem);

const ulList = document.createElement('ul');
todoListContainer.appendChild(ulList);

function loadingPosts(colPosts) {
    for(let i = 1; i <= colPosts; i++) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
            .then((response) => {
                if(!response.ok){
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((json) => {
                json.editable = false;
                json.completed = false;
                statusItems.push(json);
                renderLastItem();
            })
            .catch(error => errorMassage(error.message))
    }
}

if(localStorage.getItem('statusItemsJson') == null) {
    loadingPosts(20);
}else{
    statusItems = JSON.parse(localStorage.getItem('statusItemsJson'));
    renderAllListItem();
}

function renderAllListItem() {
    ulList.innerHTML = '';
    for(let i = 0; i < statusItems.length; i++) {
        const liItem = document.createElement('li');
        renderLi(statusItems, liItem, i);
        liItem.id = statusItems[i].id;
        ulList.appendChild(liItem);
    }
}

function renderLastItem() {
    const liItem = document.createElement('li');
    renderLi(statusItems, liItem, statusItems.length - 1); 
    liItem.id = statusItems[statusItems.length - 1].id;
    ulList.appendChild(liItem);
}

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
    fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
        method: 'POST',
        body: JSON.stringify({
          title: inputList.value,
          completed: false,
          editable: false,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => {
            if(!response.ok){
                throw new Error(response.status);
            }
                return response.json();
        })
        .then((json) => {
            statusItems.push(json);
            renderLastItem();
        })
        .catch(error => errorMassage(error.message))

    inputList.value = '';
}

function removeLi(e) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.parentNode.id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          removeItemId: e.target.parentNode.id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => {
            if(!response.ok){
                throw new Error(response.status);
            }
            statusItems.splice(statusItems.findIndex(item => item.id == e.target.parentNode.id), 1);
            e.target.parentNode.remove();
        })
        .catch(error => errorMassageItem(e.target.parentNode.childNodes[2], error))
}

function checkedLi(e) {
    statusItems[statusItems.findIndex(item => item.id == e.target.parentNode.id)].completed = e.target.checked;
}

const alertSpan = document.createElement('span');
const saveEditLi = document.createElement('button');

function editLi(e) {
    const parentEvent =  e.target.parentNode;
    parentEvent.innerHTML = '';
    const inputEditLi = document.createElement('input');
    inputEditLi.value = statusItems[statusItems.findIndex(item => item.id == parentEvent.id)].title;
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
    renderLi(statusItems, parentEvent, index);
}

function saveLi(e) {
    const index = statusItems.findIndex(item => item.id == e.target.parentNode.id);
    parentEvent = e.target.parentNode;
    if(parentEvent.firstChild.value === ''){
        alertSpan.innerText = 'Enter value!';
    } else {
        fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.parentNode.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          saveLiIndex: index,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        })
            .then((response) => {
                if(!response.ok){
                    throw new Error(response.status);
                }
                statusItems[index].title = parentEvent.firstChild.value;
                parentEvent.innerHTML = '';
                renderLi(statusItems, parentEvent, index);
            })
            .catch(error => errorMassageItem( alertSpan, error))
    }
}

function renderLi(arr, parentEvent, index) {
    const checkboxItem = document.createElement('input');
    checkboxItem.type = 'checkbox';
    checkboxItem.checked = arr[index].completed;
    checkboxItem.addEventListener('change', checkedLi);
    const span = document.createElement('span');
    span.innerText = arr[index].title;
    span.style = 'cursor: pointer;';
    span.addEventListener('click', getInfoItem);
    const alertSpan = document.createElement('span');
    const editLiItem = document.createElement('button');
    editLiItem.innerText = 'Edit';
    editLiItem.addEventListener('click', editLi);
    const removeLiItem = document.createElement('button');
    removeLiItem.innerText = 'Remove';
    removeLiItem.addEventListener('click', removeLi);
    parentEvent.append(checkboxItem, span, alertSpan, editLiItem, removeLiItem);
}

function validateInputLi(e) {
    if(/^[ ,.a-zA-Z0-9а-яА-ЯёЁ]+$/.test(e.target.value) || e.target.value.length === 0) {//Разрешено вводить: цифры, латиницу и кирилицу любого регестра, символы только точка и запятая, пробел. Вторая часть решает баг (если ввести значение а затем все удалить, то получим false).
        alertSpan.innerText = '';
        saveEditLi.addEventListener('click', saveLi);
    } else {
        alertSpan.innerText = 'Invalid value!';
        saveEditLi.removeEventListener('click', saveLi);
    }
}

function updateList() {
    ulList.innerHTML = '';
    statusItems.length = 0;
    loadingPosts(20);
    inputSortMinToMax.checked = false;
    inputSortMaxToMin.checked = false;
}

function searchListItem() {
        const searchArray = [];
        for(let i = 0; i < statusItems.length; i++) {
            if(statusItems[i].title.includes(searchInput.value)) {
                searchArray.push(statusItems[i]);
            }
        }
        ulList.innerHTML = '';
        for(let i = 0; i < searchArray.length; i++) {
            const liItem = document.createElement('li');
            renderLi(searchArray, liItem, i);
            liItem.id = statusItems[i].id;
            ulList.appendChild(liItem);
        }
}

function sortItem(e) {
    if(e.target.value == 'sortMaxToMin') {
        statusItems.sort((a, b) => b.id - a.id);
    }else{
        statusItems.sort((a, b) => a.id - b.id);
    }
    renderAllListItem();
}

function errorMassage(massage) {
    spanAlertMassege.innerText = ` ${massage}`;
    spanAlertMassege.style = 'color: red;'
}

function errorMassageItem(span, massage) {
    span.innerText = ` ${massage}`;
    span.style = 'color: red;'
}

function getInfoItem(e) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.parentNode.id}`)
        .then(response => {
            if(!response.ok){
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(json => {
            if(e.target.parentNode.childNodes[2].innerText == '') {
                e.target.parentNode.childNodes[2].innerText = `   id = ${json.id} userId = ${json.userId}`;
                e.target.parentNode.childNodes[2].style = 'color: green;';
            }else{
                e.target.parentNode.childNodes[2].innerText = '';
            }
        })
        .catch(error => errorMassageItem(e.target.parentNode.childNodes[2], error))
}

window.onbeforeunload = () => {
    let statusItemsJson = JSON.stringify(statusItems);
    localStorage.setItem('statusItemsJson', statusItemsJson);
};