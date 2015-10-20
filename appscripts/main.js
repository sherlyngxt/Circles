require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    ["../jslibs/raphael.lonce"],  // include a custom-built library

    function () {

    	console.log("Yo, I am alive!");

        // Grab the div where we will put our Raphael paper
        var centerDiv = document.getElementById("centerDiv");

        // Create the Raphael paper that we will use for drawing and creating graphical objects
        var paper = new Raphael(centerDiv);

        // put the width and heigth of the canvas into variables for our own convenience
        var pWidth = paper.canvas.offsetWidth;
        var pHeight = paper.canvas.offsetHeight;
        console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);
        //---------------------------------------------------------------------

        // assign6.1 Just create background
        var bgRect = paper.rect(0,0,pWidth, pHeight);
        bgRect.attr({"fill": "lightcyan"});


        //creates a function map(x,a,b,m,n) that takes a variable (x) in the range [a,b[, then returns a value mapped into the range [m,n]
        var x, a, b, m, n;
        var map = function(x,a,b,m,n){
        	return (x-a)/(b-a) * (n-m) + m;
        }

        

        var myCircleArray = []; //creates an array

        var length = 100; //sets array length to 100 (array of 100 dots)
		
        for(i=0; i< length; i++){ //loop statement
        	var dots = myCircleArray[i] = paper.circle(pWidth/2, pHeight/2, 20); //creates an array of circles 
            var H = Math.random(); //takes a random number in the range [0,1]
            var S = Math.random(); //takes a random number in the range [0,1]
            var L = Math.random(); //takes a random number in the range [0,1]
            //hsl function for raphael taking in H, S, L values generated earlier
            var colour = Raphael.hsl( H, S, L);
           	
            console.log(colour); //prints the HSL values of each dot to the console
        	
        	dots.attr({
        		'fill-opacity': 0.5, //makes the dots semi-transparent
                'fill': colour //fills dots with colour specified by the above colour string
        	});

        	dots.xpos=pWidth/2; 
        	dots.ypos=pHeight/2; //sets initial position of dots to centre
        	dots.xrate=5;
        	dots.yrate=5; //sets initial rate of dots to 4
        	dots.yrate = map(Math.random(),0,1,-10,10); 
        	dots.xrate = map(Math.random(),0,1,-10,10); //assigns a random rate to each dot in the array
        }
         console.log("number of dots:" + myCircleArray.length); //prints number of dots in the array to the console, we expect the value to be 100

        var mouseIsDown=false; //set variable mouseIsDown to keep track of mouse state

        var rectMouse = paper.rect(0,0,pWidth, pHeight); //creates a graphical object to listen for mouse events
        rectMouse.attr({
        	"fill": "white", 
        	'fill-opacity': 0 //fills rectMouse to make it completely transparent
        });


        //creates a function  that takes 4 variables (x1, y1, x2, y2) and returns the distance between the two points (x1, y1), (x2, y2)
        var distance = function(x1,y1,x2,y2){ 
            return Math.sqrt( (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) );
        }

        rectMouse.addEventListener("mousedown", function(ev){ //listens for mousedown on rectMouse
        	mouseIsDown=true; 
        	var mousex = ev.offsetX; 
        	var mousey = ev.offsetY; //grabs the position where mouse is down
        	console.log("mousedown on " + mousex + ", " + mousey); //prints position where mouse is down to the console 
            
            for(i=0; i< length; i++){ //listen to event for the respective dots using a loop statement
            	var dots = myCircleArray[i]; 

            	if (distance(mousex,mousey,dots.xpos,dots.ypos) <= 100) { //if dots are less than 100 pixels in distance from the mouse when it is pushed
            		dots.attr({
            			"fill": "white",
            			'fill-opacity': 1 //changes colour of dots to white and makes them opaque
            		});
            	}
            }            
        });

        //listen to mouseup on rectMouse
        rectMouse.addEventListener('mouseup', function(ev){
        	mouseIsDown = false;
        	console.log("mouseup on " + ev.offsetX + ", " + ev.offsetY); //prints position where mouse is up to the console
        });         


        // assign6.2: For counting calls to the 'draw' routine
        var count=0;

        // assign6.2: our drawing routine, will use as a callback for the interval timer
        var draw = function(){

            //counts and keeps track of the number of times the function draw is called
            count++;

            //assign6.7: Update the position where we want our dots to be
            //make the dots move
            for(i=0; i< length; i++){
            	var dots = myCircleArray[i];
            	dots.xpos += dots.xrate;
            	dots.ypos += dots.yrate;

            //keeps track of position of the dots
            dots.attr({'cx': dots.xpos, 'cy': dots.ypos});
           
           //reverses the appropriate rate when dot moves outside the box such that it bounces off instead of moving off-screen
            if (dots.xpos > pWidth) {dots.xrate = -dots.xrate;}
            if (dots.ypos > pHeight) {dots.yrate = - dots.yrate};
            if (dots.xpos < 0) {dots.xrate = -dots.xrate;}
            if (dots.ypos < 0) (dots.yrate = - dots.yrate); 
        }
    }       

        // assign6.3: call draw() periodically
        // We do this last thing as the module loads
        setInterval(draw, 20);

    });