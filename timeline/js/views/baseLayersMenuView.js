var BaseLayersMenuView = Backbone.View.extend({
  el: "#menu-basemap",
  tagName : "ul",
  className : "thumbnails",

  initialize:function(){
    this.render();
  },

render : function() {

    this.collection.each(function(baselayer) {
      var appBaseLayerMenuView = new BaseLayerMenuView({ model : baselayer });
      $(this.el).append(appBaseLayerMenuView.render().el);
    }, this);
    return this
  }
});