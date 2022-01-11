const { responseBuilder } = require('../util')
const responses = require('../responses/DefaultFallbackIntentResponses')

module.exports = {
    'Default Fallback Intent': () => {
        // Declarando estruturas a serem retornadas ao Dialogflow.
        const texts = []

        // Inserindo as respostas nas estruturas.
        texts.push( responses['Default Fallback Intent Text'] )

        // Retornando a resposta.
        return responseBuilder(texts)
    }
}