/*Déclaration de l'application demoApp*/
var demoApp = angular.module('demoApp', [
  // Dépendances du "module"
  'movieList'
]);

/* Déclaration du module movieList */
var movieList = angular.module('movieList',[]);

movieList.controller('movieCtrl', ['$scope',
  function ($scope) {

    // Pour manipuler plus simplement les movies au sein du contrôleur
    // On initialise les movies avec un tableau vide : []
    var movies = $scope.movies = [];

    // Ajouter un movie
    $scope.addMovie = function () {
      // .trim() permet de supprimer les espaces inutiles
      // en début et fin d'une chaîne de caractères
      var newMovie = $scope.newMovie.trim();
      if (!newMovie.length) {
        // éviter les movies vides
        return;
      }
      movies.push({
        // on ajoute le movie au tableau des movies
        title: newMovie,
        completed: false
      });
      // Réinitialisation de la variable newMovie
      $scope.newMovie = '';
    };

    // Enlever un movie
    $scope.removeMovie = function (movie) {
      movies.splice(movies.indexOf(movie), 1);
    };

    // Cocher / Décocher tous les movies
    $scope.markAll = function (completed) {
      movies.forEach(function (movie) {
        movie.completed = !completed;
      });
    };

    // Enlever tous les movies cochés
    $scope.clearCompletedMovies = function () {
      $scope.movies = movies = movies.filter(function (movie) {
        return !movie.completed;
      });
    };
  }
]);
