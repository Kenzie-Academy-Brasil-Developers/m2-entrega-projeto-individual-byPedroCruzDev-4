import {HomeApi} from './homeApi.js'

class signUpPage{
    static headerButtons (){
        const login = document.getElementById('loginPg')
        const login2= document.getElementById('loginPg2')
        const signup= document.getElementById('signUpPg')
        const noUser= document.getElementById('joinNoUser')

        login.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e)
            window.location.assign('../../index.html')
        })
        login2.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e)
            window.location.assign('../../index.html')
        })
    }

    static signup(){
        const btnSubmit= document.getElementById('btnSubmit')

        const name     = document.getElementById('inputName')
        const email    = document.getElementById('inputEmail')
        const expertise= document.getElementById('inputEx')
        const password = document.getElementById('inputPassword')

        btnSubmit.addEventListener('click', (e) =>{
            e.preventDefault()
            const data = {
                username:name.value,
                password:password.value,
                professional_level:expertise.value,
                email:email.value
            }
            console.log(data)
            HomeApi.signup(data)
            window.location.assign('../../index.html')
        })

    }
}

signUpPage.headerButtons()
signUpPage.signup()