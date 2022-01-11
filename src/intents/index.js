module.exports = {
      ...require('./DefaultWelcomeIntent')
    , ...require('./DefaultFallbackIntent')
    , ...require('./CardIntent')
    , ...require('./QuickRepliesIntent')
}