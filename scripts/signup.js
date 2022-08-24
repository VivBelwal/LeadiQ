


    let  continues = ()=>{

        let email = document.getElementById("email").value;

          if(email!==null && email.includes("@")){
              let obj = {};
              obj.email  = email;
              localStorage.setItem("email",JSON.stringify(obj));
              window.location.href = "signpass.html"

          }else{
              document.getElementById("red").style.display='block'
          }
  }












let obj = JSON.parse(localStorage.getItem("email"))




document.getElementById("show_email").innerText = obj.email

    let arr = JSON.parse(localStorage.getItem("signupData"))|| [];
let signup = ()=>{
 let pass1 = document.getElementById("text").value;
 let pass2 = document.getElementById("text1").value;

 if(pass1.length > 8 && pass1.match(/[!\@\#\$\%\^\&\*\+\-]/)){
         
      
 }else{
     document.getElementById("special").style.display = 'block'
     document.getElementById("min").style.display = 'block'
 }
 if(pass1 === pass2){
     obj.password = pass1;
     arr.push(obj);
    
     localStorage.setItem("signupData",JSON.stringify(arr));
        window.location.href = "login.html"

 }else{
     document.getElementById("match").style.display = 'block'
 }
  
}

