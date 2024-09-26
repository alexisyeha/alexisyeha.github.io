class Wave {
  constructor(shift){
    this.shift=shift;
    this.angle = 0;
    this.movement = 0;
    this.period = 2;
  }
  
  display(){
    stroke(255);
    fill(255);
    for(let i=0; i<=360; i+=10) {
      let x = map(i,0,360,-r,r);
      let amplitude = r*sqrt(1-pow((x/r),2));
      let y = amplitude*sin((i + this.angle +
this.shift*this.movement)*this.period);
      ellipse(x,y,1,1);
  }

  }
  move(){
    this.angle 
      this.angle +=1;
    this.movement = 1+cos(this.angle);
  }
}