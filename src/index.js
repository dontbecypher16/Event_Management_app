const express = require('express')
const app = express()
const port = 3000
const dbSetup = require('./database/setup')

const eventRoutes = require('./routes/eventRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json())

dbSetup()

app.use(eventRoutes)
app.use('/auth', userRoutes)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
