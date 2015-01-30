/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var SHIP_SIZE = 50;
var START_POS = 300;
var MAX_SPEED = 150;
var MAX_POS = 350;
var MAX_TIME = 2000;
var LEFT_PLAYER_POS = 50;
var RIGHT_PLAYER_POS = 900;

var time = 0;
var timer;
var player1, player2;
var interval;
var end = false;

$( window ).load(function() {

    
 player1 = new player($("#player1"), LEFT_PLAYER_POS, player2, RIGHT_PLAYER_POS);
 player2 = new player($("#player2"), RIGHT_PLAYER_POS, player1, LEFT_PLAYER_POS);
 timer = $("#timer");
 
 player1.setacc(20);
 
interval = setInterval(update, 100);

});

function time_is_up(){
    if(time>MAX_TIME){
        end = true;
        alert("Время вышло!");
    }
    
}

function update(){
    
    if(end)                         //Проверяем, не закончена ли игра
        clearInterval(interval);
    else{
        
    player1.tick();
    player2.tick();
    
    if(Math.abs(player1.getspeed())>=MAX_SPEED)
        player1.setacc(-player1.getacc());
    
    time++;
    timer.html(time);
    
    time_is_up();
    }  
    
};