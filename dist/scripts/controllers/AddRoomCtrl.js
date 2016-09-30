(function() {
     function AddRoomCtrl($scope, $mdDialog, Room) {
          $scope.customFullscreen = false;
          var roomService = Room;
         
          $scope.showPrompt = function(ev) {
            var confirm = $mdDialog.prompt()
              .title('Create new room')
              .textContent('Enter room name')
              .placeholder('room name')
              //.targetEvent(ev)
              .ok('Create room')
              .cancel('Cancel');

            $mdDialog.show(confirm).then(function(result) {
              console.log("before add");
              roomService.addRoom(result);
            }, function() {
            });
          };
     }
 
     angular
         .module('blocChat')
         .controller('AddRoomCtrl', ['$scope','$mdDialog', 'Room',AddRoomCtrl]);
 })();