import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const studentSchema = new Schema({
    username: String,
    email: String,
    password: String,
    token: String,
    avatar: String,
    sheet: String,
    mark: Number,
    exam_id: {
        type: Schema.Types.ObjectId,
        ref: 'Exam'
    },
    created_at: Date,
    updated_at: Date,
});
studentSchema.pre('save', (next) => {
    let cur = new Date().toISOString();
    this.updated_at = cur;
    if (!this.created_at) {
        this.created_at = cur;
        next();
    }
});
const Student = mongoose.model('Student', studentSchema);