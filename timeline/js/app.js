/* ----------
Here we have some bootstrapping stuff (not Twitter). 
------------ */

debug = true;
window.appHost = "http://localhost/app";

window.map = new L.Map('map', {
	zoomControl: false,
	center: [51.505, -0.09],
	attributionControl: false,
	zoom: 4
});

/*
--------------  baselayers
*/

window.appBaseLayers = new BaseLayersCollection();

window.appBaseMapView = new BaseMapView({
	collection: appBaseLayers
});

window.appBaseLayersMenuView = new BaseLayersMenuView({
	collection: appBaseLayers
});

appBaseLayers.fetch({
	success: function(collection) {
		// if we're ok by now, make a menu
		appBaseLayersMenuView.render().el;
		// ...and the prestige:
		appBaseMapView.render()
	}

});


		
