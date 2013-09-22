
var surface1;
var gear;
var angle = 0;

function drawCanvas() {
	surface1 = document.getElementById("layer1");


	if(surface1.getContext){
		gear = new Image();
		gear.onload = loadingComplete;
		gear.src = "gear1.gif";
	}
}

function loadingComplete(e){
	setInterval(loop,25);
}

function loop(){
	var surfaceContext = surface1.getContext('2d');

	//make sure background is white.
	surfaceContext.fillStyle = "rgb(255,255,255)";
	surfaceContext.fillRect(0,0,surface1.width,surface1.height);

	//to ensure rotation occurs about the center of the image.
	surfaceContext.save();
	surfaceContext.translate(gear.width*0.5, gear.height*0.5);
	surfaceContext.rotate(DegToRad(angle));
	surfaceContext.translate(-gear.width*0.5,-gear.height*0.5);
	surfaceContext.drawImage(gear,0,0);
	surfaceContext.restore();
	//control speed and direction here
	angle+=0.5;
}

function DegToRad(d){
	return d*0.0174533;
}



	//$("#title").hover(function(){alert("!!!");}
	//	);
