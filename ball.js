class Ball{
  constructor(){
    this.y = 1;
    this.dy = 0.01;
    this.start = false;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("position",{x:0, y:1, z:-1});
    this.obj.setAttribute("sound",{src: "#bellSound", loop:false})
    this.obj.onclick = ()=>{
      this.start = true;
    }

    scene.append(this.obj);
  }
  bounce(){
    if(this.start){
      this.y += this.dy;
      this.obj.object3D.position.y = this.y;
      if(this.y < 1 || this.y > 3){
        this.dy = -this.dy;
        this.obj.components.sound.playSound();
      }
    }
  }
  
}