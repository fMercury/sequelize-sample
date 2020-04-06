require('dotenv').config()

let express = require('express'),
    hostname = '127.0.0.1',
    port = 5001,
    app = express();

const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({xtended:false}))

const models = require('./models')

models.sequelize.sync()
    .then( () => {console.log('good connection') } )
    .catch( (error) => {console.log(error, 'bad connection')} )

const UserProfile = require('./controller').UserProfile

app.post('/api/userprofile', UserProfile.create )

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

module.exports = app;