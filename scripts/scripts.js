var app = angular.module('myApp', ['angularMoment']);

app.controller('PostController', function($scope, post) {
  $scope.post = post;
});

app.factory('post', function postFactory() {
  var post = {};
  post.posts = [{
    author: 'Mike Dee',
    title: 'A Beautiful Waterfall',
    description: 'It is thought that the underwater waterfall the Denmark Strait cataract is the largest waterfall by all measures with a drop of 11,500 feet or 3,500 m and a flow rate exceeding 175 million cubic feet (5.0 million cubic meters) per second, making it 350 times as voluminous as the extinct Guaíra Falls on the border of Brazil and Paraguay, which was once thought to be the most voluminous waterfall on Earth.',
    image_url: 'http://rs255.pbsrc.com/albums/hh160/loewus9_photos/Waterfalls/1020Waterfall.jpg~c200',
  }];
  post.showSubmit = false;
  post.addPost = function() {
    post.posts.push({
      author: post.author,
      title: post.title,
      description: post.description,
      image_url: post.image_url
    });
    post.author = '';
    post.title = '';
    post.description = '';
    post.image_url = '';
    console.log(post.posts);
    post.showSubmit = false;
  };
  post.get = function() {
    return post.posts;
  };
  return post;
});

app.controller('mainController', function() {
  var vm = this;
  vm.time = new Date();
});
