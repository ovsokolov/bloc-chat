(function() {
     function ListMessagesCtrl($scope, $stateParams, Room) {
            this.currentRoomName = $stateParams.roomName;
            this.roomMessages = Room.getMessages($stateParams.roomId);
            this.isRoomSelected = Room.isSelected();
     }
 
     angular
         .module('blocChat')
         .controller('ListMessagesCtrl', ['$scope','$stateParams', 'Room',ListMessagesCtrl]);
 })();