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

  $('#search').keydown(function(e){

    var tasto = e.which;
    var res = String.fromCharCode(tasto);
    stringa = stringa + res;
    // str = stringa.str.toLowerCase();
    console.log(stringa);

    var nomeContatto = $(".utente .nome");
    var contatto = $(".utente");
    contatto.hide();

    contatto.each(function(i) {
        var nomeContatto = $(this).find(".nome");
        // console.log(nomeContatto);
        maiu = $( nomeContatto ).text();
        nome = maiu.toUpperCase();
        console.log("stampo nome",nome);

        if (nome.includes(stringa)) {
          // console.log("NOME TROVATOOOOO",nome);
          // console.log(nomeContatto);
          console.log("stampo this ",this);
          $(this).show();

        }
      });











    });

























});

//
