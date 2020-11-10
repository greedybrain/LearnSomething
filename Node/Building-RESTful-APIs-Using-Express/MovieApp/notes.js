// Using References (Normalization)
let author = {
        name: 'Willis'
}

let course = {
        author: 'willis ID'
}

// Using Embedded Documents (Denormalization)
let course = {
        author: {
                name: "Willis"
        }
}