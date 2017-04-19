angular.module('phoneSpecApp').config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');
    $routeProvider.when('/brand', {
        template: '<brands-list-directive brands="brands"></brands-list-directive>'
    }).when('/brand/:brand/phone', {
        template: '<Phone-list-directive phones="phones" brands="brands"></Phone-list-directive>'
    }).when('/brand/:brand/phone/:phone', {
        template: '<Phone-details-directive phone="phone" carousel-image="carouselImage"></Phone-list-directive>'
    }).otherwise('/brand');
}]);