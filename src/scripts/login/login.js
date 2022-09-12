import{HomeApi} from './homeApi.js'


console.log('hello')
class Login{
    static headerButtons(){
        const login  = document.getElementById('loginPg')
        const signup = document.getElementById('signUpPg')
        const signup2= document.getElementById('signUpPg2')
        const noUser = document.getElementById('joinNoUser')

        signup.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e)
            window.location.assign('./src/pages/signup.html')
        })
        signup2.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e)
            window.location.assign('./src/pages/signup.html')
        })
    }
    static loginUser(){
        const btnSubmit= document.getElementById('btnSubmit')

        const email    = document.getElementById('inputEmail')
        const password = document.getElementById('inputPassword')

        btnSubmit.addEventListener('click', (e) =>{
            e.preventDefault()
            const data = {
                password:password.value,
                email:email.value
            }
            console.log(data)
            HomeApi.login(data)
        })

    }
}
Login.headerButtons()
Login.loginUser()