app.controller("UserCtrl", ["$scope", "$http", "$location", "$route", "$routeParams", "NgMap", "UserSrvc",
function ($scope, $http, $location, $route, $routeParams, NgMap, UserSrvc) {

  $scope.user = {};
  $scope.users = {};
  $scope.wait = true;

  // Fonction d'initalisation en fonction de l'URL
  var init = function(){
    if($location.url() == "/users")
    $scope.getAll();
    if($location.url().match("/users/[0-9]+")){
      $scope.getById($routeParams.id);
      mapInit();
    }
  }

  // Récupère tous les utilisateurs
  $scope.getAll = function(){
    UserSrvc.getAll().then(function success(response){
      $scope.users = response;
      $scope.wait = false;
    })
  };

  // Récupère l'utilisateur passé en paramètre
  $scope.getById = function(id){
    UserSrvc.getById(id).then(function success(response){
      $scope.user = response;
      $scope.wait = false;
    })
  };

  // Initialisation de Google Maps
  var mapInit = function(){
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  }

  init();
}]);
