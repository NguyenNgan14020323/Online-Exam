import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const sectionSchema = new Schema({
    name: String,
    description: String,
    time_limit: Number,
    exam_id: {
        type: Schema.Types.ObjectId,
        ref: 'Exam',
    }
});

const Section = mongoose.model('Section', sectionSchema);