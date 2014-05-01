var BaseLayerMenuView = Backbone.View.extend({
  tagName:"li",
  template: Handlebars.templates['tpl-menu-baselayer-item'],
  events: {
    "click .thumbnail":"activate",
    // "click a":"killtt",
    // "click a":"rewire"
  },
  initialize: function() {
    this.render()
    this.model.bind("change", this.render, this);

  },
  killtt:function(){
// tooltip killer
  $(this.el).find("a").tooltip('destroy');

  },

  activate: function(){
this.model.set({"active":true},{'render':0});
  },

	render: function() {
    this.killtt();
    $(this.el).html(this.template(this.model.toJSON()));
    return this
    .rewire()

	},

  rewire:function(){
    // tooltip (or other) hookup
this.$("a").tooltip({placement:'bottom',trigger:'hover'})
return this

  }

});