const factorial = require('./src/factorial');

const usuario = {
    nombre: 'Juan',
    numeroFavorito: 5,
    historialCalculos: []
};

const resultado = factorial(usuario.numeroFavorito);
usuario.historialCalculos.push({
    operacion: 'factorial',
    entrada: usuario.numeroFavorito,
    resultado: resultado
});

console.log(`Usuario: ${usuario.nombre}`);
console.log(`Número: ${usuario.numeroFavorito}`);
console.log(`Factorial: ${resultado}`);
console.log('Historial:', usuario.historialCalculos);
