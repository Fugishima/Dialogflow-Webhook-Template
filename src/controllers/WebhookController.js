const selectIntent = require('../intents')

class WebhookController {
    static async POST (req, res) {
        const intent = req.body.queryResult.intent.displayName

        const response = selectIntent[intent](req)

        if (response != undefined) {
            res.status(200).send(response)
        } else {
            res.status(400).send({
                fullfillment_text: 'Erro no servidor Webhook.'
            })
        }
    }
}

module.exports = WebhookController