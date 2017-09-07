/* eslint no-undef: 0 */

describe("when selector matches more than one element", function() {
    beforeAll(function() {
        $('body')
            .empty()
            .append('<div><button></button></div>')
            .append('<div><button></button><button></button></div>');

        $focusable = $('div').focusable();
    });
    it("should only return first matched element", function() {
        expect($focusable.length).toBe(1);
    });
});

describe("when matched element contains links", function() {
    beforeAll(function() {
        $('body')
            .empty()
            .append('<a href="http://www.ebay.com"></a>')
            .append('<a></a>');

        $focusable = $('body').focusable();
    });
    it("should only return links with hrefs", function() {
        expect($focusable.length).toBe(1);
    });
});

describe("when matched element contains buttons", function() {
    beforeAll(function() {
        $('body')
            .empty()
            .append('<button></button>')
            .append('<button disabled></button>');

        $focusable = $('body').focusable();
    });
    it("should only return enabled buttons", function() {
        expect($focusable.length).toBe(1);
    });
});

describe("when matched element contains elements with tabindex=0", function() {
    beforeAll(function() {
        $('body').empty();
        $('body')
            .append('<div tabindex="0">')
            .append('<div>')
            .append('<div tabindex="0">');

        $focusable = $('body').focusable();
    });
    it("should return all elements with tabindex=0", function() {
        expect($focusable.length).toBe(2);
    });
});

describe("when matched element contains positive tabindexes", function() {
    beforeAll(function() {
        $('body').empty();
        $('body')
            .append('<button tabindex="1">')
            .append('<button>')
            .append('<button tabindex="2">');

        $focusable = $('body').focusable();
    });
    it("should find positive tabindexes by default", function() {
        expect($focusable.length).toBe(3);
    });
});

describe("when matched element contains positive tabindexes and findPositiveTabindex=false", function() {
    beforeAll(function() {
        $('body').empty();
        $('body')
            .append('<button tabindex="1">')
            .append('<button>')
            .append('<button tabindex="2">');

        $focusable = $('body').focusable({ findPositiveTabindex: false });
    });
    it("should observe option findPositiveTabindex=false", function() {
        expect($focusable.length).toBe(1);
    });
});

describe("when matched element contains negative tabindexes", function() {
    beforeAll(function() {
        $('body').empty();
        $('body')
            .append('<button tabindex="-1">')
            .append('<button>')
            .append('<button tabindex="-1">');

        $focusable = $('body').focusable();
    });
    it("should return elements with negative tabindexes", function() {
        expect($focusable.length).toBe(3);
    });
});

describe("when matched element contains negative tabindexes and findNegativeTabindex=false", function() {
    beforeAll(function() {
        $('body').empty();
        $('body')
            .append('<button tabindex="-1">')
            .append('<button>')
            .append('<button tabindex="-1">');

        $focusable = $('body').focusable({ findNegativeTabindex: false });
    });
    it("should not return elements with negative tabindexes", function() {
        expect($focusable.length).toBe(1);
    });
});
