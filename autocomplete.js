var tags = [
	"REOBOTE COM DE SISTEMAS DE SEGURANÇA LTDA",
	"INTERPOWER COMERCIO LOCACAO E SERV. LTDA",
	"GESTAL AUTOMACAO DE SISTEMAS LTDA",
	"SISTEMAS AUTOMOTIVOS SERCON LTDA",
	"TROPICAL DIST DE EQUIP PEC E ACESSORIOS ",
	"STEPPEN TECNOLOGIA DA INFORMACAO LTDA",
	"TWO LINE EM TEL.E REPRES. COMERCIAL LTDA",
	"BCMG INTERNET LTDA",
	"LORES COMERCIAL LTDA",
	"ROX PARTNER SERV. E CONSULT. DE INFO LTDA",
	"SCSO - COMERCIO E SERV. DE INFORMATICA LTDA - ME"
];

var n = tags.length;

function ac(value){
	document.getElementById('datalist').innerHTML = '';

	l = value.length;
	for (var i = 0; i < n; i++){
		if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1){
			var node = document.createElement("option");
			var val = document.createTextNode(tags[i]);
			node.appendChild(val);

			document.getElementById('datalist').appendChild(node);
		}
	}
}