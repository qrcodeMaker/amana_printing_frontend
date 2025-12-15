
// const video = document.getElementById('myVideo');
// const playButton = document.querySelector('.slide_vedio_btn');

// // Add an event listener to the play button
// if(playButton)
// {
//     playButton.addEventListener('click', function() {
//         // Hide the play button
//         playButton.style.display = 'none';
        
//         // Play the video
//         video.play();
//     });
// }

// // When the video ends, show the play button again
// if(video)

// {
//     video.addEventListener('ended', function() {
//         playButton.style.display = 'block';
//     });
    
// }
let medias = [].slice.call(document.getElementsByClassName("px-media"));

      medias.forEach(e => {
        
         let data = e.getAttribute("data-src");
         e.style.backgroundImage = `url("${data}")`;
      
      })

      $(".owl1").owlCarousel({
        responsiveClass: true,
        margin : 25 ,
        responsive: {
            0:{
                items:1,
                nav:true
            },
            500:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            } ,
            1200:{
                items:5,
                nav:true,
                loop:false
            }
        },
      });
      $(".owl2").owlCarousel({
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
                nav:true
            },
            500:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            } ,
            1200:{
                items:3,
                nav:true,
                loop:false
            }
        },
      });

let pagin = document.querySelectorAll(".pagination");
pagin.forEach(pag=>{
  let active_pag = pag.querySelectorAll(".active");
  

    let pagin_item = pag.querySelectorAll(".page-item");
            if (pagin_item.length >5 ) {
        for( let i=4 ;  i<  pagin_item.length-2  ; i++ )
          {
            if(pagin_item[i].classList.contains("active") || pagin_item[i-1].classList.contains("active")){
               
            }
            else{
              pagin_item[i].innerHTML =".";
            }
          }
       
      }
})
///
let eyes= document.querySelectorAll('.eye ') ;
if(eyes){
  eyes.forEach(e=>{
    e.addEventListener('click', ()=>{
        e.parentElement.querySelector('input').setAttribute('type', 'text')
        e.classList.add('d-none' )
    })
  })
}
//


//------------- DETAIL ADD - MINUS COUNT ORDER -------------//
$('.btn-number').click(function(e){
  e.preventDefault();
  
  fieldName = $(this).attr('data-field');
  type      = $(this).attr('data-type');
  var input = $("input[name='"+fieldName+"']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
      if(type == 'minus') {
          
          if(currentVal > input.attr('data-min')) {
              input.val(currentVal - 1).change();
          } 
          if(parseInt(input.val()) == input.attr('data-min')) {
              $(this).attr('disabled', true);
          }

      } else if(type == 'plus') {

          if(currentVal < input.attr('data-max')) {
              input.val(currentVal + 1).change();
          }
          if(parseInt(input.val()) == input.attr('data-max')) {
              $(this).attr('disabled', true);
          }

      }
  } else {
      input.val(0);
  }
});
$('.input-number').focusin(function(){
 $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
  
  minValue =  parseInt($(this).attr('data-min'));
  maxValue =  parseInt($(this).attr('data-max'));
  valueCurrent = parseInt($(this).val());
  
  name = $(this).attr('name');
  if(valueCurrent >= minValue) {
      $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
      alert('Sorry, the minimum value was reached');
      $(this).val($(this).data('oldValue'));
  }
  if(valueCurrent <= maxValue) {
      $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
      alert('Sorry, the maximum value was reached');
      $(this).val($(this).data('oldValue'));
  }
  
  
});
$(".input-number").keydown(function (e) {
      // Allow: backspace, delete, tab, escape, enter and .
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
           // Allow: Ctrl+A
          (e.keyCode == 65 && e.ctrlKey === true) || 
           // Allow: home, end, left, right
          (e.keyCode >= 35 && e.keyCode <= 39)) {
               // let it happen, don't do anything
               return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
      }
  });
  ////
  $(function() {
	
	$(document).on({
		mouseover: function(event) {
			$(this).find('.far').addClass('star-over');
			$(this).prevAll().find('.far').addClass('star-over');
		},
		mouseleave: function(event) {
			$(this).find('.far').removeClass('star-over');
			$(this).prevAll().find('.far').removeClass('star-over');
		}
	}, '.rate');


	$(document).on('click', '.rate', function() {
		if ( !$(this).find('.star').hasClass('rate-active') ) {
			$(this).siblings().find('.star').addClass('far').removeClass('fas rate-active');
			$(this).find('.star').addClass('rate-active fas').removeClass('far star-over');
			$(this).prevAll().find('.star').addClass('fas').removeClass('far star-over');
		} else {
			console.log('has');
		}
	});
	
});

///
let show_more = document.querySelector(".show_more");
let reviews = document.querySelector(".customer_rate");
let form_checks  ;
if(reviews){
     form_checks = reviews.querySelectorAll(".content") ;
   
}

if(reviews){
  
   
     if(form_checks.length <3){
        reviews.parentElement.querySelector(".show_more").style.display="none"

     }

     else{
        reviews.parentElement.querySelector(".show_more").style.display="block" 
        for (let i =3; i < form_checks.length; i++) {
            
                form_checks[i].style.display = 'none'; // Hide the element
            }
     }
    

}
if(show_more) {
    show_more.addEventListener("click" ,()=>{
        
        document.querySelector(".customer_rate").classList.toggle("fullheight") ;
      if( show_more.innerHTML !== " - Show Less" ) {

        show_more.innerHTML=" - Show Less"  ; 
        for (let i =3; i < form_checks.length; i++) {
            
            form_checks[i].style.display = 'block'; // Hide the element
        }
      }
      else {
        show_more.innerHTML='<i class="fa-solid fs-4 mx-2 fa-rotate-right"></i> عرض المزيد'; 
        for (let i =3 ; i < form_checks.length; i++) {
            
            form_checks[i].style.display = 'none'; // Hide the element
        }
      }
    })

}
let searchIcon = document.querySelector('.search-icon');
let searchField = document.getElementById('search');

searchIcon.addEventListener('click', () => {
    if (searchField) {
        setTimeout(function(){ searchField. focus (); }, 50);

    }
});
