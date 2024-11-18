// dati input

const listaElem = document.getElementById("lista");
const btnElem = document.getElementById("btn");

const iterazioni = 10;

// esecuzione

btnElem.addEventListener("click" , function() {
    listaElem.innerHTML = ""; //  svuota lista attuale
for ( let i = 0; i < iterazioni; i++ ) // ciclo for per 10 iterazioni
axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
    console.log(resp.data.response); // crea un email random
    
    listaElem.innerHTML += `<li class="list-group-item"> ${resp.data.response} </li>`; // aggiunge e somma ogni mail in un <li>
})

});