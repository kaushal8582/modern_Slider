const nextButton = document.querySelector("#next")
const prevButton = document.querySelector("#prev")
const backButton = document.querySelector("#back")
const seeMoteButtons = document.querySelectorAll(".seeMore")
const carousel = document.querySelector(".carousel")
const listHTML = document.querySelector(".carousel .list")

nextButton.addEventListener("click",()=>{
  showSlider('next');
})

prevButton.addEventListener("click",()=>{
  showSlider('prev');
})

let unAcceptClick;

const showSlider = (type) =>{
  nextButton.style.pointerEvents = 'none'
  prevButton.style.pointerEvents = 'none'

  let items = document.querySelectorAll(".carousel .list .item");
  carousel.classList.remove("next","prev")
  if(type==="next"){
    listHTML.appendChild(items[0]);
    carousel.classList.add("next")
  }else{
    let positionLast = items.length -1;
    listHTML.prepend(items[positionLast])
    carousel.classList.add("prev")
  }

  clearInterval(unAcceptClick)

  unAcceptClick = setTimeout(() => {
    nextButton.style.pointerEvents = 'auto'
    prevButton.style.pointerEvents = 'auto'
  }, 2000);
}

seeMoteButtons.forEach((buttons)=>{
  buttons.addEventListener("click",()=>{
    carousel.classList.add("showDetail")
  })
})


backButton.addEventListener("click",()=>{
  carousel.classList.remove("showDetail")
})
