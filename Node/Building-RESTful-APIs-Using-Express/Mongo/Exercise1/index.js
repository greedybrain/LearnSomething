const dbDebugger = require('debug')('app:db')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        .then(() => dbDebugger('Connected to database'))
        .catch(err => console.error(err))

const courseSchema = new mongoose.Schema({
        _id: String,
        name: String,
        author: String,
        tags: [ String ],
        isPublished: Boolean,
        date: Date,
        price: Number
})

const Course = mongoose.model('Course', courseSchema)

// const getCoursesEx1 = async () => {
//         return await Course
//                 .find({ isPublished: true, tags: 'backend'})
//                 .sort('name')
//                 .select('name author')
// }

// const runEx1 = async () => {
//         const courses = await getCoursesEx1()
//         console.log(courses)
// }

// runEx1()

// const getCoursesEx2 = async () => {
//         return await Course
//                 .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] } })
//                 // .or([{ tags: 'frontend' }, {tags: 'backend'}]) //! another way of using $in
//                 .sort('-price')
//                 .select('name author price')
// }

// const runEx2 = async () => {
//         const courses = await getCoursesEx2()
//         console.log(courses)
// }

// runEx2()

// const getCoursesEx3 = async () => {
//         return await Course
//                 .find({ isPublished: true })
//                 .or([
//                         { price: { $gte: 15 } },
//                         { name: /.*by.*/i }
//                 ])
// }

// const runEx3 = async () => {
//         const courses = await getCoursesEx3()
//         console.log(courses)
// }

// runEx3()
//! ===================================

// Approach: Query first
// findById()
// Modify it properties
// save()
// const updateCourse = async id => {
//         const course = await Course.findById(id)
//         if (!course) return 
//         course.set({
//                 isPublished: true,
//                 author: "Naya Willis"
//         })
//         await course.save()
// }

// updateCourse("5a68fe2142ae6a6482c4c9cb")
//! ===================================

//Approach: Update first
// Update directly
// Optionally: get the update document
// const updateCourse = async id => {
//         const result = await Course.updateOne(
//                 { _id: id },
//                 {
//                         $set: {
//                                 author: "Willis",
//                                 isPublished: true
//                         }
//                 }
//         )
//         console.log(result)
// }

// const updateCourse = async id => {
//         const course = await Course.findByIdAndUpdate(id, {
//                 $set: {
//                         isPublished: true,
//                         author: "Naya"
//                 }
//         }, { new: true })
        
//         console.log(course)
// }

// updateCourse("5a68fe2142ae6a6482c4c9cb")
//! ===================================

// const removeCourse = async id => {
//         // const course = await Course.deleteOne({ _id: id })
//         const course = await Course.findByIdAndRemove(id)
//         console.log(course)
// }

// removeCourse("5a6900fff467be65019a9001")
//! ===================================
