angular.module('movieApp')

    .controller('PopularMoviesController', function ($scope, MovieService) {
        // var thumbnailHtml = ''

      MovieService.getPopularMovie()
            .then(function (response) {
              console.log(response)
              $scope.movies = response.data.results
            })
    })
