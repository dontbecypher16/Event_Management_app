const express = require('express')
const app = express()
const port = 3000
const dbSetup = require('./database/setup')
const { checkIfAdmin, authenticateUser } = require('./middlewares/authenticate')


// Routes
const eventRoutes = require('./routes/eventRoutes')
const userRoutes = require('./routes/userRoutes')


dbSetup()
//Seeders
const {seedAdmin} = require('./seeders/admin')
seedAdmin()

app.use(express.json())



app.use( eventRoutes)
app.use('/auth', userRoutes)


app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
