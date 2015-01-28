/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var player1, player2;
var StartPos = 325;

$( window ).load(function() {


 player1 = $("#player1");
 player2 = $("#player2");
 
 player1.pos = 0;
 player2.pos = 0;
 player1.speed=10;
 player2.speed=-10;

update();

setInterval(update, 100);

});


function move(player){
    player.pos +=player.speed;
    player.css("margin-top", StartPos+player.pos);
};





function update(){
    move(player1);
    move(player2);
    
};