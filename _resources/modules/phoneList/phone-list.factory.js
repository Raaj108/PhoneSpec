angular.module('phoneList')
  .factory('phoneListfactory', ['$http', '$q', function ($http, $q) {

    var service = {};
    var baseUrl = 'http://phonespec-api.herokuapp.com/api/brand/'
    var _brand;
    var _url;

    var generateURL = function () {
      _url = baseUrl + _brand + '/phone';
      return _url;
    }

    service.getPhonesWithBrand = function (brand) {
      _brand = brand;
      console.log(brand);
      generateURL();
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: _url
      }).then(function successCallback(response) {
        deferred.resolve(response);
      }, function (response) {
        deferred.reject('There was an error');
      })
      return deferred.promise;
    }
    return service;
}]);
