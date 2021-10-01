# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

El endpoint se encarga, dado un valor de suma metido en inches, buscar todos los datos de la api dada en github
Este endopoint le manda un arreglo con las parejas, cada una en un array diferente, para luego ser procesadas en el front
La lógica de la búsqueda está hecha de forma un poco eficiente para no repetir iteraciones y que el arreglo tampoco tenga parejas repetidas

Entradas: El request y el response, en el request se puede obtener el query de la suma de los inches
Salida: Un arreglo con los valores jugadores de la nba cuya suma de alturas en pulgadas es el valor que el cliente entra por parámetro

\*\* Nota: Conseguí que el back hiciera los cálculos correctos de los datos (comprobado) y que el front también imprima bien todos los datos de las tablas, sin embrago, la respuesta del back hacia el front (el arreglo respectivo) no lo leyera bien, aunque por consola se puede observar que sí es correcto.
