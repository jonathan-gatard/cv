/*----------------------------------------------------*/
/*	Boutons VoirPlus
/*----------------------------------------------------*/

function afficherPlus(index) {
    // Get the index from the data-index attribute of the clicked button
    var nb_details = document.getElementsByClassName("div-experiences-details").length

    // Get the div_details element associated with the clicked button using the index
    var div = document.getElementsByClassName('div-experiences-details')[nb_details - index];
    div.style.display = 'block';

    var btn = document.getElementsByClassName('btn-experiences-details')[nb_details - index];
    btn.style.display = 'none';

}
