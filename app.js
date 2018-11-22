var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter     = require('./routes/index');
var interesseRouter = require('./routes/interesses');
var formacaoRouter = require('./routes/formacao');
var atividadeRouter = require('./routes/atividade');
var habilidadeRouter = require('./routes/habilidade');
var idiomaRouter = require('./routes/idioma');

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
app.use('/interesse', interesseRouter);
app.use('/formacao', formacaoRouter);
app.use('/atividade', atividadeRouter);
app.use('/habilidade', habilidadeRouter);
app.use('/idioma', idiomaRouter);

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

mongoose.connect('mongodb://localhost:27017/API', { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERRO CONEXÃO BD'));

module.exports = app;
