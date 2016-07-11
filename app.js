(function(){
	var app = angular.module('store', ['store-product']);

	app.controller('StoreController', ['$http',function($http){
		var store = this;
		store.products = [];

		$http.get('data/product.json').success(function(data){
			console.log(data);
			store.products = data;
		});
	}]);

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});
})();