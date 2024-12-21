$(document).ready(function(){
    $('.tab-container:first').show();
    $('.navigation-bar li:first').addClass("active");

    $('.navigation-bar li').click(function(event){
        index = $(this).index();
        $('.navigation-bar li').removeClass('active');
        $(this).addClass('active');
        $('.tab-container').hide();
        $('.tab-container').eq(index).show();   
    });
});

$(document).ready(function(){
  $(".more").click(function(){
    $(".content-para").slideToggle();
  });
});
