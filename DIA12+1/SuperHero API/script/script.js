
const  cors= require('cors');
document.getElementById("buscarBtn").addEventListener("click", buscarPersonaje);


function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
   
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/1eac9eb1edb2de33eec3cf632086079c/search/${nombreUsar}`;//Acento Inverso ```
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
               /* <div class="card">
                <img src="https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10060.jpg" class="image1">
                <h3>A-Bomb</h3>
                <p><strong>Alter egos:</strong>Vivo</p>
                <p><strong>Alias:</strong>Humana</p>
                <p><strong>Lugar de nacimiento:</strong>23/09/1070</p>
                <p><strong>Primera presentación:</strong>fff</p>
                <p><strong>Editor:</strong> m</p>
                <p><strong>Alineacion:</strong>M</p>
            </div> _*/
                const daticos = JSON.parse(xhr.responseText);
                if (daticos.results && daticos.results.length > 0) {
                    for (let i = 0; i < daticos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">
            <img src="${daticos["results"][i]["image"]["url"]}" alt="">
            <h3>${daticos["results"][i]["name"]}</h3>
            <p><strong>Nombre completo:</strong>${daticos["results"][i]["biography"]["full-name"]}</p>
            <p><strong>alter egos:</strong>${daticos["results"][i]["biography"]["alter-egos"]}</p>
            <p><strong>Alias::</strong>${daticos["results"][i][ "biography"]["aliases"]}</p>
            <p><strong>Lugar de nacimiento:</strong>${daticos["results"][i][ "biography"]["place-of-birth"]}</p>
            <p><strong>Primera presentación:</strong>${daticos["results"][i][ "biography"]["first-appearance"]}</p>
            <p><strong>Editor:</strong>${daticos["results"][i][ "biography"]["publisher"]}</p>
            <p><strong>Alineacion:</strong>${daticos["results"][i][ "biography"][ "alignment"]}</p>

        </div>
                        `
                        console.log(daticos["results"][i]["name"]);
                    }
                }

            }
            catch (err) {
                console.log(err.message); 
            }
        }
    };
    xhr.send();
}