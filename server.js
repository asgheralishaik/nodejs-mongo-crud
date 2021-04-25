const express = require('express');

const mongoose = require('mongoose');

const { MONGO_URI } = require('./config');

console.log(MONGO_URI);

const postsRoutes = require('./routes/api/posts_controller')
const app = express();
app.use(express.json());

app.get('/', (req,res)=>{

    res.send('Hello Asgher');
})

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

  
app.use('/api/posts', postsRoutes);
const PORT = process.env.port || 5000;

app.listen( PORT, () => console.log(`Server running at port ${PORT}`))