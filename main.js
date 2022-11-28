function preload(){



}

function setup(){
    canvas=createCanvas(500,500)
    canvas.position(500,300)
    video=createCapture(VIDEO)
    video.hide()
    tinticolor=""
}
function draw(){
    image(video,0,0,450,450)
    tint(tinticolor)
}
function filtro(){

    tinticolor=document.getElementById("inputColor").value
}