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
var resto = '';
var nome;
var maiu = "";

  $('#search').keydown(function(e){

    var tasto = e.which;
    var res = String.fromCharCode(tasto);
    resto = resto + res;
    // str = resto.str.toLowerCase();
    console.log(resto);

    var contatto = $(".utente .nome");
    contatto.hide();

    contatto.each(function() {
        maiu = $( this ).text();
        nome = maiu.toUpperCase();
        console.log(maiu);

        if (nome.includes(resto)) {
          console.log("NOME TROVATOOOOO",nome);
          contatto.show();
        }
      });











    });

























});

//
