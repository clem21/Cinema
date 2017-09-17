var demoApp = angular.module('demoApp', [
  'movieList'
]);

var movieList = angular.module('movieList',[]);

movieList.controller('movieCtrl', ['$scope',
  function ($scope) {

    var movies = $scope.movies = [];

    $scope.addMovie = function () {
      var newMovie = $scope.newMovie();
      if (!newMovie.length) {
        return;
      }
      movies.push({
        title: newMovie,
        completed: false
      });
      $scope.newMovie = '';
    };

    $scope.removeMovie = function (movie) {
      movies.splice(movies.indexOf(movie), 1);
    };

    $scope.markAll = function (completed) {
      movies.forEach(function (movie) {
        movie.completed = !completed;
      });
    };

    $scope.clearCompletedMovies = function () {
      $scope.movies = movies = movies.filter(function (movie) {
        return !movie.completed;
      });
    };
  }
]);
