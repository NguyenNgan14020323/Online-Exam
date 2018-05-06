import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const catagorySchema = new Schema({
    name: String,
    description: String,
});

const Catagory = mongoose.model('Catagory', catagorySchema);
