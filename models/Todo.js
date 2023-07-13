const { Schema, model} = require('mongoose')

const schema = new Schema ({
    description: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now,
      },
})

module.exports = model('Todo', schema)