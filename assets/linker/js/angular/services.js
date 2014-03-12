angular.module('appServices', ['ngResource'])

    .factory('Beat', ['$resource', function($resource){
        return $resource("/beat/:action/:beatId", {},
            {
                //These correspond to the actions defined in Sails
                'index': { method:"GET", params: { 'action': 'index' }, isArray: true, cache: true},
                'show' : { method:"GET", params: { 'action': 'show', 'beatId': '@id'}, isArray: false, cache: true},
                'update': { method:"PUT", params: { 'action': 'update', 'beatId': '@id'}, isArray: false},
                'destroy': { method:'DELETE', params: {'action': 'destroy', 'beatId': '@id'}, isArray: false},
                'create' : { method:'POST', params: {'action' : 'create'}, isArray: false}
            }
        );
    }])