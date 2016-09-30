(function() {
  function Message($cookies,$firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      send: function(newMessage) {
        messages.$add(newMessage);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$cookies','$firebaseArray', Message]);
})();