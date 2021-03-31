class Polygon{

        constructor(x,y){
            
            var options = {
            
            isStatic:false,
            restitution:0.3
            }
            
            this.body = Bodies.circle(x, y, 30, options)
            this.image = loadImage("polygon.png")
            World.add(world, this.body)
            
            
            
            }
            
            display(){
                var pos = this.body.position
                push();
                translate(pos.x,pos.y)
                rotate(this.body.angle)
                imageMode(CENTER)
                image(this.image,0,0,60,60)
                pop();
            }
            
        









}