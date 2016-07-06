/**
 * Created by Jkail on 06/07/2016.
 */

document.addEventListener("keydown", function(e) {
        var konami = "38,38,40,40,37,39,37,39,66,65";
        var frappe = String.fromCharCode(e.charCode);
        //var saisie = saisie + [frappe];
        saisie.push(e.charCode);
        var verification = saisie.indexOf(konami);
        if (verification >= 0) {
            //Code JS
            window.location = "http://benoit-boutault.fr";
        }
    });
 /*
if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function (e) {
            kkeys.push(e.keyCode);
            if (kkeys.toString().indexOf(konami) >= 0)
                window.location = "http://ejohn.org/apps/hero/";
        },
        true);
}
     */