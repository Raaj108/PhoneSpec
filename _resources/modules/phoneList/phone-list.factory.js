angular.module('phoneList')
  .factory('phoneListfactory', ['$http', '$q', function ($http, $q) {

    var service = {};
    var baseUrl = 'http://localhost:4000/api/brand/'
    var _brand;
    var _url;

    var generateURL = function () {
      _url = baseUrl + _brand + '/phone';
      return _url;
    }

    service.getPhonesWithBrand = function (brand) {
      _brand = brand;     
      generateURL();
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: _url
      }).then(function successCallback(response) {
        deferred.resolve(response);
      }, function (response) {
        deferred.reject(response);
      })
      return deferred.promise;
    }
    return service;
}]);
