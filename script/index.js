angular.module('Discus', ['ngResource'])
  .controller('mainController', ['$scope', '$resource', function($scope, $resource) {
    $scope.inputedBody = '';
    $scope.inputedAuthor = '';
    $scope.isConnErr = false;

    var Comments = $resource(
      'https://9l9p8myt23.execute-api.ap-northeast-1.amazonaws.com/prod/messages'
    );

    $scope.messages = Comments.query(function(data, headers) {
      result.push(response);
    });


    $scope.reply = function(message) {
      $scope.inputedBody = '[ref:' + message.messageId + ']' + "\n" + $scope.inputedBody;
    };

    $scope.onSubmit = function() {
      var d = dateTimeFormat(new Date())
      var newContents = {
        messageId: d.replace(/\s+/g, "")+getRandom(),
        body: $scope.inputedBody,
        author: $scope.inputedAuthor,
        date: d,
        liked: '0'
      };

      Comments.save(
        newContents,
        function() {
          $scope.messages.push(newContents)
          $scope.isConnErr = false;
        },
        function() {
          $scope.isConnErr = true;
        }
      );

      $scope.inputedBody = '';
    };
  }])
  .controller('listController', ['$scope', function($scope) {
    $scope.onLike = function(message) {
      // Todo:hrt メッセージIDをもとにlikedを1プラスして更新する

      message.liked = message.liked + 1;
    };
  }]);
