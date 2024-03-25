const mongoose = require('mongoose')
const Category = require('./Category')

const noteSchema = new mongoose.Schema({

    title :{

        type:String,
        required:true

    },

    content :{

        type:String,
        required:true

    },

    category :{

        type:mongoose.Schema.Types.ObjectId,
        ref:Category,
        required:true

    }



})

module.exports = mongoose.model('Note',noteSchema)