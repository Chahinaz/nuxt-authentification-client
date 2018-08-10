var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/3333");
var user = mongoose.model('User');

// passport.use(new LocalStrategy({
//     usernameField: 'user[username]',
//     passwordField: 'user[hashPassword]'
// }, function (username, hashPassword, done){
//     user.findOne({username: username}).then(function(user){
//         if(!user || !user.validPassword(hashPassword)){
//             return done(null, false, {error: {'Username or password': 'is invalid.'}})
//         }
//         return done(null, user);
//     }).catch(done)
// }));