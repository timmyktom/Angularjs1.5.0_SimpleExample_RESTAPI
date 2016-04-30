var services = angular.module('myAngularApp.services', []);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////CATEGORY/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
services.service('CategoryService', ['$http', '$q', '$route', '$location',
function ($http, $q, $route, $location) {
	var _baseURL = $location.protocol()+'://'+$location.host()+':'+$location.port();
	//to fetch all categories
	this.getAllCategory = function(){
		
		var delay = $q.defer();
		$http.get("http://127.0.0.1:8085/api/listCategories")
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to fetch categories');
		});
		return delay.promise;
	};
	// to fetch a category
	this.getCategory = function(){
		var delay = $q.defer();
		$http.post("http://127.0.0.1:8085/api/getCategory",
				   {"categoryid": $route.current.params.categoryId})
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to fetch category');
		});
		return delay.promise;
	};
	// to add a new category
	this.addCategory = function(category){
		var delay = $q.defer();
		$http.post("http://127.0.0.1:8085/api/addCategory",category)
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to add a new category');
		});
		return delay.promise;
	};
	// to edit an existing category
	this.editCategory = function(category){
		var delay = $q.defer();
		$http.put("http://127.0.0.1:8085/api/editCategory",category)
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to edit category');
		});
		return delay.promise;
	};
	// to delete an existing category
	this.deleteCategory = function(categoryid){
		var delay = $q.defer();
		$http.delete("http://127.0.0.1:8085/api/deleteCategory",
				   {params: {categoryid: categoryid}})
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to delete category');
		});
		return delay.promise;
	};
	
}]);

/*services.factory('GetCategoryList', ['$http', '$q',
function ($http, $q) {
	return function(){
		var delay = $q.defer();
		$http.get("http://127.0.0.1:8085/api/listCategories")
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to fetch categories');
		});
		return delay.promise;
	};
}]);

services.factory('GetCategory', ['$http', '$q', '$route',
function ($http, $q, $route) {
	return function(){
		var delay = $q.defer();
		$http.post("http://127.0.0.1:8085/api/getCategory",{"categoryid": $route.current.params.categoryId})
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to fetch category');
		});
		return delay.promise;
	};
}]);

services.factory('AddCategory', ['$http', '$q', '$route',
function ($http, $q) {
	return function(category){
		var delay = $q.defer();
		$http.post("http://127.0.0.1:8085/api/addCategory",category)
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to fetch category');
		});
		return delay.promise;
	};
}]);

*/



/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////PRODUCT/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
services.service('ProductService', ['$http', '$q', '$route',
function ($http, $q, $route) {
	//to fetch all products
	this.getAllProducts = function(){
		var delay = $q.defer();
		$http.get("http://127.0.0.1:8085/api/listProducts")
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to fetch products');
		});
		return delay.promise;
	};
	// to fetch a product
	this.getProduct = function(){
		var delay = $q.defer();
		$http.post("http://127.0.0.1:8085/api/getProduct",
				   {"productid": $route.current.params.productId})
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to fetch product');
		});
		return delay.promise;
	};
	// to add a new product
	this.addProduct = function(product){
		var delay = $q.defer();
		$http.post("http://127.0.0.1:8085/api/addProduct",product)
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to add a new product');
		});
		return delay.promise;
	};
	// to edit an existing product
	this.editProduct = function(product){
		var delay = $q.defer();
		$http.put("http://127.0.0.1:8085/api/editProduct",product)
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to edit product');
		});
		return delay.promise;
	};
	// to delete an existing product
	this.deleteProduct = function(productid){
		var delay = $q.defer();
		$http.delete("http://127.0.0.1:8085/api/deleteProduct",
				   {params: {productid: productid}})
		.then(function(response){ 
			delay.resolve(response.data);
		}, function(){
			delay.reject('Unable to delete product');
		});
		return delay.promise;
	};
	
}]);

