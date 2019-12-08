$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('#nav2').addClass('#000090');
    }
    else{
        $('#nav2').removeClass('#000090');
     }
})