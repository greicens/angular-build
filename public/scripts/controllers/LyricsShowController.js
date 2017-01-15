// LyricsShowController.js
console.log("LyricsShowController");
angular.module('lyricsApp')
       .controller('LyricsShowController', LyricsShowController);

LyricsShowController.$inject = ['$http', '$routeParams', '$location'];
function LyricsShowController($http, $routeParams, $location){
  console.log("LyricsShowController function");
  var vm = this;
  $http({
    method: 'GET',
    // url: '/api/songs'
    url: '/api/songs?difficulty=' + $routeParams.difficulty

  }).then(function onSucess(response){
    vm.songs = response.data;
    console.log(response, "response for a song");
  },function onError(err){
    console.log(err, "something is not working :(");
  })
}
