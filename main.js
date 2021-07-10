function preload(){}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(640,230);
    cam=createCapture(VIDEO);
    cam.size(300,300);
    cam.hide();
    
    posenet=ml5.poseNet(cam,modelLoaded);
    posenet.on("poses",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y); 
    }
}
function draw(){
    image(cam,0,0,300,350);
}
function take_snapshot(){
    save("Mustache_fliter_selfie");
}