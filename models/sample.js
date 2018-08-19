var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var UserSchema = new Schema({
	user_name: {type: String, required: true, max: 100},
	email: {type: String, required: true, unique:true, max: 50},
	password: {type: String, required: true, max: 8},
	contact: {type: Number, required: true},
    createdAt: {type:Date, default: Date.now,required:true}
});




module.exports = mongoose.model('Sample', UserSchema);
