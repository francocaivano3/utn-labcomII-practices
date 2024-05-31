let pesos = document.getElementById("pesos");
let moneda = document.getElementById("monedas");
let boton = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

boton.addEventListener("click", function click(){
    
    if(pesos.value == ""){
        resultado.innerText = "Ingrese el monto en pesos";
    } else if(moneda.value == "") {
        resultado.innerText = "Ingrese la moneda a la que desea calcular el valor";
    } else {
        if(moneda.value == "euro"){
            resultado.innerText = pesos.value * 2;
        } else if(moneda.value == "dolar") {
            resultado.innerText = pesos.value * 3;
        }
    }
});

let monedaNueva = document.getElementById("monedaNueva");
let costoConversion = document.getElementById("costoConversion");
let enviarMoneda = document.getElementById("enviarMoneda");
let envioExitoso = document.getElementById("envio");
let formCalcular = document.getElementById("formCalcular");
let nuevaOpt;

enviarMoneda.addEventListener("click", function(){
    if(monedaNueva.value === "") {
        envioExitoso.innerText = "Ingrese la moneda que desea añadir.";
    } else if(costoConversion.value === "") {
        envioExitoso.innerText = "Ingrese el costo de conversión.";
    } else {
        nuevaOpt = document.createElement("option");
        nuevaOpt.value = monedaNueva.value;
        nuevaOpt.innerText = monedaNueva.value;
        moneda.appendChild(nuevaOpt);
        envioExitoso.innerText = "Se ha ingresado la nueva moneda con éxito.";
        monedaNueva.value = "";
        costoConversion.value = "";
    }
})