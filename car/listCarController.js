var  listCarController = angular.module('listCarController', []);

listCarController.controller('CarListCtrl', ['$scope', '$http',
  function($scope, $http) {
    
      $scope.cars = [{selected:'false',model:"Gol", brand:"Volks", value:"12.000"},
      				 {selected:'true', model: "Palio", brand: 'Fiat', value:"10.000"}];

      $scope.counter = 0;

}]);

