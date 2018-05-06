import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const examSchema = new Schema({
    name: String,
    description: String,
    open_time: Date,
    close_time: Date,
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    created_at: Date,
    updated_at: Date,
});

examSchema.pre('save', (next) => {
    let cur = new Date().toISOString();
    this.updated_at = cur;
    if (!this.created_at) {
        this.created_at = cur;
        next();
    }
});
const Exam = mongoose.model('Exam', examSchema);