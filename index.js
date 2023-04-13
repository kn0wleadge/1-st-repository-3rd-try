const express = require('express')
const path = require("path")
const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello Guys!')
})
app.get('/registration', (req, res) => {
    res.sendFile("C:\\Users\\жека\\WebstormProjects\\untitled\\1-st-repository-3rd-try\\reg-form.html")
})
app.get('/hi', (req, res) => {
    res.status(201).send('Hi! GET request received)')
})
app.put('/hi', (req, res) => {
    res.status(200).send('Hi/PUT request received)')
})
app.post('/req-data',(req, res )=>{
    console.log(">>>>>>>>>>>>",req.body);
    res.status()
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
