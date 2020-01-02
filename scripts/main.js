/*let myHeading = document.querySelector('h1');


document.querySelector('img').onclick = function() {
    alert('Ouch! Stop poking me!');
    myHeading.textContent = "Emmett's gae";
}*/


let myImage = document.querySelector('img');
let titleHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cursed_image.png') {
      myImage.setAttribute ('src','images/emmettSpootered.png');
      titleHeading.textContent = "Emmett's gae";
    } else {
      myImage.setAttribute ('src','images/cursed_image.png');
      titleHeading.textContent = "Michael's Website";
    }
}

let captionButton = document.querySelector('button');
let captionHeading = document.querySelector('h2');

captionButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let name = prompt('Please enter your name');
  localStorage.setItem('name', name);
  captionHeading.textContent = name;
}
