/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function player(body, bodyX, enemy, enemyX){
    var ship = body;
    var pos=0;
    var speed=0;
    var acceleration = 0;
    var shipX = bodyX;
    var enemy = enemy;
    var enemyX = enemyX;
    
    
    function move(){
        pos +=(speed/10);
        ship.css("margin-top", START_POS+pos);   
    };
    
    
    function on_screen(){
        if((pos<-MAX_POS)||(pos>MAX_POS)&&!end){
            end = true;
            alert(ship.attr('id') + ' Проиграл!');
        } 
    };
    
    function calc_speed(){
        speed+=acceleration;
        if (speed>MAX_SPEED)
            speed = MAX_SPEED;
        
        if(speed<-MAX_SPEED)
            speed = -MAX_SPEED;
    }
    
    this.getacc = function(){
        return acceleration;
    }
    
    this.setacc = function(a){
        acceleration = a;
    }
    
    this.getpos = function(){
        return pos;
    };
        
    this.getspeed = function(){
        return speed;
    };
    
     this.tick = function(){
        calc_speed();
        move();
        on_screen();
    };
   
    
};




