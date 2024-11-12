const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, 
            trim: true,
            unique: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address'],
            required: 'Email is required'},
    completed: {type: Number},
    picture: {type: String},
    created: {
        type: Date,
        default: Date.now
      },
      hashed_password: {
        type: String,
        required: 'Password is required'
      },
      salt: String

});

export default mongoose.model('User', userSchema);
