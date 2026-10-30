import { livres, showLivres } from "./AfficherLivres.js";
export {DeleteLivre}
function DeleteLivre(){
    const ariaLivres = document.getElementById("livresArea")
    ariaLivres.addEventListener('click', (event) => {
        if(event.target.tagName === 'BUTTON'){
            let btn = event.target.closest('div');
            let index = livres.indexOf(btn.parentElement)
            livres.splice(index, 1)
            showLivres(livres)

        }
    })
}
