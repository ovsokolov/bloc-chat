(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var currentRoomId;
    var isSelected;
    //console.log(rooms);
      
    var addNewRoom = function(name){
        rooms.$add({name : name});
    }
    /*
    var getRoomMessages = function(roomId, scope, loadMessages){
        currentRoomId = roomId;
        var msgRef = firebase.database().ref().child("messages");
        msgRef.orderByChild('roomId').equalTo(roomId).on("value", function(snapshot) {
                
                scope.roomMessages = snapshot.val();
                loadMessages(snapshot.val());
                if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
                    scope.$apply();
                }
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
        
    }
    */
    var loadRoomMessages = function(roomId){
        currentRoomId = roomId;
        isSelected = true;
        var msgRef = firebase.database().ref().child("messages");
        var query = msgRef.orderByChild('roomId').equalTo(roomId);
        var messages = $firebaseArray(query);
        return messages;
        
    }
    
    var isRoomSelected = function(){
        return isSelected;
    }
    
    var getCurrentRoom = function(){
        return currentRoomId;
    }
    
    return {
      all: rooms,
      addRoom : addNewRoom,
      getMessages: loadRoomMessages,
      isSelected: isRoomSelected,
      currentRoom: getCurrentRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();