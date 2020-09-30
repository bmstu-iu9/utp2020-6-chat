
'use strict'

import api from './api.js';

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : "";
  }



let users =[]

let messages = []


let pickedUser = 0

let currentUser = 0



document.getElementById("help").onclick = () =>{
  if (document.getElementById('search_friends').style.display == "block"){
    document.getElementById('search_friends').style.display = "none"
  }else{
    document.getElementById('search_friends').style.display = "block"
  }
}


document.getElementById("menu_1").onclick = () =>{
  if (document.getElementById('settings_menu').style.display == "block"){
    document.getElementById('settings_menu').style.display = "none"
  }else{
    document.getElementById('settings_menu').style.display = "block"
  }
}

submit_change.onclick = ()=>{
  let password1 = document.getElementById("change_1").value;
  let password2 = document.getElementById("change_2").value;
  console.log(password1)
  if(password1 === password2){
    api.changePassword(currentUser, password1);
    console.log("changed")
  }
}


const changeChat = ()=>{
  
}

const chatOnload =()=>{
  
}






window.onload = async ()=>{
    if(getCookie('session') === ""){
        document.location.href = "http://localhost:3000";
    };
    //api.getMessages(getCookie('login'), getCookie('password')).then(a => messages.push(a));
    
    console.log(getCookie('login'))
    currentUser = await api.getUserId(getCookie('login'), getCookie('password'));
    let i = 0;

    api.getAllUsers().then(a =>  a.forEach(elem => {
      let divMessage = document.createElement('div');
      divMessage.className = 'messages';
      let divUserName = document.createElement('div');
      divUserName.className = 'userName';
      let divDate = document.createElement('div');
      divDate.className = 'date_time';
      let divText = document.createElement('div');
      divText.className = 'text_of_message';
      divText.innerText = "11111111111111111111"
      let divicon = document.createElement('div');
      divicon.className = 'icon';
      let buttonAddFriend = document.createElement('button');
      buttonAddFriend.className = 'buttonAddFriend';
      buttonAddFriend.innerText = 'Add';
      buttonAddFriend.name = i;
      buttonAddFriend.onclick = () =>{
        api.addFriend(currentUser, elem._id);
      }
      console.log(elem)
      divMessage.appendChild(divicon);
      divMessage.appendChild(divText);
      divMessage.appendChild(divDate);
      divMessage.appendChild(divUserName);
      divMessage.appendChild(buttonAddFriend);
      document.getElementById("Friends").appendChild(divMessage);
      
    }));

    
    document.getElementById("textarea").innerText = "Напишите кому-нибудь)"  
    document.getElementById("logged_as_1").innerText = "Logged as " + getCookie("login");
    document.getElementById("settings_menu_name").innerText = getCookie("login");
    console.log(currentUser)
}

