const form = document.querySelector(".js-form"),
      input = form.querySelector("input");
      greeting = document.querySelector(".js-gretting")

const UESR_LS = "userName",
      SHOWING_CN = "showing";

function paintName(name){       //hello 다음에 내 이름이 나오게 설정
    const nameContainer = document.querySelector(".js-form");
    const title = document.createElement("h4");
    nameContainer.innerHTML = "";
    title.name_input.innerHTML = `Hello ${name}`;
    title.className = "name_input";
    nameContainer.appendChild(title);
}

function saveName(text){
    localStorage.setItem(UESR_LS, text);
}      

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    paintName(value);
}

function askForName(han){
        form.classList.add(SHOWING_CN);
        form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}


function loadName(){
    const userName = localStorage.getItem(UESR_LS); //
    if (userName === null){ //
        //유저 이름이 없는 경우
        askForName();
        
    } else {
        //유저 이름이 있는 경우
        paintGreeting(userName); //
    }
}


function init(){
    loadName();
}

init();