$(document).ready(function (){

    $('#registerbtn').click(function (){
        var pws = $("#psw").val()
        var pswrepeat = $("#psw-repeat").val()

        if (pws !== pswrepeat) {
            $("#passerror").text("passwords do not match")
        } else {
            $("#passerror").text("")
            if (!(pws.length >= 8)){
                $("#passerror").text("passwords length should be at least 8 characters");
            } else {
                $("#passerror").text("");
            }
        }
    });
    
$("#psw").on('keydown',function (){
        var pws = $("#psw").val();
        if (!(pws.length >= 8)){
            $("#passerror").text("passwords should be at least 8 characters");
        } else {
            $("#passerror").text("");
        }

    })
});