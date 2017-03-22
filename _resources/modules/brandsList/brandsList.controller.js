angular.module('brandsList').controller('brandsListController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
  $scope.brands = [];
  $scope.cards = {
    'samsung': {
      'name': 'Samsung',
      'img': '/_resources/images/cards/samsung.jpg',
      'description': 'This is Samsung Card'
    },
    'apple': {
      'name': 'Apple',
      'img': '/_resources/images/cards/apple.jpg',
      'description': 'This is Apple Card'
    },
    'motorola': {
      'name': 'Mororola',
      'img': '/_resources/images/cards/motorola.jpg',
      'description': 'This is Motorola Card'
    }
  };

  angular.forEach($scope.cards, function (value, key) {
    $log.info(key);
  })

  //get all the brands using restful api
  $http({
    method: 'GET',
    url: 'http://phonespec-api.herokuapp.com/api/brand'
  }).then(function successCallback(response) {
    angular.forEach(response.data, function (value, key) {
      $scope.brands.push(value); // populate brands array
    })
  }, function errorCallback(response) {
    $log.error(response);
  });

  setTimeout(function () {
    angular.element('#phoneCarousel').carousel({
      interval: 2000,
      cycle: true
    })
  }, 100);

}]);