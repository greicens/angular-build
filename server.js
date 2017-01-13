// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var bodyParser = require('body-parser');

// generate a new express app and call it 'app'
var app = express();
var songs = [
    { artistName: 'Dido',
      album: 'No Angel',
      title: 'Thank You',
      verse1:[
         {
          english: "My tea's gone cold, I wondering why I got out of bed at all.",
          portuguese: "Meu chá esfriou, estou me perguntando o porquê de eu sequer ter saído da cama."
        },
         {
          english: "The morning rain clouds up my window, and I can't see at all.",
          portuguese:"A chuva da manhã embaça a minha janela, e eu não posso ver nada.",
        },
        {
          english: "And even if I could it'd all be grey, but your picture on my wall.",
          portuguese:"E mesmo se eu pudesse seria tudo cinza, menos a sua foto na minha parede.",

        },
        {
          english: "It reminds me that it's not so bad, it's not so bad",
          portuguese:"Ela me lembra que não é tão ruim. Não é tão ruim",

        }
      ]
      }]
// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', function homepage(req, res){
  res.sendFile('views/index.html', {root: __dirname});
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile('/views/templates/' + name + '.html', {root: __dirname});
});

app.get('/api/songs', function(req,res){
  res.json(songs[0]);
});
// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
