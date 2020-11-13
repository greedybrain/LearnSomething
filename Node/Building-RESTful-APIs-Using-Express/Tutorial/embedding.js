const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: {
    type: [authorSchema]
  }
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

const updateAuthor = async courseId => {
  // const course = await Course.findById(courseId) //! Query first
  const course = await Course.updateOne(
    { _id: courseId },
    {
      $unset: {
        'author': ''
      }
    }
  )
  // course.author.name = "Naya Willis"
  // course.save()
}

const addAuthor = async (courseId, author) => {
  const course = await Course.findById(courseId)
  course.authors.push(author)
  course.save()
}

const deleteAuthor = async (courseId, authorId) => {
  const course = await Course.findById(courseId)
  const author = course.authors.id(authorId)
  author.remove()
  course.save()
}

deleteAuthor("5fa9eb9994b918cf4012719f", "5fa9ec2700f92fcfc984c3aa")

// addAuthor("5fa9eb9994b918cf4012719f", new Author({name: 'Amy'}))

// createCourse('Node Course', [
//   new Author({ name: 'Mosh' }),
//   new Author({ name: 'John' })
// ]);  
// updateAuthor("5fa9e940efe9bbccecbd6acd")

