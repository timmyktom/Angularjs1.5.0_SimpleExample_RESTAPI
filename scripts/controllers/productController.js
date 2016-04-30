var app = angular.module('myAngularApp.productcontrollers', ['myAngularApp.services']);

app.controller('ListProductCtrl', ['$scope', '$location', 'ProductService', 
function ($scope, $location, ProductService) {

	// call the REST API using service
	ProductService.getAllProducts().then(function(data){
		$scope.products = data;
	});

}]);

app.controller('ViewProductCtrl', ['$scope', '$location', 'ProductService',
function ($scope, $location, ProductService) {

	// call the REST API using service
	ProductService.getProduct().then(function(data){
		$scope.product = data;
	});
	
	$scope.edit = function () {
		$location.path('/product/edit/' + $scope.product._id);
	};
	
	$scope.remove = function () {
		ProductService.deleteProduct($scope.product._id).then(function(){
			$location.path('/product/list/');
		});
	};
}]);

app.controller('NewProductCtrl', ['$scope', '$location', 'ProductService', 'CategoryService',
function ($scope, $location, ProductService, CategoryService) {
		$scope.product = new Object({productname: '',  categoryid: ''});
	
		CategoryService.getAllCategory().then(function(data){
			$scope.categories = data;
		});
	
		$scope.save = function () {
			ProductService.addProduct($scope.product).then(function(){
				$location.path('/product/list/');
			});
		};
	
		$scope.back = function () {
				$location.path('/product/list/');
		};
}]);

app.controller('EditProductCtrl', ['$scope', '$location', 'ProductService', 'CategoryService',
function ($scope, $location, ProductService, CategoryService) {
		// call the REST API using service
	
		CategoryService.getAllCategory().then(function(data){
			$scope.categories = data;
		});
	
		ProductService.getProduct().then(function(data){
			$scope.product = data;
		});
	
		$scope.save = function () {
			ProductService.editProduct($scope.product).then(function(){
				$location.path('/product/list/');
			})
		};
	
		$scope.back = function () {
				$location.path('/category/view/'+ $scope.category._id);
		};
}]);