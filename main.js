// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  // Add the .hidden class to the error modal
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");


  const handleLikeButtonClick = () => {
    mimicServerCall()
      .then(() => {
        
        const heart = document.querySelector(".like-glyph");
        heart.classList.add("activated-heart");
        heart.innerText = "♥";
      })
      .catch(() => {
        
        errorModal.classList.remove("hidden");
        const errorMessage = document.getElementById("modal-message");
        errorMessage.innerText = "Server Error! Please try again.";
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  };

  
  const likeButton = document.querySelector(".like-glyph");
  likeButton.addEventListener("click", handleLikeButtonClick);
});


function mimicServerCall() {
  return new Promise((resolve, reject) => {
    
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
      if (isSuccess) {
        resolve("Success!");
      } else {
        reject("Error!");
      }
    }, 1000);
  });
}




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
