
'use strict'

import api from './api.js';

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : "";
  }


document.getElementById('bbb').onclick = ()=> {}; 

window.onload = ( )=>{
    if(getCookie('session') === ""){
        document.location.href = "http://localhost:3000";
    };
    let friends = [];
    api.getAllUsers().then(a =>  a.forEach(elem => {
      let divMessage = document.createElement('div');
      divMessage.className = 'messages';
      let divLogin = document.createElement('div');
      divLogin.className = 'login';
      let divDate = document.createElement('div');
      divDate.className = 'date_time';
      let divText = document.createElement('div');
      divText.className = 'text_of_message';
      let divicon = document.createElement('div');
      divicon.className = 'icon';
        divMessage.appendChild(divLogin);
        divMessage.appendChild(divText);
        divMessage.appendChild(divDate);
        divMessage.appendChild(divicon);

        document.getElementById("messages").appendChild(divMessage);


    }));
}