import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const questionSchema = new Schema({
    title: String,
    content: String,
    answers: String,
    img: String,
    audio: String,
    catagory_id: {
        type: Schema.Types.ObjectId,
        ref: 'Catagory',
    },
});

const Question = mongoose.model('Question', questionSchema);