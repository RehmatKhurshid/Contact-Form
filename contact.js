$(document).ready(function(){
    function init(){
        if(localStorage["name"]){
            $('#name').val(localStorage["name"]);
        }
        if(localStorage["email"]){
            $('#email').val(localStorage["email"]);
        }
        if(localStorage["message"]){
            $('#message').val(localStorage["message"]);
        }
    }
    init();
});/*refrencing a jquery library, jQuery checks to make sure that the web page is fully loaded before the code execute */

$('.stored').change(function(){
    localStorage[$(this).attr('name')]=$(this).val();
});