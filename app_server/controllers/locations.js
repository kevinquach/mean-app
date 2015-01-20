
/* GET 'home' page */

module.exports.homelist = function(req, res){
  res.render('locations-list', { title: 'Home' });
  console.log('LOGGING:'.rainbow, __filename);
  console.trace();
};

/* GET 'Location info' page */

module.exports.locationInfo = function(req, res){
  res.render('location-info', { title: 'Location Info' });
  console.log('LOGGING:'.rainbow, __filename);
};

/* GET 'Add review' page */

module.exports.addReview = function(req, res) {
  res.render('location-review-form', { title: 'Add Review' });
  console.log('LOGGING:'.rainbow, __filename);
};