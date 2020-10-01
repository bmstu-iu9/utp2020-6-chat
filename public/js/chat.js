
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


document.getElementById('logout').onclick = () => {
  (function () {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
})();
  document.location.href = "http://localhost:3000";
}


const changeChat = ()=>{
  
}

const chatOnload =()=>{
  
}


let friends = []

const reloadfriends = async ()=>{
  document.getElementById('friends_list').innerHTML = '';
  await friends.forEach(a => {
    let divFriend = document.createElement('div');
    divFriend.innerText = a._id
    divFriend.className = 'messages'
    document.getElementById("friends_list").appendChild(divFriend) ;
  })
}

window.onload = async ()=>{
    if(getCookie('session') === ""){
        document.location.href = "http://localhost:3000";
    }else{
    currentUser = await api.getUserId(getCookie('login'), getCookie('password'));
    friends = await api.getFriends(currentUser);
    let i = 0;
    console.log(friends)


    // Добавляю список людей на добавления в друзья
    api.getAllUsers().then(a =>  a.forEach(elem => {


      if (elem._id !== currentUser){ 
          let divMessage = document.createElement('div');
          divMessage.className = 'messages';
          let divUserName = document.createElement('div');
          divUserName.className = 'userName';
          let divDate = document.createElement('div');
          divDate.className = 'date_time';
          let divText = document.createElement('div');
          divText.className = 'text_of_message';
          divText.innerText = elem.name
          let divicon = document.createElement('div');
          divicon.className = 'icon';
          let buttonAddFriend = document.createElement('button');
          buttonAddFriend.className = 'buttonAddFriend';
          buttonAddFriend.innerText = 'Add';
          buttonAddFriend.name = i;
          buttonAddFriend.onclick = () =>{
            api.getFriends(currentUser).then(z =>{if(!z.includes(currentUser)){api.addFriend(currentUser, elem._id)}});
            reloadfriends()
          }
        
          divMessage.appendChild(divicon);
          divMessage.appendChild(divText);
          divMessage.appendChild(divDate);
          divMessage.appendChild(divUserName);
          divMessage.appendChild(buttonAddFriend);
          document.getElementById("Friends").appendChild(divMessage);
        


          }
      reloadfriends()      
        }))};

    


    
    document.getElementById("textarea").innerText = "Напишите кому-нибудь)"  
    document.getElementById("logged_as_1").innerText = "Logged as " + getCookie("login");
    document.getElementById("settings_menu_name").innerText = getCookie("login");
}

