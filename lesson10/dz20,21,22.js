// ДЗ 20. div - призрак
    // Имеется текстовое поле на странице. При фокусировке на этом поле сбоку появляется <div> с информацией. 
    // При пропаже фокуса - <div> так же пропадает

    // let input = [...document.getElementsByTagName('input')];

    // let div = document.createElement('div');
    // div.innerText = 'Это описание input';

    // const addDiv = () => document.body.append(div);
    // const removeDiv = () => document.body.removeChild(div);

    // input[0].addEventListener('mouseover', addDiv);
    // input[0].addEventListener('mouseout', removeDiv);

// ДЗ 21. Таблица
    // Вывести таблицу 10 × 10, заполненную числами от 1 до 100 (таблица создаётся динамически)

    // const tabl = document.createElement('table');
    // tabl.setAttribute('border', 1);
    // for(let i = 0; i < 10; i++) {
    //     const tr = document.createElement('tr');
    //     tabl.appendChild(tr);
    //     for(let a = 1; a <= 10; a++) {
    //         const td = document.createElement('td');
    //         td.innerText = a + i * 10;
    //         tr.appendChild(td);
    //     }
    // }

    // document.body.appendChild(tabl)


// ДЗ 22. Вывод изображений
    // В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
    // Вывести изображение из этой папки полученное случайным образом (Math.random)

    let random = Math.floor(Math.random() * (10 - 1)) + 1;
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', `lesson10/img/${random}.jpg`);
    div.appendChild(img);
    document.body.appendChild(div);