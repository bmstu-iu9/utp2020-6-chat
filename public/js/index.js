'use strict'


import api from './api.js';





login.onchange = (pidor)=> {alert(pidor.type)};


login_button.onclick = (event) => {api.register("vasya", "pupkin").then((res)=>{ console.log(res)})};