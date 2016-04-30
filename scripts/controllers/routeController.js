var app = angular.module('myAngularApp', ['ngRoute',
										  'myAngularApp.directives', 
										  'myAngularApp.homecontrollers',
										  'myAngularApp.categorycontrollers',
										  'myAngularApp.productcontrollers',
										  'myAngularApp.services']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/', {
		controller: 'HomeCtrl',
		templateUrl: '/views/home.html'
	}).when('/category/list', {
		controller: 'ListCategoryCtrl',
		templateUrl: '/views/categoryList.html'
	}).when('/category/view/:categoryId', {
		controller: 'ViewCategoryCtrl',
		templateUrl:'/views/categoryDetails.html'	
	}).when('/category/edit/:categoryId', {
		controller: 'EditCategoryCtrl',
		templateUrl:'/views/categoryForm.html'	
	}).when('/category/add/', {
		controller: 'NewCategoryCtrl',
		templateUrl:'/views/categoryForm.html'
	}).when('/product/list', {
		controller: 'ListProductCtrl',
		templateUrl: '/views/productList.html'
	}).when('/product/view/:productId', {
		controller: 'ViewProductCtrl',
		templateUrl:'/views/productDetails.html'	
	}).when('/product/edit/:productId', {
		controller: 'EditProductCtrl',
		templateUrl:'/views/productForm.html'	
	}).when('/product/add/', {
		controller: 'NewProductCtrl',
		templateUrl:'/views/productForm.html'
	}).otherwise({redirectTo:'/'});
}]);

app.config(['$httpProvider', function ($httpProvider) {
  	$httpProvider.defaults.withCredentials = false;
	$httpProvider.defaults.useXDomain = true;
  	$httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
	$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);