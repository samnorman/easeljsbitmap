function Scope(x,y){

		var data = {
                images: ["occtestb.png"],
                frames: {width:100, height:68, spacing:8,margin:0,regX: 0,regY:0},
                animations: {
                    run:{
                        frames: [0,1,2,3,4],
                        speed: 0.1,
                    },
                    still:{
                        frames: [0]
                    }
                }
            };

        var s;

        this.doAnim = 0;

        this.spriteSheet1 = new createjs.SpriteSheet(data);

        this.play = function() {
        	s.gotoAndPlay("run");
        }

        this.stop = function() {
        	s.gotoAndPlay("still");
        }

        this.pause = function() {
        	this.doAnim ^= 1;
                if(this.doAnim == 1){
                    s.stop();
                }else {
                    s.play();
                }
        }

        this.draw = function(x,y) {
        	s = new createjs.Sprite(this.spriteSheet1, "still");
        	s.x = x;
        	s.y = y;
            stage.addChild(s);
            stage.update();
        }

}