import { livres, showLivres } from "./AfficherLivres.js";
export {DeleteLivre}
let gap = 0;
function DeleteLivre(){
    const ariaLivres = document.getElementById("livresArea")
    ariaLivres.addEventListener('click', (event) => {
        if(event.target.tagName === 'BUTTON'){
            let btn = event.target.closest('div');
            let index = livres.indexOf(btn.parentElement)
            let livresValues = JSON.parse(localStorage.getItem('livres'))
            livres.splice(index, 1)
            livresValues.splice(index, 1)
            localStorage.setItem('livres', JSON.stringify(livresValues))
            showLivres(livres)


        }
    })
}
