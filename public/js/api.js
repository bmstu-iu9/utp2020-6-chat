'use strict'



const baseURL = "http://localhost:3000/api";


export default class Api{

    async auth(username, password) {
        let data = "failed";
        await fetch(`${baseURL}/auth`,{
            method: 'POST',
            body: {
                id: 1,
                username: username,
                password: password
            }
        }).then(res => {
            console.log(res.body.username, res.body.password);
        }).catch(err => {err})
        return data;
      };
      
}
