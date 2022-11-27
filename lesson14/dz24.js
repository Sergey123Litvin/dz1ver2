const weather = document.querySelector('.weather');

const select = document.createElement('select');

    const option = document.createElement('option');
    option.value = 'hide';
    option.innerText = '-- Виберіть місто --';
    select.appendChild(option);

    function createCity(city, value) {
        const option = document.createElement('option');
        option.value = `${value}`;
        option.innerText = `${city}`;
        select.appendChild(option);
    }
    createCity('Київ', 'Kyiv');
    createCity('Дніпро', 'Dnipro');
    createCity('Миколаїв', 'Mykolayiv');
    createCity('Одесса', 'Odessa');
    createCity('Харків', 'Kharkiv');

    weather.appendChild(select);

const divRenderResult = document.createElement('div');
weather.appendChild(divRenderResult);


select.addEventListener('change', event => {
    if(event.target.value === 'hide'){
        divRenderResult.innerHTML = '';
    }else{
        getWeatherToday(event.target.value);    
    }
});


function getWeatherToday(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},ua&units=metric&lang=ua&APPID=21d86d212649cf18d5056567d14b50d8`)
        .then(response => {
            if(!response.ok){
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(json => renderWeatherToday(json))
        .catch(error => errorMassage(error.message))
}

function renderWeatherToday(obj) {
    divRenderResult.innerHTML = '';

    const divMain = document.createElement('div');
    divMain.innerText = `температура повітря: ${Math.round(obj.main.temp)} градусів Цельсія
    тиск: ${Math.round(obj.main.pressure)} гПа
    вологість: ${obj.main.humidity} %
    видимість: ${obj.visibility} м
    швидкість вітру: ${Math.round(obj.wind.speed)} м/с, ${obj.wind.deg} deg`
    const divDescr = document.createElement('div');
    divDescr.style = 'display: flex';
    const span = document.createElement('span');
    span.innerText = `${obj.weather[0].description}`
    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/w/${obj.weather[0].icon}.png`;
    icon.alt = 'icon';
    
    divDescr.append(span, icon);
    divRenderResult.append(divMain, divDescr);
}

function errorMassage(errorMassage) {
    divRenderResult.innerHTML = '';
    const error = document.createElement('div');
    error.innerText = `Error: ${errorMassage}`;
    divRenderResult.appendChild(error);
}





