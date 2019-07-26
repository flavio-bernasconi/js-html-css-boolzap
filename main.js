$( document ).ready(function() {

  var utenteCorrente = "";
  var classe = "";
  var m = "";
  var inputval = $(".contenitore.active #valmsg").val();



  function invio(){
    $(".staScrivendo").text("");

     var inputval = $(".contenitore.active #valmsg").val();
     console.log("valore input",inputval);


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

       var tempo = h + " " +  m;

       function scriviOra(e){
         e.text(h + " " +  m);
       }

       var oraUtente = $(".utente.active .dettagli-utente .ore .oraAttuale");
       var oreHeader = $(".contenitore.active .inserisci p span");

       scriviOra(oraUtente);
       scriviOra(oreHeader);

       //ultimo messaggio inviato se troppo lungo lo taglio
       var lastmex = $(".utente.active .messaggio");

       if (inputval.length > 25) {
         console.log(inputval.length,"sono la lunghezza dell input");
         //slice primo valore da dove inizia secondo valore quanti caratteri includere
         var tronco = inputval.slice(0, 20);
         lastmex.text(tronco + "....");
       }
       else {
         lastmex.text(inputval);
       }

      //template handelbars
      var sorgenteCodice = $("#msgtemplate").html();
      console.log(sorgenteCodice);

      var template = Handlebars.compile(sorgenteCodice);

      var daInserire = { textMessaggio: inputval, time: tempo, classeAggiunta:"msg-inviato"  };

      var html = template(daInserire);

      $(".active #lista-messaggi").append(html);


       setTimeout(function(){
      var sorgenteCodice = $("#risptemplate").html();
      console.log(sorgenteCodice);

      var template = Handlebars.compile(sorgenteCodice);

      var daInserire = { textMessaggio: "oook",  classeAggiunta: "msg-risp"  };

      var html = template(daInserire);

      $(".active #lista-messaggi").append(html);
      },500)

      //pulisco l input
      $(".active #valmsg").val("");

     }

     else {
       console.log("input vuoto");
     }




  }


var stringa = "";
var nome;
var maiu = "";
var contatto = '';
var cerca = $('#search').val();

if (cerca === "") {
  console.log("valore del cerca non ceee");
}

  //usa il valore di input non i tasti inseriti
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


    //utente attivo
    $(".utente").click(
      function(){
        $(".staScrivendo").text("");

        var nomeContatto = $(this).find(".nome").text().toLowerCase();
        console.log("utente corrente : ",nomeContatto);
        $(".utente").removeClass("active");

        $(this).addClass("active");



        //rimuovo a tutti i contenitori
        $(".contenitore").removeClass("active");

        //contenitore classe  nome contatto
        // var conte = $(".contenitore").hasClass("nomeContatto");
        var contCorrente = $(".contenitore." + nomeContatto).addClass("active");

        $(".contenitore.active #valmsg").focus();

        var chatta = (".active #send ");
        $(chatta).click(
            invio
        );

        //aggiungo immagine in base al nome dinamicamente
        $(".contenitore.active .immagine-small").css('background-image', 'url(' + nomeContatto+ '.png' + ')');


        var tastoInvio = $(".active #valmsg");
        $(tastoInvio).keypress(function(e){
            if(e.keyCode == 13)
            {
              invio();
            }
        });
      }
    )



    //quando sono in hover al messaggio vedo i 3 puntini per poterlo cancellare
    $( "body" ).on( "click", '.active .msg-inviato .drop' , function() {
      $(this).find(".rela").toggle();
      var mex = $(this);

      $(".abs").click(
        function(){
            mex.parent().hide();
            $(".utente.active .messaggio").text("Ultimo messaggio eliminato")
        }
      )

    });


    //cambia l icona da mic a plane se clicco dentro l input
    $(".contenitore #valmsg").focus(
      function(){
        $(".mic").hide();
        $(".plane").show();
      }
    )

    $(".contenitore #valmsg").focusout(
      function(){
        $(".mic").show();
        $(".plane").hide();
      }
    )

    //mentre scrivo esce stai scrivendo
    //?bug se scrivo e cambio finestra mi rimane che sto scrivendo ma se aggiungo
    //active al selettore non funziona
    $(".contenitore #valmsg").keypress(function(){
      // console.log("sta scrivendo");
      var test = console.log("digitati");
      if (test = "digitati") {
        $(".staScrivendo").text("Stai scrivendo ...");
      }

    })



    $( "body" ).on( "mouseenter", '.active .msg-inviato ' , function() {
        // $(".drop").removeClass("mostra");
        $(".drop").not(this).removeClass("mostra");
        $(this).children(".drop").addClass("mostra");

    });

    function sparisci(){
      $(".drop").removeClass("mostra");
    }

    //se vado sul messaggio ok i puntini spariscono ;)
    $( "body" ).on( "mouseenter", ' .msg-risp ' , function() {
        sparisci()
    })

    $(".contenitore").mouseleave(
      sparisci
    )

    $("#barra-profilo , #barra").mouseenter(
      sparisci
    )


    $('#send').click(false);



});

//
