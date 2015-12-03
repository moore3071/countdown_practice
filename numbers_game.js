"use strict";

var currentNumber = 0;
var large_numbers = [25,50,75,100];
var usable_numbers = [];
var larges_used = 0;
var target;

function choose_large_number()
{
	
	check_status();
}
function choose_small_number()
{
	
	check_status();
}
function start_game()
{
	var pointers = document.getElementsByClassName("pointer_hold");
	[].forEach.call(pointers, function (x) {x.className = "pointers";});
	choose_target();
}
function choose_target()
{
	target = Math.floor(Math.random()*898)+101; //101-999
}
function check_status()
{
		document.getElementById("startGame").disabled = usable_numbers.length>5;
		document.getElementById("largeNumber").disabled = usable_numbers.length>5||larges_used>3;
		document.getElementById("smallNumber").disabled = usable_numbers.length>5;
}
