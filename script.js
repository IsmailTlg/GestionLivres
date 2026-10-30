export {AjouterLivre, CreateLivre, k}
import { LoadLivres } from "./loadLivres.js";
import { livres } from "./AfficherLivres.js";
import { DeleteLivre } from "./delete.js";
/*US-01*/
let k = Number(localStorage.getItem('total')) || 0;

//array takes title, author, year, genre, description, state
function CreateLivre(arr){
    const livreCard = document.createElement('div')
    // Styling the card
    livreCard.className = "flex flex-col w-[70%] m-6 p-4 shadow-xl justify-center items-center gap-2 hover:-translate-y-2 transition-transform duration-150"
    //(adding title to the card)
    const titreLivre = document.createElement('h2')
    titreLivre.className = "text-2xl font-bold"
    titreLivre.textContent = arr[0];
    livreCard.appendChild(titreLivre)
    //(adding author to card)
    const auteurLivre = document.createElement('h3')
    auteurLivre.textContent = `by ${arr[1]}`
    auteurLivre.classList = "text-xl"
    livreCard.appendChild(auteurLivre)
    //(adding Year)
    const yearLivre = document.createElement('p')
    yearLivre.textContent = `Release: ${arr[2]}`
    livreCard.appendChild(yearLivre)
    //(adding Genre)
    const genreLivre = document.createElement('p')
    genreLivre.textContent = `Genre: ${arr[3]}`
    livreCard.appendChild(genreLivre)
    //(adding description)
    const descripLivre = document.createElement('p')
    descripLivre.textContent = `Description: ${arr[4]}`
    livreCard.appendChild(descripLivre)
    //(adding state)
    const stateLivre = document.createElement('p')
    stateLivre.textContent = `state: ${arr[5]}`
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
        if(titre.value == "" || auteur.value == ""){
            e.preventDefault()
        }
        else{
            let bookValues = [titre.value, auteur.value, year.value, genre.value, description.value, state.value]
            localStorage.setItem(`livre${k}`, JSON.stringify(bookValues))
            CreateLivre([titre.value, auteur.value, year.value, genre.value, description.value, state.value])
            dialogue.close()
            e.preventDefault()
            //storing current book in local storage
            k = Number(k) + 1;
            localStorage.setItem('total', k)
            ///////
        }
        
    })
}
