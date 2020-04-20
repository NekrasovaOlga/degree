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



  var slider = new Slider("#ex13", {
    min: 0,
    max: 500,
    ticks_labels: ["100м2", "10 000м2", "250 000м2", "500 000м2"],
    ticks_snap_bounds: 10,
    value: 0,
    focus: true 
});
var area = document.getElementById('area');

slider.onclick = function (){
    area.innerText = slider.getValue();
}
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

var mySwiper = new Swiper('.swiper-container', {
    speed: 300,
    spaceBetween: 100,
    slidesPerView: 5,
    scrollbar: {
        el: '.swiper-scrollbar',
        clickable: true,
        draggable: true,
        dragClass: 'swiper-scrollbar-dra',
        dragSize: 33
      },
      breakpoints: {
          867:{
        slidesPerView: 4,
      }
      }
      
});

function pakt(){
    let light = document.getElementById('light');
    let medium = document.getElementById('medium');
    let full = document.getElementById('full');
    let cell = document.getElementById('cell');
    let text_btn = document.getElementById('text_btn');
    light.onclick = function(){
        cell.innerText = '4 800 тг';
        text_btn.style.display = 'block';
    }
    medium.onclick = function(){
        cell.innerText = '7 500 тг';
    }
    full.onclick = function(){
        cell.innerText = '5 500 тг';
    }
}

