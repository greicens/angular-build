// LevelPickerController.js
console.log("LevelPickerController");
angular.module('lyricsApp')
       .controller('LevelPickerController', LevelPickerController);

LevelPickerController.$inject = ['$http'];

function LevelPickerController($http){
  console.log("LevelPickerController function");
  var vm = this;
  vm.test = "is this working?";
  vm.items = ['song1', 'song2'];

  vm.status = {
    isopen: false
  };

  vm.toggledDropdown = function(event){
    event.preventDefaut();
    event.stopPropagation();
    vm.status.isopen = !vm.status.isopen;
  }

   vm.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

}
