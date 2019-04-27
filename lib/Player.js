function Player(x,y){

      var g = new createjs.Graphics();

      var boxman = {
                images: ["boxman1.png"],
                frames: {width:28, height:28, spacing:4,margin:0,regX: 0,regY:0},
                animations: {
                    run:{
                        frames: [1,2],
                        speed: 0.05,
                    },
                    cry:{
                        frames: [7,8],
                        speed: 0.05,
                    },
                    still:{
                        frames: [3]
                    },
                    right:{
                        frames: [0,9],
                        speed: 0.05,
                    },
                    left:{
                        frames: [10,11],
                        speed: 0.05,
                    }
                }
            };

      this.spriteSheet1 = new createjs.SpriteSheet(boxman);

      this.keyPressed = false;

      this.width = 28;
      this.height = 28;
      this.connectedEdge = null;
      this.gravity = 3;

      this.vx = 0;
      this.vy = 0;
      this.friction = 0.97;

      this.x = 0;
      this.y = 0;

      this.draw = function(x,y){

            s = new createjs.Sprite(this.spriteSheet1, "still");
            stage.addChild(s);
            stage.update();
      }

      this.update = function(){

            this.vx *= this.friction;
            //this.vy *= 0.5;
      
            if(this.vx > 1.5) {
                  this.vx = 1.5;
            }

            if(this.vx < -1.5) {
                  this.vx = -1.5;
            }

            s.x += this.vx;
            s.y += this.vy;

            this.x = s.x;
            this.y = s.y;

            if(!this.connectedEdge){ 
                  this.vy+=this.gravity; 
            }
             
      }

      this.setX = function(x) {
            s.x = x;
      }


      this.setY = function(y) {
            s.y = (y - this.height);
      }

      this.moveLeft = function() {
            this.setAnimation("left");
            
            this.vx-=3; 
            
      };

      this.notMoving = function() {
            s.gotoAndPlay("still");
      }


      this.moveRight = function() {

            this.setAnimation("right");
            
            this.vx++;    
      };

      this.getLeft = function() { 
            return s.x; 
      };
      
      this.getRight = function() { 
            
            return s.x+this.width; 
            
      };

      this.getTop = function() {
            return s.y-this.height; 
            
      };
      
      this.getBottom = function () {
            
            return s.y; 
            
      };

      this.jump = function() {
            
            if(this.connectedEdge) {
                  this.vy -= 20; 
                  this.connectedEdge = null; 
            }

      };

      this.fall = function(){
            this.connectedEdge = null;
      };

      this.setAnimation = function(animation){

            if(this.keyPressed == false) {
                  s.gotoAndPlay(animation);
            }
      }

      this.getX = function() {
        return s.x + 14;
      }


      this.getY = function() {
        return s.y + 14;
      }

}