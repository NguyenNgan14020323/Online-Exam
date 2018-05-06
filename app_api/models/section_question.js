import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const sectionQuestionSchema = new Schema({
    mark: Number,
    question_id: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
    },
    section_id: {
        type: Schema.Types.ObjectId,
        ref: 'Section',
    },
});
const SectionQuestion = mongoose.model('SectionQuestion', sectionQuestionSchema);
