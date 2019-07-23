$( document ).ready(function() {


  $("#send").click(
     function (){
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
  );



  $('#valmsg').keypress(function(e){
      if(e.keyCode == 13)
      {
        var inputval = $("#valmsg").val();

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
  });





var arr = [];
var stringa = "";
var nome;
var maiu = "";
var contatto = '';
var splttata = '';

  $('#search').keydown(function(e){

    var tasto = e.which;
    // da 65 a 90
    var inputValue = e.which;
    console.log(inputValue);
       if(!(inputValue >= 65 && inputValue <= 120 || inputValue == 8) && (inputValue != 32 && inputValue != 0)){
           e.preventDefault();
       }
       else {


               var res = String.fromCharCode(tasto);
               stringa = stringa + res;
               console.log("valore stringa",stringa);

               if (tasto == 8) {
                 console.log("canc attivo");
                 stringa = stringa.substring(0, stringa.length - 2);
                 console.log("nuovo valore",stringa);
               }


               var nomeContatto = $(".utente .nome");
               var contatto = $(".utente");
               contatto.hide();

               contatto.each(function(i) {
                   var nomeContatto = $(this).find(".nome");
                   // console.log(nomeContatto);
                   maiu = $( nomeContatto ).text();
                   nome = maiu.toUpperCase();
                   // console.log("stampo nome",nome);

                   if (nome.includes(stringa)) {

                     console.log("stampo utente trovato ",this);
                     $(this).show();

                   }
                 });



       }









    });

























});

//
