$(document).ready(function() { 
    $('.calc').on('click', function(e) {
        if($(this).attr('data-role')!='operator'){


            $('#panel').val($("#panel").val()+$(this).val());

        }
        else{

            if($("#panel").val()!=''){

                $('#panel').val($("#panel").val()+$(this).val());
                
            }
        }
    });
    $("#clear").on('click',function(clr){
        $("#panel").val('');
    });

    $('#eval').on('click',function(sub){
        var expression=$("#panel").val();
        $("#panel").val(eval(expression));

    });
});


        
