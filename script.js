let scene, ball;
window.onload = function(){
  scene = document.querySelector("a-scene");
  car.onclick = function(){
    this.components.sound.playSound();
  }
  ball = new Ball();
  loop()
}
window.onclick = function(){
    dog.components.sound.playSound();
}

function loop(){
  
  ball.bounce();
  window.requestAnimationFrame( loop )
  
}