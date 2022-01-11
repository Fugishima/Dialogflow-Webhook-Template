const responseBuilder = (texts, card, quickReplies) => {
    const response = {
        fulfillmentMessages: []
    }

    textInserter(response, texts)
    cardInserter(response, card)
    quickRepliesInserter(response, quickReplies)

    return response
}

const textInserter = (response, texts) => {
    for (let x = 0; x < texts.length; x++) {
        response.fulfillmentMessages.push({
            text: {
                text: [ texts[x] ]
            }
        })
    }
}

const cardInserter = (response, card) => {
    response.fulfillmentMessages.push({
        card: card
    })
}

const quickRepliesInserter = (response, quickReplies) => {
    response.fulfillmentMessages.push({
        quickReplies: quickReplies
    })
}

module.exports = {
    responseBuilder
}