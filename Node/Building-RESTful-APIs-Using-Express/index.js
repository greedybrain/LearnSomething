//! IMPORTS
const express = require('express');
const app = express();

app.use(express.json()) //! adding middleware

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

app.get('/', (req, res) => res.send("Hello World"))
app.get('/api/courses', (req, res) => res.send([1, 2, 3]))
app.get('/api/courses/:id', (req, res) => {
        const course = courses.find(c => c.id == req.params.id)
        return (
                !course 
                ? res.status(404).send("The course with the given id was not found") 
                : res.send(course)
        )
})
app.post('/api/courses', (req, res) => {
        const course = {
                id: courses.length + 1,
                name: req.body.name
        }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))

//! *** SET ENV VARIABLE => [export PORT=5000]