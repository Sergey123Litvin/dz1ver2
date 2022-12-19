import modifyData from "./utils.js";

class Api {
    constructor() {
    }

    static async getTodos(user) {
        try{
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${user}/todos`);
            const json = await data.json();
            return json.map(modifyData);
        } catch(e){
            console.error(e)
        }
    }

    static async removeLi(id) {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
                body: JSON.stringify({
                  removeLi: id,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            return data.status;
        }catch(e){
            console.error(e)
        }
    }

    static async saveEditLi(id, text) {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                  saveEditLi: id,
                  text: text,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            return data.status;
        }catch(e){
            console.error(e)
        }
    }

    static async addLi(text) {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
                method: 'POST',
                body: JSON.stringify({
                  text: text,
                  completed: false,
                  editable: false,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const json = await data.json();
            return [json, data.status];
        }catch(e){
            console.error(e)
        }
    }
}

export default Api;