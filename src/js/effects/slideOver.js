(function() {

var slideOver = function(ct, newView, oldView, callback, direction) {
    var ctEl = ct.$(),
        newEl = newView.$(),
        duration = 450;
    ctEl.addClass('eac-old');
    newEl.addClass('eac-'+direction+'-new');
    newEl.addClass('eac-new');
    setTimeout(function() {
        newEl.addClass('eac-'+direction+'-new-sliding');
        newEl.addClass('eac-sliding');
        setTimeout(function() {
            newEl.removeClass('eac-'+direction+'-new');
            newEl.removeClass('eac-'+direction+'-new-sliding');
            newEl.removeClass('eac-sliding');
            ctEl.removeClass('eac-old');
            callback();
        }, duration);
    }, 0);
};

Ember.AnimatedContainerView.registerEffect('slideOverLeft', function(ct, newView, oldView, callback) {
    slideOver(ct, newView, oldView, callback, 'left');
});

Ember.AnimatedContainerView.registerEffect('slideOverRight', function(ct, newView, oldView, callback) {
    slideOver(ct, newView, oldView, callback, 'right');
});

Ember.AnimatedContainerView.registerEffect('slideOverUp', function(ct, newView, oldView, callback) {
    slideOver(ct, newView, oldView, callback, 'up');
});

Ember.AnimatedContainerView.registerEffect('slideOverDown', function(ct, newView, oldView, callback) {
    slideOver(ct, newView, oldView, callback, 'down');
});

})();
