console.log("Hola desde app.js");

/*
const datos = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((datos) => {
    console.log(datos);
  });
*/

const btnGetDatos = document.getElementById("btnGetDatos");
const contentData = document.getElementById("contentData");

const obtenerDatos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response);
  const data = await response.json();
  console.log(data);

  data.forEach((element) => {
    const divX = document.createElement("div");

    divX.classList.add("col-md-4");

    divX.innerHTML = `
    
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.body}</p>
    <a href="#" class="card-link">Detalles</a>
    <a href="#" class="card-link">Otra cosa</a>
  </div>
</div>
  
  `;

    contentData.appendChild(divX);
  });
};

btnGetDatos.addEventListener("click", obtenerDatos);
