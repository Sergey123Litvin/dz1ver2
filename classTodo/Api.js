class Api {
    constructor() {
    }

    static async getTodos(user) {
        try{
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${user}/todos`);
            const json = await data.json();
            return json;
        } catch(e){
            console.error(e)
        }
    }
}

export default Api;