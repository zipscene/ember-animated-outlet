Ember.AnimatedContainerView.registerEffect('flip', function(ct, newView, oldView, callback) {
    var ctEl = ct.$(),
        newEl = newView.$(),
        oldEl = oldView.$();
    ctEl.wrap('<div class="eac-flip-wrap"></div>')
    ctEl.addClass('eac-flip-ct');
    newEl.addClass('eac-flip-new');
    oldEl.addClass('eac-flip-old');
    setTimeout(function() {
        ctEl.addClass('eac-flip-ct-flipping');
        setTimeout(function() {
            ctEl.unwrap();
            ctEl.removeClass('eac-flip-ct');
            ctEl.removeClass('eac-flip-ct-flipping');
            newEl.removeClass('eac-flip-new');
            callback();
        }, 650);
    }, 0);
});