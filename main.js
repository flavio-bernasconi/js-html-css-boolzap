$( document ).ready(function() {


  $("#send").click(
     function (){
        var inputval = $("#valmsg").val();

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


          var risp = $("#template .msg-risp").clone();
          $("#lista-messaggi").append(risp);

     }
  );



  $('#valmsg').keypress(function(e){
      if(e.keyCode == 13)
      {
        var inputval = $("#valmsg").val();

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


          var risp = $("#template .msg-risp").clone();
          $("#lista-messaggi").append(risp);

      }
  });






















});

//
