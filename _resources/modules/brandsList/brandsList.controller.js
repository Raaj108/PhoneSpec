angular.module('brandsList').controller('brandsListController', ['$scope', '$http', '$log', 'brandListfactory', function ($scope, $http, $log, brandListfactory) {
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

  $scope.popularPhones = [{
    brandName: 'Samsung',
    phoneName: 'Galaxy S8'
    }, {
    brandName: 'Samsung',
    phoneName: 'Galaxy S7'
    }, {
    brandName: 'Apple',
    phoneName: '7S'
  }, {
    brandName: 'Motorola',
    phoneName: 'Moto G5'
  }, {
    brandName: 'Xiaomi',
    phoneName: 'Redmi 4'
  }];
  $scope.popularBrands = ['Samsung', 'Apple', 'Oppo', 'Xiaomi', 'Motorola', 'LG', 'Oneplus', 'Gionee', 'Sony'];

  angular.forEach($scope.cards, function (value, key) {
    $log.info(key);
  });

  //carousel
  setTimeout(function () {
    angular.element('#phoneCarousel').carousel({
      interval: 2000,
      cycle: true
    })
  }, 100);

  $scope.getAllBrands = function () {
    brandListfactory.getBrands()
      .then(function successCallback(response) {
        angular.forEach(response.data, function (value, key) {
          $scope.brands.push(value); // populate brands array
        })
      }, function errorCallback(response) {
        //$log.error(response);
      });
  }
  $scope.getAllBrands();
}]);
