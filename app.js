const express = require('express')
const app = express()
const port = 3002

app.use(express.json())

const router = require('./router')
app.use('/', router)


app.listen(port, () => {
    console.log(`router is listining on port : ${port}`)
})
