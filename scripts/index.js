 import navbar from '../components/navbar.js'

 import navTop from '../components/navTop.js'

 let navContainer = document.getElementById('navContainer')
 
 navContainer.innerHTML=navbar();

 let navTopC = document.getElementById('navTop')
 
 navTopC.innerHTML=navTop();

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 document.querySelector('#details>div:nth-child(1)').addEventListener('mouseover',dropDown1);
 document.querySelector('#details>div:nth-child(2)').addEventListener('mouseover',dropDown2);
 document.querySelector('#details>div:nth-child(3)').addEventListener('mouseover',dropDown3);
document.querySelector('#WhyLead').addEventListener('mouseout',dropOut1);
document.querySelector('#Solutions').addEventListener('mouseout',dropOut2);
document.querySelector('#Resources').addEventListener('mouseout',dropOut3);

function dropDown1(){
let WhyLead = document.getElementById('WhyLead');
WhyLead.style.display='block';

}
function dropDown2(){
    let Solutions = document.getElementById('Solutions');
    Solutions.style.display='flex';
    
    }

    function dropDown3(){
        let Resources = document.getElementById('Resources');
        Resources.style.display='block';
        
        }
function dropOut1(){
    let WhyLead = document.getElementById('WhyLead');
WhyLead.style.display='none';
}
function dropOut2(){
    let Solutions = document.getElementById('Solutions');
    Solutions.style.display='none';
}
function dropOut3(){
    let Resources = document.getElementById('Resources');
    Resources.style.display='none';
}

window.addEventListener('scroll',changeColor);

function changeColor(){
    let nav = document.getElementById('nav');
    let scrollValue = window.scrollY;
    
    if(scrollValue>150){
        nav.style.backgroundColor="White";
        nav.style.color="#063C4D"
    } else if(scrollValue<150){
        nav.style.backgroundColor="#063C4D";
        nav.style.color="#DAE2E3"
    }
}
