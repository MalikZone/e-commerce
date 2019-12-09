window.addEventListener('scroll', function() {
    if($(window).scrollTop() > 50)
    {
        $('#nav2').addClass('#000090');
    }
    else
    {
        $('#nav2').removeClass('transparent');
    }
});
