app.controller("PostCtrl", ["$scope", "$route", "$routeParams", "$location", "PostSrvc", function ($scope, $route, $routeParams, $location, PostSrvc) {

  $scope.posts = {};
  $scope.post = {};
  $scope.wait = true;

  // Fonction d'initalisation en fonction de l'URL
  var init = function(){
    if($location.url().match("/posts/[0-9]+"))
      $scope.getById($routeParams.id);
  }


  // Récupération d'un article
  $scope.getById = function(id){
    PostSrvc.getById(id).then(function success(response){
      $scope.post = response;
      $scope.wait = false;
    })
  }

  init();

}]);
