(function() {
     function ListMessagesCtrl($scope, $stateParams, Room) {
            this.currentRoomName = $stateParams.roomName;
            this.roomMessages = Room.getMessages($stateParams.roomId);
     }
 
     angular
         .module('blocChat')
         .controller('ListMessagesCtrl', ['$scope','$stateParams', 'Room',ListMessagesCtrl]);
 })();