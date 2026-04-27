const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
const input = document.getElementById("inputPokemon");
const btn = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");
const loading = document.getElementById("loading");
const error = document.getElementById("error");


btn.addEventListener("click", buscarPokemon);
function mostrarLoading(mensaje) {
    loading.innerText = mensaje;
}


function mostrarError(mensaje) {
    error.innerText = mensaje;
}


function limpiarEstados() {
    mostrarLoading("");
    mostrarError("");
}
function validarInput(valor) {
    return valor !== "";
}
async function obtenerPokemon(nombre) {
    const response = await fetch(URL_BASE + nombre);


    if (!response.ok) {
        throw new Error("No encontrado");
    }


    return await response.json();
}
function renderPokemon(data) {


    const nombre = data.name.toUpperCase();
    const imagen = data.sprites.front_default;
    const peso = data.weight;
    const altura = data.height;


    const tipos = data.types
        .map(t => `<span class="tipo">${t.type.name}</span>`)
        .join("");


    resultado.innerHTML = `
        <h2>${nombre}</h2>
        <img src="${imagen}">
        <div class="tipos">${tipos}</div>
        <p><strong>Peso:</strong> ${peso}</p>
        <p><strong>Altura:</strong> ${altura}</p>
    `;


    resultado.classList.remove("oculto");
}


async function buscarPokemon() {


    const valor = input.value.toLowerCase().trim();


    limpiarEstados();
    resultado.classList.add("oculto");


    if (!validarInput(valor)) {
        mostrarError("Ingresá un nombre o ID");
        return;
    }


    try {
        mostrarLoading("Buscando Pokémon...");


        const data = await obtenerPokemon(valor);


        renderPokemon(data);


    } catch (e) {
        mostrarError("El Pokémon no existe");
    }


    mostrarLoading("");
}

