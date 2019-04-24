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
  // Image Validation
  let image = document.getElementById("frontImage"),
      imagePath = image.value;
  console.log("imagePath: ", imagePath);
  // Check if the user has uploaded any files
  if (imagePath == '') {
    aler('please upload an image')
  } else {
    let extension = imagePath.substring(imagePath.lastIndexOf('.') + 1).toLowerCase();
    console.log("extension: ", extension);

    // check if the uploaded file is an image
    if(
      extension === "gif" ||
      extension === "png" ||
      extension === "png" ||
      extension === "jpg" ||
      extension === "jpeg"
    ) {
      console.log("The file type is: ", extension);

      // After Validation
      let email      = document.getElementById('emailField').value,
          password   = document.getElementById('passwordField').value;
          frontImage = document.getElementById("frontImageTag").src;

      document.getElementById('email').innerHTML = document.getElementById('emailField').value;
      document.getElementById('password').innerHTML = document.getElementById('passwordField').value;
      const front = document.getElementById("frontImageTag").src;
      document.getElementById('front').innerHTML = front;

      console.log({ email, password, frontImage });
    } else {
      // Write the message here
      console.log("The file type is not image")
      alert("Photo only allows file types of GIF, PNG, JPG, JPEG and BMP. ");
      document.getElementById("frontImage").value = "";
      document.getElementById("frontImageTag").src = "";
    }
  }
}

myForm.addEventListener('submit', getInputValues, false);
