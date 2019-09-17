/**
 * image model
 * It is a simple model which includes an image name and the image reference or image data.
 */
const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  bookImage : {
        type: String,
        default : 'none',
        required : true
    },
    bookImageData : {
        type: String,
        require : true
    }
})


const Image = mongoose.model('Image',imageSchema)

module.exports = { Image }