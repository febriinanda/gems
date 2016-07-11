(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});

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

	var gems = [{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Nice gems at all',
		reviews: [{
			stars: 5,
			body: 'Really like it!',
			author: 'Joe@thomas.com'
		},{
			stars: 1,
			body: 'Really sucks!',
			author: 'blb@loke.com'
		}]
	},{
		name: 'Pentagonal Gem',
		price: 2,
		description: 'Pentagonal Gem is Nice gems at all',
		reviews: [{
			stars: 5,
			body: 'Really like it!',
			author: 'Joe@thomas.com'
		},{
			stars: 2,
			body: 'Really sucks!',
			author: 'blb@loke.com'
		},{
			stars: 3,
			body: 'Not really like it!',
			author: 'vint@ge.com'
		},{
			stars: 1,
			body: 'Please!',
			author: 'wok@wok.com'
		}]
	}]
})();