function Switch(x,y){

		var data = {
                images: ["switch.png"],
                frames: {width:12, height:18, spacing:2,margin:0,regX: 0,regY:0},
                animations: {
                    on:{
                        frames: [1],
                    },
                    off:{
                        frames: [0]
                    }
                }
            };

        this.s;

        this.doAnim = 0;

        this.spriteSheet1 = new createjs.SpriteSheet(data);

        this.hitOnce = 0;

        this.getX = 0;

        this.on = function() {
        	this.s.gotoAndPlay("on");
        }

        this.off = function() {
        	this.s.gotoAndPlay("off");
        }

        this.switchbut = function() {
        	this.doAnim ^= 1;
                if(this.doAnim == 1){
                    this.on();
                }else {
                    this.off();
                }
        }

        this.draw = function(x,y) {
        	this.s = new createjs.Sprite(this.spriteSheet1, "off");
        	this.s.x = x;
        	this.s.y = y;
            stage.addChild(this.s);
            stage.update();
        }

        this.getX = function() {
            return this.s.x + 6;
        }

        this.getY = function() {
            return this.s.y + 9;
        }

}