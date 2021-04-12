import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const { MONGO_URI } = process.env;

const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB database up and running');
    }).catch(err => {
        console.log(err);
    });
};

export default connectDB;