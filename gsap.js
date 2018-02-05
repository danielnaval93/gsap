(function($) {
    window.onload = function(){
        var logo = document.getElementById("logo");
        // This is a simple tween that takes the target logo and transforms left to 632px over the course of 1 second
        TweenLite.to(logo, 1, {left:"632px"});
        // We add another tween on logo lasting 3 seconds setting left to 440px with an ease (from EasePack!) of Bounce with a delay of 1 second (to wait for the tween before)
        TweenLite.to(logo, 3, {left:"440px", ease: Bounce.easeOut, delay: 1});
        // This tween shows off transforms to left, backgroundColor, borderBottomColor, and color. Any countable property can be used. Remember to use camelCase.
        TweenLite.to(logo, 2, {left:"542px",
                        backgroundColor:"black",
                        borderBottomColor:"#90e500",
                        color:"white",
                        delay: 4});
        // This is a tween from a set of properties to their current set of properties
        TweenLite.from(logo, 2, {opacity:0, left:"300px"});
        // We can define the transform set using relative values
        TweenLite.to(logo, 0.5, {left:"+=100px"});

        // We can tween a set of elements
        var red = document.getElementById("red");
        var yellow = document.getElementById("yellow");
        var green = document.getElementById("green");
        TweenLite.to([red, yellow, green], 1, {scale:0.2, opacity:0.3});
        // Feel free to select using jQuery
        // TweenLite.to($(".box"), 1, {scale:0.2, opacity:0.3});

        // We can use onComplete to set a callback function for when the tween finishes, with an optional param for the parameters list
        // Callbacks can be applied to the following event names: onStart, onUpdate, onComplete, onReverse, and/or onReverseComplete
        updateOutput = document.getElementById("updateOutput"),
        completeOutput = document.getElementById("completeOutput"),
        updateCount = 0;

        TweenLite.to(logo, 2, {left:"300px", onUpdate:updateHandler, 
                                onComplete:completeHandler, 
                                onCompleteParams:["animation complete!"],
                                }); 
        function updateHandler() {
            updateCount++;
            updateOutput.innerHTML = "onUpdate fired " + updateCount;
        }
            
        function completeHandler(message) {
            completeOutput.innerHTML = "onComplete fired <br/> completeParams = " + message;
        }

        // We can also apply Object Oriented Programming patterns to reference a tween's methods
        // Tween methods include: play, pause, resume, reverse, seek, timeScale, restart
        var logo = document.getElementById("logo2");
        var tween = TweenLite.to(logo, 6, {left:"632px", ease:Linear.easeNone});
        var restartBtn = document.getElementById("restartBtn"),
            playBtn = document.getElementById("playBtn"),
            pauseBtn = document.getElementById("pauseBtn"),
            resumeBtn = document.getElementById("resumeBtn"),
            reverseBtn = document.getElementById("reverseBtn"),
            playFromBtn = document.getElementById("playFromBtn"),
            reverseFromBtn = document.getElementById("reverseFromBtn"),
            seekBtn = document.getElementById("seekBtn"),
            timeScaleSlowBtn = document.getElementById("timeScaleSlowBtn"),
            timeScaleNormalBtn = document.getElementById("timeScaleNormalBtn"),
            timeScaleFastBtn = document.getElementById("timeScaleFastBtn");

        restartBtn.onclick = function(){
            //call the tween's restart() method
            tween.restart();
        }
        playBtn.onclick = function() {
            //Play the tween forward from the current position.
            //If tween is complete, play() will have no effect
            tween.play();
        };
        pauseBtn.onclick = function() {
            tween.pause();
        };
        resumeBtn.onclick = function() {
            //Resume playback in current direction.
            tween.resume();
        };
        reverseBtn.onclick = function() {
            tween.reverse();
        };
        playFromBtn.onclick = function() {
            //Play from a sepcified time (in seconds).
            tween.play(5);
        };
        reverseFromBtn.onclick = function() {
            //Reverse from a specified time (in seconds).
            tween.reverse(1);
        };
        seekBtn.onclick = function() {
            //Jump to specificied time (in seconds) without affecting
            //whether or not the tween is paused or reversed.
            tween.seek(3);
        };
        timeScaleSlowBtn.onclick = function() {
            //timescale of 0.5 will make the tween play at half-speed (slower).
            //Tween will take 12 seconds to complete (normal duration is 6 seconds).
            tween.timeScale(0.5);
        };
        timeScaleNormalBtn.onclick = function() {
            //timescale of 1 will make tween play at normal speed.
            tween.timeScale(1);
        };
        timeScaleFastBtn.onclick = function() {
            //timescale of 1 will make the tween play at double-speed (faster).
            //Tween will take 3 seconds to complete (normal duration is 6 seconds).
            tween.timeScale(2);
        };

        /* TweenMax */
        // Tween that repeats once
        logo = document.getElementById("logo3");
        TweenMax.to(logo, 1, {left:"300px", repeat:1});
        // Tween that waits 1 second before repeating
        TweenMax.to(logo, 1, {left:"300px", repeat:1, repeatDelay:1});
        // Tween that "yoyo"s, meaning it goes from start->end->start->...
        TweenMax.to(logo, 1, {left:"300px", repeat:1, repeatDelay:1, yoyo:true});

        // Stagger a set of elements' tweens using staggerTo and staggerFrom
        // The set of colored squares will take 1 second to animate, setting scale and opacity, and waiting .25 seconds before animating the next element in the list
        var blue = document.getElementById("blue"),
        pink = document.getElementById("pink"),
        purple = document.getElementById("purple");
        TweenMax.staggerTo([red, yellow, green, blue, pink, purple], 1, {scale:0.2, opacity:0.3}, 0.25);

        /* TimelineLite */
        // Creates a timeline of animations
        var logo = $("#logo4"),
        timelineLite = $("#timelinelite"),
        tagline = $("#tagline span"),
        restartBtn = $("#restartBtn2"),
        tl = new TimelineLite();
        var left = 720;
        // Chain a series of animations
        tl.from(logo, 0.5, {left:"-=60px", ease:Back.easeOut})
          .from(timelinelite, 0.5, {width:"0px", alpha:0    }, "-=0.02")
          .staggerFrom(tagline, 0.5, {top:"-=30px", rotation:"-40deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);

        restartBtn.click(function() {
            tl.restart();
        });

        // We can add labels to the timeline for ease of use    
        // tl.add("skew") // adds a new label
        // .add(getSkewAnimation()) // method returns a TimelineLite instance that gets nested at the end
        // .add(getStaggerAnimation(), "stagger") //creates new label and adds animation there
        // .add(getParticlesAnimation(), "particles")
        
        // function getSkewAnimation() {
        //     var skewTimeline = new TimelineLite();
        //     skewTimeline.from(skew, 0.3, {alpha:0})
        //                 .to(skew, 0.5, {skewX:45})
        //                 .to(skew, 0.8, {skewX:-45})
        //                 .to(skew, 0.5, {skewX:5, skewY:-10})
        //                 .to(skew, 0.5, {skewX:20, skewY:5})
        //                 .to(skew, 0.5, {alpha:0});
        //     return skewTimeline;        
        // }
         
        // function getStaggerAnimation() {
        //     var staggerTimeline = new TimelineLite();        
        //     staggerTimeline.from(logos, 0.2, {opacity:0})
        //                    .staggerFrom(logos, 0.6, {top:-60, left:"-=50px", rotation:"-90deg", ease:Back.easeOut}, 0.1)
        //                    .to(logos, 1, {opacity:0});    
        //     return staggerTimeline;
        // }
         
        // function getParticlesAnimation() {
        //     var particlesTimeline = new TimelineLite(),
        //         i = 300,
        //         radius = 450,
        //         centerX= 360,
        //         centerY = 30,
        //         dots = [],
        //         rawDots = [];
                 
        //     while (--i > -1) {
        //         dot = document.createElement("img");
        //         dot.src = "img/dot.png";
        //         dot.id = "dot" + i;
        //         dotContainer.append(dot);
        //         dot.style.cssText = "position:absolute; left:" + centerX + "px; top:" + centerY + "px; width:1px; height:1px;"
        //         var angle = Math.random() * Math.PI * 2,
        //             insertionTime = i * 0.015;
                     
        //         particlesTimeline.from(dot, 0.05, {opacity:0, immediateRender:true}, insertionTime);
                 
        //         particlesTimeline.to(dot, .7, {left:Math.cos(angle) * radius + centerX, 
        //             top:Math.sin(angle) * radius + centerY, 
        //             width:32, 
        //             height:32,
        //             ease:Cubic.easeIn
        //         }, insertionTime);
                 
        //     }
        //     return particlesTimeline;
        // }  
 
        /* TimelineMax */
        // var tl = new TimelineMax({onUpdate:updateUI, repeat:2, repeatDelay:1, yoyo:true});    
        // tl.from(logo, 0.5, {left:'-=60px', ease:Back.easeOut})
        // .staggerFrom(txt, 0.1, {alpha:0}, 0.02, "textEffect")
        // .staggerFrom(txt, 0.8, {rotationY:"-270deg", top:"100px", transformOrigin: "50% 50% -80", ease:Back.easeOut}, 0.02, "textEffect")
        // .staggerTo(txt, 0.6, {rotationX:"+=360deg", transformOrigin:"50% 50% 10", color:"#90e500"}, 0.02);  

    }

})(jQuery);