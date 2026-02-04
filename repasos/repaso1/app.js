let inpPoke = document.getElementById("inpPoke");
let btnBuscar = document.getElementById("btnBuscar");
let divContenido = document.getElementById("divContenido");

let buscar = async (poke) => {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  let data = await response.json();

  let pokeInfo = document.createElement("div");

  pokeInfo.innerHTML = `
    
    <h3>${data.name}</h3>
    
    `;

  divContenido.appendChild(pokeInfo);
};

btnBuscar.addEventListener("click", () => {
  buscar(inpPoke.value);
});
