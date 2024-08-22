import { express } from 'express'

let router = express.router()

router.get(
    '/', function (req, res) {
        console.log('Oi!')
        res.status(200).json({ message: "hi!"})
    }
)

export default router