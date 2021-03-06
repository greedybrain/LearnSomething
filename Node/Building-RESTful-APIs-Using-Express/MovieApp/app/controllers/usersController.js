//! Packages
const _ = require('lodash')
const bcrypt = require('bcrypt')

//! Custom imports
const { User, validateUser } = require('../models/user')

//! Controller actions (Helper functions)
const getCurrentUser = async (req, res)=> {
        const user = await User.findById(req.user._id) .select('-password')
        if (!user) return res.status(404).send("Not logged in")

        res.send(user)
}

const createUser = async (req, res) => {
        const { error } = validateUser(req.body)
        if (error) return res.status(400).send(error.message)

        let user = await User.findOne({ email: req.body.email })
        if(user) return res.status(400).send("User is already registered")

        user = new User(_.pick(req.body, ['name', 'email', 'password']))
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)

        try {
                user = await user.save()
                const token = user.generateAuthToken()
                res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']))
        } catch (exc) {
                for (field in exc.errors) {
                        console.error(exc.errors[field].message)
                }
        }
}

//! Exports
module.exports = {
        getCurrentUser,
        createUser,
}