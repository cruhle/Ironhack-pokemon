const MAX_IMAGES = 649;

let contador = Math.floor(Math.random() * MAX_IMAGES) + 1;

function render() {
	
	let pokemon=document.getElementById("pokemon")
	
	pokemon.innerHTML=`<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${contador}.svg">`
	
	if(contador == 1) {
		document.getElementById("pokemon").style.backgroundColor = "#00FF00";
	}
	
	if(contador == MAX_IMAGES) {
		document.getElementById("pokemon").style.backgroundColor = "#FF0000";
	}
	
	if(contador > 1 && contador < MAX_IMAGES) {
		document.getElementById("pokemon").style.backgroundColor = "#C0C0C0";
	}
	
}

let prevButton=document.getElementById("prev")

let nextButton=document.getElementById("next")

prevButton.onclick = function() {
	
	contador-=1
	
	if(contador==0) {
		contador=MAX_IMAGES
	}
	
	render()
}

nextButton.onclick = function() {
	
	contador+=1
	
	if(contador>MAX_IMAGES) {
		contador=1
	}
	
	render()
}

render()