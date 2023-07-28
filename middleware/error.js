import ErrorResponse from '../utils/errorResponse.js';

const errorHandler = (err, req, res, next) => {
  console.log('err', err);
  let error = { ...err };

  error.message = err.message;

  // Log to console for dev
  console.log(err.stack);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error = new ErrorResponse(`Resource not found`, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    error = new ErrorResponse(`Duplicate field value entered`, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message.join(', '), 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    data: null,
    error: error.message || 'Server Error',
  });
};

export default errorHandler;
