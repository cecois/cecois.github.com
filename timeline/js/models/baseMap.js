var BaseMap = Backbone.Model.extend({

	defaults: {
		bbox_west: -100,
		bbox_south: 40,
		bbox_east: -90,
		bbox_north: 60,
		thumburl: ''
	},
	initialize: function() {
		return this;
	},
	getBounds: function() {
		var southWest = new L.LatLng(this.get("bbox_south"), this.get("bbox_west"));
		var northEast = new L.LatLng(this.get("bbox_north"), this.get("bbox_east"));
		var bounds = new L.LatLngBounds(southWest, northEast);
		return bounds;
	}
});