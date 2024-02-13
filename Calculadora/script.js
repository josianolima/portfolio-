const adicionavel  = document.querySelectorAll( ".adicionaveis")
const visor = document.querySelector("#visor")
const zerar = document.querySelector("#zerar")
const igual = document.querySelector("#igual")
const apagar = document.querySelector("#apagar")
const onoff = document.querySelector("#onoff")

let ligado = true

function adcionarNoVisor(evento){
	if (ligado === true) {
		if (visor.innerHTML === '0') {
			visor.innerHTML = ""
		}
		visor.innerHTML = visor.innerHTML +
		evento.target.innerHTML
	}
}


for ( let i = 0; i<adicionavel.length; i++){
	adicionavel[i].addEventListener("click", adcionarNoVisor)
}


function zerarVisor(){
visor.innerHTML = "0"
}

function calcular(){
	const resultado = eval(visor.innerHTML)
	visor.innerHTML = resultado
}

function apagarDigito(){
	const digito = visor.innerHTML.slice(0, -1)
	if(digito === ""){
		visor.innerHTML = "0"
	}else{
		visor.innerHTML = digito
	}	
}


function ligaDesliga(){
	if(onoff.innerHTML === "ON"){
		onoff.innerHTML = "OF"
		ligado = false
		visor.innerHTML = ""
		onoff.classList.add("desligado")
		visor.classList.add("desligado")
	}else{
		onoff.innerHTML= "ON"
		ligado = true
		visor.innerHTML ="0"
		onoff.classList.remove( "desligado")
		visor.classList.remove("desligado")
	}
}



apagar.addEventListener('click',apagarDigito)
igual.addEventListener('click', calcular)
zerar.addEventListener('click', zerarVisor)
onoff.addEventListener('click', ligaDesliga)