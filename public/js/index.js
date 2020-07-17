'use strict'


import Api from './api.js';

let x = new Api();



login.onchange = (pidor)=> {alert(pidor.type)};


login_button.onclick = (event) => {x.auth("vasya", "pupkin")}; 
