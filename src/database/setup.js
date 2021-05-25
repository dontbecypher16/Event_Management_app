const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://richard_user:Plpl2021@cluster0.pcp8q.mongodb.net/eventsdb?retryWrites=true&w=majority'

module.exports = function() {
   mongoose.connect(connectionString,
 {useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false}, (err) => {
    if(err)  {
        console.log(err)
    } else {
        console.log('database connection successful')

    }
  })

}


