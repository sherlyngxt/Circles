require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    [],  // include a custom-built library
    function () {

        console.log("yo, I'm alive!");

        var paper = Raphael("mySVGCanvas", 1200,2000);
        var paper2 = Raphael("paper2", 478,1024);
        var paper3 = Raphael("paper3", '100%', '100%');
        var paper4 = Raphael("paper4", '100%', '100%');
        var paper5 = Raphael("paper5", '100%', '100%');

        var pWidth = paper.canvas.offsetWidth;
        var pHeight = paper.canvas.offsetHeight;
        console.log(pWidth);
        console.log(pHeight);

        var skip = paper4.rect(20,20,20,10);
        console.log("skip appears");
        skip.attr({
            "fill": "red"
        });

        var title = paper5.image("css/resources/title.png", 0, 0, 698, 171);

        var play = document.getElementById("play");
        play.addEventListener('mousemove', function(ev){
            play.style.cursor="pointer";
        })  

        var video = document.getElementById("video");

        var tree = paper.image("css/resources/fileS.jpg", 300, 1500, 315, 205.5);
        tree.node.addEventListener('mousemove', function(ev){
            tree.node.style.cursor = "pointer";
        });

        var pic1 = paper.image('css/resources/pic1.png', 800,79,228,287);
        pic1.node.addEventListener('mousemove', function(ev){
            pic1.node.style.cursor = "pointer";
        });
        pic1.attr({
            'opacity':0
        });

        var pic2 = paper.image('css/resources/pic2.png', 345,829,211,278);
        pic2.node.addEventListener('mousemove', function(ev){
            pic2.node.style.cursor = "pointer";
        });       

        var pic3 = paper.image('css/resources/pic3.png', 565,829,197,245);
        pic3.node.addEventListener('mousemove', function(ev){
            pic3.node.style.cursor = "pointer";
        });

        var pic4 = paper.image('css/resources/pic4.png', 140,139,220,538);
        pic4.node.addEventListener('mousemove', function(ev){
            pic4.node.style.cursor = "pointer";
        });
        pic4.attr({
            'opacity':0
        }); 

        var pic5 = paper.image('css/resources/pic5.png', 450,139,146,492);
        pic5.node.addEventListener('mousemove', function(ev){
            pic5.node.style.cursor = "pointer";
        });
         pic5.attr({
            'opacity':0
        });        

        function main (){
            console.log("main page");
            tree.show();
            title.show();
            pic1.show();
            pic2.show();
            pic3.show();
            pic4.show();
            pic5.show();
            video.style.visibility = "hidden"; 
        }

        function hide (){
            console.log("hide all");
            tree.hide();
            title.hide();
            pic1.hide();
            pic2.hide();
            pic3.hide();
            pic4.hide();
            pic5.hide();
            video.style.visibility = "hidden"; 
        }

        tree.hide();
        title.hide();
        document.getElementById("mySVGCanvas").style.overflow = "hidden";
        document.getElementById("paper2").style.visibility = "hidden";
        video.style.visibility = "hidden";

        //document.getElementById("mySVGCanvas").style.opacity = 0;
        document.getElementById("paper3").style.opacity = 1;
        document.getElementById("paper5").style.opacity = 0;
        
        function unfade() {
            document.getElementById("paper3").style.opacity = 0;
            document.getElementById("paper3").style.transition = "opacity 5s";
            //document.getElementById("mySVGCanvas").style.transition = "opacity 5s"; 
            //document.getElementById("mySVGCanvas").style.opacity = 1;
            document.getElementById("paper5").style.opacity = 1;
            document.getElementById("paper5").style.transition = "opacity 5s";
        }

        skip.node.addEventListener('click', function(ev){
            document.getElementById("mySVGCanvas").style.overflow = "auto";
            main();
            play.style.visibility = "hidden";
            //document.getElementById("video").pause(); 
            video.style.visibility = "hidden"; 

                var fadeAudio = setInterval(function () {          
                    if (document.getElementById("video").currentTime >= 0) {
                        document.getElementById("video").volume -= 0.1;
                    }
                }, 200);
            
                setTimeout(function(){
                    document.getElementById("video").pause();
                    clearInterval(fadeAudio); 
                }, 2000);
           
            unfade();
            document.getElementById("paper4").style.visibility = "hidden";
            console.log("skip");

            setTimeout(function(){
                pic4.animate({
                    'opacity': 1
                }, 2000);
            },2000);
            
            setTimeout(function(){
                pic5.animate({
                    'opacity': 1
                }, 2000);
            },4000);

            setTimeout(function(){
                pic1.animate({
                    'opacity': 1
                }, 2000);
            },6000);
                  
        });

        var play = document.getElementById("play");
        play.addEventListener('click', function(ev){
            video.style.visibility = "visible";
            play.style.visibility = "hidden";
            document.getElementById("video").play(); 

                var enter = setTimeout(function(){
                    console.log("timer works");
                    video.addEventListener('mousemove', function(ev){
                        video.style.cursor="pointer";
                    }) 
                    video.addEventListener('click', function(ev){
            document.getElementById("mySVGCanvas").style.overflow = "auto";
            main();
            play.style.visibility = "hidden";
            //document.getElementById("video").pause(); 
            video.style.visibility = "hidden"; 

                var fadeAudio = setInterval(function () {          
                    if (document.getElementById("video").currentTime >= 0) {
                        document.getElementById("video").volume -= 0.1;
                    }
                }, 200);
            
                setTimeout(function(){
                    document.getElementById("video").pause();
                    clearInterval(fadeAudio); 
                }, 2000);
           
            unfade();
            document.getElementById("paper4").style.visibility = "hidden";
            console.log("skip");

            setTimeout(function(){
                pic4.animate({
                    'opacity': 1
                }, 2000);
            },2000);
            
            setTimeout(function(){
                pic5.animate({
                    'opacity': 1
                }, 2000);
            },4000);

            setTimeout(function(){
                pic1.animate({
                    'opacity': 1
                }, 2000);
            },6000);                                                                    
                    })
                }, 67700);        
        });

        tree.node.addEventListener('click', function(ev){ 
            console.log("click files");
            document.getElementById("mySVGCanvas").style.visibility = "hidden";
            document.getElementById("paper2").style.visibility = "visible";
            document.getElementById("paper5").style.visibility = "hidden";
            var long = paper2.image("css/resources/long.jpg", 0, 0, 478, 1024);
            var close = document.getElementById("close");
            close.style.backgroundImage = "url('css/resources/exit.png')";
            close.style.visibility = "visible";
            close.style.marginLeft = "-239px";
            close.style.marginTop = "-300px";
            close.addEventListener('mousemove', function(ev){
                close.style.cursor = "pointer";
            });            
            close.addEventListener('click', function(ev){
                console.log("click on exit");
                document.getElementById("paper2").style.visibility = "hidden";
                close.style.visibility = "hidden";
                document.getElementById("mySVGCanvas").style.visibility = "visible";
                document.getElementById("paper5").style.visibility = "visible";
            });            
        });

        //window.addEventListener("keydown", function(e) {
            // space, page up, page down and arrow keys:
        //    if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        //    e.preventDefault();
        //    }
        //}, false); //from http://stackoverflow.com/questions/16637031/completely-disable-scrolling-of-webpage

    }
);

//video sound fade out
//first page elements fade in