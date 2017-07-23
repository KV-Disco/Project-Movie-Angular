angular.module('movieApp')

    .controller('NowPlayingMoviesController', function ($scope, MovieService) {
        // var thumbnailHtml = ''

      MovieService.getNowPlayingMovie()
            .then(function (response) {
              console.log(response)
              $scope.movies = response.data.results
            })
    })
