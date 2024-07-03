/*
1. DISCOTECA
Una discoteca desea llevar el control de sus ganancias. 
Para esto conoce de cada rumbero: su cédula, nombre, edad y sexo. 
Cada entrada tiene un costo dependiendo del sexo, si es chico vale 25$ 
y si es chica cuesta en 25% del valor del chico. Por Noche, 
la discoteca desea saber: a) Pago que realiza cada rumbero b) Total Ganado, 
c) Porcentaje de rumberas mayores a 21 años, d) Cual sexo asistió más a la discoteca.

La discoteca suministra la siguiente información demostrativa, 
para 4 rumberos: (cedula, nombre, edad, sexo) (134, Luis, 23, M) (154, Ana, 22, F) (324, José, 18, M) 
(286, Carmen, 19, F), según lo cual la salida requerida presenta el siguiente formato: 

Pago que realiza Luis 25$
Pago que realiza Ana 6.25$
Pago que realiza José 25$
Pago que realiza Carmen 6.25$
Total Ganado 62.5$
Porcentaje de rumberas mayores a 21 años: 50% 

*/
import Cl_rumbero from "./Cl_rumbero.js";
import Cl_discoteca from "./Cl_discoteca.js";

let rumbero1 = new Cl_rumbero(134, "Luis", 23, "M");
let rumbero2 = new Cl_rumbero(154, "Ana", 22, "F");
let rumbero3 = new Cl_rumbero(324, "Jose", 18, "M");
let rumbero4 = new Cl_rumbero(286, "Carmen", 19, "F");

let Discoteca = new Cl_discoteca();

Discoteca.procesarRumbero(rumbero1);
Discoteca.procesarRumbero(rumbero2);
Discoteca.procesarRumbero(rumbero3);
Discoteca.procesarRumbero(rumbero4);

let salida = document.getElementById("salida");

salida.innerHTML= "Resultados: "
salida.innerHTML+="<br> Pago qu realiza Luis: "+rumbero1.calcularPago()+ "$";
salida.innerHTML+="<br> Pago qu realiza Ana: "+rumbero2.calcularPago()+ "$";
salida.innerHTML+="<br> Pago qu realiza Jose: "+rumbero3.calcularPago()+ "$";
salida.innerHTML+="<br> Pago qu realiza Carmen: "+rumbero4.calcularPago()+ "$";
salida.innerHTML+= "<br><br>Total ganado: "+Discoteca.devolverAcumGanancias()+"$";
salida.innerHTML+="<br> Porcentaje de rumberas mayores de 21 años: "+Discoteca.porcRumberaMayor21()+"%";
salida.innerHTML+="<br> El sexo que mas asistio fue: "+Discoteca.devolvercontSexoMayor();


