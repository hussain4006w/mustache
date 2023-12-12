noseX = 0;
noseY = 0;

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function preload() {
clownnose = loadImage('https://i.postimg.cc/RZJPd319/mustache.png')
}

function draw() {
    image(video, 0, 0, 300, 300);
   image(clownnose,noseX,noseY,35,35);
}

function take_snapshot() {
    save('my.png')
}


function modeLoaded() {
    console.log('posenet is initialised');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 18
        noseY = results[0].pose.nose.y + 10
    }
}

