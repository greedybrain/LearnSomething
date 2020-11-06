const Joi = require('joi')
const express = require('express');
const router = express.Router();

const courses = [
        {
                id: 1, name: "Course 1"
        },
        {
                id: 2, name: "Course 2"
        },
        {
                id: 3, name: "Course 3"
        },
]

router.get('/', (req, res) => res.send(courses))
router.get('/:id', (req, res) => {
        const course = courses.find(c => c.id == req.params.id)
        return (
                !course 
                ? res.status(404).send("The course with the given id was not found") 
                : res.send(course)
        )
})
router.post('/', (req, res) => {
        const { error } = validateCourse(req.body)
        if (error) {
                res.status(400).send(error.message)
                return
        }
        const course = {
                id: courses.length + 1,
                name: req.body.name
        }
        courses.push(course)
        res.send(course)
})
router.put('/:id', (req, res) => {
        const course = courses.find(course => course.id == req.params.id)
        
        if (!course) return res.status(404).send("Course does not exist")
        const { error } = validateCourse(req.body)
        
        if (error) return res.status(400).send(error.message)

        course.name = req.body.name;
        res.send(course)
})
router.delete('/:id', (req, res) => {
        const course = courses.find(course => course.id == req.params.id)
        if (!course) return res.status(404).send("Course does not exist")

        const index = courses.indexOf(course)
        courses.splice(index, 1)
        res.send(course)
})

//! helper functions
const validateCourse = course => {
        const schema = Joi.object({
                name: Joi.string().min(3).required()
        })
        return schema.validate(course)
}

module.exports = router