var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/broadcast.jpg') {
      myImage.setAttribute ('src','images/broadcast.jpg');
    } else {
      myImage.setAttribute ('src','images/broadcast.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Project Ripple will open soon, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}