// Obtain a graphics context on the canvas element for drawing.
var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


var background = new Image();
const amount = document.getElementById("amount");
const url = "https://cdn.d4.digital/json/d4-demo-company/F7F2Z7/FXDJ24/scripts/datafile.js";

fetch(url)
    .then(response => response.json())
    .then(data => {
        //headline_1
        document.getElementById("headline_1").innerText = data.items[0].headline_1.value;
            //headline_2
        document.getElementById("headline_2").innerText = data.items[0].headline_2.value;
            //amount
        amount.innerText = '$' + data.items[0].amount.value;
        //canvas background
        background.src = data.items[0].bg_image.value;
    }
);

// Make sure the image is loaded first 
background.onload = function () {
    ctx.drawImage(background, 0, 0, background.width, background.height,     
                            0, 0, canvas.width, canvas.height);
}
       
//create a timeline instance
var tl = gsap.timeline();

tl.set("#frame1", { top: 0}, "+=1")
    .from("#frame1", { duration: 0.1,  scale: 1.5, opacity: 1})
    .from("#frame1 p", { duration: 1.5, scale: 0.5, opacity: 0 }, "+=1")
    .to("#frame1", { duration: 2, yPercent: 100})
    .to("#canvas", { opacity: 1, top: 0 }, "final")

    .from("#canvas", { duration: 0.1, opacity: 1, top: 0 }, "final")
    .from("#frame2", { duration: 0.1, opacity: 0})
    .from("#headline_2", {
        opacity: 0,
        duration: 1, 
        scale: 0.5,
        ease: "power1.in"
    })
    .from(amount, { 
        opacity: 0,
        textContent: amount.innerText = numberWithCommas(Math.ceil(amount.innerText)),
        duration: 2,
        scale: 0.5,
        ease: "power1.out",
        snap: "innerText",
        
    }
);
        
//Display the Amount with Commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
                   
                    
                  
                    
                   
                    

                    
               