/**
 * Pruebas Unitarias para Factorial - TDD con ciclo Red-Green-Refactor
 * 
 * PATRÓN AAA (Arrange-Act-Assert):
 * - Arrange: Inicializar objetos y setup necesario
 * - Act: Ejecutar la función a probar
 * - Assert: Verificar que el resultado sea el esperado
 */

const factorial = require('../factorial');

describe('Factorial - TDD Red-Green-Refactor', () => {
    
    /**
     * CICLO TDD EXPLICADO:
     * 1. RED: Escribir prueba que falla
     * 2. GREEN: Implementar código mínimo para que pase
     * 3. REFACTOR: Mejorar código manteniendo pruebas passing
     */

    describe('Caso base: factorial de 0 y 1', () => {
        test('factorial(0) debe retornar 1', () => {
            // Arrange
            const n = 0;
            
            // Act
            const resultado = factorial(n);
            
            // Assert
            expect(resultado).toBe(1);
        });

        test('factorial(1) debe retornar 1', () => {
            // Arrange
            const n = 1;
            
            // Act
            const resultado = factorial(n);
            
            // Assert
            expect(resultado).toBe(1);
        });
    });

    describe('Casos positivos: factorial de números positivos', () => {
        test('factorial(5) debe retornar 120', () => {
            // Arrange
            const n = 5;
            
            // Act
            const resultado = factorial(n);
            
            // Assert
            expect(resultado).toBe(120);
        });

        test('factorial(10) debe retornar 3628800', () => {
            // Arrange
            const n = 10;
            
            // Act
            const resultado = factorial(n);
            
            // Assert
            expect(resultado).toBe(3628800);
        });

        test('factorial(3) debe retornar 6', () => {
            // Arrange
            const n = 3;
            
            // Act
            const resultado = factorial(n);
            
            // Assert
            expect(resultado).toBe(6);
        });
    });

    describe('Casos extremos: números grandes', () => {
        test('factorial(20) debe retornar 2432902008176640000', () => {
            // Arrange
            const n = 20;
            
            // Act
            const resultado = factorial(n);
            
            // Assert
            expect(resultado).toBe(2432902008176640000);
        });
    });

    describe('Casos de error: números negativos', () => {
        test('factorial(-5) debe lanzar error', () => {
            // Arrange
            const n = -5;
            
            // Act & Assert
            expect(() => factorial(n)).toThrow('El factorial no está definido para números negativos');
        });
    });

    describe('Ejemplo con objeto de usuario - Patrón AAA', () => {
        test('Usuario puede calcular factorial de su número favorito', () => {
            // Arrange - Crear objeto usuario con propiedades
            const usuario = {
                nombre: 'Juan',
                numeroFavorito: 5,
                historialCalculos: []
            };
            
            // Act - Ejecutar la funcionalidad
            const resultado = factorial(usuario.numeroFavorito);
            usuario.historialCalculos.push({
                operacion: 'factorial',
                entrada: usuario.numeroFavorito,
                resultado: resultado
            });
            
            // Assert - Verificar resultados
            expect(resultado).toBe(120);
            expect(usuario.historialCalculos).toHaveLength(1);
            expect(usuario.historialCalculos[0].resultado).toBe(120);
        });

        test('Usuario puede verificar factorial de múltiples números', () => {
            // Arrange
            const usuario = {
                nombre: 'María',
                numeros: [3, 4, 5],
                resultados: []
            };
            
            // Act
            usuario.numeros.forEach(num => {
                usuario.resultados.push(factorial(num));
            });
            
            // Assert
            expect(usuario.resultados).toEqual([6, 24, 120]);
        });
    });
});