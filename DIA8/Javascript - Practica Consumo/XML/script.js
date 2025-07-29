


function buscarPersonaje() {
    const nombreUsar = prompt("Ingrese el nombre a buscar");
    const xhr = new XMLHttpRequest();
    //let nombreUsar= "mee"
    const url = `(https://swapi.py4e.com/api/people?name=${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            alert("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {

            try {
                const daticos = JSON.parse(xhr.responseText);
                alert("El personaje es: /n Nombre:" + daticos['results'][0]['name'] + "/n Altura: " + daticos ["results"][0]["height"]+ "/n Masa: " + daticos ["results"][0]["mass"]+ "/n color de cabello:" + daticos["results"][0]["hair_color"]+ "/n color de skin:" + daticos ["results"][0]["skin_color"] + "/n color de ojo:" +daticos ["results"][0]["eye_color"] );
            }
            catch (error) {
                console.log(err.message);

            }

        }

    };

    xhr.send();

}



buscarPersonaje();