// app.js
console.log("app.js loading");
angular
  .module('lyricsApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/levelPicker',
      controllerAs: 'levelCtrl',
      controller: 'LevelPickerController'
    })
    .when('/lyrics', {
      templateUrl: '/templates/lyrics-show',
      controllerAs: 'lyricsShowCtrl',
      controller: 'LyricsShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
