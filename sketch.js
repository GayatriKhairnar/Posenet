let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton,Wristm;
let actor_img;
let specs,smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);
    specs = loadImage('images/spects.png');
    necklace = loadImage('images/necklace.png');
    bindi = loadImage('images/bindi.png');

}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        Wristm = poses[0].pose;
    }
}


function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {
    // images and videos(webcam)
    image(capture, 0, 0);
    //filter(GRAY);
    fill(255,0,0);
    if(singlePose){
        //for(let i=0; i<singlePose.keypoints.length; i++){
        //     //ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
           
        // }
        // stroke(255,255,255);
        // strokeWeight(5);
        // for(let j=0; j<skeleton.length; j++){
        //     //line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        // }
        
        image(specs,singlePose.nose.x-55,singlePose.nose.y-80,110,110);
        
        //image(necklace,singlePose.nose.x-80,singlePose.nose.y+50,150,150);
        //image(bindi,singlePose.nose.x-80,singlePose.nose.y-140,150,70);

        
        
       
        
    }
    
}