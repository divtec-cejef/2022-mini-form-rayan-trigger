/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

console.log('Test liaison JS');
const formulaire = document.querySelector('form')
formulaire.addEventListener('submit', function(event) {
    event.preventDefault();//Annule le comportement par défault (submit)
    alert('Envoyé !');
})

//Au changement de la valeur de la liste
const background = document.getElementById('background')
background.addEventListener('change', function(event) {
    event.preventDefault();//Annule le comportement par défault (submit)
    document.body.style.backgroundImage = `url(./img/backgrounds/${background.value})`
})