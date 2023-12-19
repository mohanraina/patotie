function changeImage() {
  var image = document.getElementById('myImage');
  image.src = "https://media.tenor.com/0ygX74mVuCcAAAAi/mimibubu.gif";
  var para = document.getElementById('para');
  para.textContent = "please wear a thong too..."
}

// function moveButton() {
//   var image = document.getElementById('image-container');
//   var maxX = window.innerWidth - image.clientWidth;
//   var maxY = window.innerHeight - image.clientHeight;
//   image.style.left = Math.random() * maxX + 'px';
//   image.style.top = Math.random() * maxY + 'px';
// }


var noButton = document.getElementById('noButton');
  noButton.addEventListener('mouseenter',function(e) {
    var signX = -1;
    var signY = -1;
    if(Math.random()> 0.5){
      signX = 1;
    }
    if(Math.random()> 0.5){
      signY = 1;
    }
    var fac =0.5;
    var maxX = (window.innerWidth - noButton.clientWidth)*fac;
    var maxY = (window.innerHeight - noButton.clientHeight)*fac;
    console.log(toString(maxX) + toString(maxY));
    console.log("fired")
    if(signY == 1){
      maxY = maxY*0.4;
    }
    if(signX == 1){
      maxX = maxX*0.5;
    }
    var str = "translate("+signX*Math.ceil(Math.random()*maxX)+"px,"+signY*Math.ceil(Math.random()*maxY)+"px)";
    console.log(str)
    noButton.style.transform = str;
  })
