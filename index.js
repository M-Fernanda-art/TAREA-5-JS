// CICLOS - LOOPS

// Sirven para repetir tareas automáticamente, automatizar, recorrer datos y ahorrar código. 
// Los tipos principales de ciclos son:
// - For  
// - While  
// - Do...while 
// - ForEach 


// FOR...OF = Recorre los arrays y muestra cada uno

const mercado = ["papa", "cebolla", "tomate", "frijol", "arroz", "huevos"];

for(const producto of mercado) {
    console.log(producto);
}


// WHILE = Empieza en una posición, repite si hay elementos, muestra el valor y pasa al siguiente

const canciones = ["Touch of heaven", "The eternal", "Driver's license", 
    "Acepta", "Getsemaní", "Drop dead"];

let i = 0;

while (i < canciones.length) {
    console.log(canciones[i]);
    i++;
}


// PROMESAS

// Es una operación futura que puede salir bien o mal, simula una decisión futura con éxito o error, 
// sirven para esperar resultados, manejar procesos largos evitar bloqueos, organizar código asincronico.
// Su funcionamiento es: pendiente, resuelto y rechaza o aprueba.

// APROBAR O REPROBAR MATERIA

const promesa = new Promise((resolve, reject) => {
    let aprobado = true;

    if (aprobado) {
        resolve("Pasaste la materia");
    } else {
        reject("Reprobaste la materia");
    }
});

promesa
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });


// DISPONIBILIDAD EN BIBLIOTECA


const disponibilidad = new Promise((resolve, reject) => {
    let disponible = true;

    if (disponible) {
        resolve("Puedes reservar el libro");
    } else {
        reject("El libro no esta disponible");
    }
});

disponibilidad
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });

    