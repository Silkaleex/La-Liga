// console.log(partidos);

// //donde estan los partidos
// let partidosJugados = partidos.matches;
// console.log(partidosJugados);

// //Acceder al primer partido
// let primerPartido = partidos.matches[0];
// console.log(primerPartido);

// //nombre de equipo local
// let equipoLocal = partidos.matches[0].homeTeam.name;
// console.log(`El equipo local es:${equipoLocal}`);

// //nombre equipo visitante
// let equipoVisitante = partidos.matches[0].awayTeam.name;
// console.log(`El equipo Visitante es es:${equipoVisitante}`);

// //resultado equipo local
// let resultadoEquipoLocal = partidos.matches[0].score.fullTime.homeTeam;
// console.log(`Goles del equipo locales es de: ${resultadoEquipoLocal} goles`);

// //resultado equipo visitante
// let resultadoEquipoVisitante = partidos.matches[0].score.fullTime.awayTeam;
// console.log(
//   `Goles del equipo visitante es de: ${resultadoEquipoVisitante} goles`
// );

// //jornada
// let jornada = partidos.matches[0].matchday;
// console.log(`La jornada es de:${jornada}`);

// //fecha partido
// let fechaPartido = partidos.matches[0].utcDate;
// console.log(`fecha prevista para el partido es de ${fechaPartido}`);

let matches = partidos.matches;

let alerta1 = document.getElementById("alert");
alerta1.style.display = "none";

let linearGradientString = "linear-gradient(to right, #fb8b24, #faa307)";

function crearTabla(table) {
  let tabla = document.getElementById("Tbody");
  //este elemento filtra el contenido de la tabla una vez su busqueda
  tabla.innerHTML = "";

  for (let i = 0; i < table.length; i++) {
    //Creamos una etiqueta tr que es una FILA
    let tr = document.createElement("tr");

    //Equipo Local
    //Aqui creamos un elemento vacio con CREATEELEMENT que es una <p>
    //puede ser otra etiqueta pero en este caso ponemos una <p>
    let equipoL = document.createElement("p");
    //sacamos las imagenes del logo del Local
    let escudoL = document.createElement("img");
    escudoL.setAttribute(
      "src",
      "https://crests.football-data.org/" + table[i].homeTeam.id + ".svg"
    );
    escudoL.classList.add("imagen");

    //INNERHTML añade el contenido a nuestra etiqueta <p> de equipoL
    equipoL.innerHTML = table[i].homeTeam.name;
    equipoL.classList.add("rgh");
    // console.log(equipoL);
    //Equipo Visitante
    let equipoV = document.createElement("p");
    equipoV.innerHTML = table[i].awayTeam.name;
    //sacamos las imagenes del logo del Visitante
    let escudoV = document.createElement("img");
    escudoV.setAttribute(
      "src",
      "https://crests.football-data.org/" + table[i].awayTeam.id + ".svg"
    );
    escudoV.classList.add("imagen");

    // console.log(equipoV);
    //resultado equipo Local
    let reslt = document.createElement("p");
    reslt.innerHTML =
      table[i].score.fullTime.homeTeam + "-" + table[i].score.fullTime.awayTeam;
    reslt.classList.add("centrado");
    // console.log(resltL);
    //resultado equipo Visitante
    // let resltV = document.createElement("p");
    // resltV.innerHTML = table[i].score.fullTime.awayTeam;
    // console.log(resltV);
    //resultado Jornada
    let jornada = document.createElement("p");
    jornada.innerHTML = table[i].matchday;

    jornada.classList.add("centrado");
    // console.log(jornada);
    let fecha = new Date(table[i].utcDate);

    //resultado de partido
    // let partido = document.createElement("p");
    // partido.innerHTML = table[i].utcDate;
    // console.log(partido);

    //unimos todos los valores anteriores
    let datos = [
      equipoL,
      escudoL,
      reslt,
      escudoV,
      equipoV,
      jornada,
      fecha.toLocaleString(),
    ];
    //vamos a hacer un bucle for anidado*
    for (let j = 0; j < datos.length; j++) {
      //Aqui vamos a unir los elementos como son  tr(fila),td(columna),p(texto),table con append
      //aqui unimos td con los datos de nuestro tr
      let td = document.createElement("td");
      td.append(datos[j]);
      tr.append(td);
    }
    tabla.append(tr);
  }
}
crearTabla(matches);

//Filtrado de busqueda
//Explicación
//Creamos un atributo Id a boton de filtrado
let botonBusqueda = document.getElementById("btn");
//Añadimos el elemeno click que cuando pulsemos eliminemos los datos que no necesitemos
botonBusqueda.addEventListener("click", () => {
  //contiene todos los datos de los partidos de futbol y sus clasificaciones
  filtrado(matches);
});
//creamos una funcion con el filtrado
function filtrado(equipoS) {
  //creamos un atributo en el input y ponemos el value que es el valor inicial del input
  let buscar = document.getElementById("buscar").value;
  let radioBoton = document.querySelector("input[type=radio]:checked");
  //creamos el filtrado con condiciones
  let datosEquipo = equipoS.filter((partidos) => {
    //cogemos los datos de equipo local y visitante, los detectara en Minuscula
    //y le añadimos a nuestro boton los datos de los equipos para cuando una vez escribamos
    //y pulsemos al boton automaticamente lea estos datos y los ponga en nuesta tabla Tbody
    //retornara true los valores que queramos y false los eliminara
    if (
      partidos.homeTeam.name.toLowerCase().includes(buscar.toLowerCase()) ||
      partidos.awayTeam.name.toLowerCase().includes(buscar.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });
  console.log(datosEquipo);

  if (datosEquipo.length === 0) {
    return (
      (alerta1.style.display = "block"),
      (alerta1.style.fontWeight = "bold"),
      (alerta1.style.fontSize = "25px"),
      (alerta1.style.margin = "2% auto"),
      (alerta1.style.textAlign = "center"),
      (alerta1.style.backgroundImage = linearGradientString),
      (alerta1.style.textShadow = "0 2px 2px #fff"),
      (alerta1.style.color = "#9d0208")
    );
  } else {
    alerta1.style.display = "none";
  }

  crearTabla(datosEquipo);

  let filtroBotones = datosEquipo.filter((equipos) => {
    if (radioBoton.value === "Ganados") {
      if (
        (equipos.homeTeam.name.toLowerCase().includes(buscar.toLowerCase()) &&
          equipos.score.winner === "HOME_TEAM") ||
        (equipos.awayTeam.name.toLowerCase().includes(buscar.toLowerCase()) &&
          equipos.score.winner === "AWAY_TEAM")
      ) {
        return true;
      }
    }
    if (radioBoton.value === "Perdidos") {
      if (
        (equipos.homeTeam.name.toLowerCase().includes(buscar.toLowerCase()) &&
          equipos.score.winner === "AWAY_TEAM") ||
        (equipos.awayTeam.name.toLowerCase().includes(buscar.toLowerCase()) &&
          equipos.score.winner === "HOME_TEAM")
      ) {
        return true;
      }
    }
    if (radioBoton.value === "Empatados" && equipos.score.winner === "DRAW") {
      return true;
    }
    if (radioBoton.value === "Proximos" && equipos.status === "SCHEDULED") {
      return true;
    }
  });

  crearTabla(filtroBotones);
}
