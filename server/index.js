const express = require('express');
const  app = express();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieSession({ name: 'session', keys: ['key1', 'key2'], maxAge:  60 * 1440 }));

app.get('/', (req, res, next) => {

});

app

app.post('/:player/', (req, res, next) => {

});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
