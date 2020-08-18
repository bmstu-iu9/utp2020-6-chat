'use strict'


import api from './api.js';







login_button.onclick = () => {
    let name = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    api.auth(name, password)
    .then((res)=>{
        if(res.isKnownUser=== true) 
            {alert("Заходите");}
        else{
            document.location.href="http://localhost:3000/inc";
            //alert("Неверный пароль");
        }})};


iAmNew.onclick = () => {document.location.href="http://localhost:3000/reg"};

