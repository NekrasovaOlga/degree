$(function(){
    let filter = $("[data-filter]");

    filter.on('click', function(event){
        event.preventDefault();
        let cat = $(this).data('filter');

        if (cat == 'all'){
            $("[data-cat]").removeClass('hide');
        }else {
            $("[data-cat]").each(function(){
                let workCat = $(this).data('cat');
                if( workCat != cat){
                    $(this).addClass('hide');
                }else{
                    $(this).removeClass('hide');
                }
            });
        }
    });
});


$(document).ready(function(){
    $('.company__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        slickPrev: false
    });
  });

function menu(){
    let menu = document.getElementById('menu');
    let menu_item = document.getElementById('nav');
    menu.onclick = function(){
        menu.classList.toggle('burger-active');
        if ( menu.classList.contains('burger-active') ){   
            menu.classList.add('burger-active');
            menu_item.style.display = "flex";            
        }else {
            menu.classList.remove('burger-active');
            menu_item.style.display = "none";
        }
    };
    
}