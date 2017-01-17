// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var bodyParser = require('body-parser');

// generate a new express app and call it 'app'
var app = express();
var songs = [
  { id: '1',
    artistName: 'Dido',
    album: 'No Angel',
    title: 'Thank You',
    difficulty: 'beginner',
    albumCoverUrl: 'images/dido.png',
    iframeUrl: 'https://www.youtube.com/embed/r4KB_XckOGU',
    lines:
      [
        {
          english: "My tea's gone cold, I wondering why I got out of bed at all.",
          portuguese: "Meu chá esfriou, estou me perguntando o porquê de eu sequer ter saído da cama.",
          spanish:"Mi té se ha enfriado y me pregunto por qué me salí de la cama hoy"
        },
        {
          english: "The morning rain clouds up my window, and I can't see at all.",
          portuguese:"A chuva da manhã embaça a minha janela, e eu não posso ver nada.",
          spanish:"La lluvia de la mañana nubla mi ventana y no puedo ver nada"
        },
        {
          english: "And even if I could it'd all be grey, but your picture on my wall.",
          portuguese:"E mesmo se eu pudesse seria tudo cinza, menos a sua foto na minha parede.",
          spanish:"Y aun si pudiera, todo se vería gris pero tú fotografía en mi pared"
        },
        {
          english: "It reminds me that it's not so bad, it's not so bad",
          portuguese:"Ela me lembra que não é tão ruim. Não é tão ruim",
          spanish:"Me recuerda que no es tan malo no es tan malo"

        }
      ]
  },
  { id: '2',
    artistName: 'Adele',
    album: 'Hello',
    title: 'Hello',
    difficulty: 'intermediate',
    albumCoverUrl: 'images/hello.png',
    iframeUrl: 'https://www.youtube.com/embed/9h0Arg_-380',
    lines:[
       {
         english:"Hello, it's me . I was wondering if after all these years you'd like to meet to go over everything",
         portuguese:"Olá Sou eu eu estava imaginando se após todos esses anos Você gostaria que nos encontrássemos para superarmos tudo",
         spanish:"Hola soy yo Me preguntaba si después de todos estos años te gustaría que quedásemos para analizarlo todo "
       },
       {
         english:"They say that time's supposed to heal ya but I ain't done much healing",
         portuguese:"Dizem que o tempo supostamente lhe cura mas eu ainda não fui completamente curada",
         spanish:"Dicen que el tiempo se supone que cura pero a mí no me ha curado demasiado. "
       },
      {
        english:"Hello, can you hear me. I'm in California dreaming about who we used to be",
        portuguese:"Olá Você pode me ouvir?Estou na Califórnia sonhando com quem costumávamos ser",
        spanish:"¿Hola puedes oírme? Estoy en California soñando con lo que solíamos ser cuando éramos más jóvenes y libres "
      },
      {
        english:"When we were younger and free I've forgotten how it felt before the world fell at our feet",
        portuguese:"Quando éramos mais jovens E livres Eu esqueci como era antes do mundo cair aos nossos pés",
        spanish:"He olvidado cómo me sentía ante el mundo antes de que cayera a nuestros pies "
      }
    ]
  },
  { id: '3',
    artistName: 'Mark Ronson',
    album: 'Uptown Special',
    title: 'Uptown Funk',
    difficulty: 'advanced',
    albumCoverUrl: 'images/uptown-funk.png',
    iframeUrl: 'https://www.youtube.com/embed/OPf0YbXqDm0',
    lines:[
      {
       english:"This hit, that ice cold Michelle Pfeiffer, that white gold",
       portuguese: "",
       spanish:" "
      },
      {
       english:"This one for them hood girls. Them good girls straight masterpieces. Stylin', whilen, livin' it up in the city",
       portuguese: "",
       spanish:" "
     },
     {
       english: "Got Chucks on with Saint Laurent. Got kiss myself, I'm so pretty",
       portuguese:"",
       spanish:""
     },
      {
        english:"I'm too hot (hot damn). Called a police and a fireman",
        portuguese: "",
        spanish:" "

      },
      {
        english:"I'm too hot (hot damn). Make a dragon wanna retire man",
        portuguese: "",
        spanish:" "

      },
      {
        english:"I'm too hot (hot damn). Say my name you know who I am",
        portuguese: "",
        spanish:" "

      },
      {
        english:"I'm too hot (hot damn). Am I bad 'bout that money, break it down",
        portuguese: "",
        spanish:" "

      }
    ]
  }
  ]
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
  res.json(songs)
});

app.get('/api/songs?', function(req,res){
  var songsToReturn = [];
  var difficulty = req.query.difficulty;
  songs.forEach(function(song){
    if(song.difficulty === req.query.difficulty){
      songsToReturn.push(song);
    }
  })
  res.json(songsToReturn);
});

app.get('/api/songs/:id', function(req, res){
  songs.forEach(function(song){
    if(song.id === req.params.id){
      res.json(song);
    }
  })
})
// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
