$( document ).ready(function() {




  $("#send").click(
     function(){
        //salvo valore inserito dall'utente
        var inputval = $("#valmsg").val();
        var scrivi = $(".testo-messaggio")

        var inviato = $("#template .contenitore-msg").clone();
        var risposta = $("#template .contenitore-msg-2").clone();
        // console.log(msgelement);
        scrivi.text(inputval);
        $("#lista-messaggi").append(inviato);


        //pulisco l'input alla fine
        $("#valmsg").val("");


        $("#lista-messaggi").append(risposta);


     }
  );


























});

//
