'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto-js');
var jwt = require('jsonwebtoken');
var secret = require('../config/index').secret;

//create the schema for the user model
var UserSchema = new Schema({
  firstName: {
    type: String,
    required: 'Please enter your first name.'
  },
  lastName: {
    type: String,
    required: 'Please enter your last name.'
  },
  username: {
    type: String,
    unique: true,
    required: 'Please enter your username.'
  },
  email: {
    type: String,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'], //add unique validation for email
    required: 'Please enter your email.'
  },
  hashPassword: {
    type: String,
    required: 'Please enter a password'
  },
  salt: String,
  image: String,
  bio: String
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

//methods for setting user passwords
UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hashPassword = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

//method to validate password
UserSchema.methods.validPassword = function(password){
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
  var today = new Date;
  var exp = new Date(today);
  exp.setDate(today.getDate(), + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = function() {
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    image: this.image,
    bio: this.bio
  }
}

module.exports = mongoose.model('User', UserSchema);
