



function signup(){
    window.location.href="signup1.html"
}
 let arr = JSON.parse(localStorage.getItem("signupData"))
 console.log(arr)

 function login(){
    let email1 = document.getElementById("email").value
    let password1 = document.getElementById("password").value
          let present = 0
    arr.forEach(({email,password})=>{
     
     if(email1 == email && password1 == password){
        present = 1
               
     }
})
   if(present==1){
        window.location.href="index.html"
         let obj = {}
         obj.img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOA_oBdBM8ofNuI3Wrdz8IEnIJP4j6kAQoA&usqp=CAU"
         localStorage.setItem("objimg",JSON.stringify(obj))
   }else{
    document.getElementById("invalid").style.display="block"
   }
 }
  

