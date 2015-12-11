describe("jquery.focusable.js", function() {

    beforeEach(function() {

        $.fn.focusable.defaults = {
            findNegativeTabindex : true,
            findPositiveTabindex : true,
            orderByTabindex : true
        };

        $('body').empty();
    });

    it("should not find links without hrefs", function(){
        // setup
        $('body').append('<a>');
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(0);
    });

    it("should find links with hrefs", function(){
        // setup
        $('body').append('<a href>');
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(1);
    });

    it("should not find disabled buttons", function(){
        // setup
        $('body').append('<button disabled>');
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(0);
    });

    it("should find buttons", function(){
        // setup
        $('body').append('<button>');
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(1);
    });

    it("should find tabindex=0", function(){
        // setup
        $('body').append('<div tabindex="0">');
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(1);
    });

    it("should find 0 elements", function(){
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(0);
    });

    it("should find 1 element", function(){
        // setup
        $('body').append('<button>');
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(1);
    });

    it("should find 2 elements", function(){
        // setup
        $('body').append('<button>').append('<button>');
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(2);
    });

    it("should find negative tabindexes by default", function(){
        // setup
        $('body').append('<button tabindex="-1">');
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(1);
    });

    it("should find positive tabindexes by default", function(){
        // setup
        $('body').append('<button tabindex="1">');
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(1);
    });

    it("should observe option findNegativeTabindex=false", function(){
        // setup
        $.fn.focusable.defaults.findNegativeTabindex = false;
        $('body')
            .append('<button tabindex="-1">')
            .append('<button>')
            .append('<button tabindex="-1">')
        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(1);
    });

    it("should observe option findPositiveTabindex=false", function(){
        // setup
        $.fn.focusable.defaults.findPositiveTabindex = false;
        $('body')
            .append('<button tabindex="1">')
            .append('<button>')
            .append('<button tabindex="2">')

        // execute
        var $focusable = $('body').focusable();
        // assert
        expect($focusable.size()).toBe(1);
    });

    it("should work on collections of size greater than 1", function(){
        // setup
        $('body').append('<div><button>').append('<div><button>');
        // execute
        var $focusable = $('div').focusable();
        // assert
        expect($focusable.size()).toBe(2);
    });

});
