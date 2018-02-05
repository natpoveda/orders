(function ($) {
	Drupal.order = { countAds: 0 };
	var count = 0;
	Drupal.behaviors.order = {
		attach: function (context, settings) {
			Drupal.order.countAds ++;			

			console.log('Drupal order'+Drupal.order.countAds);
		}
	}


})(jQuery);