(function() {

var slide = function(ct, newView, oldView, callback, direction, slow) {
    var ctEl = ct.$(),
        newEl = newView.$(),
        duration = slow ? 1050 : 350;

    ctEl.addClass('eac-ct-sliding');
    ctEl.addClass('eac-slide-'+direction+'-ct');

    if (slow) {
        ctEl.addClass('eac-slide-slow-ct')
    }
    
    newEl.addClass('eac-slide-new').css({'top': $('body').scrollTop()});
    newEl.addClass('eac-slide-'+direction+'-new');
    setTimeout(function() {
        ctEl.addClass('eac-slide-'+direction+'-ct-sliding');
        
        setTimeout(function() {
           $('body').scrollTop(0,0); // scroll to top
            ctEl.removeClass('eac-slide-'+direction+'-ct');
            if (slow) {
                ctEl.removeClass('eac-slide-slow-ct')
            }
            ctEl.removeClass('eac-slide-'+direction+'-ct-sliding');
            ctEl.removeClass('eac-ct-sliding');
            newEl.removeClass('eac-slide-'+direction+'-new');
            newEl.removeClass('eac-slide-new');
            newEl.removeAttr('style'); // remove scrollY height
            callback();
        }, duration);
    }, 0);
};

Ember.AnimatedContainerView.registerEffect('slideLeft', function(ct, newView, oldView, callback) {
    slide(ct, newView, oldView, callback, 'left', false);
});

Ember.AnimatedContainerView.registerEffect('slideRight', function(ct, newView, oldView, callback) {
    slide(ct, newView, oldView, callback, 'right', false);
});

Ember.AnimatedContainerView.registerEffect('slideUp', function(ct, newView, oldView, callback) {
    slide(ct, newView, oldView, callback, 'up', false);
});

Ember.AnimatedContainerView.registerEffect('slideDown', function(ct, newView, oldView, callback) {
    slide(ct, newView, oldView, callback, 'down', false);
});

Ember.AnimatedContainerView.registerEffect('slowSlideLeft', function(ct, newView, oldView, callback) {
    slide(ct, newView, oldView, callback, 'left', true);
});

Ember.AnimatedContainerView.registerEffect('slowSlideRight', function(ct, newView, oldView, callback) {
    slide(ct, newView, oldView, callback, 'right', true);
});

Ember.AnimatedContainerView.registerEffect('slowSlideUp', function(ct, newView, oldView, callback) {
    slide(ct, newView, oldView, callback, 'up', false);
});

Ember.AnimatedContainerView.registerEffect('slowSlideDown', function(ct, newView, oldView, callback) {
    slide(ct, newView, oldView, callback, 'down', false);
});

})();
