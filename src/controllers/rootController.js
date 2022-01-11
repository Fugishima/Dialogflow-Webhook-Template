const selectIntent = require('../intents')

const main = (req, res) => {
    const intent = req.body.queryResult.intent.displayName

    const response = selectIntent[intent]()

    if (response != undefined) {
        res.status(200).send(response)
    } else {
        res.status(400).send({
            fullfillment_text: 'Erro no servidor Webhook.'
        })
    }
}

module.exports = {
    main
}