(function() {
  function BlocChatCookies($cookies, $mdDialog, $rootScope) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    console.log("currentUser: " + currentUser);
    if (!currentUser || currentUser === '') {
        console.log("in cookies");


     $mdDialog.show({
          clickOutsideToClose: false,

          scope: $rootScope,        // use parent scope in template
          preserveScope: true,  // do not forget this if use parent scope

          // Since GreetingController is instantiated with ControllerAs syntax
          // AND we are passing the parent '$scope' to the dialog, we MUST
          // use 'vm.<xxx>' in the template markup

          templateUrl: '../../templates/userDialog.html',

          controller: function UserController($rootScope, $mdDialog,$cookies){ 
                        $rootScope.saveUser = function(answer) {
                            var userName = $rootScope.userName;
                            if(!(!userName || userName === '') ){
                                $cookies.put('blocChatCurrentUser', userName);
                                $mdDialog.hide();
                            }
                        };
                     }
       });


    }
     
      
    function UserController($rootScope, $mdDialog){ 
        $rootScope.saveUser = function(answer) {
          $mdDialog.hide();
        };
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$mdDialog','$rootScope', BlocChatCookies]);
})();