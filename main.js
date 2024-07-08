// 1. Convert the following named function to an arrow function:

// function printMessage( message ) {

//     console.log( message )

// }

const printMessage = (message) => console.log(message);

//2. Convert the following named function to an arrow function:

// function createMultplication (number1, number2) {

//     let result = number1 * number2

//     return result
// }

const createMultiplication = (number1, number2) => {
  let result = number1 * number2;

  return result;
};

//3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map to that array and pass as an argument the named function shown in the previous exercise. Show by console the new array obtained.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let exercise = array.map(createMultiplication);
console.log(exercise);

//4. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers

let cervezasConMayorAlcohol = (beers) => {
  beers.sort((a, b) => b.abv - a.abv);
  beers = beers.slice(0, 10);
  console.log(beers);
};
cervezasConMayorAlcohol(beers);

//5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers

let cervezasMenosAmargas = (beers) => {
  beers.sort((a, b) => a.ibu - b.ibu);
  beers = beers.slice(0, 10);
  console.log(beers);
};
cervezasMenosAmargas(beers);

//6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.

let buscarCerveza = (beers, cerveza) => {
  return beers.find((cerveza) => cerveza.name);
};

console.log(buscarCerveza(beers, "The End Of History"));

//7. Generate a function that receives as a parameter an array of beers, a value and that returns the first object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays a message in the console that says “ There is no beer with an ibu of (value entered).”

let buscarIbu = (beers, ibu) => {
  const encontrarIbu = beers.find((beer) => beer.ibu == ibu);
  if (encontrarIbu) {
    console.log(encontrarIbu);
  } else {
    console.log(`There is no beer with an ibu of ${ibu}`);
  }
};
let valorIbu = 40;
buscarIbu(beers, valorIbu);

//8. Generate a function that receives the name of a beer as a parameter and returns the position in the array of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.”

let posicionCerveza = (beers, nombre) => {
  let posicion = beers.findIndex((cerveza) => cerveza.name === nombre);
  if (posicion !== -1) {
    console.log(`the position of the beer ${nombre} is ${posicion} `);
  } else {
    console.log(`${nombre} does not exist`);
  }
  return posicion;
};

posicionCerveza(beers, "Pilsen Lager");
posicionCerveza(beers, "andes");

//9. Generate a function that receives as a parameter the array of beers and an alcohol value. The function must return a new array with the beers that do not exceed the alcohol level. Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu)

let alcoholMaximo = (beers, maxAbv) => {
  let filtroCervezas = beers.filter((i) => i.abv <= maxAbv);
  if (filtroCervezas.length > 0) {
    return filtroCervezas.map((i) => ({
      name: i.name,
      abv: i.abv,
      ibu: i.ibu,
    }));
  } else {
    console.log(
      `there is no beer with am Abv value less than or equal to ${maxAbv}`
    );
    return [];
  }
};

alcoholMaximo(beers, 1);

//10. 10. Generate a function that receives as parameters an array of beers, a property name and a boolean value. It should return a new array with 10 beers ordered by the property entered as the second argument, ascending if the third is true or descending if it is false.

let ordenarCervezas = (beers, propiedad, booleano) => {
  let filtrarCervezas = beers.slice();
  filtrarCervezas.sort((a, b) => {
    if (booleano) {
      if (a[propiedad] > b[propiedad]) {
        return 1;
      } else if (a[propiedad] < b[propiedad]) {
        return -1;
      } else {
        return 0;
      }
    } else {
      if (a[propiedad] < b[propiedad]) {
        return 1;
      } else if (a[propiedad] > b[propiedad]) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return filtrarCervezas.slice(0, 10);
};

let listaAscendente = ordenarCervezas(beers, "abv", true);
console.log(`orden Ascendente por abv:`, listaAscendente);
let listaDescendente = ordenarCervezas(beers, "abv", false);
console.log(`orden Descendente por abv:`, listaDescendente);

//11. Generate a function that receives as a parameter an array of beers and an id of an HTML element where the table will be printed. The function must render (render, draw, paint, fill, etc.) in an html file a table that contains the columns "Name", "ABV", "IBU", and one row for each element of the array. Each row must have the data requested for each of the beers.
let tablaCervezas = (beers, idTabla) => {
  const contenedorTabla = document.getElementById("cuerpoTabla");

  const tabla = document.createElement("table");
  tabla.style.borderCollapse = "collapse";

  const tHead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Name", "ABV", "IBU"];
  headers.forEach((headerTexto) => {
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(headerTexto));
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  tHead.appendChild(headerRow);
  tabla.appendChild(tHead);

  const cuerpoTabla = document.createElement("tbody");
  beers.forEach((beer) => {
    const row = document.createElement("tr");
    const nombreTd = document.createElement("td");
    nombreTd.appendChild(document.createTextNode(beer.name));
    nombreTd.style.border = "1px solid black";
    nombreTd.style.padding = "8px";
    row.appendChild(nombreTd);

    const abvTD = document.createElement("td");
    abvTD.appendChild(document.createTextNode(beer.abv));
    abvTD.style.border = "1px solid black";
    abvTD.style.padding = "8px";
    row.appendChild(abvTD);

    const ibuTd = document.createElement("td");
    ibuTd.appendChild(document.createTextNode(beer.ibu));
    ibuTd.style.border = "1px solid black";
    ibuTd.style.padding = "8px";
    row.appendChild(ibuTd);

    cuerpoTabla.appendChild(row);
  });
  tabla.appendChild(cuerpoTabla);
  contenedorTabla.appendChild(tabla);
};

tablaCervezas(beers);
