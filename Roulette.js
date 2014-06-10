//タイマーを止めるとき他の止まってるタイマーの判定をして出力結果を調べてかぶるかどうか判定する

var timer1 = null;
var timer2 = null;
var timer3 = null;
var node1 = null;
var node2 = null;
var node3 = null;
var testStr = new Array("hogehoge","ほげほげ","fowhg","gehowru83h5y");
var flags = new Array();
var men = new Array();

var main = function(){

	init();

	for(var i=0;i<4;i++){
		flags[i] = false;
	}
}

var init = function(){
	node1 = document.getElementById("Entry1");
	node2 = document.getElementById("Entry2");
	node3 = document.getElementById("Entry3");

	timer1 = setInterval(function(){ChangeText(node1);},50);
	timer2 = setInterval(function(){ChangeText(node2);},50);
	timer3 = setInterval(function(){ChangeText(node3);},50);
	for(var i=0;i<4;i++){
		men[i] = new Registrant(testStr[i]);
	}
}

var Entry1Button = function(){
	var index = null;

	if(!Judg(node1.innerHTML)){
		index = getIndex(node1.innerHTML);
		if(index == null){
			ErrorProcess();
		}
		else {
			timer1 = clearInterval(timer1);
			men[index].flag = true;
		}
	}
}

var Entry2Button = function(){
	var index = null;

	if(!Judg(node2.innerHTML)){
		index = getIndex(node2.innerHTML);
		if(index == null){
			ErrorProcess();
		}
		else{
			timer2 = clearInterval(timer2);
			men[index].flag = true;
		}
	}
}

var Entry3Button = function(){
	var index = null;

	if(!Judg(node3.innerHTML)){
		index = getIndex(node3.innerHTML);
		if(index == null){
			ErrorProcess();
		}
		else{
			timer3 = clearInterval(timer3);
			men[index].flag = true;
		}
	}
}

var ChangeText = function(node){
	var len = Object.keys(men).length;
	var n = Math.floor(Math.random()*len);
	node.innerHTML = men[n].name;
}

var Registrant = function(name){	//class
	this.name = name;
	this.flag = false;
}

var Judg = function(str){
	var len = Object.keys(men).length;
	var ret = null;

	console.log(str);
	for(var i=0;i<len;i++){
		if(men[i].name == str){
			ret = men[i].flag;
			break;
		}
	}
	return ret;
}

var getIndex = function(str){
	var len = Object.keys(men).length;
	var ret = null;

	for(var i=0;i<len;i++){
		if(men[i].name == str){
			ret = i;
			break;
		}
	}
	return ret;
}

var ErrorProcess = function(){
	timer1 = clearInterval(timer1);
	timer2 = clearInterval(timer2);
	timer3 = clearInterval(timer3);
	alert("ERROR 0000");
}
