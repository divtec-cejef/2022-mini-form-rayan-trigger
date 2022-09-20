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
    formulaire.reset();
    btCreer.classList.remove(`animate__heartBeat`);
    // Récupérer le bouton
    const btCreer = document.querySelector(`[type="submit"]`);
    // Animer le bouton
    btCreer.classList.add(`animate__heartBeat`);
    btCreer.addEventListener(`animationend`, function () {
    });
});

//Au changement de la valeur de la liste
const background = document.getElementById('background');
background.addEventListener('change', function(event) {
    event.preventDefault();//Annule le comportement par défault (submit)
const image = `url(./img/backgrounds/${background.value})`;
    document.body.style.backgroundImage =`url(${image})`;
})