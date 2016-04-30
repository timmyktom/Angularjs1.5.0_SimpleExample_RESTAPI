var app = angular.module('myAngularApp.homecontrollers', []);
app.controller('HomeCtrl', ['$scope', '$location', 
function($scope, $location) {

	$scope.goToCategories = function() {
		$location.path('/category/list/');
	};
	
	$scope.goToProducts = function() {
		$location.path('/product/list/');
	};
}]);