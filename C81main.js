canvas=
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    color = document.getElementById("color").value; console.log(color);

    console.log("x= "+mousex+" ,y= "+mousey);
    circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=red;
    ctx.lineWidth=1;
    ctx.rect(150,143,430,200);
    ctx.stroke();   
}
function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }