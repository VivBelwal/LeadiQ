 import {navbar,dropDown,scroll} from '../components/navbar.js'

 import navTop from '../components/navTop.js'

 let navContainer = document.getElementById('navContainer')
 
 navContainer.innerHTML=navbar();

 let navTopC = document.getElementById('navTop')
 
 navTopC.innerHTML=navTop();

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

  
  let zoomClari =()=>{
    let walkmeLogo =document.getElementById('walkme-logo')
    let clariLogo = document.querySelector('#walkme-logo>img');
    clariLogo.style.width="120%";
    walkmeLogo.style.overflow="hidden"
    
}

let zoutClari =()=>{
    let clariLogo = document.querySelector('#walkme-logo>img');
    clariLogo.style.width="100%";

    
}
 
 document.getElementById("walkme-image").addEventListener("mouseover",zoomClari)
 document.getElementById("walkme-image").addEventListener("mouseout",zoutClari)
 

 
 
 
 
 
 
 
 
 

 
 



