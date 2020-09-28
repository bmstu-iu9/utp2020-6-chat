'use strict'



const baseURL = "http://localhost:3000/api";


class Api{

    async auth(username, password) {
        let data = "failed";
        console.log(98);
        //alert(123);
        await fetch(`${baseURL}/auth`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(response => {
             data = response.json();
             //return data;
        }).catch(err => {console.log(err)})
        return data;
      }


    async register(username, password){
        let data = "failed";
        console.log("FIR");
        await fetch(`${baseURL}/registration`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(response => {
             data = response.json();
        }).catch(err => {console.log(err)})


        return data;
      }

    async send(name, to, message){
        
        await fetch(`${baseURL}/send`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "from": name,
                "to": to,
                "message": message
            })
        }).then(response => {
             data = response.json();
        }).catch(err => {console.log(err)})
        return data;
    }


    async getAllUsers(){
        let data = "failed";
        await fetch(`${baseURL}/getAllUsers`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              },
        }).then(response => {
            data = response.json();
       }).catch(err => {console.log(err)})
       return data;
    }


    async getMessages(login, password){
        let data = "failed";
        await fetch(`${baseURL}/getMessages`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "login" : login,
                "password" : password
            })
        }).then(response => {
            data = response.json();
       }).catch(err => {console.log(err)})
       return data;
    }
}


export default new Api();
