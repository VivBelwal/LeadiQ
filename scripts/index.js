 import {navbar,dropDown,scroll} from '../components/navbar.js'

 import navTop from '../components/navTop.js'

 import footer from '../components/footer.js'

 let navContainer = document.getElementById('navContainer')
 
 navContainer.innerHTML=navbar();

 let navTopC = document.getElementById('navTop')
 
 navTopC.innerHTML=navTop();

 let footerParent = document.getElementById('footerParent')
 
 footerParent.innerHTML=footer();

 dropDown();

 scroll();


  function prosSection(){

    window.addEventListener('scroll',prosSection);
    let proDiv2 = document.querySelector('#pros>div:last-child');
let scrollValue = window.scrollY;
  
    let margin = -6;
if(scrollValue>99){

    
    proDiv2.style.marginTop=`${margin*scrollValue/100}px`;
    
} else if(scrollValue<100){
    proDiv2.style.marginTop="0px";
  
}
  }

  prosSection();

  
//   let zoomClari =()=>{
//     let walkmeLogo =document.getElementById('walkme-logo')
//     let clariLogo = document.querySelector('#walkme-logo>img');
//     clariLogo.style.width="120%";
//     walkmeLogo.style.overflow="hidden"
    
// }

// let zoutClari =()=>{
//     let clariLogo = document.querySelector('#walkme-logo>img');
//     clariLogo.style.width="100%";

    
// }
 
//  document.getElementById("walkme-image").addEventListener("mouseover",zoomClari)
//  document.getElementById("walkme-image").addEventListener("mouseout",zoutClari)
 

 
 // ============== WALKME IMAGE SECTION ===============


let walkmeImage = document.getElementById("walkme-img");
let walkmeContainer = document.getElementById("walkme-container");



let hoverEffect = (event) => {
    walkmeImage.style.width="530px";
    walkmeImage.style.transition="0.5s";
    // walkmeImage.style.overflow="hidden"
}

let removeEffect = (event) => {
    walkmeImage.style.width="500px";
    walkmeImage.style.transition="0.5s";

}

walkmeContainer.addEventListener("mouseover", hoverEffect);
walkmeContainer.addEventListener("mouseout", removeEffect);
 
 
 
 
//  link(){
//     window.location.href="pricing.html"
//   }
 
document.querySelector(".detailDiv>p").addEventListener("click",linkP)

 function linkP(){
    window.location.href="pricing.html"
 }

 document.querySelector("#btn").addEventListener("click",bookDemo)

 function bookDemo(){
    window.location.href="bookdemo.html"
 }

 document.querySelector("#log").addEventListener("click",login)

 
function login(){
    window.location.href="login.html"
}

 
 



