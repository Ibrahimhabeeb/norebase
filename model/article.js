
const mongoose = require('mongoose');
const articleschema = new mongoose.Schema(
    {
        title:{
            type: String,
            required :[true, 'Title is required'],
            maxlength : [40, "Tilte should not exceed 100 characters"], 
        },
        body:{
            type: String,
            required: true
        },
        likes: {
            type: Number,
            required:true
        }
    }
)