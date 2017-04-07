import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

import Article from './app/models/article';
import User from './server/models/user';
import { getArticles, getArticle, postArticle, deleteArticle } from './app/routes/article';

const app = express();
const port = process.env.PORT || 8080;

const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
};

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds141088.mlab.com:41088/myblog`, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/client/dist'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const passport = require('passport');

app.use(passport.initialize());

const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);



app.route('/')
    .get(getArticles);


app.route('/articles')
    .post(postArticle);

apiRoutes.route('/articles')
  .post(postArticle)
  .get(getArticles);

apiRoutes.route('/articles/:id')
  .get(getArticle)
  .delete(deleteArticle);


app.route("*").get((req, res) => {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);
