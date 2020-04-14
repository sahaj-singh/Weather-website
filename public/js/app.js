console.log('client site java script file is loaded')





const weatherForm= document.querySelector('form')
const inp=document.querySelector('input')
const mes1= document.querySelector('#mes1')
const mes2= document.querySelector('#mes2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=inp.value
    mes1.textContent='Loading'
    mes2.textContent=''
    fetch('http://localhost:3000/weather?search='+location).then((response)=>{
    response.json().then((data)=>{
        if(response.body.cod==="404"){
            console.log(error)
            mes1.textContent='Invalid location'
            mes2.textContent=''
        }
        else{
            mes1.textContent= data.address

            mes2.textContent= data.forecast

        }
    })
})

})

