class Wall {

    constructor (x,y,w,h) 
    {

        var options = {
            isStatic : true
        }
  this.body = Bodies.rectangle(x,y,w,h,options)
  this.w = w;
  this.h = h;
  World.add(myWorld , this.body)
    }

    display()
    {
        var pos = this.body.position;
        push()
       fill("orange")
       rect(pos.x , pos.y , this.w , this.h)
        pop()
    }
}