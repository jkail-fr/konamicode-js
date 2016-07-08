/**
 * Created by jkail on 08/07/2016.
 */

var konami = "38,38,40,40,37,39,37,39,66,65";

document.addEventListener("keydown", function(e) {
    var frappe = String.fromCharCode(e.charCode);
    var i =0
    while ((frappe = konami.lenght[i]) && (i > 9 )) {
        i++
    }
    window.location = "http://benoit-boutault.fr";
});