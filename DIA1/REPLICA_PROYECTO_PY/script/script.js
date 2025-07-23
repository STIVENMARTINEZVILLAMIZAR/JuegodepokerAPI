//################################
//##### SIMULADOR DE GASTOS ######
//##############################

let gastos = []
boleanito=true
while(boleanito==true){ 
    
   let menu= prompt( `=============================================
   Simulador de Gasto Diario
=============================================
Seleccione una opción:

1.Registrar nuevo gasto
2.Listar gastos
3.Calcular total de gastos
4.Generar reporte de gastos
5.Salir
=============================================
=============================================`)
                 


    console.log("Bienvenido al simulador de gastos")
    console.log("Seleccione una opción:")
    console.log("1. Registrar un nuevo gasto")
    console.log("2. Listar Gastos")
    console.log("3.Calcular total de gasto")
    console.log("4. Generar reporte de gastos")
    console.log("5. Salir")

    let opcion = prompt("Seleccione una opción: ")

    if (opcion == "1") {


        let gasto = prompt("Ingrese el monto del gasto: ")
       
        let descripcion = prompt("Ingrese la descripción del gasto: ")
    
        let categoria = prompt("Comida , Transporte, Entretenimiento, otros")

        let dic = {
            "gasto": gasto,
            "descripcion": descripcion,
            "categoria": categoria
        }
        
        gastos.push(dic)




        

    } else if (opcion == "2") {
        verGastos()








    } else if (opcion == "3") {
        let total = calcularTotalGastos()
        console.log(`El total de gastos es: ${total}`)

    } else if (opcion == "4") {
        generarReporteGastos()

    } else if (opcion == "5") {
        boleanito = false
        console.log("Gracias por usar el simulador de gastos")
    } else {
        console.log("Opción no válida, intente nuevamente.")
    }
}




