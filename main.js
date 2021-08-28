
var canvas = new fabric.Canvas('myCanvas')

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

ball_y=0;
ball_x=0;
ball_x=400;
ball_y=800;

function load_img(){
	fabric.Image.fromUrl("golf-hi.png",function(Img) {

	hole_obj= Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);
});
new_image();
}

function new_image()
{
	if((ball_x==hole_x)&&(ball_x==hole_x)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have gotten a birdie";
		document.getElementById("myCanvas").style.borderColor="red"
	}
}

window.addEventListener("keydown", my_keydown);

function down(){
		

	if(ball_y <=450){
		ball_y=ball_y+block_image_height;
	console.log("block_image_height =" + block_image_height);
	console.log("When the down arrow key is pressed, x=" + ", y ="+ball_y);
	canvas.remove(ball_obj);
	new_image();
	}
}

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=0)
		{
		ball_y=ball_y -10;
            console.log("when up arrow is pressed x="+ ball_x+"y="+ ball_y);
            uploadBackground();
            uploadrover();
		}
	}

	function down()
	{
		if(ball_y <=1100)
    {
        ball_y=ball_y +10;
        console.log("when down arrow is pressed x="+ ball_x+"y="+ ball_y);
        uploadBackground();
        uploadrover();
    } 
	}

	function left()
	{
		if(ball_x >5)
		{
			
				ball_x=ball_x +10;
				console.log("when right arrow is pressed x="+ ball_x+"y="+ ball_y);
				uploadBackground();
				uploadrover();
			 
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
				{
					ball_x=ball_x -10;
					console.log("when left arrow is pressed x="+ ball_x+"y="+ ball_y);
					uploadBackground();
					uploadrover();
				}
		
	}
	
}
}
