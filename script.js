// homepage swiper
var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    return direction;
};


// world page swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// dropdown menu
const drop = document.getElementById("drop");

drop.addEventListener("click", () => {
  var dropdown = document.getElementById("drop-content");
  if (!dropdown.classList.contains("show")) {
    dropdown.classList.add("show");
  } else {
    dropdown.classList.remove("show");
  }
});


// video player
const buttons = document.querySelectorAll(".btn-play");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    var video = document.getElementById('player');
    var playButton = button.querySelector('.play');
    var pauseButton = button.querySelector('.pause');
    if (video.paused) {
      video.play();
      playButton.classList.add('hidden');
      pauseButton.classList.remove('hidden');
  } else {
      video.pause();
      playButton.classList.remove('hidden');
      pauseButton.classList.add('hidden');
  }
  });
});


// password eye 
// const eyes = document.getElementById("btn-eyes");

// eyes.addEventListener("click", () => {
//   var eye = document.getElementById("eye");
//   var eyeSlash = document.getElementById("eye-slash");
//   if (!eye.classList.contains("hidden")) {
//     eye.classList.add("hidden");
//     eyeSlash.classList.remove("hidden");
//   } else {
//     eye.classList.remove("hidden");
//     eyeSlash.classList.add("hidden");
//   }
// });