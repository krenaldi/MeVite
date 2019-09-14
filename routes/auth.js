var authController = require('../controllers/authcontroller');
 
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post('/signup', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
          if (err) { return next(err); }
          if (!user) { return res.redirect('/signup'); }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/guest_page/' + user.username);
          });
        })(req, res, next);
      });
    // app.post('/signup', passport.authenticate('local', {
    //         successRedirect: '/guest_page',
 
    //         failureRedirect: '/signup'
    //     }
 
    // ));
 
}
