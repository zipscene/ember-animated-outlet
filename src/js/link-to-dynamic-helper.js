Ember.onLoad('Ember.Handlebars', function(Handlebars) {
  Ember.Handlebars.registerHelper('link-to-dynamic', function(path, animation, model) {
    // TODOS:
      // if path matches, do nothing
      // when clicking to previous page in same resource
      // add nav at an accessible global level

      var animations = {}, 
      pathArray = [], 
      collection, itemKeyCurrent, itemKeyDest, outletName, routerPath, pathItem, i;

      path = path || 'index';

      if(path === 'back') {
      // go back to the previous page (TODO - CREATE HISTORY MIXIN THAT STORES ALL VISITED PAGES)
      Ember.AnimatedContainerView.enqueueAnimations({main: 'slideRight'});
      history.go(-1);
      return false;
    }

    // determine animation direction from an array of items
    if(animation === 'array' || animation === 'bar') {
      if(animation === 'array') {
        collection = this.get('page.parent.items');
      } else {
        collection = nav;
      }
      collection.forEach(function(item, itemKey) {
        // get the current item key
        if(item.active) {
          itemKeyCurrent = itemKey;
        }
        // get the destination item key
        if(item.path === path) {
          itemKeyDest = itemKey;
        }
      });

      // determine which way to animate
      animation = (itemKeyCurrent > itemKeyDest) ? 'slideRight' : 'slideLeft';
    } else if(!animation) {
      animation = animation || 'slideLeft';
    }

    // determine the outlet names and apply animation to them
    pathArray = path.split('.');
    animations['main'] = animation;
    for(i = 0 ; i<pathArray.length - 1 ; i++) {
      pathItem = pathArray[pathArray.length - (i+2)];
      if(pathItem) {
        animations[pathItem] = animation;
      }
    }


    // OLD
    var options = [].slice.call(arguments, -1)[0],
    hash = options.hash;

    hash.namedRoute = path;
    hash.currentWhen = path;
    hash.disabledBinding = hash.disabledWhen;

    hash.parameters = {
      context: this,
      options: options,
      animations: animations,
      params: [path]
    };
    return Ember.Handlebars.helpers.view.call(this, AnimatedLinkView, options);
  });
});