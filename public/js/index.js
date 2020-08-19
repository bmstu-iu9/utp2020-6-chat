'use strict'


import api from './api.js';



function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

document.getElementById("login").value=getCookie("login");
document.getElementById("password").value=getCookie("password");

login_button.onclick = () => {
    let name = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let cookie = `login=${name}; password=${password}`;
    document.cookie=`login=${name}`;
    document.cookie=`password=${password}`;
    api.auth(name, password)
    .then((res)=>{
        if(res.isKnownUser=== true)
            {alert("Заходите");}
        else{
            alert("Неверный пароль");
        }})};


iAmNew.onclick = () => {document.location.href="http://localhost:3000/reg"};
