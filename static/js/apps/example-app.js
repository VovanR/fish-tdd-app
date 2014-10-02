/**
 * @author VovanR <mail@vovanr.com>
 */

define([
    'jquery',
    '../modules/foo',
    '../modules/bar',
], function (
    $,
    Foo,
    Bar
) {

    var App;

    App = function () {
        this._initialize();
    };

    App.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _initialize: function () {
            console.info('App init');

            this.Foo = new Foo();

            var input = $('#foo-name');
            input.val(this.Foo.getName());

            this.Bar = new Bar();
            $('#bar-name').val(this.Bar.getName());
        },
    };

    return App;

});
