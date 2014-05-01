var BaseLayersCollection = Backbone.Collection.extend({
	model: BaseLayer,
	
	url: function() {
		return "js/models/layers.min.json"
	},
	initialize: function(options) {
		options || (options = {});
		this.bind("change", this.process, this);

	},
	parse: function(data) {
		var layers = data.layers;
		return layers;
	},

	process: function(amodel) {
		if(amodel.get('active') == true) {
			//A model was toggled ON, so check if a different model is already selected
			var nonActive = this.find(function(model) {
				return model !== amodel && model.get('active')==true;
			});

			if(nonActive != null) {
				//Another model was selected, so toggle it to off
				nonActive.set({
					'active': false
				},{'render':1});
			}

		}
	}

});