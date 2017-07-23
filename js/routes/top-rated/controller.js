angular.module('movieApp')

    .controller('TopRatedController', function ($scope, MovieService) {
        // var thumbnailHtml = ''

      MovieService.getTopRatedMovie()
            .then(function (response) {
              console.log(response)
              $scope.movies = response.data.results
            })
    })
