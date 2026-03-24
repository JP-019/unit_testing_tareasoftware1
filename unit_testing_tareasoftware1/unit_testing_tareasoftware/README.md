# Proyecto Clase - TDD y Pruebas Unitarias del Factorial

Este proyecto es un ejemplo práctico de desarrollo guiado por pruebas (TDD - Test Driven Development) para implementar y probar la función factorial.

## 🎯 Objetivos

En este proyecto vamos a ver:
- La función factorial implementada en JavaScript
- Las pruebas unitarias usando Jest
- El ciclo Red-Green-Refactor del TDD
- El patrón AAA (Arrange-Act-Assert)

## 📁 Estructura del Proyecto

```
proyecto-clase/
├── src/
│   ├── factorial.js              # Función que calcula factorial
│   └── testing/
│       └── factorial.test.js     # Pruebas unitarias
├── main.js                       # Programa principal con ejemplo de usuario
├── package.json                  # Dependencias y scripts
├── jest.config.js               # Configuración de Jest
└── README.md                    # Este archivo
```

## 🔧 Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

## 🚀 Uso

### Ejecutar el programa principal
```bash
npm start
```

### Ejecutar las pruebas
```bash
npm test
```

### Ejecutar pruebas en modo watch
```bash
npm run test:watch
```

## 📋 Explicación del Código

### Función Factorial (`src/factorial.js`)

La función `factorial(n)` recibe un número `n` y:
- Si `n` es negativo, lanza un error: "El factorial no está definido para números negativos"
- Si `n` es 0 o 1, retorna 1
- Para otros casos positivos, calcula el producto de 1 hasta `n`

### Pruebas Unitarias (`src/testing/factorial.test.js`)

Las pruebas siguen el ciclo TDD **Red-Green-Refactor**:

#### Ciclo Red-Green-Refactor
1. **RED**: Escribir una prueba que falla
2. **GREEN**: Implementar el código mínimo para que pase
3. **REFACTOR**: Mejorar el código manteniendo las pruebas

#### Patrón AAA
Cada prueba sigue el patrón AAA:
- **ARRANGE**: Preparar objetos y datos necesarios
- **ACT**: Ejecutar la función a probar
- **ASSERT**: Verificar que el resultado sea el esperado

#### Tipos de Pruebas Incluidas
- **Casos base**: `factorial(0) = 1`, `factorial(1) = 1`
- **Casos positivos**: `factorial(5) = 120`, `factorial(10) = 3628800`, `factorial(3) = 6`
- **Casos extremos**: `factorial(20) = 2432902008176640000`
- **Casos de error**: Números negativos lanzan error
- **Ejemplos con objetos**: Usuario puede calcular factorial de su número favorito

## 🎬 Ejemplo con Objeto Usuario

En `main.js` se incluye un ejemplo práctico donde creamos un objeto usuario:

```javascript
const usuario = {
    nombre: 'Juan',
    numeroFavorito: 5,
    historialCalculos: []
};
```

Calculamos el factorial y guardamos el resultado en el historial de cálculos del usuario.

## ✅ Verificación

Todos los tests pasan correctamente, demostrando la implementación exitosa del TDD con el ciclo Red-Green-Refactor y el patrón AAA en cada prueba.

## 📚 Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **Jest**: Framework de pruebas unitarias
- **JavaScript ES6+**: Lenguaje de programación

## 📄 Licencia

ISC