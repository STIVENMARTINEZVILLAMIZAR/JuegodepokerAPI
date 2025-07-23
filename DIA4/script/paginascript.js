// ###################################
// ######### QUIZ #####
// ###################################





let gastos = [];
let boleanito = true;
while (boleanito ==true) {
    let menu = prompt (`
======================================== 
Bienvenido al simulador de gastos de la cafetería
========================================
     1. Menu de hamburguesas
     2. dame los ingredientes de la hamburguesa
     3. dame la categoria de la hamburguesa
     4. deseas actualizar tu pedido?
     5. salir del simulador

     
     seleccione una opcion:

`)

console.log ("Bienvenido al simulador de gastos de la cafetería")
console.log ("1.Menu de hamburguesas")
console.log ("2.dame los ingredientes de la hamburguesa")
console.log ("3. dame la categoria de la hamburguesa")
console.log ("4. deseas actualizar tu pedido?")
console.log ("5. salir del simulador")

/*
console.log("1. Encontrar todos los ingredientes con stock menor a 400.")
console.log("2. Encontrar todas las hamburguesas de la categoría “Vegetariana”.")
console.log("3. Encontrar todos los chefs que se especializan en “Carnes”.")
console.log("4. Aumentar en 1.5 el precio de todos los ingredientes.")
console.log("5. Encontrar todas las hamburguesas preparadas por “ChefB”.")
console.log("6. Encontrar el nombre y la descripción de todas las categorías.")
console.log("7. Eliminar todos los ingredientes que tengan un stock de 0.")
console.log("8. Agregar un nuevo ingrediente a la hamburguesa “Clásica”.")
console.log("9. Encontrar todas las hamburguesas que contienen “Pan integral” como ingrediente.")
console.log("10. Cambiar la especialidad del “ChefC” a “Cocina Internacional”.")
console.log("11. Encontrar el ingrediente más caro.")
console.log("12. Encontrar las hamburguesas que no contienen “Queso cheddar” como ingrediente.")
console.log("13. Incrementar el stock de “Pan” en 100 unidades.")
console.log("14. Encontrar todos los ingredientes que tienen una descripción que contiene la palabra “clásico”.")
console.log("15. Listar las hamburguesas cuyo precio es menor o igual a $9.")
console.log("16. Contar cuántos chefs hay en la base de datos.")
console.log("17. Encontrar todas las categorías que contienen la palabra “gourmet” en su descripción.")
console.log("18. Eliminar las hamburguesas que contienen menos de 5 ingredientes.")
console.log("19. Agregar un nuevo chef a la colección con una especialidad en “Cocina Asiática”.")
console.log("20. Listar las hamburguesas en orden ascendente según su precio.")
console.log("21. Encontrar todos los ingredientes cuyo precio sea entre $2 y $5.")
console.log("22. Actualizar la descripción del “Pan” a “Pan fresco y crujiente”.")
console.log("23. Encontrar todas las hamburguesas que contienen “Tomate” o “Lechuga” como ingredientes.")
console.log("24. Listar todos los chefs excepto “ChefA”.")
console.log("25. Incrementar en $2 el precio de todas las hamburguesas de la categoría “Gourmet”.")
console.log("26. Listar todos los ingredientes en orden alfabético.")
console.log("27. Encontrar la hamburguesa más cara.")
console.log("28. Agregar “Pepinillos” a todas las hamburguesas de la categoría “Clásica”.")
console.log("29. Eliminar todos los chefs que tienen una especialidad en “Cocina Vegetariana”.")
console.log("30. Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes.")
console.log("31. Encontrar la hamburguesa más cara que fue preparada por un chef especializado en “Gourmet”.")
console.log("32. Listar todos los ingredientes junto con el número de hamburguesas que los contienen.")
console.log("33. Listar los chefs junto con el número de hamburguesas que han preparado.")
console.log("34. Encuentra la categoría con la mayor cantidad de hamburguesas.")
console.log("35. Listar todos los chefs y el costo total de ingredientes de todas las hamburguesas que han preparado.")
console.log("36. Encontrar todos los ingredientes que no están en ninguna hamburguesa.")
console.log("37. Listar todas las hamburguesas con su descripción de categoría.")
console.log("38. Encuentra el chef que ha preparado hamburguesas con el mayor número de ingredientes en total.")
console.log("39. Encontrar el precio promedio de las hamburguesas en cada categoría.")
console.log("40. Listar los chefs y la hamburguesa más cara que han preparado.")
*/

let opcion= prompt ("seleccione una opcion:")

if (opcion == "1") {

let menudehamburguesa = prompt(`
=============================================
      Menu de Hamburguesas
=============================================
     1.Hamburguesa Clasica")
      nombre: Clásica,")
      categoria:  Clásica,")
      ingredientes: Pan, Carne de res, Queso cheddar, Lechuga, Tomate, Cebolla, Mayonesa, Ketchup.")
      precio: 10,")
      chef: ChefA")
=============================================
     2.Hamburguesa Vegetariana")
      nombre: Vegetariana,")
      categoria: Vegetariana,")
      ingredientes: Pan integral,Hamburguesa de lentejas, Queso suizo, Espinacas, Cebolla morada, Aguacate, Mayonesa vegana.")
      precio: 8,")
      chef: ChefB")
=============================================
     3.Hamburguesas Premium")

      nombre: Doble Carne,")
      categoria: Gourmet,")
      ingredientes: Pan de sésamo, Doble carne de res, Queso cheddar, Bacon, Lechuga, Cebolla caramelizada, Salsa BBQ.")
      precio: 12,")
      chef:  ChefC")

    
   `)

   console.log(menudehamburguesa);

    let opcion = prompt("Escoje tu hamburguesa");
    


} else if (opcion == "2") {

    // Aquí se pueden agregar los ingredientes de la hamburguesa

    let ingredientes= prompt ("ingrese los ingredientes de la hamburguesa:  ")

    let nombre =prompt ("nombre de la hamburguesa: ")

    let categoria = prompt ("categoria de la hamburguesa: ")

    let descripcion = prompt ("descripcion de los ingredientes hamburguesa: ")

    let dic= {
        "ingredientes": ingredientes,
        "nombre": nombre,
        "categoria": categoria,
        "descripcion": descripcion
    };

    gastos.push(dic)



} else if (opcion == "3") {
    
    let categoria = prompt ("Ingrese la categoria de la hamburguesa: clásica, vegetariana, premium")

    let descripcion = prompt ("Ingrese la descripcion de la hamburguesa: ")

    let dic = {
        "categoria": categoria,
        "descripcion": descripcion
    };

    gastos.push(dic);


} else if (opcion == "4") {
    
    let actualizar = prompt("¿Desea actualizar su pedido? (si/no)");

    if (actualizar.toLowerCase() === "si") {
        let nuevoPedido = prompt("Ingrese los nuevos detalles de su pedido: ");
        console.log(`Pedido actualizado: ${nuevoPedido}`);
    } else {
        console.log("Pedido no actualizado.");
    }





}else if (opcion == "5") {
    console.log("Gracias por usar el simulador de gastos de la cafetería. ¡Hasta luego!");
    boleanito = false;
} else {
    console.log("Opción no válida. Por favor, intente nuevamente.");

}
}