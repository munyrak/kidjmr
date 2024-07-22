const btnyes = document.querySelector(".yes");
const text = document.querySelector("h1");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const btnno=document.querySelector(".no")
btnyes.addEventListener("click", function() {
   
    if (img1.classList.contains("active")) {
        img1.classList.remove("active");
        img2.classList.add("active");
        text.innerHTML = "I love you❤️❤️😍"; 
        btnno.classList.add("no1"); 
    } else {
        img1.classList.add("active");
        img2.classList.remove("active"); 
        text.innerHTML = "Do you love me?"; 
        img3.classList.remove("active");
        btnno.classList.remove("no1"); 
    }
});
btnno.addEventListener("click",function(){
    if (img1.classList.contains("active")) {
        img1.classList.remove("active");
        img3.classList.add("active");
        text.innerHTML = "Ah jmr😡😡";  
        btnyes.classList.add("no1");
    } else {
        img1.classList.add("active");
        img3.classList.remove("active"); 
        text.innerHTML = "Do you love me?"; 
        btnyes.classList.remove("no1");
    }
})