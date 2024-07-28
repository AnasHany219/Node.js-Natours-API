const factory = require('./handlerFactory');
const Review = require('../models/reviewModel');

exports.setTourUserId = (req, res, next) => {
  // Allow nested routes: set the tour and user IDs if they are not already in the request body
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getReview = factory.getOne(Review);
exports.getAllReviews = factory.getAll(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
