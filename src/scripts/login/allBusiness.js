import { HomeApi } from "./homeApi.js";

 export class BusinessArea{

    static async headerBtns(){
        const signup = document.getElementById('signUpPg')
        const login = document.getElementById('loginPg')

        login.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e)
            window.location.assign('../../index.html')
        })

        signup.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e)
            window.location.assign('./signup.html')
        })
    }

    static async renderBusiness(arr){
        
        const ul  = document.getElementById('render-section')
        const food= document.getElementById('foodH')
        const car = document.getElementById('carH')
        const ti  = document.getElementById('tiH')
        const title= document.getElementById('title')
    
        const all = document.getElementById('allBusiness')
        arr.forEach(element => {
            
            const li   = document.createElement('li')
            const h2   = document.createElement('h2')
            const h4   = document.createElement('h4')
            const span = document.createElement('span')
            const p    = document.createElement('p')
            
            li.classList = 'card'

            h2.innerHTML = element.name
            h4.innerHTML = `Abre as:${element.opening_hours}hrs`
            span.innerHTML = element.description
            p.innerHTML = `Tipo:${element.sectors.description}`

            li.append(h2, h4, span, p)
            ul.appendChild(li)
            
        })
        all.addEventListener('click', ()=>{
            ul.innerText = ''
            title.innerHTML = 'Lista de Empresas'
            arr.forEach(element => {
                
               
                const li   = document.createElement('li')
                const h2   = document.createElement('h2')
                const h4   = document.createElement('h4')
                const span = document.createElement('span')
                const p    = document.createElement('p')
                
                li.classList = 'card'
    
                h2.innerHTML = element.name
                h4.innerHTML = `Abre as:${element.opening_hours}hrs`
                span.innerHTML = element.description
                p.innerHTML = `Tipo:${element.sectors.description}`
    
                li.append(h2, h4, span, p)
                ul.appendChild(li)
                
            })  
        })

        food.addEventListener('click', (e) =>{
            ul.innerText =  ''
            title.innerHTML = 'Setor Alimenticio'  
            arr.forEach(element => {
               
                if(element.sectors.description == 'Alimenticio'){
                
                    const li   = document.createElement('li')
                    const h2   = document.createElement('h2')
                    const h4   = document.createElement('h4')
                    const span = document.createElement('span')
                    const p    = document.createElement('p')
                    
                    li.classList = 'card'

                    h2.innerHTML = element.name
                    h4.innerHTML = `Abre as:${element.opening_hours}hrs`
                    span.innerHTML = element.description
                    p.innerHTML = `Tipo:${element.sectors.description}`

                    li.append(h2, h4, span, p)
                    ul.appendChild(li)
                }
            })
        })
        car.addEventListener('click', (e) =>{
            ul.innerHTML = ''
            title.innerHTML = 'Setor Automotivo' 
            arr.forEach(element => {
               
                if(element.sectors.description == 'Automotiva'){
                    console.log('hello')
                    const li   = document.createElement('li')
                    const h2   = document.createElement('h2')
                    const h4   = document.createElement('h4')
                    const span = document.createElement('span')
                    const p    = document.createElement('p')
                    
                    li.classList = 'card'

                    h2.innerHTML = element.name
                    h4.innerHTML = `Abre as:${element.opening_hours}hrs`
                    span.innerHTML = element.description
                    p.innerHTML = `Tipo:${element.sectors.description}`

                    li.append(h2, h4, span, p)
                    ul.appendChild(li)
                }
            })
        })
        ti.addEventListener('click', (e) =>{
            ul.innerHTML = ''
            title.innerHTML = 'Setor de TI'
            arr.forEach(element => {
               
                if(element.sectors.description == 'TI'){
                    console.log('hello')
                    const li   = document.createElement('li')
                    const h2   = document.createElement('h2')
                    const h4   = document.createElement('h4')
                    const span = document.createElement('span')
                    const p    = document.createElement('p')
                    
                    li.classList = 'card'

                    h2.innerHTML = element.name
                    h4.innerHTML = `Abre as:${element.opening_hours}hrs`
                    span.innerHTML = element.description
                    p.innerHTML = `Tipo:${element.sectors.description}`

                    li.append(h2, h4, span, p)
                    ul.appendChild(li)
                }
            })
        })
      
    }
}
BusinessArea.renderBusiness()
BusinessArea.headerBtns()