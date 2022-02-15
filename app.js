const express = require('express')
const { get } = require('http')
const app = express()
const port = 3000

app.use(express.static("public")) 

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about-page.html')
  })


  app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works-page.html')
  })


  app.get('/photogallery', (req, res) => {
    res.sendFile(__dirname + '/views/photogallery-page.html')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})