var out1 = document.getElementById('ot1');
var out2 = document.getElementById('ot2');
var out3 = document.getElementById('ot3');
var out4 = document.getElementById('ot4');
var out11 = document.getElementById('ot11');
var out12 = document.getElementById('ot12');
var out13 = document.getElementById('ot13');
var out14 = document.getElementById('ot14');


function show1(){
    out1.style.transform = "scale(0)";
    out1.style.transition = "0.2s ease"
   
    
    setTimeout(function() {
        out1.style.display = "none";
        
    }, 200);
    setTimeout(function() {
        out11.style.display = "flex";
        
        
    }, 250);
    setTimeout(function() {
        
        out11.style.transform = "scale(1)";
    out11.style.transition = "transform 1.5s ease"
        
    }, 350);
}

function show2(){
    out2.style.transform = "scale(0)";
    out2.style.transition = "0.2s ease"
   
    
    setTimeout(function() {
        out2.style.display = "none";
        
    }, 200);
    setTimeout(function() {
        out12.style.display = "flex";
        
        
    }, 250);
    setTimeout(function() {
        
        out12.style.transform = "scale(1)";
    out12.style.transition = "transform 1.5s ease"
        
    }, 350);
}
function show3(){
    out3.style.transform = "scale(0)";
    out3.style.transition = "0.2s ease"
   
    
    setTimeout(function() {
        out3.style.display = "none";
        
    }, 200);
    setTimeout(function() {
        out13.style.display = "flex";
        
        
    }, 250);
    setTimeout(function() {
        
        out13.style.transform = "scale(1)";
    out13.style.transition = "transform 1.5s ease"
        
    }, 350);
}
function show4(){
    out4.style.transform = "scale(0)";
    out4.style.transition = "0.2s ease"
   
    
    setTimeout(function() {
        out4.style.display = "none";
        
    }, 200);
    setTimeout(function() {
        out14.style.display = "flex";
        
        
    }, 250);
    setTimeout(function() {
        
        out14.style.transform = "scale(1)";
    out14.style.transition = "transform 1.5s ease"
        
    }, 350);
}

document.getElementById('vst').addEventListener('mouseover', vst1);
document.getElementById('vst').addEventListener('mouseout', vst2);

function vst1() {
    var vstc1 = document.getElementById('vstc1');
    var vstc2 = document.getElementById('vstc2');
    vstc1.style.color = '#ffd600';
    vstc2.style.color = '#ffd600';
    vstc2.style.webkitTextFillColor = 'transparent';
    vstc2.style.webkitTextStrokeWidth = '1px';
    vstc1.style.transition = 'color -webkit-text-fill-color 0.25s linear';
    vstc2.style.transition = 'color 0.25s linear';
}

function vst2() {
    var vstc1 = document.getElementById('vstc1');
    var vstc2 = document.getElementById('vstc2');
    vstc1.style.color = '#ffffff'; // Corrected color to white
    vstc2.style.color = '#ffffff';
    vstc2.style.webkitTextFillColor = '#ffff';
    vstc2.style.webkitTextStrokeWidth = '0px'; // Corrected color to white
    vstc1.style.transition = 'color 0.25s linear';
    vstc2.style.transition = 'color 0.25s linear';
}
document.addEventListener("DOMContentLoaded", () => {
    const section1 = document.querySelector(".sec1");
    const section2 = document.querySelector(".sec2");
    const header = document.getElementById("header");

   

    // Listen for animation end on section 1
    section1.addEventListener("animationend", () => {
        section1.style.transform = "translateY(-100%)";
        section1.style.transition = "0.5s ease";
        // Ensure header is hidden after sec1 animation
        
        
    });

    // Listen for animation start on section 2
   
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");

    // Hide the header initially
    header.style.opacity = "0";
    header.style.transition = "opacity 0.5s ease";
    /*header.style.transitionDelay = "0.5s";*/
    header.style.pointerEvents = "none";

    // Timeout to change header opacity after 1 second
    setTimeout(() => {
        header.style.opacity = "1";
        header.style.pointerEvents = "auto";
        
        
    }, 2000); 
    // Change opacity after 1 second
});
function changeColor(activeId) {
    const links = document.querySelectorAll('#navList li a');
    links.forEach(link => {
        if (link.id === activeId) {
            link.style.color = '#ffd600';
        } else {
            link.style.color = '#ffffff';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Set the initial active link to 'Home'
    changeColor('ch1');
});

