class RootController {
    static async GET (req, res) {
        res.status(200).send({
            status: 'On-line'
        })
    }
}

module.exports = RootController