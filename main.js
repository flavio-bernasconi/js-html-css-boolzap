$( document ).ready(function() {




  $("#send").click(
     function (){
        var inputval = $("#valmsg").val();


        var inviato = $("#template .msg-inviato").clone();
        // inviato.text(inputval);
        $("#lista-messaggi").append(inviato);
        $(".testo-messaggio").text(inputval);

        //pulisco l'input alla fine
        $("#valmsg").val("");


        // var risp = $("#template .msg-risp").clone();
        // $("#lista-messaggi").append(risp);

     }
  );

























});

//
