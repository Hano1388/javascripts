// Generating Base64 Image
function generateBase64image() {
  if (this.files && this.files[0]) {
    let fileReader = new FileReader();
    fileReader.addEventListener("load", function(e) {
      document.getElementById("frontImageTag").src = e.target.result;
    });

    fileReader.readAsDataURL( this.files[0] );
  }
}
document.getElementById("frontImage").addEventListener("change", generateBase64image);

// getting the value of input files on submission
const myForm = document.querySelector('form');

function getInputValues(e) {
  e.preventDefault();

  let email      = document.getElementById('emailField').value,
      password   = document.getElementById('passwordField').value;
      frontImage = document.getElementById("frontImageTag").src;

  document.getElementById('email').innerHTML = document.getElementById('emailField').value;
  document.getElementById('password').innerHTML = document.getElementById('passwordField').value;
  const front = document.getElementById("frontImageTag").src;
  document.getElementById('front').innerHTML = front;

  console.log({ email, password, frontImage });

}

myForm.addEventListener('submit', getInputValues, false);
