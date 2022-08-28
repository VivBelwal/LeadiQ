
 function back(){
  window.location.href="pricing.html"
}
let obj ={}
function pay1(){

  let price = document.querySelector("#geth1>span").innerText
       obj.price = price;
       localStorage.setItem("price_value",JSON.stringify(obj))
       window.location.href="checkout.html"
       
       
  
}
function pay2(){
  let price = document.querySelector("#geth2>span").innerText
  obj.price = price;
  localStorage.setItem("price_value",JSON.stringify(obj))
  window.location.href="checkout.html"
 
}
function pay3(){
  let price = document.querySelector("#geth3>span").innerText
  obj.price = price;
       localStorage.setItem("price_value",JSON.stringify(obj))
       window.location.href="checkout.html"
      
}

let obj_price = JSON.parse(localStorage.getItem("price_value"));

    document.getElementById("span").innerText="₹"+obj_price.price;
 document.getElementById("launch").innerText="₹"+obj_price.price;
 document.getElementById("subtotal").innerText="₹"+obj_price.price;

 
let dis =obj_price.price
 
    dis= dis.replace(/,/g,'')
     Number(dis)
 let diso = dis*0.2;
   document.getElementById("discount").innerText="₹"+diso;
   document.getElementById("total").innerText="₹"+(dis-diso);



   function upi_pay(){
     document.querySelector("#flex_card1").style.color="black"
     document.querySelector("#flex_card2").style.color="green"
     document.querySelector("#flex_card3").style.color="black"

     document.getElementById("paypal_account").style.display="none"
     document.getElementById("upi_account").style.display="block"
     document.getElementById("grid_account").style.display="none"

   }

   function cards_pay(){
     document.querySelector("#flex_card1").style.color="green"
     document.querySelector("#flex_card2").style.color="black"
     document.querySelector("#flex_card3").style.color="black"


     document.getElementById("paypal_account").style.display="none"
     document.getElementById("upi_account").style.display="none"
     document.getElementById("grid_account").style.display="grid"

   }

   function paypal_pay(){
     document.querySelector("#flex_card1").style.color="black"
     document.querySelector("#flex_card2").style.color="black"
     document.querySelector("#flex_card3").style.color="green"

     document.getElementById("paypal_account").style.display="block"
     document.getElementById("upi_account").style.display="none"
     document.getElementById("grid_account").style.display="none"

   }



function paid(){
  let carddno = document.getElementById("card_no").value;
  let expry = document.getElementById("expry").value;
  let name = document.getElementById("name").value;
  let cvv = document.getElementById("cvv").value;
      
  // let arr = [];

 let id;
    if(carddno.length ==12&& name !=="" && expry.length > 4 && cvv.length == 3  ){
            
        document.querySelector("body").style.opacity="0.3"
        document.querySelector("body").style.backgroundImage="url(https://media.giphy.com/media/EopV0wKH3USE9F7fhe/giphy.gif)"
        document.querySelector("body").style.backgroundRepeat="no-repeat"
        document.querySelector("body").style.backgroundPosition="center"
        document.querySelector("body").style.backgroundAttachment="fixed"
        console.log("kya hua")
        // document.querySelector("body").style.backgroundImage="url(https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif)"

         setTimeout(function(){
            document.querySelector("body").style.backgroundImage="url(https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif)"

            setTimeout(function(){
              window.location.href="pricing.html"
            },3000)
         },5000)
    } 
    else{

      console.log("sd")
    if(carddno.length!==12){
      
         document.getElementById("red1").style.display="block"
         document.getElementById("card_no").style.border="1px solid red"
    }else{
      document.getElementById("red1").style.display="none"
      document.getElementById("card_no").style.border="1px solid green"
    }
    
    if(name =="" ){
      document.getElementById("red3").style.display="block"
      document.getElementById("name").style.border="1px solid red"
    }else{
      document.getElementById("red3").style.display="none"
      document.getElementById("name").style.border="1px solid green"
    }

    if(expry.length < 4 ){
      document.getElementById("red2").style.display="block"
      document.getElementById("expry").style.border="1px solid red"
    }else{
      document.getElementById("red2").style.display="none"
      document.getElementById("expry").style.border="1px solid green"
    }
    if(cvv.length !== 3){
      document.getElementById("red4").style.display="block"
      document.getElementById("cvv").style.border="1px solid red"
    }else{
      document.getElementById("red4").style.display="none"
      document.getElementById("cvv").style.border="1px solid green"
    }

}
}








