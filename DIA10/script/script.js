function jugar() {
    const jugar= XMLHttpRequest();
    url='https://deckofcardsapi.com/api/deck/new/';
    jugar.open('get',url,true);
    jugar.onreadystatedchange= function(){ if (jugar.readyState===4 && jugar.status===200) {

        
        
   
    }


    };
  
       jugar.send();

}

