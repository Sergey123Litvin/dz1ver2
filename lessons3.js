//ДЗ 6. switch…case
//Переписать код ниже с использованием конструкции switch…case

    /*if(numOrStr === null) {
    console.log('вы отменили')
    } else if( numOrStr.trim() === '' ) {
    console.log('Empty String');
    } else if( isNaN( +numOrStr ) ) {
    console.log(' number is Ba_NaN')
    } else {
    console.log('OK!')
    }*/

    let numOrStr = prompt('input number or string');
    console.log(numOrStr);

    switch (true) {
        case numOrStr === null: 
            console.log('вы отменили');
            break;
        case numOrStr.trim() === '' :
            console.log('Empty String');
            break;   
        case isNaN(+numOrStr): 
            console.log(' number is Ba_NaN'); 
            break;
        default:
            console.log('OK!');
    }

