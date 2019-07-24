$( document ).ready(function() {

  var utenteCorrente = "";
  var classe = "";
  var m = "";


  function invio(){
     var inputval = $(".contenitore.active #valmsg").val();
     console.log("valore input",inputval);

     if (inputval != "") {
       //per scrivere l orario
         // function addZero(i) {
         //   if (i < 10) {
         //     i = "0" + i;
         //   }
         //   return i;
         // }
         //
         // var d = new Date();
         // var h = addZero(d.getHours());
         // var m = addZero(d.getMinutes());

         //clono il figlio del contenitore
         var inviato = $("#template .msg-inviato").clone();
         var figlio = inviato.children(".testo-messaggio");

         // var ore = inviato.children(".orario");
         // ore.text(h + " " +  m);

         //scrivo il messaggio preso da input
         figlio.text(inputval);
         //stampo il clone con l input e l orario
         $(".contenitore.active #lista-messaggi").append(inviato);

         //pulisco l'input alla fine
         $(".contenitore.active #valmsg").val("");

         setTimeout(function(){
           var risp = $("#template .msg-risp").clone();
           $(".contenitore.active #lista-messaggi").append(risp);
         },1000);
     }
     else {
       console.log("input vuoto");
     }
  }

  //ruchiamo le funzioni sia qando clicco che con invio
// ".contenitore."+nomeContatto


  // $(".contenitore.active #send").click(
  //     invio
  //
  // );
  //
  // $('#valmsg').keypress(function(e){
  //     if(e.keyCode == 13)
  //     {
  //       invio();
  //     }
  // });





var stringa = "";
var nome;
var maiu = "";
var contatto = '';
var cerca = $('#search').val();

if (cerca === "") {
  console.log("valore del cerca non ceee");
}

  $('#search').keydown(function(e){

    var tasto = e.which;

    // da 65 a 90
    console.log("tasto prpemuto",tasto);
       if(!(tasto >= 65 && tasto <= 120 || tasto == 8) && (tasto != 32 && tasto != 0)){
         //non scrivere nell input
          e.preventDefault();
       } else {
          //converto il tasto nella corrispndente lettera
           var keyLettera = String.fromCharCode(tasto);
           //concateno le lettere per creare la stringa da cercare
           stringa = stringa + keyLettera;
           console.log("valore stringa",stringa);
           //se il tasto é canc togli ultimi 2 valori alla stringa
           // 2 valore perché l ultimo carattere sara il canc stesso che ho appena premuto
           //se infatti sottraggo 1 non funziona
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
               var nomeContatto = $(this).find(".nome").text();
               // console.log(nomeContatto);

               //testo contenuto dalla classe nome
               nome = nomeContatto.toUpperCase();
               // console.log("stampo nome",nome);

               //se il testo contiene i valori di stringa mostrami l utente che ha quel nome
               if (nome.includes(stringa)) {
                 // console.log("stampo utente trovato ",this);
                 $(this).fadeIn(100);
               }
             });


       }


    });




    $(".utente").click(
      function(){
        var nomeContatto = $(this).find(".nome").text().toLowerCase();
        console.log("utente corrente : ",nomeContatto);
        $(".utente").removeClass("active");


        $(this).addClass("active");

        $(".contenitore").removeClass("active");

        var conte = $(".contenitore").hasClass("nomeContatto");
        var contCorrente = $(".contenitore."+nomeContatto).addClass("active");

        var lui = contCorrente.find("#send");
        $(lui).click(
            invio

        );
        // var utenteCorrente = $(".contenitore.active").find(".nome").text();
        // var classe = "." + nomeContatto;
        // console.log(classe);


      }
    )




















});

//
