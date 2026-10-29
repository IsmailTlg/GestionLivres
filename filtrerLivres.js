import { livres, showLivres } from "./AfficherLivres.js";
export {filtrerLivres}
function filtrerLivres(){
    const input = document.getElementById("search");
    let filtered = [...livres];
    input.addEventListener('input', function(){
        filtered = livres.filter(livre => livre.querySelector('h2').textContent.toLowerCase().trim().includes(input.value.toLowerCase().trim()) ||
                                livre.querySelector('h3').textContent.toLowerCase().trim().includes(input.value.toLowerCase().trim()))
        showLivres(filtered)
    })
}
