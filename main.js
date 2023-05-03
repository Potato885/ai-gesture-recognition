noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;




function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(570, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("lightpink");
    document.getElementById("square_sides").innerHTML = "Size of the square is = "+difference+" px";
    fill("lightblue");
    stroke("darkblue");
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("poseNet model is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = "+noseX+" nose Y = "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX-rightWristX);
        console.log("left wrist x = "+leftWristX+" right wrist x = "+rightWristX+" difference = "+difference);
    }
}


