app.controller("HomeCtrl", ['$scope', '$route', 'PostSrvc', function ($scope, $route, PostSrvc) {

  $scope.posts = {};
  $scope.wait = true;

  // Fonction d'initalisation en fonction de l'URL
  var init = function(){
    PostSrvc.getAll().then(function success(response){
      $scope.posts = response;
      $scope.wait = false;
    });
  };

  init();

}]);
