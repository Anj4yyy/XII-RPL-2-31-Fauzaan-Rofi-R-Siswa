const express = require('express')
const siswarouter = require('./router/siswa')
const app = express()
const port = 4000
const connectDB = require('./config/db')


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(siswarouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})