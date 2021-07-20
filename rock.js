function rpsGame(yourChoice){
	console.log(yourChoice);
	var humanChoice, botChoice;
	
	humanChoice = yourChoice.id;
	
	botChoice = numToChoice(randomrpsInt());
	
	console.log('computerChoice:',botChoice);
	
	results = decideResult(humanChoice,botChoice);
	console.log(results);
	
	message = finalMessage(results);
	console.log(message);
	
	rpsFrontEnd(yourChoice.id, botChoice, message)
}




function randomrpsInt(){
	return Math.floor(Math.random()*3);
}

function numToChoice(number){
	return ['rock','paper','scissor'][number]
}



function decideResult(yourChoice, computerChoice){
	var rpsDatabase = {
		'rock':{'scissor':1,'rock':0.5,'paper':0},
		'paper':{'rock':1,'paper':0.5,'scissor':0},
		'scissor':{'paper':1,'scissor':0.5,'rock':0}
	}
    var yourScore = rpsDatabase[yourChoice][computerChoice]
	var computerScore = rpsDatabase[computerChoice][yourChoice]
	
	return[yourScore,computerScore]
}



function finalMessage([yourScore,computerScore]){
	if(yourScore === 0){
		return{'message':'You lost!','color':'red'}
	} else if (yourScore === 0.5){
		return{'message':'You tied','color':'yellow'}
	} else{
	    return{'message':'You won!','color':'green'}
	}
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
	var imageDatabase = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissor': document.getElementById('scissor').src
	}
	
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissor').remove();
	
	var humanDiv = document.createElement('div');
	var botDiv = document.createElement('div');
	var messageDiv = document.createElement('div');
	
	humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=200 width=200 style='box-shadow:-3px 5px 12px 5px #2d0472'>"
	messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-Size:60px;  padding:30px; '>" + finalMessage['message'] +"</h1>"
	botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=200 width=200 style='box-shadow:-3px 5px 12px 5px #ff0303fa'>"
	document.getElementById('flexbox-rps').appendChild(humanDiv);
	document.getElementById('flexbox-rps').appendChild(messageDiv);
	document.getElementById('flexbox-rps').appendChild(botDiv);
	
}

