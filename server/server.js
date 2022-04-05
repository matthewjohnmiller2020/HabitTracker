const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const userRouter = require('./routes/userRouter.js')

app.use(express.json());
app.search(express.urlencoded({extended: true}));

//serve index
// app.use(express.static(path.resolve(__dirname, '../dist')));


app.use('/user', userRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(port, function () {
  console.log('App listening on port: ' + port);
});