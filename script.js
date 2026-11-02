export {AjouterLivre, CreateLivre, livresValues, etat}
import { LoadLivres } from "./loadLivres.js";
import { livres } from "./AfficherLivres.js";
import { deleteLivre } from "./delete.js";
/*US-01*/
let livresValues = JSON.parse(localStorage.getItem('livres'))||[];
let etat = {
    mode: "ajouter",
    indexLivre: null
}

//array takes title, author, year, genre, description, state
function CreateLivre(obj){
    const livreCard = document.createElement('div')
    // Styling the card
    livreCard.className = "flex flex-col w-[70%] m-6 p-4 shadow-xl justify-center items-center gap-2 hover:-translate-y-2 transition-transform duration-150"
    //(adding title to the card)
    const titreLivre = document.createElement('h2')
    titreLivre.className = "text-2xl font-bold"
    titreLivre.textContent = obj.title;
    livreCard.appendChild(titreLivre)
    //(adding author to card)
    const auteurLivre = document.createElement('h3')
    auteurLivre.textContent = `by ${obj.author}`
    auteurLivre.classList = "text-xl"
    livreCard.appendChild(auteurLivre)
    //(adding Year)
    const yearLivre = document.createElement('p')
    yearLivre.id = "year"
    yearLivre.textContent = `Release: ${obj.year}`
    livreCard.appendChild(yearLivre)
    //(adding Genre)
    const genreLivre = document.createElement('p')
    genreLivre.id = 'genre'
    genreLivre.textContent = `Genre: ${obj.genre}`
    livreCard.appendChild(genreLivre)
    //(adding description)
    const descripLivre = document.createElement('p')
    descripLivre.id = 'description'
    descripLivre.textContent = `Description: ${obj.description}`
    livreCard.appendChild(descripLivre)
    //(adding state)
    const stateLivre = document.createElement('p')
    stateLivre.id = 'status'
    stateLivre.textContent = `state: ${obj.state}`
    livreCard.appendChild(stateLivre)
    //adding modify and delete buttons 
    const btnDiv = document.createElement('div')
    const btnDelete = document.createElement('button')
    const btnModify = document.createElement('button')
    btnDelete.textContent = "Delete"
    btnDelete.id = "btnDelete"
    btnDelete.className = "rounded bg-red-600 px-5 py-2 mt-3 font-semibold text-white hover:bg-red-500/90 focus:outline-2 focus:outline-offset-2 focus:outline-daret-vert hover:cursor-pointer"
    btnModify.textContent = "Modify"
    btnModify.id = "btnModify"
    btnModify.className = "rounded bg-daret-vert px-5 py-2 mt-3 font-semibold text-white hover:bg-daret-vert/90 focus:outline-2 focus:outline-offset-2 focus:outline-daret-vert hover:cursor-pointer"
    btnDiv.appendChild(btnDelete)
    btnDiv.appendChild(btnModify)
    livreCard.classList.add("group")
    livreCard.appendChild(btnDiv)
    btnDiv.className = "opacity-0 group-hover:opacity-100 flex flex-row gap-3"

    livres.push(livreCard)
    livresArea.appendChild(livreCard)
}
function AjouterLivre(){
    const btnAjouter = document.getElementById("ajouterBtn");
    const btnFermer = document.getElementById("fermerBtn")
    const dialogue = document.getElementById("dialogue")
    btnAjouter.addEventListener("click", function(){
        dialogue.showModal()
    })
    btnFermer.addEventListener('click', function(){
        etat.state = "ajouter"
        etat.indexLivre = null
        dialogue.close()
    })
    const form = document.getElementById("formAjouter")
    const titre = document.getElementById("titre")
    const auteur = document.getElementById("auteur")
    const year = document.getElementById("livreYear")
    const genre = document.getElementById("livreGenre")
    const description = document.getElementById("livreDescription")
    const state = document.getElementById("livreStatus")
    form.addEventListener('submit', function(e){
        if(titre.value.trim() == "" || auteur.value.trim() == ""){
            e.preventDefault()
        }
        
        else{
            if(etat.mode == "modifier"){
                let indexLivre = etat.indexLivre
                livresValues[indexLivre].title = titre.value
                livresValues[indexLivre].author = auteur.value
                livresValues[indexLivre].year = year.value
                livresValues[indexLivre].genre = genre.value
                livresValues[indexLivre].description = description.value
                livresValues[indexLivre].state = state.value
                localStorage.setItem('livres', JSON.stringify(livresValues))
                location.reload()
                etat.mode = "ajouter"
                etat.indexLivre = null
            }
            else{
                let livre = {
                    title: titre.value,
                    author: auteur.value, 
                    year: year.value, 
                    genre: genre.value, 
                    description: description.value, 
                    state: state.value
                }
                livresValues.push(livre)
                localStorage.setItem(`livres`, JSON.stringify(livresValues))
                CreateLivre(livre)
            }
            dialogue.close()
            e.preventDefault()
            titre.value = ""
            auteur.value = ""
            year.value = ""
            genre.value = ""
            description.value = ""
            state.value = "to-read"
        }
        
    })
}

