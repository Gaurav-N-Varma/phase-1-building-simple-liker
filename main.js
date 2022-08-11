// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Assigning the empty heart elements to a variable
hearts = document.querySelectorAll('.like-glyph')

// Looping through each heart and calling an event listener
hearts.forEach((heart) => {
  // Triggered on click
  heart.addEventListener('click', () => {
    // Sending a get request to the server
    // If a successful promise will execute accordingly, and vice versa
    mimicServerCall()
      .then(ifSuccessful)
      .catch(ifFailure)
  })
  
  // Defining ifSuccessful function
  function ifSuccessful(){
    if (heart.textContent === EMPTY_HEART){
      heart.textContent = FULL_HEART
      heart.classList.add('activated-heart')
    } else if (heart.textContent === FULL_HEART){
      heart.textContent = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
  }

  // Defining ifFailure function
  function ifFailure(){
    errorModal = document.querySelector('#modal')
    errorModal.className = ''
    
    // Setting timeer on error modal
    setTimeout(() => {errorModal.className = 'hidden'}, 3000)
  }
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
