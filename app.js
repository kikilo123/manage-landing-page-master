let bugerList=document.querySelector(".burger-list");
let burgerMenu=document.querySelector(".burger img");
let body=document.querySelector("body");
let close=document.querySelector(".close");
let from=document.querySelector("form");
let sub=document.getElementById("submit");
let email=document.getElementById("email");
let invalideEmail=document.querySelector("#infalide");

sub.addEventListener("click",(e)=>{
    if(email.value==""){
        e.preventDefault();
        invalideEmail.style.display="block";
    }else if(email.value!="@"){
        invalideEmail.style.display="block";
    }else{
        invalideEmail.style.display="none";
    }
})




// carusleni

const carusel=document.querySelector(".card");
let isDragStart=false,prevPageX,prevScrollLeft;

const dtagStart=(e)=>{
    isDragStart=true;
    prevPageX=e.pageX;
    prevScrollLeft=carusel.scrollLeft;
}
const dragging=(e)=>{
    if(isDragStart) return;
    e.preventDefault();
    let positionDiff=e.pageX-prevPageX;
    carusel.scrollLeft=prevScrollLeft-positionDiff;
}

const dragStop=()=>{
    isDragStart=false;
}

carusel.addEventListener("mousedown",dtagStart);
carusel.addEventListener("mouseover",dragging);
carusel.addEventListener("mouseup",dragStop);
 


burgerMenu.addEventListener("click",()=>{
    bugerList.classList.toggle("burger-mneu-list");
    burgerMenu.classList.toggle("burger-meuee");
    close.classList.toggle("open");
});

close.addEventListener("click", ()=>{
    burgerMenu.classList.remove("burger-meuee"); 
    bugerList.classList.toggle("burger-mneu-list");
    close.classList.remove("open");
});