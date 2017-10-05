var demoApp = angular.module('demoApp', [
  'movieList'
]);

var movieList = angular.module('movieList',[]);

movieList.controller('movieCtrl', ['$scope',
  function ($scope) {

    var movies = $scope.movies = [];
    $scope.newMovie = '';
    $scope.addMovie = function () {
      newMovie = $scope.newMovie;
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

    /********************Sélectionne tous les films************************************************/
    $scope.markAll = function (completed) {
      movies.forEach(function (movie) {
        movie.completed = completed;
      });
    };
    /********************Supprime les films séléctionnés********************************************************/
    $scope.clearCompletedMovies = function () {
      $scope.movies = movies = movies.filter(function (movie) {
        return !movie.completed;
      });
    };

    /******************Permet de faire passer les films à voir dans les films vus ****************************/
    $scope.filmVu = function (){
      var vu = $scope.vu = [];
      $scope.newMovie = newMovie;
      vu.push({title: newMovie});
    }

    /******************Ajouter un film directement dans films vus********************************/
    var films = $scope.films = [];
    $scope.newFilm = '';
    $scope.addFilm = function () {
      console.log("addFilm");
      newFilm = $scope.newFilm;

      if (!newFilm.length) {
        return;
      }
      films.push({
        title: newFilm,
        completed: false
      });
      $scope.newFilm = '';
    };

  }
]);
