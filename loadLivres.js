/*US-02*/
import { AjouterLivre, k, CreateLivre } from "./script.js";
import { livres } from "./AfficherLivres.js";
export {LoadLivres}
function LoadLivres(){
    let j = Number(localStorage.getItem('total'))
    for(let i = 0; i < j; i++){
        let info = JSON.parse(localStorage.getItem(`livre${i}`)) || 0;
        if(info == 0){
            continue;
        }
        CreateLivre(info)
    }
}
