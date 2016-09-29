(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    //console.log(rooms);
      
    var addNewRoom = function(name){
        rooms.$add({name : name});
    }
    
    return {
      all: rooms,
      addRoom : addNewRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();