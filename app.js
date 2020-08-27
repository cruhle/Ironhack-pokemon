let contador=1

function render() {
	let pokemon=document.getElementById("pokemon")
	pokemon.innerHTML=`<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${contador}.svg">`	
}

let prev=document.getElementById("prev")

let next=document.getElementById("next")

prev.onclick = function() {
	contador-=1
	if(contador==0) {
		contador=650
	}
	render()
}

next.onclick = function() {
	contador+=1
	if(contador>650) {
		contador=1
	}
	render()
}


render()
