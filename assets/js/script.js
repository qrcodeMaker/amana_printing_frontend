
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
///popup
document.querySelectorAll('.open-image').forEach(item=>{
  item.addEventListener('click',function(e){
    e.preventDefault();
    const imgSrc = this.getAttribute('data-img');
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('imgModal').style.display = 'flex';
  });
});

document.querySelector('.img-modal .close').onclick = closeModal;
document.getElementById('imgModal').onclick = function(e){
  if(e.target === this) closeModal();
};
function closeModal(){
  document.getElementById('imgModal').style.display = 'none';
  document.getElementById('modalImg').src = '';
}
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





let searchIcon = document.querySelector('.search-icon');
let searchField = document.getElementById('search');

searchIcon.addEventListener('click', () => {
    if (searchField) {
        setTimeout(function(){ searchField.focus (); }, 50);

    }
});


