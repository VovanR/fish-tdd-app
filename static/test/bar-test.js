requirejs([
    '../vendor/chai/chai',
    'jquery',
    '../js/modules/bar',
], function (
    chai,
    $,
    Bar
) {

    'use strict';

    mocha.setup('bdd');
    var assert = chai.assert;

    describe('Bar', function () {
        var module = function () {
            return new Bar();
        };

        var _bFixtureTemplate = $('#fixture-template');
        var _fixtureTemplate = _bFixtureTemplate.html();
        _bFixtureTemplate.empty();

        beforeEach(function () {
            $('#fixtures').html(_fixtureTemplate);
        });

        afterEach(function () {
        });

        describe('constructor', function () {
            it('should initialize', function () {
                var m = module();
                assert.isDefined(m);
            });
        });

        describe('#getName', function () {
            it('should return name', function () {
                var m = module();
                assert.equal(m.getName(), 'Bar');
            });
        });

        describe('#setName', function () {
            it('should change name', function () {
                var m = module();
                assert.equal(m.getName(), 'Bar');
                m.setName('Lol');
                assert.equal(m.getName(), 'Lol');
            });
        });
    });

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }

});
