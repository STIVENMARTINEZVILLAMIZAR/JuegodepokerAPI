


function buscarPersonaje() {
    // const nombreUsar = prompt("Ingrese el nombre a buscar");
    const xhr = new XMLHttpRequest();
    //let nombreUsar= "mee"
    const url = `(https://swapi.py4e.com/api/people/`;
    console.log(url);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {

        try{

             if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data.results);
                const mainBox = document.getElementById('main-box');
                mainBox.innerHTML = "";

  