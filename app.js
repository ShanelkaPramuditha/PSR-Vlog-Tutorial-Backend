const controller = require('./controller');

app.use(
  express.urlencoded({
    extended: true
  })
);

app.get('/users', (req, res) => {
  controller.getUsers((req, res, next) => {
    res.send();
  });
});

app.post('/createUser', (req, res) => {
  controller.addUser(req.body, (callback) => {
    res.send();
  });
});

app.post('/updateUser', (req, res) => {
  controller.addUser(req.body, (callback) => {
    res.send(callback);
  });
});

app.post('/deleteUser', (req, res) => {
  controller.addUser(req.body, (callback) => {
    res.send(callback);
  });
});

module.exports = app;
