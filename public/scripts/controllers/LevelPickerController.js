// LevelPickerController.js
console.log("LevelPickerController");
angular.module('lyricsApp')
       .controller('LevelPickerController', LevelPickerController);

LevelPickerController.$inject = ['$http'];

function LevelPickerController($http){
  console.log("LevelPickerController function");
  var vm = this;

  vm.items = ['Portuguese', 'Spanish'];
  vm.beginner = [];
  vm.intermediate = [];
  vm.advanced = [];
  $http({
    method: 'GET',
    url: '/api/songs'
  }).then(function onSucess(response){
    console.log(response.data, "response from LevelPickerController")
    vm.songs = response.data;
    vm.songs.forEach(function(song){
      if(song.difficulty === 'beginner'){
        vm.beginner.push(song);
      }else if(song.difficulty === 'intermediate'){
        vm.intermediate.push(song);
      }else{
        vm.advanced.push(song);
      }
    });
  },function onError(err){
    console.log(err, "something is not working");
  });

  vm.status = {
    isopen: false
  };

  vm.itemSelected = function(item){
    console.log(item, "selected")
    return item;
  };

  vm.toggledDropdown = function(event){
    event.preventDefaut();
    event.stopPropagation();
    vm.status.isopen = !vm.status.isopen;
  }

   vm.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

}
