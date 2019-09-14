var passport = require("passport");

module.exports = function (app) {
// Auth route
app.post('/auth', passport.authenticate('local'), (req, res) => {

});

// auth login
app.get('/auth/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
app.get('/auth/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback for google callback
app.get('/auth/google/redirect', passport.authenticate('google', { failureRedirect: '/login' }),
(req, res) => {
    res.redirect('/');
});

// auth with facebook
app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['profile']
}));

// callback for facebook callback
app.get('/auth/facebook/redirect', passport.authenticate('facebook', { failureRedirect: '/login' }),
(req, res) => {
    res.redirect('/');
});
}