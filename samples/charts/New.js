function add(a, b) { 
return a+b 
}
let loadedJSON = null; 
function setup(){
	loadedJSON = loadJSON("oakland_vehicular_rates.json", gotData);
}

function gotData(){
	console.log(loadedJSON)
}


