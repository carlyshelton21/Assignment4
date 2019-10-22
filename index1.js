var el = document.getElementById('r');
el.addEventListener("click", ChangeRBg);
el.addEventListener("mouseover", ChangeRPos);
el.addEventListener("mouseout",ChangeBackRPos);

function ChangeRBg(){
    el.style.backgroundColor = "green";
    el.style.border = "1px solid black";
}

//function ChangeCirclePos(){
    el.style.left = "50px";


//function ChangeBackCirclePos(){
    el.style.left = "0px";
    el.style.backgroundColor = "red";
    el.style.border = "0px solid black";



//var el1 = document.getElementById('rectangle');
el1.addEventListener("click", ChangeRectangleBg);
el1.addEventListener("mouseover", ChangeRectanglePos);
el1.addEventListener("mouseout",ChangeBackRectanglePos);
