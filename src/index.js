const express = require('express')
const app = express()
const port = 3000
const dbSetup = require('./database/setup')
const eventRoutes = require('./routes/eventRoutes')

app.use(express.json())
dbSetup()
app.use(eventRoutes)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
