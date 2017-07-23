angular.module('movieApp')

.factory('MovieService', function ($http) {
  function getPopularMovie () {
    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=8e50b6069d6846e7a982ec27fb98cbf0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    return $http.get(url)
    console.log(url)
  }

  function getNowPlayingMovie () {
    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=8e50b6069d6846e7a982ec27fb98cbf0&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1'
    return $http.get(url)
    console.log(url)
  }

  function getTopRatedMovie () {
    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=8e50b6069d6846e7a982ec27fb98cbf0&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1'
    return $http.get(url)
    console.log(url)
  }

  function getUpcomingMovie () {
    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=8e50b6069d6846e7a982ec27fb98cbf0&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2017-07-23&release_date.gte=2017-07-23'
    return $http.get(url)
    console.log(url)
  }

  return {
    getPopularMovie: getPopularMovie,
    getNowPlayingMovie: getNowPlayingMovie,
    getTopRatedMovie: getTopRatedMovie,
    getUpcomingMovie: getUpcomingMovie
  }
})
