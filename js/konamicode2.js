/**
 * Created by jkail on 08/07/2016.
 */

var konami = [38,38,40,40,37,39,37,39,66,65];
var i =0;

document.addEventListener("keydown", function(e) {

    var frappe = e.keyCode;

    if (frappe == konami[i]) {
        i++;

        }
    else {
        i = 0;

    }

    if (i > 9) {
        window.location = "http://benoit-boutault.fr";
    }

});