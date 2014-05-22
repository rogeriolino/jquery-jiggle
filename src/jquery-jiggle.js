;(function($) {
    
    var defaults = {
        className: 'jiggle-item'
    };
    
    $.fn.jiggle = function(prop) {
        
        prop = $.extend(null, defaults, prop);
                
        var self = this;
        
        this.createItem = function(char, offset) {
            var delay = (offset * -100) + 'ms';
            return $('<span></span>')
                .text(char)
                .addClass(prop.className)
                .css('animation-delay', delay)
                .css('-webkit-animation-delay', delay)
                .css('-moz-animation-delay', delay)
                .css('-ms-animation-delay', delay)
            ;
        }
        
        this.each(function(i, e) {
            var elem = $(e);
            var text = elem.text();
            elem.html('');
            for (var i = 0; i < text.length; i++) {
                var char = text[i];
                if (char === ' ') {
                    elem.append('&nbsp;');
                } else {
                    elem.append(self.createItem(char, text.length - i));
                }
            }
        });
        
        return this;
    }
    
})(jQuery);
