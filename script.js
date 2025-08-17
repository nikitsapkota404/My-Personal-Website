const typingElement = document.querySelector('.typing');
const words = [ 'Web Development', 'UI/UX Design'];

let wordIndex = 0;
let letterIndex = 0;
//Function to write the elements in variable words
function type() {
  if (letterIndex < words[wordIndex].length) {
    typingElement.textContent += words[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1000);
  }
}

//Function to erase the elements from variable words
function erase() {
  if (letterIndex > 0) {
    typingElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 200);
  }
}


document.addEventListener('DOMContentLoaded', type);
