	function changeBackgroundColor(){
		document.body.style.background = "blue";
	}
	
	var canvas = undefined;
	var canvasContext = undefined;
	

	
	function start(){
		canvas = document.getElementById("mycanvas");
		canvasContext = canvas.getContext("2d");
		mainLoop();
	}
	
	document.addEventListener('DOMContentLoaded', start);
	
	function update(){
		
	}
	function draw(){
		
	}
	
	function mainLoop(){
		canvasContext.fillStyle = "blue";
		canvasContext.fillRect(0,0,canvas.width, canvas.height);
		update();
		draw();
		window.setTimeout(mainLoop, 1000 / 60);
		
	}
