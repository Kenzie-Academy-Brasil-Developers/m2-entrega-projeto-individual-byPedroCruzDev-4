import { BusinessArea } from "./allBusiness.js"
export class HomeApi{
    static baseUrl = 'http://localhost:6278'
    static token   = localStorage.getItem('@KenzieBusiness:token')
    static headers = {
        'Content-type' : 'application/json',
        Athorization   : `Bearer ${this.token}`
    }

    static async companies(){
        return await fetch(`${this.baseUrl}/companies`,{
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(resp => BusinessArea.renderBusiness(resp))
        .catch(err => console.log(err))
        
    }

    static async signup(obj){
        return await fetch(`${this.baseUrl}/auth/register/user`,{
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(res => {
            if(res.email){
                alert('registro realizado')
            }
            window.location.assign('../../index.html')
            
        })
        .catch(err => console.log(err))
    }
    static async login(data){
        return await fetch(`${this.baseUrl}/auth/login`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {

            if(res.token){
                localStorage.setItem('@KenzieBusiness:token', res.token)
                localStorage.setItem('@KenzieBusiness:token',res.uuid)
            }else{
                console.log('erro no login')
            }

            if(res.is_admin){
                window.Location.assign(alert('adm on'))
            }else if(!res.is_admin){
                window.localStorage.assign(alert('login correto mas n é adm'))
            }
        })
        .catch(err => console.log(err))
    }
}

console.log(HomeApi.companies())