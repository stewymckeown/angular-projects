(function(){
	var app = angular.module("gemStore", ['product-directives']);
	
	app.controller('StoreController', ['$http', function($http) {
		var store = this;
		store.products = [];

		$http.get('gems.json').success(function(data) {
			store.products = data;
		});

	}]);

/*	app.controller('TabController', function(){
	    this.tab = 1;
	    
	    this.setTab = function(setTab) {
	      this.tab = setTab;
	    };
	    
	    this.isSet = function(value){
	      return this.tab === value;
	    };
	 });*/

	/* Controller now defined in the productGallery directive below */
	/*app.controller('GalleryController', function(){
		this.current = 0;

		this.setCurrent = function(newGallery) {
			this.current = newGallery || 0;
		};
	});*/

	app.controller('ReviewController', function(){
		this.review = {}

		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	
})();