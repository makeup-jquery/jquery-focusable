/**
* @function $.fn.focusable
* @name jquery-focusable
* @version 0.2.0
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @desc Gets all focusable descendant elements for the first element in the set of matched elements
* @param {options}
* @param {boolean} options.findNegativeTabindex
* @param {boolean} options.findPositiveTabindex
*/
(function ($, window, document, undefined) {

    var focusableElementsList = [
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

    var focusableElementsSelector = focusableElementsList.join();

    var defaults = {
        findNegativeTabindex : true,
        findPositiveTabindex : true
    };

    $.fn.focusable = function focusable(options) {
        var opts = $.extend({}, defaults, options);

        return $(this).first().find(focusableElementsSelector)
            .filter(function() {
                // if findNegativeTabindex option is truthy, immediately return the element.
                // otherwise only return the element if tabindex is not negative
                return opts.findNegativeTabindex || ($(this).attr('tabindex') !== '-1');
            })
            .filter(function() {
                // if findPositiveTabindex option is truthy, immediately return the element.
                // otherwise only return the element if tabindex is not positive
                return opts.findPositiveTabindex || ($(this).attr('tabindex') > 0 === false);
            }
        );
    };

}(jQuery, window, document));
