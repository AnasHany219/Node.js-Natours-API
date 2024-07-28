const hpp = require('hpp');
const path = require('path');
const xss = require('xss-clean');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');

const AppError = require('./utils/appError');
const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES

/**
 * Serving static files
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Set Security HTTP header
 */
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP
  }),
);

/**
 * Development loging
 */
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

/**
 * Limit Request from same API
 */
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour! ⌛',
});
app.use('/api', limiter);

/**
 * Body Parser, reading data from body into req.body
 */
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

/**
 * Data sanitization against NoSQL query injection
 */
app.use(mongoSanitize());

/**
 * Data sanitization against XSS
 */
app.use(xss());

/**
 * Prevent paramter pollution
 */
app.use(
  hpp({
    whitelist: [
      'price',
      'duration',
      'difficulty',
      'maxGroupSize',
      'ratingsAverage',
      'ratingsQuantity',
    ],
  }),
);

/**
 * Test middleware
 */
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 3) ROUTES
app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
