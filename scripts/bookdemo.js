// window.addEventListener("resize", hi);

// function hi(event){
    
//     if(event.target.screen.availWidth<=600){
//         console.log("HI");
//     }
    
// }

let connect = document.getElementById("connect");
connect.addEventListener("click", submitForm);

let err1 = document.getElementById("err1");
let err2 = document.getElementById("err2");
let err3 = document.getElementById("err3");
let err4 = document.getElementById("err4");
let err5 = document.getElementById("err5");
let err6 = document.getElementById("err6");

let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");
let inp5 = document.getElementById("inp5");
let inp6 = document.getElementById("inp6");

function submitForm(event){
    event.preventDefault();
    if(inp1.value==""){
        err1.style.display="block"
        inp1.style.marginBottom = "0px"
    }
    if(inp2.value==""){
        err2.style.display="block"
        inp2.style.marginBottom = "0px"
    }
    if(inp3.value==""){
        err3.style.display="block"
        inp3.style.marginBottom = "0px"
    }
    if(inp4.value==""){
        err4.style.display="block"
        inp4.style.marginBottom = "0px"
    }
    if(inp5.value==""){
        err5.style.display="block"
        inp5.style.marginBottom = "0px"
    }
    if(inp6.value==""){
        err6.style.display="block"
        inp6.style.marginBottom = "0px"
    }

    else{
        alert("Hold on, we will contact you soon!")
    }
}


let crousalData = [`<div class="crouser" >
<div class="couser-img-div">
    <img src="https://assets.website-files.com/60819f9be381394642b5659e/6081b679baa783d764f6fc80_leadiq-image-testimonial-icon.svg" alt="">
</div>
<div>
    <img src="https://assets.website-files.com/60819f9be381394642b5659e/6081b633c9bc20456cf9deed_leadiq-walkme-logo.svg" alt="">
    <h1>“Without LeadIQ, our outbound team’s workflow would be disjointed and time consuming.”</h1>
    <div id="signature">
        <div id="avatar">
            <img src="https://assets.website-files.com/60819f9be381394642b5659e/6081b707a0940538e46fc580_leadiq-autor-image.jpg" alt="">
        </div>
        <div class="designation">
            <h3>Aaron Zukoski</h3>
            <p>Director of Business Development, <span id="green-font">WalkMe</span></p>
        </div>

    </div>

</div>
</div>`,

`<div class="crouser" >
<div id="crouser-img-holder" class="couser-img-div">
    <img src="https://assets.website-files.com/60819f9be381394642b5659e/61682a2f2c0e6a07186d4d6d_LeadIQ-Integrations-Iterable-Quote.svg" alt="">
</div>
<div>
    <img src="https://assets.website-files.com/60819f9be381394642b5659e/609b19b536e6a74f639686e9_leadiq-iterable-logo.svg" alt="">
    <h1>"Having prospect data is one thing, but being able to do something with that data is very important for us. LeadIQ enables us to move a lot faster."</h1>
    <div id="signature">
        <div id="avatar">
            <img src="https://assets.website-files.com/60819f9be381394642b5659e/609b193c428f097cbf5483a6_leadiq-iterable-quote-avatar-david.jpg" alt="">
        </div>
        <div class="designation">
            <h3>David Zerwin</h3>
            <p>Sr. Director Sales Operations, <span id="green-font">Iterable</span></p>
        </div>

    </div>

</div>
</div>`,

`<div class="crouser" >
<div class="couser-img-div">
    <img src="https://assets.website-files.com/60819f9be381394642b5659e/609bf5cbe627762ca111d52b_leadiq-%20clari-featured-image.svg" alt="">
</div>
<div>
    <img src="https://assets.website-files.com/60819f9be381394642b5659e/609bf55f65fe86e64a7e5c49_leadiq-clari-logo.svg" alt="">
    <h1>“LeadIQ saves our sales team more than 600 hours a quarter.”</h1>
    <div id="signature">
        <div id="avatar">
            <img src="https://assets.website-files.com/60819f9be381394642b5659e/609bf59a4e40e8d807155e97_leadiq-clari-kyle-coleman.jpg" alt="">
        </div>
        <div class="designation">
            <h3>Kyle Coleman</h3>
            <p>VP Revenue Growth & Enablement, <span id="green-font">Clari</span></p>
        </div>

    </div>

</div>
</div>
</div>`]


let crouserHolder = document.getElementById("crouser-holder");
let count=0;
function slide() {
    crouserHolder.innerHTML = crousalData[count];
    setInterval(function(){
        count++;
        crouserHolder.innerHTML = crousalData[count];
        
            console.log("dfg")

            if(count==crousalData.length-1){
                count=-1;
            }

    }, 5000)
}

slide();