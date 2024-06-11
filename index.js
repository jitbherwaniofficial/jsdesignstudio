console.log("Hello");


function counter() {
  let valueDisplays = document.querySelectorAll(".count")
  let interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue
      if (startValue == endValue) {
        clearInterval(counter)
      }
    }, duration);
  })
}
counter()

const hero = document.querySelector(".hero")
const header = document.querySelector(".header")
window.onscroll = function () {
  let top = window.scrollY;
  if (top > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};


// testimonials slider //
console.log("Hare Krishna");


let slideContent = document.querySelectorAll('.slide_content');
let next = document.querySelector(".next")
let previous = document.querySelector(".prev")
let dots = document.querySelectorAll(".dot");


var counter = 0;

next.addEventListener("click", slideNext)

function slideNext() {
  slideContent[counter].style.animation = "next1 1s ease-in forwards";
  if (counter >= slideContent.length - 1) { counter = 0; }
  else { counter++; }
  slideContent[counter].style.animation = "next2 1s ease-in forwards";
  indicators()
}

previous.addEventListener("click", slidePrev)

function slidePrev() {
  slideContent[counter].style.animation = "prev1 1s ease-in forwards";
  if (counter == 0) { counter = slideContent.length - 1; }
  else { counter--; }
  slideContent[counter].style.animation = "prev2 1s ease-in forwards";
  indicators()
}

// AutoSliding
function autoSliding() {
  deleteInterval = setInterval(timer, 3000)
  function timer() {
    slideNext()
    indicators()
  }
}

autoSliding();



// STOP AUTOSLIDING WHEN MOUSE IS OVER //
let buttons = document.querySelector(".buttons")
buttons.addEventListener("mouseover", function () {
  clearInterval(deleteInterval)
})
// RESUME SLIDING WHEN MOUSE IS OUT //
buttons.addEventListener("mouseout", autoSliding)


let dotsContainer = document.querySelector(".dotsContainer")
dotsContainer.addEventListener("mouseover", function () {
  clearInterval(deleteInterval)
})
// RESUME SLIDING WHEN MOUSE IS OUT //
dotsContainer.addEventListener("mouseout", autoSliding)

// ADD AND REMOVE ACTIVE CLASS FROM THE INDICATORS
function indicators() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }

  dots[counter].className += " active"
}

// add click event to the indicator //
function switchContent(currentContent) {
  currentContent.classList.add("active")
  let contentId = currentContent.getAttribute("attr")
  if (contentId > counter) {
    slideContent[counter].style.animation = "next1 0.5s ease-in forwards"
    counter = contentId;
    slideContent[counter].style.animation = "next2 0.5s ease-in forwards"
  } else if (contentId == counter) {
    return;
  } else {
    slideContent[counter].style.animation = "prev1 0.5s ease-in forwards"
    counter = contentId;
    slideContent[counter].style.animation = "prev2 0.5s ease-in forwards"
  }
  indicators()
}
// testimonials slider //


// ACCORDION //
let questions = document.querySelectorAll(".faq_question");

questions.forEach((question) => {
  let icon = question.querySelector(".icon-shape");

  question.addEventListener("click", (event) => {
    const active = document.querySelector(".faq_question.active");
    const activeIcon = document.querySelector(".icon-shape.active");

    if (active && active !== question) {
      active.classList.toggle("active");
      activeIcon.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }

    question.classList.toggle("active");
    icon.classList.toggle("active");

    const answer = question.nextElementSibling;

    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
// ACCORDION //


// CONTACT FORM //
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, index) =>  `<span style="transition-delay: ${index *50}ms"> ${letter} </span>`)
    .join('');
})
// CONTACT FORM //

