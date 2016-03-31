var app = angular.module('myApp', ['angularMoment']);

app.controller('PostController', function($scope) {
  $scope.view = {};
  $scope.view.test = 'Test';
  console.log($scope.view);
});

app.controller('mainController', function() {
  var vm = this;
  vm.time = new Date();
});
