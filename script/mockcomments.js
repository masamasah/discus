angular.module('mockComments',[])
  .controller('mockController', ['$scope', function($scope){
    $scope.messages = [
      {
        body:'こんにちは',
        auther:'平田'
      },
      {
        body:'こんばんは',
        auther:'将之'
      }
    ];
  }]);
