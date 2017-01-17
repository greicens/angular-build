// LyricsShowController.js
console.log("LyricsShowController");
angular.module('lyricsApp')
       .controller('LyricsShowController', LyricsShowController);

LyricsShowController.$inject = ['$http', '$routeParams', '$location', '$sce'];

function LyricsShowController($http, $routeParams, $location,  $sce){
  var vm = this;
  vm.items = ['Portuguese', 'Spanish'];
  vm.portuguese = false;
  vm.spanish = false;
  $http({
    method: 'GET',
    url: '/api/songs/' + $routeParams.id

  }).then(function onSucess(response){
    vm.song = response.data;
  },function onError(err){
    console.log(err, "something is not working :(");
  });

  vm.trustSrc = function(iframeUrl) {
    return $sce.trustAsResourceUrl(iframeUrl);
  }

  vm.status = {
    isopen: false
  };

  vm.itemSelected = function(item){
    console.log(item, "selected");
    if(item === 'Portuguese'){
      vm.portuguese = 'true';
    } else if(item === 'Spanish'){
      vm.spanish = 'true'
    }
    return item;
  };

  vm.toggledDropdown = function(event){
    event.preventDefaut();
    event.stopPropagation();
    vm.status.isopen = !vm.status.isopen;
  }

   vm.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

}
