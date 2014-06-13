var timer1 = null;
var timer2 = null;
var timer3 = null;
var node1 = null;
var node2 = null;
var node3 = null;
var men = new Array();

var StartRoulette = function(){
	if(timer1 == null && timer2 == null && timer3 == null)init();
}

var init = function(){
	var ListNames = getList();
	var len = null;
	node1 = document.getElementById("Entry1");
	node2 = document.getElementById("Entry2");
	node3 = document.getElementById("Entry3");

	if(ListNames == null)return ;
	len = ListNames.length;
	if(len < 3) return ;

	timer1 = setInterval(function(){ChangeText(node1);},50);
	timer2 = setInterval(function(){ChangeText(node2);},50);
	timer3 = setInterval(function(){ChangeText(node3);},50);

	for(var i=0;i<len;i++){
		men[i] = new Registrant(ListNames[i]);
	}
}

var getList = function(){
	var selectList = document.ListForm.MemList;
	var len = selectList.length;
	var List = new Array();

	for(var i=0;i<len;i++){
		List[i] = selectList[i].text;
	}

	return List;
}

var Entry1Button = function(){
	var index = null;

	if(timer1 == null)return;
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

	JudgTim();
}

var Entry2Button = function(){
	var index = null;

	if(timer2 == null)return ;
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

	JudgTim();
}

var Entry3Button = function(){
	var index = null;

	if(timer3 == null)return;
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
	
	JudgTim();
}

var CheckKey = function(e){
	if(!e) var e = window.event;

	if(e.keyCode == 13){
		_add();
		return false;
	}
}

var _delete = function(){
	var selectIndex = document.ListForm.MemList.selectedIndex;
	var selectList = document.ListForm.MemList;
	var len = selectList.length;

	if(selectIndex == -1)return ;

	for (var i=selectIndex+1;i<len;i++){
		selectList.options[i-1].value = selectList.options[i].value;
		selectList.options[i-1].text = selectList.options[i].text;
	}
	selectList.options[len-1] = null;
	selectList.length = len-1;
}

var _add = function(){
	var selectList = document.ListForm.MemList;
	var AddName = document.addForm.AddName.value;

	if(AddName == "")return ;

	selectList.length++;
	selectList.options[selectList.length-1].value = selectList.length-1;
	selectList.options[selectList.length-1].text = AddName;

	document.addForm.AddName.value = "";
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

	for(var i=0;i<len;i++){
		if(men[i].name == str){
			ret = men[i].flag;
			break;
		}
	}
	return ret;
}

var JudgTim = function(){
	var len = Object.keys(men).length;

	if(timer1 == null && timer2 == null && timer3 == null){
		for(var i=len-1;i>=0;i--)
			delete men[i];
	}
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
