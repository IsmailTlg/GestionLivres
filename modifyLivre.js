import { livres } from "./AfficherLivres.js"
import { livresValues, etat } from "./script.js"
export {modifyLivre}
function modifyLivre(){
    const dialogue = document.getElementById("dialogue")
    const ariaLivres = document.getElementById('livresArea')
    ariaLivres.addEventListener('click', (event) => {
        if(event.target.id === 'btnModify'){
            let livre = event.target.closest('div')
            let index = livres.indexOf(livre.parentElement)
            etat.mode = "modifier"
            etat.indexLivre = index 
            console.log(index);
            console.log(livresValues[index])
            dialogue.querySelector("form #titre").value = livresValues[index].title
            dialogue.querySelector("form #auteur").value = livresValues[index].author
            dialogue.querySelector("form #livreYear").value = livresValues[index].year
            dialogue.querySelector("form #livreGenre").value = livresValues[index].genre
            dialogue.querySelector("form #livreDescription").value = livresValues[index].description
            dialogue.querySelector("form #livreStatus").value = livresValues[index].etat
            dialogue.showModal();
            
        }
    })

}