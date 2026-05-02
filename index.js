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