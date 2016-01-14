/**
* @function $.fn.focusable
* @name jquery-focusable
* @version 0.0.5
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @desc Finds all focusable descendant elements of the given selector and returns
* them as a new jQuery object
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

        return $(this).find(focusableElements.join())
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
