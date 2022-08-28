



function signup(){
    window.location.href="signup1.html"
} function login(){
   
let present = 0

let arr = JSON.parse(localStorage.getItem("signupData"))
         console.log(arr)
      
    let email1 = document.getElementById("email").value
    let password1 = document.getElementById("password").value
         
    arr.forEach(({email,password})=>{
     
     if(email1 == email && password1 == password){
        present = 1
               
     }
})
   if(present==1){
       
         let obj = {}
         obj.img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrYpohjhQQnvWmiEpwmAhpgkN-weqRYIjCQ&usqp=CAU"
         localStorage.setItem("objimg",JSON.stringify(obj))
         window.location.href="index.html"
   }else{
    document.getElementById("invalid").style.display="block"
    document.getElementById("email").style.border="1px solid red"
    document.getElementById("password").style.border="1px solid red"
   }
 }
  

