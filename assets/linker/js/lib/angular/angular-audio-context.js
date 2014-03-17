
var AudioContextServiceProvider = require('./provider/audio-context.js');

angular.module('wilsonic.audioContext', [])
.provider('audioContextService', AudioContextServiceProvider);




 .factory('audioContextService',['options', function(opitons){
    var audioContextService = {
        _audioContext : options.audioContext,
        format : options.format,
        isSupported : options.isSupported,

        createBufferSource : function () {
            var bufferSource = this._audioContext.createBufferSource();

            if (!bufferSource.start) {
                bufferSource.start = function (when, offset, duration) {
                    if (offset || duration) {
                        bufferSource.noteGrainOn(when, offset, duration);
                    } else {
                        bufferSource.noteOn(when);
                    }
                };
            }

            if (!bufferSource.stop) {
                bufferSource.stop = bufferSource.noteOff;
            }

            return bufferSource;
        },

        createGain : function () {
            return this._audioContext.createGain();
        },

        decodeAudioData : function (audioData, successCallback, errorCallback) {
            return this._audioContext.decodeAudioData(audioData, successCallback, errorCallback);
        }
     };

    Object.defineProperty(audioContextService.prototype, 'destination', {
        get: function () {
            return this._audioContext.destination;
        }
    });

    Object.defineProperty(audioContextService.prototype, 'currentTime', {
        get: function () {
            return this._audioContext.currentTime;
        }
    });

    Object.defineProperty(audioContextService.prototype, 'format', {
        writable: true
    });

    Object.defineProperty(audioContextService.prototype, 'isSupported', {
        writable: true
    });

    return audioContextService;
}]);


 var AudioContextServiceProvider = function() {
    var audioContext,
        format,
        isSupported;

    // it is not possible to use AngularJS' $window service, because it is not available for providers
    audioContext = (window.hasOwnProperty('AudioContext')) ?
        new window.AudioContext() :
        (window.hasOwnProperty('webkitAudioContext')) ?
            new window.webkitAudioContext() :
            null;

    format = null;

    isSupported = (audioContext !== null);

    if (isSupported) {
        // this assumes that every browser with an AudioContext has an Audio element, too
        format = !!(new window.Audio()).canPlayType('audio/ogg') ? 'ogg' : 'mp3';
    }

    this.isSupported = isSupported;

    this.$get = function($window) {
        return new AudioContextService({
            audioContext: audioContext,
            format: format,
            isSupported: isSupported
        });
    };
};


