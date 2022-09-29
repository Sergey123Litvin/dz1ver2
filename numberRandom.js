function random1to100() {
    return Math.floor(Math.random() * 101);
}

console.log(random1to100());


function random1to100no3() {
    let result = Math.floor(Math.random() * 101),
    toString = result + '';
    for(let number of toString){
        if(number === '3'){
            random1to100no3();
            return;
        } 
    }
    console.log(result);
}

random1to100no3();


function random1to100no3and6() {
    let result = Math.floor(Math.random() * 101),
        toString = result + '';
    for(let number of toString){
        if(number === '3' || number === '6'){
            random1to100no3and6();
            return;
        } 
    }
    console.log(result);       
}
random1to100no3and6();