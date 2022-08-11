window.onload = inicio;
let tarj;
let veces = 0;

function inicio() {
  tarj = document.querySelector(".tarjeta");
  tarj.onclick = modificar;
  crearTarjeta();
}
function crearTarjeta() {
  //Se crea la tarjeta con el precio, la imagen y la descripción dinámicamente
  tarj.innerHTML = `
  <section>
    <div class="precio"></div>
    <div class="imagen"></div>
  </section>
    <div class="descripcion"></div>
  `;
  document.querySelector(".precio").innerHTML = `2€`;
  document.querySelector(".descripcion").innerHTML = `Café de colombia`;
  document.querySelector(".imagen").innerHTML = `Café de colombia`;
  document.querySelector(
    ".imagen"
  ).innerHTML = `<img src="images/tazaCafeRecortada_200_114.png" alt="Café colombia">`;

  //se añade el CSS a la tarjeta
  tarj.classList.add("inicial");
}

function modificar() {
  veces++;
  if (veces == 1) {
    //Al hacer clic se cambia el texto, el precio, también modificamos el src de la imagen actual
    document.querySelector(".precio").innerHTML = `5€`;
    document.querySelector(".descripcion").innerHTML = `Café para llevar`;
    document.querySelector(
      ".imagen img"
    ).src = `images/tazaStarbuckRecortada_56x101.png`;
    tarj.classList.add("segundo");

    /* document.querySelector(
      ".imagen img"
    ).src = `images/tazaStarbuckRecortada.png`;
    console.log(veces);*/
  } else if (veces == 2) {
    document.querySelector(".precio").innerHTML = `6€
    `;
    document.querySelector(".descripcion").innerHTML = `Desayuno completo`;
    document
      .querySelector("section")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="imagen2"><img src = "images/magdalenaRecortada_100.png"></div>`
      );
    tarj.classList.add("tercero");
  } else {
    //se deja como estaba inicialmente

    //borramos clases insertadas dinámicamente
    tarj.classList.remove("tercero");
    tarj.classList.remove("segundo");
    crearTarjeta();
    veces = 0;
  }

  console.log(veces);
}
