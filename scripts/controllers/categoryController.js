var app = angular.module('myAngularApp.categorycontrollers', ['myAngularApp.services']);

app.controller('ListCategoryCtrl', ['$scope', '$location', 'CategoryService', 
function ($scope, $location, CategoryService) {
	// call the REST API using service
	CategoryService.getAllCategory().then(function(data){
		$scope.categories = data;
	});
	
	/*$scope.edit = function (categoryId) {
		$location.path('/category/edit/' + categoryId);
	};
	
	$scope.remove = function (categoryId) {
		CategoryService.deleteCategory(categoryId).then(function(){
			$location.path('/category/list/');
		});
	};*/
}]);


app.controller('ViewCategoryCtrl', ['$scope', '$location', 'CategoryService',
function ($scope, $location, CategoryService) {

	// call the REST API using service
	CategoryService.getCategory().then(function(data){
		$scope.category = data;
	});
	
	$scope.edit = function () {
		$location.path('/category/edit/' + $scope.category._id);
	};
	
	$scope.remove = function () {
		CategoryService.deleteCategory($scope.category._id).then(function(){
			$location.path('/category/list/');
		});
	};
}]);


app.controller('NewCategoryCtrl', ['$scope', '$location', 'CategoryService',
function ($scope, $location, CategoryService) {
		$scope.category = new Object({categoryname: '',  description: ''});
	
		$scope.save = function () {
			CategoryService.addCategory($scope.category).then(function(){
				$location.path('/category/list/');
			});
		};
	
		$scope.back = function () {
				$location.path('/category/list/');
		};
}]);

app.controller('EditCategoryCtrl', ['$scope', '$location', 'CategoryService',
function ($scope, $location, CategoryService) {
		// call the REST API using service
		CategoryService.getCategory().then(function(data){
			$scope.category = data;
		});
	
		$scope.save = function () {
			CategoryService.editCategory($scope.category).then(function(){
				$location.path('/category/list/');
			})
		};
	
		$scope.back = function () {
				$location.path('/category/view/'+ $scope.category._id);
		};
}]);