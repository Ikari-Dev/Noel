let h1 = document.querySelector('h1.happy')
let button = document.querySelector('a.button')

let audio = new Audio('OST/Silent-night.mp3');


button.addEventListener("click", e => {
  
    audio.play();

})


