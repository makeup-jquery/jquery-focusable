/**
* @function $.fn.focusable
* @name jquery-focusable
* @version 0.1.0
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @desc Gets all focusable descendant elements for the first element in the set of matched elements
* @param {options}
* @param {boolean} options.findNegativeTabindex
* @param {boolean} options.findPositiveTabindex
* @todo sort return collection by positive tabindex order
*/
(function ($, window, document, undefined) {

    var focusableElements = [
        'a[href]',
        'button:not([disabled])',
        'area[href]',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'iframe',
        'object',
        'embed',
        '*[tabindex]',
        '*[contenteditable]'
    ];

    $.fn.focusable = function focusable(options) {
        var opts = $.extend({}, $.fn.focusable.defaults, options);

        return $(this).first().find(focusableElements.join())
            .filter(function(index) {
                return (opts.findNegativeTabindex === true) ? true : $(this).attr('tabindex') !== '-1';
            })
            .filter(function(index) {
                return (opts.findPositiveTabindex === true) ? true : ($(this).attr('tabindex') > 0 === false);
            }
        );
    };

}(jQuery, window, document));

$.fn.focusable.defaults = {
    findNegativeTabindex : true,
    findPositiveTabindex : true
};
