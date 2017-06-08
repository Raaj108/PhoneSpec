angular.module('brandsList')
  .factory('brandListfactory', ['$http', '$q', function ($http, $q) {

    var service = {};
    var baseUrl = 'http://localhost:4000/api/brand';

    service.getBrands = function () {
      var deferred = $q.defer();
      //get all the brands using restful api
      $http({
        method: 'GET',
        url: baseUrl
      }).then(function successCallback(response) {
        deferred.resolve(response);
      }, function errorCallback(response) {
        deferred.reject('There was an error');
      });
      return deferred.promise;
    }
    return service;
  }]);
