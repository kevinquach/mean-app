
/* GET 'about us' page */

module.exports.about = function(req, res){
  res.render('index', { title: 'About' });
  console.log('LOGGING:'.rainbow, __filename);
};

/* GET 'sign in' page */

module.exports.signin = function(req, res){
  res.render('index', { title: 'Sign In' });
  console.log('LOGGING:'.rainbow, __filename);
};