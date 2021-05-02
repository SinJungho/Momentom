const weather =document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "bbe5bf1618929b7ffc3059238c8a5644";

function handleGeoError(){
    console.log("cant access geo location");
}

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const palce = json.name;
        weather.innerText = `${Math.floor(temperature)}° @ ${palce}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(position){     //위치 정보를 가져오는데 성공할 경우 처리하는 함수
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); //getCurrentPosition 함수에서 앞의 인자는 성공했을 경우 처리하는 함수고 뒤에 있는 함수는 실패했을 때 처리하는 함수이다.  
}

function loadCoorde(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();         //유저의 위치 정보를 알려주는 함수
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoorde();   
}

init();