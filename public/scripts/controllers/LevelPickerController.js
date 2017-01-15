// LevelPickerController.js
console.log("LevelPickerController");
angular.module('lyricsApp')
       .controller('LevelPickerController', LevelPickerController);

LevelPickerController.$inject = ['$http'];

function LevelPickerController($http){
  console.log("LevelPickerController function");
  var vm = this;
  vm.test = "is this working?";
  vm.items = ['Portuguese', 'Spanish'];
  vm.status = {
    isopen: false
  };

  vm.itemSelected = function(item){
    console.log(item, "selected")
    return item;
  }

  vm.toggledDropdown = function(event){
    event.preventDefaut();
    event.stopPropagation();
    vm.status.isopen = !vm.status.isopen;
  }

   vm.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

}
