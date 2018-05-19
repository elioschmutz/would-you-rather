/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import 'bootstrap';
import 'trix';
import 'select2/dist/js/select2.full';
var $ = require("jquery");


$(window).on('load', function() {
    $(".recipe-edit #categories").select2({
        tags: true
    });

});
