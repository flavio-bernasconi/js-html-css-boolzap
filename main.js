$( document ).ready(function() {

  function invio(){
     var inputval = $("#valmsg").val();

     if (inputval != "") {
       //per scrivere l orario
         function addZero(i) {
           if (i < 10) {
             i = "0" + i;
           }
           return i;
         }

         var d = new Date();
         var h = addZero(d.getHours());
         var m = addZero(d.getMinutes());

         //clono il figlio del contenitore
         var inviato = $("#template .msg-inviato").clone();
         var figlio = inviato.children(".testo-messaggio");

         var ore = inviato.children(".orario");
         ore.text(h + " " +  m);

         //scrivo il messaggio preso da input
         figlio.text(inputval);
         //stampo il clone con l input e l orario
         $("#lista-messaggi").append(inviato);

         //pulisco l'input alla fine
         $("#valmsg").val("");

         setTimeout(function(){
           var risp = $("#template .msg-risp").clone();
           $("#lista-messaggi").append(risp);
         },1000);
     }
     else {
       console.log("vuotoooo");
     }
  }

  $("#send").click(
    invio
  );

  $('#valmsg').keypress(function(e){
      if(e.keyCode == 13)
      {
        invio();
      }
  });





var arr = [];
var stringa = "";
var nome;
var maiu = "";
var contatto = '';
var splttata = '';
var cerca = $('#search').val();

if (cerca === "") {
  console.log("valore del cerca non ceee");

}

  $('#search').keydown(function(e){

    var tasto = e.which;
    // da 65 a 90
    console.log(tasto);
       if(
               !(tasto >= 65 && tasto <= 120 || tasto == 8) && (tasto != 32 && tasto != 0)){
                e.preventDefault();
       }

       else {
                //converto il tasto nella corrispndente lettera
               var res = String.fromCharCode(tasto);
               //concateno le lettere per creare la stringa da cercare
               stringa = stringa + res;
               console.log("valore stringa",stringa);

               //se il tasto é canc togli al valore di stringa 2 valori
               // 2 valore perché l ultimo carattere sara il canc stesso che ho appena premuto
               //se infatti sottraggo 1 non funziona perche non toglia l ultima lettera
               if (tasto == 8) {
                 stringa = stringa.substring(0, stringa.length - 2);
                 console.log("nuovo valore",stringa);
               }


               var nomeContatto;
               var contatto = $(".utente");
               //appena schiaccio qualcosa nell input nascondo tutti gli utenti
               contatto.hide(100);

               contatto.each(function(i) {
                  //di ogni contatto trovo l elemento con la classe nome
                   var nomeContatto = $(this).find(".nome");
                   // console.log(nomeContatto);

                   //testo contenuto dalla classe nome
                   maiu = $( nomeContatto ).text();
                   nome = maiu.toUpperCase();
                   // console.log("stampo nome",nome);

                   //se il testo contiene i valori di stringa mostrami l utente che ha quel nome
                   if (nome.includes(stringa)) {
                     // console.log("stampo utente trovato ",this);
                     $(this).fadeIn(100);

                   }
                 });


       }





    });

























});

//
