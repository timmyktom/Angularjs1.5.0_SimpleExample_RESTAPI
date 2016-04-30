var directives = angular.module('myAngularApp.directives', []);
directives.directive('loader', ['$rootScope',
function ($rootScope) {
		return {
			link: function (scope, element, attrs) {
				element.addClass('hide');
				$rootScope.$on('$routeChangeStart', function () {
					element.removeClass('hide');
				});
				$rootScope.$on('$routeChangeSuccess', function () {
					//element.addClass('hide');
					var el = element;
					var timeinterval = setTimeout(function(){ 
						el.addClass('hide');
						clearTimeout(timeinterval);
					}, 500);
				});
			}
		};
}]);
