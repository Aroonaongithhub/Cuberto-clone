const circle = document.querySelector("#circle");
// function to move circle along with cuser
var lastX=0;
var lastY=0;
function mouseOverCircle() {
  window.addEventListener("mousemove", function(event) {
    const scrollX = window.scrollX ;
    const scrollY = window.scrollY ;

    const posX = event.clientX + scrollX;
    const posY = event.clientY + scrollY;    
    circle.style.transform = `translate(${posX}px, ${posY}px)`;
   
  });
  
}

mouseOverCircle();
// function to play video on hover
const loopVideos = document.querySelectorAll(".box");
loopVideos.forEach((video) => {
  video.addEventListener("mouseover", () => video.play());
  video.addEventListener("mouseout", () => video.pause());
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((element)=> observer.observe(element));