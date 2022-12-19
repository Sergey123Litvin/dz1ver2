import LiItem from "./LiItem.js"
import StatusLi from "./StatusLi.js";

class UlList {
    constructor() {
        this.statusLi = StatusLi.getInstance();
    }

    render() {
        const ulList = document.createElement('ul');
 
            const items = this.statusLi.getStatusLi().map(s => new LiItem(s));
            const rendered = items.map(i => i.render());

            ulList.append(...rendered);
    
        return ulList;
    }
}

export default UlList;