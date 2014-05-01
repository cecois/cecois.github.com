var BaseMapView = Backbone.View.extend({

	id: "map",

	initialize: function() {
		options = null;
		// we watch for changes in the collection, but then selectively apply them to the map within render
		this.collection.bind("change", this.render, this);
	},
	getActiveLayer:function(){
		var activeLayer = _.find(this.collection.models, function(lay) {
			return lay.get("active") == true;
		});
		return activeLayer

	},
	render: function(model,options) {

		if(options == null || options.render==1){

		var activeLayer = this.getActiveLayer()

		var def = activeLayer.get("definition");

		// remove global layer here first so we don't keep stacking baselayers
		// (we only need one baselayer at a time, of course)
		if(typeof baseLayer == 'undefined') {
			baseLayer = null;
		} else {
			map.removeLayer(baseLayer);
		}

		if(activeLayer.get("source") == "stamen") {

			baseLayer = new L.StamenTileLayer(def.id);
		} else if(def.subdomains != undefined) {

			baseLayer = new L.TileLayer(def.url, {
				subdomains: def.subdomains,
				maxZoom: 18
			});
		} else {
			baseLayer = new L.TileLayer(def.url, {
				maxZoom: 18
			});
		}
		map.addLayer(baseLayer);

		}

	}

});