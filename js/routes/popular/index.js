angular.module('movieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/routes/popular/template.html',
        controller: 'PopularMoviesController'
      })
  })
