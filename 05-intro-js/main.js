var b ='Hola Mundo desde el archivo main.js';
console.log(b);

alert(':3 BIENVENIDOS DELFINSITOS :3');

var nombre = prompt('¿Hola, Dime tu nombre?');
console.log('Ejercicio-1');
var tarea = prompt('¿Hiciste la tarea?');
if(tarea ==='si'){
    alert('¡Bien hecho! ' + nombre + ' :) ')
} else {
    alert('No te rindas ' + nombre + ' ¡empieza ya mismo!' + ' :) ' )
}

//var nombre = prompt('¿Hola, Dime tu nombre?');//
console.log('Ejercicio-2');
var grados = prompt('¿Cual es la temperatura en grados Fahrenheit?');
var res;
res=((grados-32)*(5/9));
alert("la temperatura en celcius es: "+res );



console.log('Ejercicio-3');

alert ('¡¡Ya casi terminamos!!');

var mayor;
var num1 = parseFloat(prompt("Ingresa un numero"));
var num2 = parseFloat(prompt("Ingresa un segundo numero"));
var num3 = parseFloat(prompt("Ingrsa un tercer numero"));

if(num1 >= num2 && num1 >= num3){
    mayor = num1;
}else if(num2 >= num1 && num2 >= num3){
    mayor = num2;
}else{
    mayor = num3;
}
alert("El numero mayor es"  +  mayor);

console.log("El numero mayor es"  +  mayor);

alert("Eso es todo, gracias por responder");