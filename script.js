const cardContainer = document.querySelectorAll(".cardContainer");
const card = document.querySelectorAll(".card")
const playbtn = document.querySelectorAll(".playBtn")
const hamburger= document.querySelector(".hamburger")
const exit = document.querySelector(".exit i")
function playDisplay() {
    card.forEach((card,i)=> {
        
        card.addEventListener("mouseover", function() {
            playbtn[i].style.display = "block";
          });
          card.addEventListener("mouseout", function(){
            playbtn[i].style.display='none'
          });
    })
    };
playDisplay()

function navleft(){
  hamburger.addEventListener("click",()=>{
     document.querySelector(".left").style.left="0%"
  })
}
navleft()
function exitNav(){
  exit.addEventListener("click",()=>{
    document.querySelector(".left").style.left="-100%"
  })
}
exitNav()

