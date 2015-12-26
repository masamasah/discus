angular.module('Discus', [])
  .controller('mainController', ['$scope', function($scope) {
    $scope.messages = mockMessages();
    $scope.inputedBody = '';
    $scope.inputedAuther = '';

    $scope.reply = function(message) {
      $scope.inputedBody = '[ref:'+message.messageId+']'+"\n"+$scope.inputedBody;
    };

    $scope.onSubmit = function() {
      $scope.messages.push({
        messageId: 1,
        body: $scope.inputedBody,
        auther: $scope.inputedAuther,
        date: new Date(),
        liked: 0
      });
      $scope.inputedBody = '';
    };
  }])
  .controller('listController', ['$scope', function($scope) {
    $scope.onLike = function(message) {
      message.liked = message.liked + 1;
    };
  }]);
