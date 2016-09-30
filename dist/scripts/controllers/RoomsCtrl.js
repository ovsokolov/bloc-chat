(function() {
    
     function RoomsCtrl($scope, Room, Message, $cookies, $mdDialog) {
        this.newMessage = "";
        this.allRooms = Room.all;
        this.addNewMessage = function(message){
            var roomId = Room.currentRoom();
            if (!roomId || roomId === '') {
                $mdDialog.show(
                  $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Select Room')
                    .textContent('You can select room.')
                    .ok('OK')
                );
                return;
            }
            
            
            var d = new Date();
            var hr = d.getHours();
            var min = d.getMinutes();
            if (min < 10) {
                min = "0" + min;
            }

            
            var frmtedTime = hr + ":" + min;
            var user = $cookies.get('blocChatCurrentUser');
            Message.send({messageTime: frmtedTime, roomId: roomId, text: message, userName: user });
            
        };
         

     }
    
 
     angular
         .module('blocChat')
         .controller('RoomsCtrl', ['$scope','Room', 'Message', '$cookies', '$mdDialog', RoomsCtrl]);
 })();