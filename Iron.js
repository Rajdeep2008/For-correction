class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball

	var options={
		restitution = 0.8,
		friction = 3,
		density = 30,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, iron.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("Yellow");
			//draw the ellipse here to display the rubber ball
         
            ellipse(56, 46, 55, 55);
			pop()
	}

}