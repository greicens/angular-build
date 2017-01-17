// LevelPickerController.js
console.log("LevelPickerController");
angular.module('lyricsApp')
       .controller('LevelPickerController', LevelPickerController);

LevelPickerController.$inject = ['$http'];

function LevelPickerController($http){
  var vm = this;
  vm.beginner = [];
  vm.intermediate = [];
  vm.advanced = [];

  $http({
    method: 'GET',
    url: '/api/songs'
  }).then(function onSucess(response){
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
}
