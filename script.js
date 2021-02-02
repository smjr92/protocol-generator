
function add(){
	var texto = document.getElementById('text').value;
	var nota  = document.getElementById('numeroNota').value;
	var depart= document.getElementById('depart').value;

	if(texto == ''||nota == ''||depart==''){
		alert("Por favor, preencha os campos corretamente.")
	}else{
		var html = '';

	html += '<div id="textoNotas">';
		html += '<p id="nota">'+nota+'</p>';
		html += '<p id="emitente">'+texto+'</p>';
		html += '<i class="fas fa-trash-alt" id="icon" onclick="del()"></i>'
	html += '</div>';

	document.getElementById('areaNotas').innerHTML += html;
	}
	
}

function del(){

	document.getElementById('textoNotas').remove();
}

function clone(){
	var div = document.getElementById('container'),
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
	clone.id = "clone";
document.body.appendChild(clone);
window.print();
}

function nome() {
  var txt;
  var nome = prompt("Digite seu nome:");
  txt =  nome;
  document.getElementById("nome").innerHTML = txt;

  var txt2;
  var depart = prompt("Digite seu departamento:");
  txt2 = depart;
  document.getElementById("depart").innerHTML = txt2;
}

function data(){
	monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
	now = new Date;

	date = ("Santos, " + now.getDate () + " de " + monName [now.getMonth() ] + " de " + now.getFullYear () + ".");
	document.getElementById("data").innerHTML = date;
}

function salvar(){
	
}