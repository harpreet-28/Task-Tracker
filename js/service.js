var MyService = function MyService($http) {
    var self = this;
    var API = "../data/tasks.json";
    var getService = function getService() {
        return $http
            .get(API)
            .then(function(response) {
                return response.data;
            }, function(reason) { 

            });
    };
    return {
        getService: getService
    };
};

angular
    .module('myApp')
    .factory('MyService', MyService);
