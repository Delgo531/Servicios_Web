const btnBuscar = document.getElementById("btnBuscar");
let inpCoctel = document.getElementById("coctel");
const contentData = document.getElementById("contentData");

const getBebida = async (bebida) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${bebida}`,
  );
  const data = await response.json();
  contentData.innerHTML = ``;
  data.drinks.forEach((element) => {
    const divX = document.createElement("div");

    divX.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${element.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.strDrink}</h5>
        </div>
        </div>
        `;
    contentData.appendChild(divX);
  });
};

btnBuscar.addEventListener("click", async () => {
  let bebida = inpCoctel.value;
  const datos = await getBebida(bebida);
  console.log(datos);
});
