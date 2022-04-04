const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const userRouter = require('./routes/userRouter.js')

app.use(express.json());
app.search(express.urlencoded({extended: true}));
app.use(express.static(DIST_DIR));

const DIST_DIR = path.resolve(__dirname, '../dist');
const HTML_FILE = path.resolve(DIST_DIR, 'index.html'); 



app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});



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