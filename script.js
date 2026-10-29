export {AjouterLivre, CreateLivre, k}
import { LoadLivres } from "./loadLivres.js";
import { livres } from "./AfficherLivres.js";
/*US-01*/
let k = Number(localStorage.getItem('total')) || 0;

//array takes title, author, year, genre, description, state
function CreateLivre(arr){
    const livreCard = document.createElement('div')
    // Styling the card
    livreCard.className = "flex flex-col w-[70%] m-6 p-4 shadow-xl justify-center items-center gap-2"
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
    livres.push(livreCard)
    //livresArea.appendChild(livreCard)
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
    const submitBtn = document.getElementById("submitBtn")
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
