import mongoose from 'mongoose'


const instance = mongoose.Schema({
    caption: String,
    user: String,
    image: String,
    comment: [],
 
});

export default mongoose.model('posts', instance);

