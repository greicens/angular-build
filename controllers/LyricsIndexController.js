angular.module('lyricsApp')
  .controller('LyrisIndexController', LyricsIndexController);

LyricsIndexController.$inject = ['$http'];

function LyricsIndexController($http){
  var vm = this;
  vm.test = "is this working?"

}
