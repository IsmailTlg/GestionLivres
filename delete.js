import { livres, showLivres } from "./AfficherLivres.js";
export { deleteLivre }
function deleteLivre(){
    let livresValues = JSON.parse(localStorage.getItem('livres'))
    const ariaLivres = document.getElementById("livresArea")
    ariaLivres.addEventListener('click', (event) => {
        if(event.target.id === 'btnDelete'){
            let btn = event.target.closest('div');
            let index = livres.indexOf(btn.parentElement)
            livres.splice(index, 1)
            livresValues.splice(index, 1)
            localStorage.setItem('livres', JSON.stringify(livresValues))
            showLivres(livres)
        }
    })
}
