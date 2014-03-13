angular.module('appServices', ['ngResource'])

    .factory('Audiobeatfile', ['$resource', function($resource){
        return $resource("/audiobeatfile/:action/:audiobeatfileId", {},
            {
                //These correspond to the actions defined in Sails
                'index': { method:"GET", params: { 'action': 'index' }, isArray: true, cache: true},
                'show' : { method:"GET", params: { 'action': 'show', 'beatId': '@id'}, isArray: false, cache: true},
                'update': { method:"PUT", params: { 'action': 'update', 'beatId': '@id'}, isArray: false},
                'destroy': { method:'DELETE', params: {'action': 'destroy', 'beatId': '@id'}, isArray: false},
                'create' : { method:'POST', params: {'action' : 'create'}, isArray: false},
                //TODO: remove this ... only for adding data to the database
                'check'  : { method: 'GET', params: {'action' : 'check'}, isArray: false}
            }
        );
    }])