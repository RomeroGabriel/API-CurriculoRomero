var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var cors = require('cors');
var firebase = require('firebase');

var indexRouter     = require('./routes/index');
var interesseRouter = require('./routes/interesses');
var formacaoRouter = require('./routes/formacao');
var atividadeRouter = require('./routes/atividade');
var habilidadeRouter = require('./routes/habilidade');
var idiomaRouter = require('./routes/idioma');
var biografiaRouter = require('./routes/biografia');
var contatoProfissaoRouter = require('./routes/contatoProfissao');
var RedesRouter = require('./routes/redeSocial');
var PortRouter = require('./routes/port');
var app = express();
var veri = false;

var config = {
  apiKey: "AIzaSyA6z7vlyidaKARufrOAzl30vn5rTWOvjhg",
  authDomain: "curriculo-4c0d1.firebaseapp.com",
  databaseURL: "https://curriculo-4c0d1.firebaseio.com",
  projectId: "curriculo-4c0d1",
  storageBucket: "",
  messagingSenderId: "570122890097"
};
firebase.initializeApp(config);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/interesse', interesseRouter);
app.use('/formacao', formacaoRouter);
app.use('/atividade', atividadeRouter);
app.use('/habilidade', habilidadeRouter);
app.use('/idioma', idiomaRouter);
app.use('/biografia', biografiaRouter);
app.use('/contatoProfissao', contatoProfissaoRouter);
app.use('/rede', RedesRouter);
app.use('/port', PortRouter);


app.post('/login', function(req, res, next){
  var email = req.body.login;
  var password = req.body.senha;
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
    veri = true;
    res.render('index', { veri : true });
  }).catch(function(error) {
    veri = false;
    res.render('index', { veri: false });
  });
});

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
});

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
