var app = angular.module('myApp', ['angularMoment']);

app.controller('PostController', function($scope) {
  $scope.view = {};
  $scope.posts = [];
  $scope.addPost = function() {
    $scope.posts.push({
      author: $scope.author,
      title: $scope.title,
      description: $scope.description,
      image_url: $scope.image_url
    });
    $scope.author = '';
    $scope.title = '';
    $scope.description = '';
    $scope.image_url = '';
    console.log($scope.posts);
  };
});

app.controller('mainController', function() {
  var vm = this;
  vm.time = new Date();
});
