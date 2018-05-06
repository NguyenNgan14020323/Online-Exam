import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    avatar: String,
    token: String,
    created_at : Date,
	updated_at : Date,
});

userSchema.pre('save', (next) => {
    let cur = new Date().toISOString();
    this.updated_at = cur;
    if (!this.created_at) {
        this.created_at = cur;
        next();
    }
});

const User = mongoose.model('User', userSchema);
