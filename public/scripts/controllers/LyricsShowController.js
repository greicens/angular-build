// LyricsShowController.js
console.log("LyricsShowController");
angular.module('lyricsApp')
       .controller('LyricsShowController', LyricsShowController);

LyricsShowController.$inject = ['$http', '$routeParams', '$location'];
function LyricsShowController($http, $routeParams, $location){
  console.log("LyricsShowController function");
  var vm = this;
  var englishLyrics = "My tea's gone cold, I wondering why I got out of bed at all. The morning rain clouds up my window, and I can't see at all. And even if I could it'd all be grey, but your picture on my wall. It reminds me that it's not so bad, it's not so bad"
  var portugueseLyric = "Meu chá esfriou, estou me perguntando o porquê de eu sequer ter saído da cama. A chuva da manhã embaça a minha janela, e eu não posso ver nada. E mesmo se eu pudesse seria tudo cinza, menos a sua foto na minha parede. Ela me lembra que não é tão ruim. Não é tão ruim"

  vm.test = "is this working?";
  $http({
    method: 'GET',
    url: '/api/songs'
  }).then(function onSucess(response){
    vm.song = response.data;
    console.log(response, "response for a song");
  },function onError(err){
    console.log(err, "something is not working :(");
  })
}
