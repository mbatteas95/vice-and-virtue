
//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
const mongoose = require('mongoose');
const User = require('./server/model/user');
const Post = require('./server/model/post');
const url = "mongodb+srv://blogAdmin:blogAdmin@blogcluster-jupcg.mongodb.net/test?retryWrites=true&w=majority"
const uri = 'mongodb://localhost/blogDb';
mongoose.Promise = require('bluebird');

var options = {
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/vice-and-virtue'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/vice-and-virtue/index.html'));
});

app.post('/api/post/createPost', (req, res) => {
  mongoose.connect(url,  options , function(err){
    if(err) throw err;
    const post = new Post({
      title: req.body.title,
      description: req.body.description
    })
    post.save((err, doc) => {
      if(err) throw err;
      return res.status(200).json({
        status: 'success',
        data: doc
      })
    })
  });
})

app.post('/api/post/updatePost', (req, res) => {
  mongoose.connect(url,  options, function(err){
    if(err) throw err;
    Post.update(
      {_id: req.body.id },
      { title : req.body.title, description: req.body.description },
      (err, doc) => {
        if(err) throw err;
        return res.status(200).json({
          status: 'success',
          data: doc
        })
      })
  });
})

app.post('/api/post/getAllPost', (req, res) => {
  mongoose.connect(url,  options , function(err){
    if(err) throw err;
    Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
      if(err) throw err;
      return res.status(200).json({
        status: 'success',
        data: doc
      })
    })
  });
})

Post.find({},[],{sort: {id: -1}},(err, doc) => {
  if(err) throw err;
  console.log('result is ',doc);
})

app.post('/api/user/login', (req, res) => {
  mongoose.connect(url, options, function(err) {
    if(err) throw err;
    User.find({
      username : req.body.username, password : req.body.password
    }, function(err, user){
      if(err) throw err;
      if(user.length === 1){
        return res.status(200).json({
          status: 'success',
          data: user
        })
      } else {
        return res.status(200).json({
          status: 'fail',
          message: 'Login Failed'
        })
      }
    })
  });
})

app.post('/api/post/deletePost', (req, res) => {
  mongoose.connect(url,  options, function(err){
    if(err) throw err;
    Post.findByIdAndRemove(req.body.id,
      (err, doc) => {
        if(err) throw err;
        return res.status(200).json({
          status: 'success',
          data: doc
        })
      })
  });
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000, () => console.log('blog server!'));
