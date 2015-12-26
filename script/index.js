angular.module('Discus', ['ngResource'])
  .controller('mainController', ['$scope', '$resource', function($scope, $resource) {
    $scope.inputedBody = '';
    $scope.inputedAuthor = '';

    var Comments = $resource(
      'https://9l9p8myt23.execute-api.ap-northeast-1.amazonaws.com/prod/messages'
    );

    function getComments(){
      var result = [];
      var response = Comments.get();
      result.push(response);
      return result
    };

    $scope.messages = getComments();


    $scope.reply = function(message) {
      $scope.inputedBody = '[ref:' + message.messageId + ']' + "\n" + $scope.inputedBody;
    };

    $scope.onSubmit = function() {
      $scope.messages.push({
        messageId: 1,
        body: $scope.inputedBody,
        author: $scope.inputedAuthor,
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
