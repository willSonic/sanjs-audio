//This is the overall controller for the body and is called perpetually to check whether the user is still logged in
myApp.controller('sonicmasherCtrl', ['$scope', '$state', '$rootScope', '$sails','Audiobeatfile',
    function($scope, $state, $rootScope, $sails, Audiobeatfile) {
        $scope.audioPlaylist = [];
        $scope.beats = Audiobeatfile.check(
             function(response){
                   $scope.audioPlaylist = response;
            }, function(err) {
                $scope.audioPlaylist = response;
            });

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