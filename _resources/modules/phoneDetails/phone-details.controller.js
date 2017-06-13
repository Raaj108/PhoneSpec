angular.module('phoneDetails').controller('PhoneDetailsController', ['$scope', '$log', '$routeParams', '$http', 'phoneDetailsfactory', function ($scope, $log, $routeParams, $http, phoneDetailsfactory) {
  var phoneName = $routeParams.phone;
  var brandName = $routeParams.brand;
  $scope.phone = {};
  $scope.addClass = false;
  $scope.hideReplies = true;
  $scope.shrinkRepliesVal = 4
  $scope.shrinkVal = 4;

  $scope.comments = [
    {
      "phone_id": "58dc3381f7f140329898f93f",
      "userName": "Rajan",
      "comment": "Good Phone.ram can handle the phone smoothly.. Good Samsung...played games (World of Tanks Blit) ",
      "timeStamp": 1445916055106,
      "replies": []
    }, {
      "phone_id": "591145edf57ead208c36308e",
      "userName": "Anita",
      "comment": "Awesome Phone",
      "timeStamp": 1457206023006,
      "replies": []
    }, {
      "phone_id": "58dc3381f7f140329898f93f",
      "userName": "Raajanna",
      "comment": "Cool Phone",
      "timeStamp": 1465916055106,
      "replies": []
    }, {
      "phone_id": "591145edf57ead208c36308e",
      "userName": "Anita",
      "comment": "(World of Tanks Blit) for almost everyday...no problem at all",
      "timeStamp": 1477206023006,
      "replies": [{
        "comment_id": "4",
        "userName": "Raajanna",
        "comment": "Truely said",
        "timeStamp": 1465916055106
      }, {
        "comment_id": "4",
        "userName": "Rajan",
        "comment": "True",
        "timeStamp": 1465916055106
      }]
    }, {
      "phone_id": "58dc3381f7f140329898f93f",
      "userName": "Rajan",
      "comment": "Excellent Phone",
      "timeStamp": 1485916055106,
      "replies": []
    }, {
      "phone_id": "591145edf57ead208c36308e",
      "userName": "Raajanna",
      "comment": "Used J7(2015) ...awesome smartphone...1.5gb of ram can handle the phone smoothly.. Good Samsung...played games (World of Tanks Blit) for almost everyday...no problem at all...good battery life until now..loved this phone...and i will upgrade to thi...",
      "timeStamp": 1497206023006,
      "replies": []
    }
  ];
  $scope.totalComments = $scope.comments.length;

  /**
    $http.get('phones/' + $scope.phoneId + '.json').then(function (response) {

      $scope.imageSwap($scope.phone.images[0]);
    });**/
  $scope.images = ['samsung-gem.0', 'samsung-gem.1', 'samsung-gem.2', 'samsung-mesmerize-a-galaxy-s-phone.1', 'samsung-mesmerize-a-galaxy-s-phone.2', 'samsung-mesmerize-a-galaxy-s-phone.3']
  /**$scope.imageSwap = function (imageURL) {
    $scope.carouselImage = imageURL;
  }**/

  $scope.getPhone = (function (brand, phone) {
    phoneDetailsfactory.getPhone(brand, phone).
    then(function successCallback(response) {
      $scope.phone.data = response.data[0];
      $log.info($scope.phone.data);
    }, function errorCallback(response) {
      $log.error(response);
    });
  })(brandName, phoneName);

  $scope.is_array = function (input) {
    var isArray = angular.isArray(input) ? true : false;
    return isArray;
  }

  $scope.is_object = function (input) {
    var isObject = angular.isObject(input) ? true : false;
    if (isObject == true) {
      $scope.addClass = true;
    }
    return isObject;
  }


  $scope.formData = {
    "phone_id": "591145edf57ead208c36308e",
    userName: "Raajanna",
    "timeStamp": new Date(),
    "replies": []
  };

  $scope.addComment = function () {
    // var commentBox = angular.element("form[name='commentsForm']").val();
    $scope.comments.push($scope.formData);
    $scope.totalComments = $scope.totalComments + 1;
    $scope.formData = {
      "phone_id": "591145edf57ead208c36308e",
      userName: "Raajanna",
      "timeStamp": new Date(),
      "replies": []
    };
  }
}]);
