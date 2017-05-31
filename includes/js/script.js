//vars 

var dndafhdid='457095661767135018';

var app = angular.module('teamdarkness', []);
app.controller('teamdarknessfetchall', function($scope, $http) {
   $http.get("https://androidfilehost.com/api/?action=devices&uid=457095661767135018")
   .then(function (response) {$scope.names = response.data.records;});
   console.log($scope.names);
});