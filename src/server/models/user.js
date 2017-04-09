var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;
var SALT_WORK_FACTOR;

if (process.env.NODE_ENV === 'test') {
    SALT_WORK_FACTOR = 1;
} else {
    SALT_WORK_FACTOR = 10;
}

var User = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    products: [
        {
            productID: String,
            name: String,
            Type: String,
            time: { type: Date, default: Date.now }
        }
    ],
    gpa: {
        type: Number,
        default: 4.0
    },
    numSemesters: {
        type: Number,
        default: 1
    },
    maxSemesters: {
        type: Number,
        default: 8
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    userType: {
        type: String,
        default: 'User'
    },
    accountId: {
        type: String,
        default: '58e91ac4a73e4942cdafd320'
    }
});

User.methods.generateHash = function(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                return next(err);
            }
            return callback(err, hash);
        });
    });
};

User.methods.comparePassword = function(password, done) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) {
            return done(err);
        }
        return done(null, isMatch);
    });
};


module.exports = mongoose.model('users', User);
