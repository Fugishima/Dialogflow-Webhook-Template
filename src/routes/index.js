const bodyParser = require('body-parser')

const root = require('./root')
const webhook = require('./webhook')

module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use('/', root)
    app.use('/webhook', webhook)
}