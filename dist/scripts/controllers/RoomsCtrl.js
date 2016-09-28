(function() {
     function RoomsCtrl($scope, Room) {
        this.allRooms = Room.all;
     }
 
     angular
         .module('blocChat')
         .controller('RoomsCtrl', ['$scope','Room', RoomsCtrl]);
 })();