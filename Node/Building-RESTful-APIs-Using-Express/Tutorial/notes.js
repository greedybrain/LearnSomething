// Using References (Normalization)
let author = {
        name: 'Willis'
}

let course = {
        author: 'willis ID'
}

// Using Embedded Documents (Denormalization) => Better performance
let course = {
        author: {
                name: "Willis"
        }
}

// Hybrid
let author = {
        name: 'Willis',
        // 50 other properties
}

let course = {
        author: {
                id: 'ref to author document',
                name: 'Willis'
        }
}