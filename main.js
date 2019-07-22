$( document ).ready(function() {


  $("#send").click(
     function (){
        var inputval = $("#valmsg").val();

        var inviato = $("#template .msg-inviato").clone();
        var figlio = inviato.children(".testo-messaggio");

        figlio.text(inputval);
        $("#lista-messaggi").append(inviato);

        //pulisco l'input alla fine
        $("#valmsg").val("");


        // var risp = $("#template .msg-risp").clone();
        // $("#lista-messaggi").append(risp);

     }
  );

























});

//
