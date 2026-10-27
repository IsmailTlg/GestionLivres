/*US-01*/
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
            const livresArea = document.getElementById("livresArea")
            const livreCard = document.createElement('div')
            // Styling the card
            livreCard.className = "flex flex-col w-[70%] m-6 p-4 shadow-xl justify-center items-center gap-2"
            //(adding title to the card)
            const titreLivre = document.createElement('h2')
            titreLivre.className = "text-2xl font-bold"
            titreLivre.textContent = titre.value
            livreCard.appendChild(titreLivre)
            //(adding author to card)
            const auteurLivre = document.createElement('h3')
            auteurLivre.textContent = `by ${auteur.value}`
            auteurLivre.classList = "text-xl"
            livreCard.appendChild(auteurLivre)
            //(adding Year)
            const yearLivre = document.createElement('p')
            yearLivre.textContent = `Release: ${year.value}`
            livreCard.appendChild(yearLivre)
            //(adding Genre)
            const genreLivre = document.createElement('p')
            genreLivre.textContent = `Genre: ${genre.value}`
            livreCard.appendChild(genreLivre)
            //(adding description)
            const descripLivre = document.createElement('p')
            descripLivre.textContent = `Description: ${description.value}`
            livreCard.appendChild(descripLivre)
            //(adding state)
            const stateLivre = document.createElement('p')
            stateLivre.textContent = `state: ${state.value}`
            livreCard.appendChild(stateLivre)
            livresArea.appendChild(livreCard)
            dialogue.close()
            e.preventDefault()
        }
        
    })
}
AjouterLivre()

