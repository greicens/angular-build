// LyricsIndexController.js
console.log("lyrics controller");
angular.module('lyricsApp')
       .controller('LyricsIndexController', LyricsIndexController);

LyricsIndexController.$inject = ['$http'];

function LyricsIndexController($http){
  console.log("LyricsIndexController function");
  var vm = this;
  vm.test = "is this working?";

}
