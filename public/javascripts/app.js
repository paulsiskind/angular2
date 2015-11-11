
var app = angular.module("yourAppName", ['ngRoute'])
  app.controller('HomeController', function($scope){
      $scope.message = "Welcome!"

  $scope.nav = function(select){
    if(select === 'bio'){
      $scope.navBar = 'Bio';
    }
    if(select === 'projects'){
      $scope.navBar = 'Projects';
    }
    if(select === 'resume'){
      $scope.navBar = "Resume";
    }
    if(select === 'home'){
      $scope.navBar = "Home";
    }

  }
   })
  app.controller('DogsController', function($scope){
    $scope.message = "Woof Woof!"
   })
  app.controller('resumeController', function($scope){

  })
  app.controller('bioController', function($scope, $http){
    $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
     })
  })
  app.controller('ChatController', function($scope, $http){
    $http.get('https://still-tundra-8387.herokuapp.com/').then(function(data){
    $scope.chatData = data.data;
     })
    $scope.submit = function(){
      var message = {
        name: $scope.chat.name,
     content: $scope.chat.comment};
      $scope.chat = {};
    
    $http.post('https://still-tundra-8387.herokuapp.com/', {message: message}).then(function(data){
   console.log(data.data)
     },function(){})
  }

  })
  app.controller('projectController', function($scope, $http){
    $http.get('../itunes.json').then(function(data){
    $scope.appleData = data.data;
  })

  })
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'resumeController'
      })
      .when('/chat', {
        templateUrl: 'partials/chat.html',
        controller: 'ChatController'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'bioController'
      })
      .when('/projects',{
        templateUrl: 'partials/projects.html',
        controller: 'projectController'
      })
      .otherwise( {redirectTo: '/'
      })
      $locationProvider.html5Mode(true)

});
