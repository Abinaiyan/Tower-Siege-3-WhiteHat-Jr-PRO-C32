class Block{
    
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y, 30, 40,options);
      this.Visibility = 255;
      World.add(world, this.body);
    }


    display_grey(){
  
      if(this.body.speed < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(128, 128, 128);
        rect(pos.x, pos.y,30, 40);
      }
      else{
        World.remove(world,this.body)
        push();
        this.Visibility = this.Visibility - 5 ;
        tint(255,this.Visibility)
        rectMode(CENTER);
        if(this.Visibility <=0){
          fill(number)
          noStroke()
          rect(0,0,30, 40);
          }
        pop();
      }

    }


    display_pink(){
   
      if(this.body.speed < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255, 192, 203);
        rect(pos.x, pos.y,30, 40);
      }
      else{
        World.remove(world,this.body)
        push();
        this.Visibility = this.Visibility - 5 ;
        tint(255,this.Visibility)
        rectMode(CENTER);
        if(this.Visibility <=0){
          fill(number)
          noStroke()
          rect(0,0,30, 40);
          }
        pop();
    }
  }

    display_blue(){
      
      
      if(this.body.speed < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(135, 206, 234);
        rect(pos.x, pos.y,30, 40);
      }
      else{
        World.remove(world,this.body)
        push();
        this.Visibility = this.Visibility - 5 ;
        tint(255,this.Visibility)
        rectMode(CENTER);
        if(this.Visibility <=0){
          fill(number)
          noStroke()
          rect(0,0,30, 40);
          }
        pop();
    }
    }


    display_turquoise(){
      if(this.body.speed < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(63, 224, 208);
        rect(pos.x, pos.y,30, 40);

      }
      else{
        World.remove(world,this.body)
        push();
        this.Visibility = this.Visibility - 5 ;
        tint(255,this.Visibility)
        rectMode(CENTER);
        if(this.Visibility <=0){
        fill(number)
        noStroke()
        rect(0,0,30, 40);
        }
        pop();
    }
      
    }
  
    score() {
      if(this.Visibility <=0 && this.Visibility > -5 ){
        console.log("hello")
        Score = Score + 1;
      }
    }
}

