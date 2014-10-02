/**
 * @author VovanR <mail@vovanr.com>
 */

define([
], function (
) {

    'use strict';

    var Foo;

    /**
     * Foo module
     *
     * @constructor
     */
    Foo = function () {
        this._name = 'Foo';
    };

    Foo.prototype = {
        /**
         * Returns module name
         *
         * @returns {String} name
         */
        getName: function () {
            return this._name;
        },
    };

    return Foo;

});
