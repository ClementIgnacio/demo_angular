app.service("UserSrvc", function ($http) {

  return {

    // Recupère tous les utilisateurs
    getAll: function(){
      return $http({method: 'GET', url: 'http://jsonplaceholder.typicode.com/users'}).then(
        function success(response){
          return response.data;
        },
        function error(response){
          return response.data;
        }
      );
    },

    // Récupère l'utilisateur passé en paramètre
    getById: function(id){
      return $http({method: 'GET', url: 'http://jsonplaceholder.typicode.com/users/'+id}).then(
        function success(response){
          return response.data;
        },
        function error(response){
          return response.data;
        });
    }
  }
});
