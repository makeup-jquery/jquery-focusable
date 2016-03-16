/**
 * @file Gets all focusable descendant elements for the first element in the set of matched elements
 * @author Ian McBurnie <ianmcburnie@hotmail.com>
 */

(function($, window, document, undefined) {

    var pluginName = 'jquery-focusable';

    /**
    * jQuery definition to anchor JsDoc comments.
    *
    * @see http://jquery.com/
    * @name $
    * @class jQuery Library
    */

    /**
    * jQuery 'fn' definition to anchor JsDoc comments.
    *
    *
    * @see http://jquery.com/
    * @name fn
    * @class jQuery Plugin Scope
    * @memberof jQuery
    */

    /**
    * Gets all focusable descendant elements for the first element in the set of matched elements
    *
    * @class focusable
    * @version 0.2.3
    * @param {Object} options
    * @param {boolean} options.findNegativeTabindex - will return elements with tabindex equal to -1 by default
    * @param {boolean} options.findPositiveTabindex - will return elements with tabindex greater than 0 by default
    * @return {jQuery} chainable jQuery class
    * @memberof jQuery.fn
    */

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
        findNegativeTabindex: true,
        findPositiveTabindex: true
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
