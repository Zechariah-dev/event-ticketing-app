import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config();

const  { Schema, model } = mongoose;
const { SALT_WORK_FACTOR } = process.env;


const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    fullname: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {type: Boolean, default: false},
    emailVerificationToken: String,
    emailVerificationTokenExpiresin: Date,
    passwordResetToken: String,
    passwordResetTokenExpiresin: Date
});

// userSchema.pre('save', function(next) {
//     let user = this;

//     if(!user.isModified('password')) return next();

//     try{
//         const salt = bcrypt.genSalt(SALT_WORK_FACTOR);
//         user.password = bcrypt.hash();
//     } catch(err) {

//     }

// });



const userModel = model('user', userSchema);

export default userModel;