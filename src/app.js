const hbs = require('hbs')
const path = require('path')
const express = require('express')
const forecast= require('./utils/forecast')
const request = require('request')

const app= express()    
const viewsPath = path.join(__dirname,'../templates/views')
const pathDir= path.join(__dirname,'../public')
const partialsPath = path.join(__dirname,'../templates/partials')
const port = process.env.PORT || 3000


app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(pathDir))


app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about'
    })
})

app.get('',(req,res)=>{
    res.render('index',{
        title:"weather"
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.search)
    {
        return res.send(
            {
                error: 'Please enter a valid address'
            }
        )
    }
    let address=req.query.search
    forecast(address,(error,data)=>{
        if(error)
        {
            return res.send(error)
        }
        res.send({
            address,
            forecast:data,

        })
    })

})

app.get('/about/*',(req,res)=>{
    res.render('blah',{
        title:'Error',
        errorMessage:'article not found'
    })
    
})

app.get('*',(req,res)=>{
    res.render('blah',{
        title:'Error',
        errorMessage:'page not found'
    })
    
})
app.listen(port,()=>{
    console.log("server is up on " +port)
})