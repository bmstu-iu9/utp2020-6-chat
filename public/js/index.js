'use strict'


import api from './api.js';



function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : "";
}

document.getElementById("login").value=getCookie("login");
document.getElementById("password").value=getCookie("password");
if (getCookie("login")!=""&& getCookie("password")) {
  api.auth(getCookie("login"), getCookie("password")).then((res)=> {
    if(res.isKnownUser=== true)
        {
          document.location.href="http://localhost:3000/chat";
        }
  })
}

login_button.onclick = () => {
    let name = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let cookie = `login=${name}; password=${password}`;
    document.cookie=`login=${name}`;
    document.cookie=`password=${password}`;
    api.auth(name, password)
    .then((res)=>{
        if(res.isKnownUser=== true)
            {
              document.location.href="http://localhost:3000/chat";
              alert("Заходите");
            }
        else{
            document.location.href="http://localhost:3000/inc";
            //alert("Неверный пароль");
        }})};


iAmNew.onclick = () => {document.location.href="http://localhost:3000/reg"};
