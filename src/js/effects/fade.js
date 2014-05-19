Ember.AnimatedContainerView.registerEffect('fade', function(ct, newView, oldView, callback) {
    var newEl = newView.$(),
        oldEl = oldView.$();
    newEl.addClass('eac-fade-new');
    oldEl.addClass('eac-fade-old');
    setTimeout(function() {
        oldEl.addClass('eac-fade-old-fading');
        setTimeout(function() {
            newEl.removeClass('eac-fade-new');
            callback();
        }, 550);
    }, 0);
});