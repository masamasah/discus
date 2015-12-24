angular.module('Discus', ['mockComments'])
  .controller('formController', ['$scope', function($scope) {
    $scope.onSubmit = function() {
      $scope.messages.push({
        body: $scope.inputedBody,
        auther: $scope.inputedAuther,
        date: new Date(),
        liked: 0
      });
      $scope.inputedBody = '';
    };
  }]);
