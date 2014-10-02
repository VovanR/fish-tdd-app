/**
 * @author VovanR <mail@vovanr.com>
 */

define([
], function (
) {

    'use strict';

    var Bar;

    /**
     * Bar module
     *
     * @constructor
     */
    Bar = function () {
        this._name = 'Bar';
    };

    Bar.prototype = {
        /**
         * Returns module name
         *
         * @returns {String} name
         */
        getName: function () {
            return this._name;
        },

        /**
         * Set module name
         *
         * @param {String} name
         */
        setName: function (name) {
            this._name = name;
        },
    };

    return Bar;

});
