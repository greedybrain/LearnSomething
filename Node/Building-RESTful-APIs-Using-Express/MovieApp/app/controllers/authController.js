//! Custom
const { User } = require('../models/user')

//! Packages
const config = require('config')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const Joi = require('joi')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
        // Check for errors client side
        const { error } = validate(req.body)
        if (error) return res.status(400).send(error.message)

        // Check if user exists and is valid
        let user = await User.findOne({ email: req.body.email })
        if(!user) return res.status(400).send("Invalid email or password")

        /*
        Use lodash pick method to pick the props we want to use from req.body 
        Grab the name email password, then check to see if the password matches
        the hashed version using bcrypt
        */
        const isValidPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isValidPassword) return res.status(400).send("Invalid email or password")

        const token = jwt.sign(_.pick(user, ['name', 'email']), config.get('jwtPrivateKey'));
        res.send(token)
}

//! Validations
const validate = req => {
        const schema = Joi.object({
                email: Joi.string().min(5).max(100).required().email(),
                password: Joi.string().min(8).max(255).required(),
        })
        return schema.validate(req)
}

module.exports = {
        createUser
}