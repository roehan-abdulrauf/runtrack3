
function afficherjourssemaines() {

    var jourssemaines = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samed','dimanche'];
    
    for (var i=0; i<jourssemaines.length; i++) {
        document.write(jourssemaines[i] + ' ');
    }
}
afficherjourssemaines()