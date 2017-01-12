var express = require('express'),
    app = express();


app.get('/', function homepage(req, res){
  res.sendFile('index.html', {root: __dirname});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
