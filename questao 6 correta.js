// 6. Solicite os valores para variáveis a, b e c e calcule ax2 + bx + c = 0

var a, b, c;
var x1,x2, delta;
a = prompt("Numero:");
b = prompt("Numero:");
c = prompt("Numero:");

delta = (b*b) - (4*a*c);
x1 = (-b + Math.sqrt(delta) ) / (2 * a);
x2 = (-b - Math.sqrt(delta) ) / (2 * a);

	if (delta < 0){
	alert ("Nao existe solucao nos reais");
	}
	else{
	alert ("existe");		
	}
