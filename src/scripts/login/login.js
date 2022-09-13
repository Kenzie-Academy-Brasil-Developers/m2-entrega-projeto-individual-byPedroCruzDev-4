import{HomeApi} from './homeApi.js'


console.log('hello')
class LoginPage{
    static headerButtons(){
        const login  = document.getElementById('loginPg')
        const signup = document.getElementById('signUpPg')
        const signup2= document.getElementById('signUpPg2')
        const allBusiness= document.getElementById('allBusiness')

        allBusiness.addEventListener('click', ()=>{
            window.location.assign('./src/pages/allBusiness.html')
        })

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

    static companies(){
        const allBusiness = document.getElementById('allBusinessB')

        allBusiness.addEventListener('click', (e)=>{
            window.location.assign('./src/pages/allBusiness.html')
        })
    }
}
LoginPage.headerButtons()
LoginPage.loginUser()
LoginPage.companies()