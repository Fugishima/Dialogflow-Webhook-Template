const { responseBuilder } = require('../util')
const responses = require('../responses/DefaultWelcomeIntentResponses')

module.exports = {
    'Default Welcome Intent': () => {
        // Declarando estruturas a serem retornadas ao Dialogflow.
        const texts = []

        // Inserindo as respostas nas estruturas.
        texts.push( responses['Default Welcome Intent Text'] )

        // Retornando a resposta.
        return responseBuilder(texts)
    }
}