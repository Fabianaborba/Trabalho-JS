// 10. Faça um programa que solicite 3 números e escreva na tela qual é o maior dos 3 números.

var num1, num2, num3;

num1 = Number(prompt(" digite um num:"));
num2 = Number(prompt(" digite um num:"));
num3 = Number(prompt(" digite um num:"));

	if (num1 > num2 && num1 > num3){
	alert (" o maior numero eh :" + num1);
	}
	else if ( num2 > num1 && num2 > num3){
	alert (" o maior numero eh:" + num2);
	}
	else if ( num3 > num1 && num3 > num2){
	alert (" o maior numero e:" + num3);
	}
