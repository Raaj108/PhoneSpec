angular.module('phoneDetails').directive('phoneDetailsDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './_resources/modules/phoneDetails/templates/phonedetails.template.html',
    controller: 'PhoneDetailsController',
    replace: 'true',
    scope: {
      phone: '=',
      carouselImage: '@'
    }
  }
});
