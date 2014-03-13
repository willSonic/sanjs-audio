//This is the overall controller for the body and is called perpetually to check whether the user is still logged in
myApp.controller('rootCtrl', ['$scope', '$state', '$rootScope', '$sails',
    function($scope, $state, $rootScope, $sails) {
        $rootScope.repeaters = ["1 item just to get single things to animate with ng-repeat"];
    }]);