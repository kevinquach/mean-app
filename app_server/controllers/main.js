
/* GET 'about us' page */

module.exports.about = function(req, res){
  res.render('index', { title: 'About' });
  console.log('LOGGING:'.rainbow, __filename);
};

/* GET 'sign in' page */

module.exports.signin = function(req, res){
  res.render('signin-index', { title: 'Sign in to Loc8r' });
  console.log('LOGGING:'.rainbow, __filename);
};

/* GET 'about us' page */

module.exports.about = function(req, res){
  res.render('generic-text', { title: 'About' });
};