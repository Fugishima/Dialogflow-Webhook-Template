const { responseBuilder } = require('../util')
const responses = require('../responses/CardIntentResponses')

module.exports = {
    'Card Intent': () => {
        // Declarando estruturas a serem retornadas ao Dialogflow.
        const texts = []
        const card = {}

        // Inserindo as respostas nas estruturas.
        texts.push( responses['Card Intent Text'] )

        card.title = ( responses['Card Intent Card'].title )
        card.subtitle = ( responses['Card Intent Card'].subtitle )
        card.buttons = ( responses['Card Intent Card'].buttons )

        // Retornando a resposta.
        return responseBuilder(texts, card)
    }
}