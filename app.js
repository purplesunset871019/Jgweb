var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var pro2_1Router = require('./routes/pro2-1');
var pro2_2Router = require('./routes/pro2-2');
var pro2_2_1Router = require('./routes/pro2-2-1');
var pro2_2_2Router = require('./routes/pro2-2-2');
var pro4_1Router = require('./routes/pro4-1');
var pro4_2Router = require('./routes/pro4-2');
var caseRouter = require('./routes/case');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/pro2-1', pro2_1Router);
app.use('/pro2-2', pro2_2Router);
app.use('/pro2-2-1', pro2_2_1Router);
app.use('/pro2-2-2', pro2_2_2Router);
app.use('/pro4-1', pro4_1Router);
app.use('/pro4-2', pro4_2Router);
app.use('/case', caseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
