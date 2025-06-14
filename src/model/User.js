import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: string,
        require: true,
        unique: true
    },

    password: {
        trype: string,
        require: true
    },

    name: {
        type: string,
        require: true
    }

}, { timestemp: true });

const User = mongoose.model('User', UserSchema);

export default User;