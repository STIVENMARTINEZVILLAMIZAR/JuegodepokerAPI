let id = null


function jugar() {
    const jugar=  new XMLHttpRequest();
    url='https://deckofcardsapi.com/api/deck/new/';
    jugar.open('get',url,true);
    jugar.onreadystatechange= function(){ if (jugar.readyState===4 && jugar.status===200) 
        {

       let todasCartas= JSON.parse(jugar.responseText);

        id = todasCartas.deck_id
        console.log(todasCartas)
         traerCartas()
    }
    };
  
       jugar.send();
       
}


function traerCartas() {

    const carta=  new XMLHttpRequest();
    url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=52`
    carta.open('get',url,true);
    carta.onreadystatechange= function(){ if (carta.readyState===4 && carta.status===200) 
        { 
             let cartaUsar= JSON.parse(carta.responseText);

             console.log(cartaUsar);

             let cartaMaquina = cartaUsar.cards[0];
             let cartaUsuario = cartaUsar.cards[1];
            
             let imguser = document.getElementById("cartaUser");
             imguser.src = cartaUsuario.image;

             let imgmaquina = document.getElementById("bot");
             imgmaquina.src = cartaMaquina.image;
             ganador(cartaUsuario, cartaMaquina);

        }

};
carta.send();
}

 document.getElementById("jugar").addEventListener("click", jugar)

 function ganador(userCard, botCard) {
    const valores = {
        "ACE": 14,
        "KING": 13,
        "QUEEN": 12,
        "JACK": 11,
        "10": 10,
        "9": 9,
        "8": 8,
        "7": 7,
        "6": 6,
        "5": 5,
        "4": 4,
        "3": 3,
        "2": 2
    };

    const valorUsuario = valores[userCard.value];
    const valorMaquina = valores[botCard.value];

    let resultado = "";
    if (valorUsuario > valorMaquina) {
        resultado = "¡GANA EL USUARIO!";
    } else if (valorUsuario < valorMaquina) {
        resultado = "¡GANA LA MÁQUINA!";
    } else {
        resultado = "¡EMPATE!";
    }
    
    document.getElementById("ganador").textContent = resultado;


 }
