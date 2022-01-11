const { responseBuilder } = require('../util')
const responses = require('../responses/QuickRepliesIntentResponse')

module.exports = {
    'Quick Replies Intent': () => {
        // Declarando estruturas a serem retornadas ao Dialogflow.
        const texts = []
        const quickReplies = {}

        // Inserindo as respostas nas estruturas.
        texts.push( responses['Quick Replies Intent Text'] )

        quickReplies.title = ( responses['Quick Replies Intent Quick Replies'].title )
        quickReplies.quickReplies = ( responses['Quick Replies Intent Quick Replies'].quickReplies )

        // Retornando a resposta.
        return responseBuilder(texts, {}, quickReplies)
    }
}