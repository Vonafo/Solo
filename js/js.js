$(document).ready(function(){
   $('.blackb1').on('click', f_box);
   $('.blackb2').on('click', f_ato);
   $('.blackb3').on('click', f_liq);
    
    });


function f_box(){
    $("#one").slideToggle(2000);
}
function f_ato(){
    $("#two").slideToggle(2000);
}
function f_liq(){
    $("#three").slideToggle(2000);
}