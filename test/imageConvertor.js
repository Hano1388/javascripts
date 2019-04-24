// function convertImage() {
//
//   if (this.files && this.files[0]) {
//
//     let fileReader = new FileReader();
//
//     fileReader.addEventListener("load", function(e) {
//       document.getElementById("img").src       = e.target.result;
//       document.getElementById("b64").innerHTML = e.target.result;
//     });
//
//     fileReader.readAsDataURL( this.files[0] );
//   }
// }
//
// document.getElementById("image-input").addEventListener("change", convertImage);

// MV - setting an object to the base64;

function setImage(value) {
  var images = { front: value };
  console.log('images: ', images);
  if(images.front) {
    document.getElementById('frontInput').value = images.front;
  }
}

 function convertImage() {
  if (this.files && this.files[0]) {

    let fileReader = new FileReader();

    fileReader.addEventListener("load", function(e) {
      document.getElementById("img").src       = e.target.result;
      document.getElementById("b64").innerHTML = e.target.result;
      setImage(e.target.result);
    });
    fileReader.readAsDataURL( this.files[0] );
  }
}

document.getElementById("front").addEventListener("change", convertImage, false);

function submitForm() {
  // e.preventDefault();
  alert(document.getElementById('frontInput').value);
}
document.getElementById('testMe').addEventListener("submit", submitForm, false);
