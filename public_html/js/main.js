/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var player1, player2;
var StartPos = 325;
var interval;
var end = false;

$( window ).load(function() {


 player1 = new player($("#player1"));
 player2 = new player($("#player2"));
 
interval = setInterval(update, 100);

});



function update(){
    
    if(end)                         //Проверяем, не закончена ли игра
        clearInterval(interval);
    else{
    player1.tick();
    player1.tick();
    
    
    }  
};