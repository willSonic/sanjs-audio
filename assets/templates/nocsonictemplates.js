angular.module('nocsonictemplates', ['sonic_masher/audioplayer.tpl.html']);

angular.module("sonic_masher/audioplayer.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("sonic_masher/audioplayer.tpl.html",
            "<div class=\"audio-control\">\n" +
            "  <audio player-control=\"audioPlayer\" playlist=\"audioPlaylist\" audio-player></audio>\n" +
            "  <div class=\"btn\" ng-click=\"audioPlayer.play()\">\n" +
            "    <span>Simple Play</span>\n" +
            "    <i class=\"fa fa-play\"></i>\n" +
            "  </div>\n" +
            "  <div class=\"btn\" ng-click=\"audioPlayer.playPause()\">\n" +
            "    <i class=\"fa\" ng-class=\"{ 'fa-pause': audioPlayer.playing, 'fa-play': !audioPlayer.playing }\"></i>\n" +
            "  </div>\n" +
            "  <div class=\"btn\" ng-click=\"audioPlayer.next()\">\n" +
            "    <span>Next</span>\n" +
            "    <i class=\"fa fa-step-forward\"></i>\n" +
            "  </div>\n" +
            "  <div class=\"btn\" ng-click=\"audioPlayer.prev()\">\n" +
            "    <i class=\"fa fa-step-backward\"></i>\n" +
            "    <span>Prev</span>\n" +
            "  </div>\n" +
            "  <div class=\"btn btn-noclick\">\n" +
            "    <span>currentTrack: <span class=\"badge\">{{ audioPlayer.currentTrack }}</span></span>\n" +
            "  </div>\n" +
            "  <div class=\"progress\">\n" +
            "    <div class=\"progress-bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" ng-style=\"{ width: audioPlayer.currentTime*100/audioPlayer.duration + '%' }\">\n" +
            "      <span class=\"sr-only\">{{ audioPlayer.currentTime*100/audioPlayer.duration }}% Complete</span>\n" +
            "    </div>\n" +
            "    <div class=\"time\" ng-show=\"audioPlayer.formatTime\">\n" +
            "      <span>{{ audioPlayer.formatTime }}</span><b>/</b><span>{{ audioPlayer.formatDuration }}</span>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</div>\n"+
    "");
}]);
