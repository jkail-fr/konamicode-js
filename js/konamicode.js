// Affiche des informations sur un événement clavier
var code = [38,38,40,40,37,39,37,39,66,65,32]
var i = 0

function infosClavier(e) {
    var frappe = e.keyCode;
    if (i < 10)
    {
        if (frappe == code[i])
        {
            console.log('étape '+i);
            i++;
        }
        else
        {
            i=0;
        }
    }
    else if (i = 10)
    {
        alert('konamicode activated');
        i=0;
    }

}

var saisie = document.addEventListener("keydown", infosClavier);
