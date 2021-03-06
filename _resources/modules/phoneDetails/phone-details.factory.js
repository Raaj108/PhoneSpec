angular.module('phoneDetails')
  .factory('phoneDetailsfactory', ['$http', '$q', function ($http, $q) {

    var service = {};
    var baseUrl = 'http://localhost:4000/api/brand/'
    var _brand;
    var _phone;
    var _url;

    var generateURL = function () {
      _url = baseUrl + _brand + '/phone/' + _phone;
      return _url;
    }

    service.getPhone = function (brand, phone) {
      _brand = brand;
      _phone = phone;

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
