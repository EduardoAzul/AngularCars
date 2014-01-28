$app.config(function($routeProvider){
	  $routeProvider.
		  when('/',{controller:ListCarController, templateUrl:'car/CarView.html'}).
	  	  otherwise({redirectTo:'/'}
	  );
});