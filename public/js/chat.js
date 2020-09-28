
'use strict'

import api from './api.js';

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : "";
  }



let users = []

let messages = []


window.onload = ()=>{
    if(getCookie('session') === ""){
        document.location.href = "http://localhost:3000";
    };
    api.getMessages(getCookie('login'), getCookie('password')).then(a => messages.push(a));
    console.log(messages);
    api.getAllUsers().then(a => users.push(a))
    console.log(users);

    // api.getMessages().then(a =>  a.forEach(elem => {
    //   let divMessage = document.createElement('div');
    //   divMessage.className = 'messages';
    //   let divUserName = document.createElement('div');
    //   divUserName.className = 'userName';
    //   let divDate = document.createElement('div');
    //   divDate.className = 'date_time';
    //   let divText = document.createElement('div');
    //   divText.className = 'text_of_message';
    //   let divicon = document.createElement('div');
    //   divicon.className = 'icon';
    //   divMessage.appendChild(divicon);
    //   divMessage.appendChild(divText);
    //   divMessage.appendChild(divDate);
    //   divMessage.appendChild(divUserName);
    //   document.getElementById("messages").appendChild(divMessage);
    // }));
}