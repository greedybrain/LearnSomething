const _ = require('lodash')
//! Controller actions (Helper functions)
const { User, validateUser } = require('../models/user')

const getUsers = async res => {
        const users = await User.find().sort('name')

        res.send(users)
}

const getUser = async (req, res)=> {
        const user = await User.findById(req.params.id) 
        if (!user) return res.status(404).send("User does not exist")

        res.send(user)
}

const createUser = async (req, res) => {
        const { error } = validateUser(req.body)
        if (error) return res.status(400).send(error.message)

        let user = User.findOne({ email: req.body.email })
        if(!user) return res.status(400).send("User is already registered")

        user = new User(_.pick(req.body, ['name', 'email', 'password']))
        try {
                user = await user.save()
                user = _.pick(user, ['_id', 'name', 'email'])
                res.send(user)
        } catch (exc) {
                for (field in exc.errors) {
                        console.error(exc.errors[field].message)
                }
        }
}

//! Exports
module.exports = {
        getUser,
        getUsers,
        createUser,
}