function Edge(x, y, w)
{
	var pos = this.pos = new Vector2(x, y);

	this.width = w; 
	this.getLeft = function(){
		return this.pos.x; 
	
	};

	this.getRight = function(){
		return this.pos.x+this.width; 
		
	};

	this.getTop = function(){
		return this.pos.y; 
		
	};

	this.render = function(){

		var rect = new createjs.Shape();
                  rect.graphics.beginFill('white');
                  rect.graphics.drawRect(pos.x, pos.y, this.width, 4);
                  rect.graphics.endFill();

        stage.addChild(rect);
    	stage.update();
		 
		
	};

}