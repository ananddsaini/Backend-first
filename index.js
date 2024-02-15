const express = require('express')
const app = express()
const port = 1008

app.get('/', (req, res) => {
  res.send('<h1> Uski Yaadein </h1>')
})
app.get('/kailash',(req, res)=>{
res.send('Adiyogi')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})