function navbar(){

    return `<div id="nav">

    <div id="logo">
      <img src="https://assets.website-files.com/60819f9be381394642b5659e/6081a538174f4d6bc01bdd27_leadiq-logo.svg" alt="">
    </div>
    
    <div id="details">
    
     <div>
    
     <span>WhyLead</span>
      <img class="arrow" src="https://assets.website-files.com/60819f9be381394642b5659e/609b0bcc6d8f484d1c4c0eb7_leadiq-arrow-tab.svg" alt="">
    
      <!-- Drop Down Whylead -->
      <div id="WhyLead">
       
        <p>Features</p>
        <p>Success Stories</p>
    
       </div>
    
            </div>
    
     <div>
     
     <span>Solutions</span>
      <img class="arrow" src="https://assets.website-files.com/60819f9be381394642b5659e/609b0bcc6d8f484d1c4c0eb7_leadiq-arrow-tab.svg" alt="">
    
         <!-- Drop Down Solutions -->
      <div id="Solutions">
       
        <div>
           
           <h4>By Use Case</h4>
           <p>Eliminating Busy Work</p>
           <p>Strategic Prospecting</p>
           <p>Data Accuracy</p>
    
        </div>
    
        <div>
     
           <h4>By Roles</h4>
           <p>Sales Leaders</p>
           <p>Revenue Operations</p>
           <p>Sales Professionals</p>
        </div>
    
          </div>
     </div>
    
     <div class="detailDiv">
     
     <span>Resources</span>
      <img class="arrow" src="https://assets.website-files.com/60819f9be381394642b5659e/609b0bcc6d8f484d1c4c0eb7_leadiq-arrow-tab.svg" alt="">
    
      <!-- Drop Down Resources -->
      <div id="Resources">
       
        <p>Blog</p>
        <p>Support</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Privacy Center</p>
    
       </div>
     </div>
    
     <div class="detailDiv">
      <p>Pricing</p>
    
     </div>
    
    
    
    </div>
    
    <!-- Book a Demo button -->
    <div id="btn">
    
     Book a demo
    </div>
    </div>`
}

function dropDown(){
  document.querySelector('#details>div:nth-child(1)').addEventListener('mouseover',dropDown1);

document.querySelector('#details>div:nth-child(1)').addEventListener('mouseout',dropOut1);

document.querySelector('#details>div:nth-child(2)').addEventListener('mouseover',dropDown2);

document.querySelector('#details>div:nth-child(3)').addEventListener('mouseover',dropDown3);

document.querySelector('#details>div:nth-child(2)').addEventListener('mouseout',dropOut2);
document.querySelector('#details>div:nth-child(3)').addEventListener('mouseout',dropOut3);

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
}

function scroll(){
  window.addEventListener('scroll',changeColor);

function changeColor(){
    let nav = document.getElementById('nav');
    let scrollValue = window.scrollY;
    
    if(scrollValue>150){
        nav.style.backgroundColor="White";
        nav.style.color="#063C4D";
        nav.style.transition="0.5s"
    } else if(scrollValue<150){
        nav.style.backgroundColor="#063C4D";
        nav.style.color="#DAE2E3"
    }
}
}

export {navbar,dropDown,scroll}










