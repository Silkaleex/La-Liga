//console.log(clasificacion);

// //Donde estan los equipos
// let datosClasificacion = clasificacion.standings[0].table;
// console.log(datosClasificacion);

// //Coger el primer equipo de la clasificacion
// let equipoClasificado = clasificacion.standings[0].table[0];
// console.log(equipoClasificado);

// //Datos del primer equipo en primera posicion
// let primeraPosicion = clasificacion.standings[0].table[0].team.name;
// console.log(`El equipo en primera posicion es: ${primeraPosicion}`);

// //nombre del segundo equipo en segunda posicion
// let segundoEquipo = clasificacion.standings[0].table[1].team.name;
// console.log(`El equipo en segunda posicion es: ${segundoEquipo}`);

// //partidas ganadas
// let partidasGanadas = clasificacion.standings[0].table[1].won;
// console.log(`El equipo de primera posicion gano: ${partidasGanadas} veces`);

// //derrotas
// let derrotas = clasificacion.standings[0].table[0].lost;
// console.log(`El equipo de primera posicion perdio: ${derrotas} veces`);

// //goles a favor
// let golesAFavor = clasificacion.standings[0].table[0].goalsFor;
// console.log(`El equipo a metido un total de: ${golesAFavor} goles`);

// //goles en contra
// let golesEnContra = clasificacion.standings[0].table[0].goalsAgainst;
// console.log(`El equipo le metieron en total de:${golesEnContra} goles`);

// //Diferencia de goles
// let diferenciaDeGoles = clasificacion.standings[0].table[0].goalDifference;
// console.log(`La diferencia de goles es de: ${diferenciaDeGoles}`);

// //Puntos
// let puntos = clasificacion.standings[0].table[0].points;
// console.log(`Los puntos totales de este equipo es de: ${puntos}`);

// //console.log de todos los datos de classificacion
// //crear variables y hacer console.log(variables)

//Creando la tabla con Dom y bucle For

let datosClasificacion = clasificacion.standings[0].table;
console.log(datosClasificacion);

function tablaClasificacion(clasificar) {
  let tbody = document.getElementById("element");

  for (let i = 0; i < clasificar.length; i++) {
    let fila = document.createElement("tr");

    //Posicion
    let pos = document.createElement("p");
    pos.innerHTML = clasificar[i].position;
    // console.log(pos);

    let escudo = document.createElement("img");
    escudo.setAttribute("src", clasificar[i].team.crestUrl);
    escudo.classList.add("imagen");

    //Nombre del equipo
    let nomEq = document.createElement("p");
    nomEq.innerHTML = clasificar[i].team.name;
    // console.log(nomEq);

    //Partidas Ganadas
    let ganados = document.createElement("p");
    ganados.innerHTML = clasificar[i].won;
    // console.log(ganados);

    //Partidos Empatados
    let empate = document.createElement("p");
    empate.innerHTML = clasificar[i].draw;
    // console.log(empate);

    //Partidos Perdidos
    let perdidos = document.createElement("p");
    perdidos.innerHTML = clasificar[i].lost;
    // console.log(perdidos);

    //Goles Ganados
    let golesGanados = document.createElement("p");
    golesGanados.innerHTML = clasificar[i].goalsFor;
    // console.log(golesGanados);

    //Goles Perdidos
    let golesPerdidos = document.createElement("p");
    golesPerdidos.innerHTML = clasificar[i].goalsAgainst;
    // console.log(golesPerdidos);

    //Diferencia de goles
    let diferencia = document.createElement("p");
    diferencia.innerHTML = clasificar[i].goalDifference;
    // console.log(diferencia);

    //Puntos totales
    let puntos = document.createElement("p");
    puntos.innerHTML = clasificar[i].points;
    // console.log(puntos);

    let objetos = [
      pos,
      escudo,
      nomEq,
      ganados,
      empate,
      perdidos,
      golesGanados,
      golesPerdidos,
      diferencia,
      puntos,
    ];

    for (let d = 0; d < objetos.length; d++) {
      let columna = document.createElement("td");
      columna.append(objetos[d]);
      fila.append(columna);
    }
    tbody.append(fila);
  }
}
tablaClasificacion(datosClasificacion);
