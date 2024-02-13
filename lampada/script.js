const btoff = document.querySelector('#btoff')
const bton = document.querySelector('#bton')
const btrepair = document.querySelector('#btrepair')
const luzAcesa = document.querySelector('#luzAcesa')
const luzApagada = document.querySelector('#luzApagada')
const consertarLuz = document.querySelector('#consertarLuz')

let contadorDeClicks = 0
let lampadaInteira = true

function apagada(){
	if (lampadaInteira) {	
		luzAcesa.classList.remove("on")
		luzApagada.classList.add("on")
	}
}

function acesa(){
	if (lampadaInteira) {
		luzAcesa.classList.add("on")
		luzApagada.classList.remove("on")
	} 
}

function quebrada(){
	contadorDeClicks++
	if (contadorDeClicks >= 2){
		consertarLuz.classList.add("on")
		btrepair.classList.add("on")
		luzApagada.classList.remove("on")
		luzAcesa.classList.remove("on")
		bton.classList.add("on")
		btoff.classList.add("on")
		lampadaInteira = false
		contadorDeClicks = 0
	}
}

function consertar(){
	consertarLuz.classList.remove("on")
	luzApagada.classList.add("on")
	btrepair.classList.remove("on")
	bton.classList.remove("on")
	btoff.classList.remove("on")
	lampadaInteira = true
}

btoff.addEventListener('click', apagada)
bton.addEventListener('click', acesa)
luzAcesa.addEventListener('click', quebrada)
luzApagada.addEventListener('click', quebrada)
btrepair.addEventListener('click', consertar)