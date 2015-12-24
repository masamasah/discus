angular.module('mockComments', [])
  .controller('mockController', ['$scope', function($scope) {
    $scope.messages = [{
      body: 'こんにちは',
      auther: '平田',
      date: new Date(2015,1,1),
      liked: 3
    }, {
      body: 'こんばんは',
      auther: '将之',
      date: new Date(2015,1,2),
      liked: 10
    }];
  }]);
