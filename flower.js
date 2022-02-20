sta_us="";

function preload(){
    img=loadImage('unnamed (4).jpg');
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    sta_us=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}