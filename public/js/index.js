'use strict'


import api from './api.js';





login.onchange = (pidor)=> {alert(pidor.type)};


login_button.onclick = () => {api.auth("vasya", "pupkin").then((res)=>{ console.log(res)})};


iAmNew.onclick = () => {document.location.href="http://localhost:3000/reg"};

