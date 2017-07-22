
angular.module('movieApp', [])

    .controller('PopularMoviesController', function ($scope, PopularMovieService) {
        // var thumbnailHtml = ''

      PopularMovieService.getPopularMovie()
            .then(function (response) {
              console.log(response)
              $scope.movies = response.data.results

                // response.data.results.forEach(function(movies){
                //     $scope.title = movies.original_title
                //     $scope.dateOfRealise = movies.release_date
                // })
                // $scope.title = response.data.results[0].original_title
                // $scope.dateOfRealise = response.data.results[0].release_date
                // $scope.popularmovies = response.data.results["0"].poster_path
            })
    })

    .factory('PopularMovieService', function ($http) {
      function getPopularMovie () {
        var url = 'http://api.themoviedb.org/3/discover/movie?api_key=8e50b6069d6846e7a982ec27fb98cbf0'
        return $http.get(url)
        console.log(url)
      }
      return {
        getPopularMovie: getPopularMovie
      }
    })

    .factory('MovieImageService', function ($http) {
      function getImage () {
        var url = 'https://image.tmdb.org/t/p/w500'
      }
    })
