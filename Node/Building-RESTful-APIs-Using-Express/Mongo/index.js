const dbDebugger = require('debug')('app:db')
const config = require('config')
const mongoose = require('mongoose');
const express = require('express');
const app = express()

//! connect to database 
const connectionString = config.get('connection_string')
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(dbDebugger('Connected to the database...'))
        .catch(err => console.error("Could not connect to db"))

const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: { type: Date, default: Date.now },
        isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

const createCourse = async () => {
        const course = new Course({
                name: "Angular JS Course",
                author: "Naya Willis",
                tags: ['angular', 'frontend'],
                isPublished: true
        })
        const result = await course.save()
        console.log(result)
}

// $eq => equal
// $ne => not equal
// $gt => greater than
// $gte =>  greater than or equal to
// $lt => less than
// $lte => less than or equal to
// $in => in
// $nin => not in
 
//! Logical Operators
// or
// and

const getCourses = async () => {
        const pageNumber = 2
        const pageSize = 10


        const courses = await Course
                // .find({ author: 'Naya Willis', isPublished: true }) //! Find object based on properties specified
                // .find({ price: { $gte: 10, $lte: 20 } })
                // .find({ price: { $in: [10, 15, 20] } })
                .find({ author: /^Naya/ }) //! regex to specify what author's name should start with
                .find({ author: /Naya$/i })
                // .or([{ author: 'Mosh' }, { isPublished: true }]) 
                // .and([{ }, {}])
                .skip((pageNumber - 1) * pageSize) //! goes hand in hand with limit to create pagination
                .limit(pageSize) //! Limit the number of results returned
                .sort({ name: 1 }) //! Sort in ASC order, or -1 for DESC
                // .select({ name: 1, tags: 1 }) //! Select specific properties
                .count(); //! Returns count of documents that meet the above ^ criteria
        console.log(courses)
}

getCourses()
