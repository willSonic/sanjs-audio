//This is the overall controller for the body and is called perpetually to check whether the user is still logged in
myApp.controller('rootCtrl', ['$scope', '$state', 'Session', '$rootScope', '$sails', '$notification',
 function($scope, $state, Session, $rootScope, $sails, $notification) {
        
        $rootScope.repeaters = ["1 item just to get single things to animate with ng-repeat"];

}]);