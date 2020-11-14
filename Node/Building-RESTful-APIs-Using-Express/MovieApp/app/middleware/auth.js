const jwt = require('jsonwebtoken')
const config = require('config')

const auth = (req, res, next) => {
        const token = req.header('x-auth-token')
        if(!token) res.status(401).send("Access denied. No token provided")
        
        try {
                const decodedPayload = jwt.verify(token, config.get('jwtPrivateKey'))
        } catch (error) {
                res.status(400).send("Invalid token")
        }

        res.status(401)
}