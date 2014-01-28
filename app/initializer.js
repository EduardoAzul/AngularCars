var carsApp = angular.module('carsApp', [
  'ngRoute',
  'listCarController'
]);
 
carsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'car/CarView.html',
        controller: 'CarListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);