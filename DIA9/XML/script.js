// Consumo de api 
// mediante XMLHTTPREQUEST


// Modularizar el consumo de la api


function buscarPersonaje() {
    //const nombreUsar = prompt("Ingrese el nombre del personaje");
    const nombreUsar= document.getElementById("nombreInput").value;
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest();
    //let nombreUsar= "mee"
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            //alert("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {

            try {
                const daticos = JSON.parse(xhr.responseText);
                //alert("The caracter is: Name:" + daticos['results'][0]['name'] + "Status:" + daticos['results'][0]['status'] + "Especie: " + daticos['results'][0]['species']);
            }
            catch (error) {
                console.log(err.message);

            }

        }

    };

    xhr.send();

}



buscarPersonaje();