img = ""
status = ""

function preload()
{
    image = loadImage("bedroom.jpg");
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectdetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }

    else{
        console.log(results);
    }
}

function back()
{
    window.location = "index.html"
}