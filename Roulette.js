var main = function(){
}

var allButtonPositionSet = function(){
	var Entrystrlen1 = document.getElementById("Entry1").innerHTML.length;
	var Entrystrlen2 = document.getElementById("Entry2").innerHTML.length;
	var Entrystrlen3 = document.getElementById("Entry3").innerHTML.length;

	alert(Entrystrlen1+" "+Entrystrlen2+" "+Entrystrlen3);
}

var Entry1Button = function(){
	var node = document.getElementById("Entry1");
	node.innerHTML = "ほげほげ";
	allButtonPositionSet();
}

var Entry2Button = function(){
	var node = document.getElementById("Entry2");
	node.innerHTML = "ふー"
}

var Entry3Button = function(){
	var node = document.getElementById("Entry3");
	node.innerHTML = "ばー";
}
