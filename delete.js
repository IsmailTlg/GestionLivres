import { livres, showLivres } from "./AfficherLivres.js";
export {DeleteLivre}
let gap = 0;
function DeleteLivre(){
    const ariaLivres = document.getElementById("livresArea")
    ariaLivres.addEventListener('click', (event) => {
        if(event.target.tagName === 'BUTTON'){
            let btn = event.target.closest('div');
            let index = livres.indexOf(btn.parentElement)
            let total = Number(localStorage.getItem('total'))
            total--;
            localStorage.setItem('total', total)
            livres.splice(index, 1)
            showLivres(livres)
            console.log(index)
            localStorage.removeItem(`livre${index+gap}`)
            gap++;

        }
    })
}
