/**
 * @author VovanR <mail@vovanr.com>
 */

require(['./common'], function (common) {

    var app;

    require(['./apps/example-app'], function (App) {
        app = new App();
    });

});
