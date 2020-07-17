'use strict'



const baseURL = "http://localhost:3000/api";


export default class Api{

    async auth(username, password) {
        let data = "failed";
        await fetch(`${baseURL}/auth`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(res => {
            console.log(res.body.username, res.body.password);
        }).catch(err => {err})
        return data;
      };
      
}
