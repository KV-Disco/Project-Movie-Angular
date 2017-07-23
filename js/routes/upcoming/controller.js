angular.module('movieApp')

    .controller('UpcomingController', function ($scope, MovieService) {
        // var thumbnailHtml = ''

      MovieService.getUpcomingMovie()
            .then(function (response) {
              console.log(response)
              $scope.movies = response.data.results
            })
    })
