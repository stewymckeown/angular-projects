(function() {

	var app = angular.module('product-directives', []);

	app.directive('productGallery', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html',

			controller: function() {
				this.current = 0;

				this.setCurrent = function(newGallery) {
					this.current = newGallery || 0;
				};
			},
			controllerAs: 'gallery'
		}
	});

	app.directive('productTabs', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-tabs.html',

			controller:function() {
				this.tab = 1;
	    
			    this.setTab = function(setTab) {
			      this.tab = setTab;
			    };
			    
			    this.isSet = function(value){
			      return this.tab === value;
			    };
			},
			controllerAs: 'tab'
		};
	});

	app.directive('productDescription', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});

	app.directive('reviewForm', function() {
		return {
			restrict: 'E',
			templateUrl: 'review-form.html'
		};
	});

	/* productSpecs directive is defined as an Attribute directive although it doesn't need to be.
	   This is just done as a demonstration. */
	app.directive('productSpecs', function() {
		return {
			restrict: 'A',
			templateUrl: 'product-specs.html'
		};
	});

})();