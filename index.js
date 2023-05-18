// ----Variables------
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn--left");
const btnRight = document.querySelector("#btn--right");

const navLink = document.querySelectorAll('.nav__link');


// --------------
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

btnRight.addEventListener('click', function(){
  next();
});

btnLeft.addEventListener('click', function(){
  prev();
});

navLink.forEach(function(link) {
  link.addEventListener('click', inputChecked);
});


setInterval(function(){
  next();
}, 5000);

// ----Funciones-------
// Función para hacer que el carrusel se valla a la imagen siguiente 
function next(){
  let sliderSectionFist = document.querySelectorAll('.slider__section')[0];
  slider.style.marginLeft = '-200vw';
  slider.style.transition = 'all 0.3s';
  setTimeout(function(){
    slider.style.transition = 'none';
    slider.insertAdjacentElement('beforeend', sliderSectionFist);
    slider.style.marginLeft = '-100vw';
  }, 300);
};

// Función para hacer que el carrusel se valla a la imagen anterior 
function prev(){
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = '0';
  slider.style.transition = 'all 0.3s';
  setTimeout(function(){
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = '-100vw';
  }, 300);
};

// Cambia el input a checked cuando se realiza click en un enlace del nav
function inputChecked() {
  const menuCheckbox = document.querySelector('#menu');
  menuCheckbox.checked = false;
}

































































































// // Función que se ejecutará al hacer clic en el enlace interno
// function scrollToSection(event) {
//   event.preventDefault(); // Detiene el comportamiento predeterminado del enlace
//   const targetId = event.currentTarget.getAttribute("href"); // Obtiene el atributo href del enlace
//   const targetPosition = document.querySelector(targetId).offsetTop; // Obtiene la posición de la sección
//   const startPosition = window.pageYOffset;
//   const distance = targetPosition - startPosition;
//   const duration = 700; // Duración de la animación en milisegundos (0.7 segundos en este caso)
//   let start = null;



// -------------Las animaciones con CSS son mejor :p    

//   // Función que se ejecuta en cada cuadro de la animación
//   function animate(currentTime) {
//   if (start === null) start = currentTime;
//   const timeElapsed = currentTime - start;
//   const run = ease(timeElapsed, startPosition, distance, duration);
//   window.scrollTo(0, run);
//   if (timeElapsed < duration) requestAnimationFrame(animate);
//   }

//   // Función para calcular la posición intermedia en cada cuadro de la animación
//   function ease(t, b, c, d) {
//   t /= d / 2;
//   if (t < 1) return (c / 2) * t * t + b;
//   t--;
//   return (-c / 2) * (t * (t - 2) - 1) + b;
//   }

//   // Inicia la animación
//   requestAnimationFrame(animate);
// }

// // Agrega un evento de clic a todos los enlaces internos de la página
// const links = document.querySelectorAll('a[href^="#"]');
// links.forEach(link => {
//   link.addEventListener("click", scrollToSection);
// });






































// $(function() {
//     $('a[href*="#"]:not([href="#"])').click(function() {
//       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//         if (target.length) {
//           $('html, body').animate({
//             scrollTop: target.offset().top
//           }, 1500);
//           return false;
//         }
//       }
//     });
//   });




// function MM_swapImgRestore() { //v3.0
//   var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
// }
// function MM_preloadImages() { //v3.0
//   var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
//     var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
//     if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
// }

// function MM_swapImgRestore() { //v3.0
//   var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
// }

// function MM_findObj(n, d) { //v4.01
//   var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
//     d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
//   if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
//   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
//   if(!x && d.getElementById) x=d.getElementById(n); return x;
// }

// function MM_swapImage() { //v3.0
//   var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
//    if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
// }
// function MM_swapImgRestore() { //v3.0
//   var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
// }
// function MM_preloadImages() { //v3.0
//   var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
//     var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
//     if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
// }

// function MM_swapImgRestore() { //v3.0
//   var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
// }

// function MM_findObj(n, d) { //v4.01
//   var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
//     d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
//   if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
//   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
//   if(!x && d.getElementById) x=d.getElementById(n); return x;
// }

// function MM_swapImage() { //v3.0
//   var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
//    if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
// }
// function MM_swapImgRestore() { //v3.0
//   var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
// }
// function MM_preloadImages() { //v3.0
//   var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
//     var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
//     if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
// }

// function MM_swapImgRestore() { //v3.0
//   var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
// }

// function MM_findObj(n, d) { //v4.01
//   var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
//     d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
//   if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
//   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
//   if(!x && d.getElementById) x=d.getElementById(n); return x;
// }

// function MM_swapImage() { //v3.0
//   var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
//    if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
// }
// function MM_swapImgRestore() { //v3.0
//   var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
// }
// function MM_preloadImages() { //v3.0
//   var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
//     var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
//     if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
// }

// function MM_swapImgRestore() { //v3.0
//   var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
// }

// function MM_findObj(n, d) { //v4.01
//   var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
//     d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
//   if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
//   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
//   if(!x && d.getElementById) x=d.getElementById(n); return x;
// }

// function MM_swapImage() { //v3.0
//   var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
//    if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
// }