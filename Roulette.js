var timer1 = null;
var timer2 = null;
var timer3 = null;
var testStr = new Array("hogehoge","ほげほげ","fowhg","gehowru83h5y");
var flags = new Array();
var men = new Array();

var main = function(){
	var node1 = document.getElementById("Entry1");
	var node2 = document.getElementById("Entry2");
	var node3 = document.getElementById("Entry3");

	init();

	timer1 = setInterval(function(){ChangeText(node1);},50);
	timer2 = setInterval(function(){ChangeText(node2);},50);
	timer3 = setInterval(function(){ChangeText(node3);},50);

	for(var i=0;i<4;i++){
		flags[i] = false;
	}
}

var init = function(){
	for(var i=0;i<4;i++){
		men[i] = new Registrant(testStr[i]);
	}
}

var Entry1Button = function(){
	clearInterval(timer1);
}

var Entry2Button = function(){
	clearInterval(timer2);
}

var Entry3Button = function(){
	clearInterval(timer3);
}

var ChangeText = function(node){
	var n = Math.floor(Math.random()*4);
	node.innerHTML = men[n].name;
}

var Registrant = function(name){	//class
	this.name = name;
	this.flag = false;
}
