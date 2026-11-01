export {livres, showLivres}
import { AjouterLivre } from "./script.js"
import { LoadLivres } from "./loadLivres.js"
import { filtrerLivres } from "./filtrerLivres.js"
import { deleteLivre } from "./delete.js"
import { modifyLivre } from "./modifyLivre.js"
let livres = []

function showLivres(list){
    const livresArea = document.getElementById("livresArea")
    livresArea.replaceChildren()
    for(let i = 0; i<list.length; i++){
        livresArea.appendChild(list[i])
    }
}
modifyLivre()
LoadLivres()
AjouterLivre()
showLivres(livres)
filtrerLivres()
deleteLivre()
