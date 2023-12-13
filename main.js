// Algoritmo Condicional
function verificarEdad(edad) {
    if (edad >= 18) {
        console.log("¡Bienvenido! Puedes calcular el pago en cuotas.");
        simuladorCuotas(); // Invoca al simulador interactivo
    } else {
        console.log("Lo siento, debes ser mayor de edad para realizar el pago.");
    }
}

// Simulador Interactivo
function simuladorCuotas() {
    const montoPrestamo = parseFloat(prompt("Ingresa el monto del préstamo:"));
    const cantidadCuotas = parseInt(prompt("Ingresa la cantidad de cuotas:"));

    if (montoPrestamo <= 0 || cantidadCuotas <= 0) {
        console.log("Por favor, ingresa valores válidos.");
        return;
    }

    const tasaInteresAnual = 0.1; // Tasa de interés del 10%
    const tasaInteresMensual = tasaInteresAnual / 12;

    const cuotaMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -cantidadCuotas));

    console.log(`Monto del préstamo: $${montoPrestamo.toFixed(2)}`);
    console.log(`Cantidad de cuotas: ${cantidadCuotas}`);
    console.log(`Cuota mensual: $${cuotaMensual.toFixed(2)}`);
}









