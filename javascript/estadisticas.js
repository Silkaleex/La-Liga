let estadisticas = partidos.matches;
console.log(estadisticas);

function datosEstadisticos(partido) {
  let myArray = [];
  for (let i = 0; i < partido.length; i++) {
    if (partido[i].status != "FINISHED") {
      continue;
    }

    let idLocal = partido[i].homeTeam.id;
    //console.log(idLocal);

    let idVisitante = partido[i].awayTeam.id;
    //console.log(idVisitante);

    let nombreEquipoLocal = partido[i].homeTeam.name;
    //console.log(nombreEquipoLocal);

    let nombreEquipoVisitante = partido[i].awayTeam.name;
    //console.log(nombreEquipoVisitante);

    let golesL = partido[i].score.fullTime.homeTeam;
    //console.log(golesL);

    let golesV = partido[i].score.fullTime.awayTeam;
    //console.log(golesV);

    let local;
    for (let r = 0; r < myArray.length; r++) {
      if (myArray[r].id === idLocal) {
        local = myArray[r];
      }
    }
    if (local == undefined) {
      myArray.push({
        goals: golesL,
        name: nombreEquipoLocal,
        id: idLocal,
        matches: 1,
      });
    } else {
      (local.goals += golesL), local.matches++;
    }
    let visitante;
    for (let s = 0; s < myArray.length; s++) {
      if (myArray[s].id === idVisitante) {
        visitante = myArray[s];
      }
    }
    if (visitante == undefined) {
      myArray.push({
        goals: golesV,
        name: nombreEquipoVisitante,
        id: idVisitante,
        matches: 1,
      });
    } else {
      (visitante.goals += golesV), visitante.matches++;
    }
    // console.log(myArray);
    for (let j = 0; j < myArray.length; j++) {
      let mediaGoles = myArray[j].goals / myArray[j].matches;
      myArray[j].avg = mediaGoles;
    }
  }
  let estadistica = myArray.sort((a, b) => b.avg - a.avg);
  console.log(estadistica);

  let topCinco = estadistica.slice(0, 5);
  crearTabla(topCinco);
}

function crearTabla(tabla) {
  let table = document.getElementById("tablaEst");

  for (let i = 0; i < tabla.length; i++) {
    let tr = document.createElement("tr");
    //Goals
    let goals = document.createElement("p");
    goals.innerHTML = tabla[i].goals;
    goals.classList.add("goals");
    //name
    let name = document.createElement("p");
    name.innerHTML = tabla[i].name;
    name.classList.add("name");
    //matches
    let matches = document.createElement("p");
    matches.innerHTML = tabla[i].matches;
    matches.classList.add("matches");
    //average
    let avg = document.createElement("p");
    avg.innerHTML = tabla[i].avg;
    avg.classList.add("avg");

    let datosEst = [name, goals, matches, avg];
    for (let u = 0; u < datosEst.length; u++) {
      let td = document.createElement("td");
      td.append(datosEst[u]);
      tr.append(td);
    }
    table.append(tr);
  }
}

datosEstadisticos(estadisticas);

function estadistica2(partido2) {
  let myArray2 = [];
  for (let p = 0; p < partido2.length; p++) {
    if (partido2[p].status != "FINISHED") {
      continue;
    }
    let nombreEquipoVisitante2 = partido2[p].awayTeam.name;
    //console.log(nombreEquipoVisitante);

    let idVisitante2 = partido2[p].awayTeam.id;
    //console.log(idVisitante);

    let golesL2 = partido2[p].score.fullTime.homeTeam;
    //console.log(golesL);

    let visit;
    for (let k = 0; k < myArray2.length; k++) {
      if (myArray2[k].id === idVisitante2) {
        visit = myArray2[k];
      }
    }
    if (visit == undefined) {
      myArray2.push({
        goals: golesL2,
        name: nombreEquipoVisitante2,
        id: idVisitante2,
        matches: 1,
      });
    } else {
      (visit.goals += golesL2), visit.matches++;
    }
  }
  let estadistica2 = myArray2.sort((a, b) => a.goals - b.goals);
  console.log(estadistica2);

  let topCinco2 = estadistica2.slice(0, 5);
  crearTabla2(topCinco2);
}

estadistica2(estadisticas);

function crearTabla2(tabla2) {
  let table2 = document.getElementById("tablaEst2");

  for (let v = 0; v < tabla2.length; v++) {
    let tr = document.createElement("tr");
    //Goals
    let goals2 = document.createElement("p");
    goals2.innerHTML = tabla2[v].goals;
    goals2.classList.add("goals");
    //name
    let name2 = document.createElement("p");
    name2.innerHTML = tabla2[v].name;
    name2.classList.add("name");
    //matches
    let matches2 = document.createElement("p");
    matches2.innerHTML = tabla2[v].matches;
    matches2.classList.add("matches");

    let datosEst = [name2, goals2, matches2];
    for (let c = 0; c < datosEst.length; c++) {
      let td = document.createElement("td");
      td.append(datosEst[c]);
      tr.append(td);
    }
    table2.append(tr);
  }
}
