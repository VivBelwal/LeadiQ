document.getElementById("log").addEventListener("click",logbtn)

function logbtn(){
    window.location.href="login.html"
}

let obj = JSON.parse(localStorage.getItem("objimg"));

if(obj!==""){
document.getElementById("imgg").src = obj.img
document.getElementById("log").innerHTML=null;

}