(function(){
	var app = angular.module('store-product', []);

	app.directive('productTitle',function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/product-panel.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				}

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panels'
		};
	});
})();
