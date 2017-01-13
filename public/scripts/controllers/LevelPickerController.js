// LevelPickerController.js
console.log("LevelPickerController");
angular.module('lyricsApp')
       .controller('LevelPickerController', LevelPickerController);

LevelPickerController.$inject = ['$http'];

function LevelPickerController($http){
  console.log("LevelPickerController function");
  var vm = this;
  vm.test = "is this working?";
}
