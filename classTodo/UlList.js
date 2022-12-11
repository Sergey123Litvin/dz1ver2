import StatusLi from "./StatusLi.js";

class UlList {
    constructor() {
        this.statusLi = StatusLi.getInstance();
    }

    render() {
        const ulList = document.createElement('ul');
        console.log(this.statusLi);

        return ulList;
    }
}

export default UlList;

