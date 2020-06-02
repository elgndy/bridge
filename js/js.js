
var ico = document.querySelector('.ico');
var ul_hidden = document.querySelector('.ull');

ico.addEventListener('click' , () => {
  ico.toggleAttribute('is');
  if(ico.hasAttribute('is')){
    ul_hidden.style.height = '420px';
    ul_hidden.style.overFlow = 'inherit'
    ul_hidden.style.transition = 'all .2s ease-in';
  }
  else{
    ul_hidden.style.height = '0px';
    ul_hidden.style.overFlow = 'hidden'
    ul_hidden.style.transition = 'all .2s ease-in';
  }
  
})


var pair_home = document.querySelector('.pair_home'),
    sections = document.querySelectorAll('.pair_home section'),
    i_left = document.querySelector('.i'),
    i_right = document.querySelector('.i2');
    var imgs = document.querySelectorAll('.pair_home section div img');
    var h1 = document.querySelectorAll('.pair_home section div h1');
    var span = document.querySelectorAll('.pair_home section div span');
    var p = document.querySelectorAll('.pair_home section div p');
    var button = document.querySelectorAll('.pair_home section div button');
    
    var index = 0;

   const slider = (index) =>{
    
      for(var i = 0; i <= sections.length - 1 ; i++){
        sections[i].style.opacity = 0;
        sections[index].style.opacity = 1;
        sections[i].style.transition = 'all .5s ease-in';
        sections[index].style.transition = 'all 1s ease-in';
        sections[i].style.zIndex = "0";
        sections[index].style.zIndex = "10";
        
        //=============================================
        span[i].style.transform = 'translateX(20%)';
        span[i].style.opacity = '0'    
        span[i].style.transition = 'all 0s' 
        for(var h =0;h<h1.length ; h++){
          h1[i].style.transition = 'all 0s'
          h1[i].style.transform = 'translateX(10%)';
          h1[i].style.opacity = '0'
          setTimeout(() => {
            h1[index].style.transform = 'translateX(0%)';
          }, 100)
        }
        for(var l =0 ; l<p.length;l++){
          p[i].style.opacity = '0'
          p[i].style.transform = 'translateX(10%)';
          p[i].style.transition = 'all 0s'
          setTimeout(()=>{
            p[index].style.transform = 'translateX(0%)';
          } ,200)
        }
        for(var b =0 ; b<button.length;b++){
          button[i].style.transform = 'translateX(30%)';
          button[i].style.transition = 'all 0s'
          button[i].style.opacity = '0'
          setTimeout(()=>{
            button[index].style.transform = 'translateX(0%)';
          } ,300)
        } 
        span[index].style.transform = 'translateX(0%)';
        h1[index].style.opacity = '1'
        span[index].style.opacity = '1'
        p[index].style.opacity = '1'
        button[index].style.opacity = '1' 
        h1[index].style.transition = 'all 1s ease'
        span[index].style.transition = 'all 1s ease'
        p[index].style.transition = 'all 1s ease'
        button[index].style.transition = 'all 1s ease'
        
        //=============================================
        for(var n =0 ; n < imgs.length ; n++){
        imgs[n].style.transform = 'translateY(10%)';
        imgs[n].style.opacity = '0';
        setTimeout(() => {
          imgs[index].style.transform = 'translateY(0%)';
          imgs[index].style.opacity = '1'
         } , 500) 
       }
        imgs[i].style.transition = 'all 0s ease-in';
        imgs[index].style.transition = 'all .3s ease-in';
      }
    }

    //===================
    var int = setInterval(function() {
      index > sections.length -2 ? index =0 : index++;
      slider(index);
    } ,6000 )

i_left.addEventListener( 'click' , () => {
  index >= sections.length -1 ? index=0 : index++;
      slider(index);
      clearInterval(int)
})
i_right.addEventListener( 'click' , () => {
  index >= sections.length -1 ? index=0 : index++;
      slider(index);
      clearInterval(int)
})

/*start trus */
var trus = document.querySelector('.ic');
var pair_nav = document.querySelector('.pair_nav');
var pair_hidden = document.querySelector('.pair_hidden');
var count1 = document.querySelector('.h31');
var count2 = document.querySelector('.h32');
var count3 = document.querySelector('.h33');
var count4 = document.querySelector('.h34');
window.onscroll = function () {
  trus.style.transform = `rotate(${ window.scrollY - 30}deg)`;
trus.style.transition = 'all .4s ease'

if(window.pageYOffset > 50){
  pair_nav.style.position = 'fixed';
  pair_hidden.style.position = 'fixed';
}
else{
  pair_nav.style.position = 'relative';
  pair_hidden.style.position = 'relative';
}

if(window.pageYOffset > 1500){
  count1.innerHTML = '80'
}
}

trus.addEventListener('click' , () => {
   window.scrollBy({ 
      top: (0 - document.body.clientHeight), // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
})

/*end trus */

/*slider start */

var all_img = document.querySelector('.pair_slider'),
      all_imgs = document.querySelectorAll('.pair_slider section'),
      right = document.querySelector('.fss2'),
      left = document.querySelector('.fss1'),
      onee = document.querySelector('.onee'),
      twoo = document.querySelector('.twoo'),
      threee = document.querySelector('.threee'),
      fourr = document.querySelector('.fourr'),
      fivee = document.querySelector('.fivee'),
      sixx = document.querySelector('.sixx');
      var after = document.querySelector('.linee')
      counter = 0;
      var num = 100;
      console.log(after)

/* عرض الصوره الاولي */
const size = all_imgs[1].clientWidth

/* -944 يعني حرك الصوره بالترانسلات من الديف كلو */
all_img.style.transform =  ' translateX(' + (-size  * counter) + 'px)';

/* next button click */
onee.addEventListener('click' , () =>{
  if(counter >= all_imgs.length -1 )return;
  all_img.style.transition = 'transform 0.5s ease-in-out';
  counter = 0;
  all_img.style.transform =  ' translateX(' + (-size * counter) + 'px)';
  after.style.width = '100px'
});
twoo.addEventListener('click' , () =>{
  if(counter >= all_imgs.length -1 )return;
  all_img.style.transition = 'transform 0.5s ease-in-out';
  counter = 1;
  all_img.style.transform =  ' translateX(' + (-size * counter) + 'px)';
  after.style.width = '300px'
});
threee.addEventListener('click' , () =>{
  if(counter >= all_imgs.length -1 )return;
  all_img.style.transition = 'transform 0.5s ease-in-out';
  counter = 2;
  all_img.style.transform =  ' translateX(' + (-size * counter) + 'px)';
  after.style.width = '500px'
});
fourr.addEventListener('click' , () =>{
  if(counter >= all_imgs.length -1 )return;
  all_img.style.transition = 'transform 0.5s ease-in-out';
  counter = 3;
  all_img.style.transform =  ' translateX(' + (-size * counter) + 'px)';
  after.style.width = '700px'
});
fivee.addEventListener('click' , () =>{
  if(counter >= all_imgs.length -1 )return;
  all_img.style.transition = 'transform 0.5s ease-in-out';
  counter = 4;
  all_img.style.transform =  ' translateX(' + (-size * counter) + 'px)';
  after.style.width = '900px'
});
sixx.addEventListener('click' , () =>{
  if(counter == all_imgs.length -1 )return;
  all_img.style.transition = 'transform 0.5s ease-in-out';
  counter = 5;
  all_img.style.transform =  ' translateX(' + (-size * counter) + 'px)';
  after.style.width = '1100px'
});
/* prev button click */
left.addEventListener('click' , () =>{
  if(counter <= 0)return;
  all_img.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  all_img.style.transform = ' translateX(' + (-size * counter) + 'px)';
  after.style.width = '300px'
});
right.addEventListener('click' , () =>{
  if(counter >= all_imgs.length - 2)return;
  all_img.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  all_img.style.transform = ' translateX(' + (-size * counter) + 'px)';
});

/*slider end */

