
function toggleMenu(){
    const hide=document.querySelectorAll(" nav ul .hide");
    const heading=document.querySelector(".heading");
    const header=document.querySelector("header");
    if(hide[0].style.display==="none" ||hide[0].style.display===""){
        for(let i=0;i<hide.length;i++){
            hide[i].style.display="block";
        }
        heading.style.display="none";
        header.style.backgroundColor="black";
        header.style.backgroundImage="url()";
    }
    else{
        for(let i=0;i<hide.length;i++){
            hide[i].style.display="none";
        }
        heading.style.display="block";
        header.style.backgroundColor="white";
        header.style.backgroundImage="url(/images/desktop/image-hero2.jpg)";
    }

}

const menu=document.querySelector(".menu a");

menu.addEventListener("click",toggleMenu);
menu.addEventListener("click",function(){
const ul=document.querySelector('nav ul');
});
