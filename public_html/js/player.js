/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function player(ship){
    this.ship = ship;
    this.pos=0;
    this.speed=0;
};

player.prototype.move= function(){
    this.pos +=this.speed;
    this.ship.css("margin-top", StartPos+this.pos);
    
};

player.prototype.on_screen= function(){
    if((this.pos<-350)||(this.pos>350)&&!end){
        end = true;
        alert(this.ship + 'Проиграл!');
    } 
};

player.prototype.tick= function(){
    this.move();
    this.on_screen();
};