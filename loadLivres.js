/*US-02*/
import { AjouterLivre, k, CreateLivre} from "./script.js";
import { livres } from "./AfficherLivres.js";
export {LoadLivres}
function LoadLivres(){
    let livresValues = JSON.parse(localStorage.getItem('livres'))
    for(let i = 0; i<livresValues.length; i++){
        CreateLivre(livresValues[i])
    }
    
    
}

