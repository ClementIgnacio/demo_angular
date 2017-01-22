app.service("PostSrvc",["$http", "UserSrvc", function ($http, UserSrvc) {

  return {

    // Récupère les 15 derniers articles + l'auteur
    getAll: function(){
      return $http({method: 'GET', url: 'http://jsonplaceholder.typicode.com/posts/?_limit=15'}).then(
        function success(response){
          datas = response.data.map(function(e){
            var elem = e;
            UserSrvc.getById(e.userId).then(function success(response){
              elem.name = response.name;
            });
            return elem;
          });
          return datas;
        },
        function error(response){
          return response.data;
        }
      );
    },

    // Récupère l'article en paramètre et son auteur
    getById: function(id){
      return $http({method: 'GET', url: 'http://jsonplaceholder.typicode.com/posts/'+id}).then(
        function success(response){
          elem = response.data;
            UserSrvc.getById(elem.userId).then(function success(response){
              elem.name = response.name;
            });
          return elem;
        },
        function error(response){
          return response.data;
        });
      }
    }
  }]);
