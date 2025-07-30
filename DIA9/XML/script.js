// Consumo de api 
// mediante XMLHTTPREQUEST


// Modularizar el consumo de la api


function buscarPersonaje() {
    document.getElementById("buscarBtn").addEventListener("click", buscar);
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

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {

            try {

             //   <div class="card" >
               //  <img src="./media/rickabeja.jpeg" alt="">
               //  <h3>Rick</h3>
               //  <br>
               //   <p><strong>Estado: Vivo</strong></p>
               //   <br>
               //   <p><strong>Especie: Humana</strong></p>
               //  
            // </div>

                const daticos = JSON.parse(xhr.responseText);
                //alert("The caracter is: Name:" + daticos['results'][0]['name'] + "Status:" + daticos['results'][0]['status'] + "Especie: " + daticos['results'][0]['species']);
                




                try {
                    if (daticos.results && daticos.results.length > 0) {
                        for(let i = 0; i < daticos.results.length; i++) {
                            let division = document.createElement("div");
                            division.className = "card";
                            const personaje = daticos.results[i];
                            console.log(daticos['results'][i]['name']);

                        }
                    }
                } catch (error) {
                    console.log(error.message);
                }

    } catch (error) {
        console.error("Error:", error);
    }

    xhr.send();

}

    }
}
    
buscarPersonaje();
    