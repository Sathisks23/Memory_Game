
var counting = document.getElementById("timing");
        var flip_count = document.getElementById("flips");
        var sec_count = 35;
        var count=0;



let box = document.querySelectorAll('.Outer_Box')
box.forEach(element => {
    element.addEventListener('click',function(){
        if(sec_count>0){
            flip(this)
        }
    })
});

let openCards = [];
    let matchedImages = {};

   let tru="true";
    let intervalId;
function refresh(){

    clearInterval(intervalId);
    tru="true";
    sec_count = 35;
    intervalId = null; 
    counting.innerHTML = 35;
    count = 0;
    flip_count.innerHTML = count;

let actor = document.querySelectorAll('#actor')
let question = document.querySelectorAll('#question')

let audio =document.querySelectorAll('#audio');
     actor.forEach(element =>{
        element.style.display = 'none'
     })

    question.forEach(element=>{
        element.style.display = 'block'
    })

    let sound=['marimba-bloop-2-188149.mp3','interface-3-204500.mp3','mouse-click-153941.mp3','cute-level-up-2-189851.mp3','cute-level-down-3-189853.mp3'];
  let img_arr = ['ajith.jpg','vijay.jpg','surya.jpeg','vdk.jpeg']
  let imgs = document.querySelectorAll('#actor')
  let random_arr = []

  



  imgs.forEach(img => {
     random = Math.floor(Math.random()*img_arr.length)
   let audio=img.parentElement.parentElement.lastElementChild;
   audio.src=sound[random]
    img.src = img_arr[random]

  });

  
 
}


function flip(element){

    let actor = element.firstElementChild.firstElementChild
    let question = element.firstElementChild.lastElementChild
    let audio = element.lastElementChild

    count++;
    
    flip_count.innerHTML=count;

    if (tru=="true") {
        actor.style.display = 'block';
            question.style.display = 'none';
    
    
        if (!intervalId) {
            intervalId = setInterval(seconds, 1000);
        }}

   
            audio.play()
    actor.style.display = 'block';
    question.style.display = 'none';


    openCards.push(actor);

    if (openCards.length === 2) {
        if (openCards[0].src === openCards[1].src) {
            // Match found, keep both cards open
            let imgSrc = openCards[0].src;
            if (!matchedImages[imgSrc]) {
                matchedImages[imgSrc] = 0;
            }
            matchedImages[imgSrc]++;
            if (matchedImages[imgSrc]) {
                // If 4 matches are found, keep them visible
               console.log('kl');
                makeItRain()
                // openCards.forEach(card => {
                //     card.style.display = 'block';
                // });
            }
            openCards = [];
        } else {
            // No match, flip both cards back after a short delay
            setTimeout(() => {
                openCards.forEach(card => {
                    card.style.display = 'none';
                    card.nextElementSibling.style.display = 'block';
                });
                openCards = [];
            }, 400);
        }
    }

}


function makeItRain() {
    // document.getElementById("makeItRain").disabled = true;
    var end = Date.now() + (2 * 1000);

    var colors = ['#bb0000', '#ffffff'];

    function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        } else {
            // document.getElementById("makeItRain").disabled = false;
        }
    };
    frame();
} 

function seconds() {
    if (sec_count > 0) {
        sec_count--;
        counting.innerHTML = sec_count;
    }

    if (sec_count == 0) {
        tru="false";
        clearInterval(intervalId);


            }
}





// makeItRain()