//This is the overall controller for the body and is called perpetually to check whether the user is still logged in
myApp.controller('cliplistCtrl', ['$scope', '$state', '$rootScope', '$sails',
    function($scope, $state, $rootScope, $sails) {

        $scope.audioPlaylist = [];
        /*
         $scope.addSong = function (audioElement) {
         $scope.audioPlaylist.push(angular.copy(audioElement));
         };

         $scope.removeSong = function (index) {
         $scope.audioPlaylist.splice(index, 1);
         };

         $scope.dropSong = function (audioElement, index) {
         $scope.audioPlaylist.splice(index, 0, angular.copy(audioElement));
         };
         */
    }
]);
