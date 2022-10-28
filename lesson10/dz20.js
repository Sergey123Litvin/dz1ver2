// ДЗ 20. div - призрак
    // Имеется текстовое поле на странице. При фокусировке на этом поле сбоку появляется <div> с информацией. 
    // При пропаже фокуса - <div> так же пропадает

    let input = [...document.getElementsByTagName('input')];

    let div = document.createElement('div');
    div.innerText = 'Это описание input';

    const addDiv = () => document.body.append(div);
    const removeDiv = () => document.body.removeChild(div);

    input[0].addEventListener('mouseover', addDiv);
    input[0].addEventListener('mouseout', removeDiv);

