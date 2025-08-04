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
    url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`
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

        }

};
carta.send();
}

 document.getElementById("jugar").addEventListener("click", jugar)
