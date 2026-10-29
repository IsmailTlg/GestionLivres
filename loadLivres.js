/*US-02*/
import { AjouterLivre, k, CreateLivre } from "./script.js";
export {LoadLivres}
let j = Number(localStorage.getItem('total'))
console.log(j)
function LoadLivres(){
    for(let i = 0; i < j; i++){
        let info = JSON.parse(localStorage.getItem(`livre${i}`))
        CreateLivre(info)
    }
}
console.log("test")
LoadLivres()