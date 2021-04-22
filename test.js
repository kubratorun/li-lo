const mongoose = require('mongoose')

const Post = require('./models/Post')


mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//veri oluştur

Post.create({
    title: 'ikinci post',
    content: 'ikinci deneme post'
}, (error, post)=>{
     console.log(error,post)
})