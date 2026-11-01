import { livresValues } from "./script.js";
export {sortLivres}
function sortLivres(){
    const sortOption = document.getElementById("tri")
    sortOption.addEventListener('change', function(){
        if(sortOption.value == "ParTitre"){
            livresValues.sort((a, b) => a.title.localeCompare(b.title))
        }
        else if(sortOption.value == "ParAuteur"){
            livresValues.sort((a, b) => a.author.localeCompare(b.author))
        }
        else if(sortOption.value == "ParAnnee"){
            livresValues.sort((a, b) => Number(a.year) - Number(b.year))
        }
        localStorage.setItem('livres', JSON.stringify(livresValues))
        location.reload()
    })
}