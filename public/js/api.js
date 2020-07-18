'use strict'



const baseURL = "http://localhost:3000/api";


class Api{

    async auth(username, password) {
        let data = "failed";
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
        }).catch(err => {console.log(err)})
        return data;
      }


    async register(username, password){
        let data = "failed";
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
        let data = "failed";
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
}


export default new Api();