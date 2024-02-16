/*1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
valores necesarios para calcular el área. Para ello has de crear un método por cada figura
para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado*/
/*



2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
por el usuario (prompt). 
Crea un método donde pasamos como parámetros entre entre qué
números queremos que los genere, podemos pedirlas al usuario antes de generar los
números. 
Este método devolverá un número entero aleatorio. Muestra estos números por
consola.
*/

const Range = (a, b) => {
  if (a > 0 && b > 0) {
    return a - b
  }
}

rango = Range(10, 2)
numerosGenerados = Math.floor(Math.random() * rango)

console.log(numerosGenerados)

/*3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
por parámetro para que nos indique si es o no un número primo, debe devolver true si es
primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.*/

//Solución de clase
let numero = 88
let res
let flag = 0

for (let i = 0; i <= numero - 1; i++) {
  res = numero % i

  if (res === 0) {
    flag++
  }
}
if (flag >= 3) console.log("El numero", numero, "NO es primo")
else console.log("El numero", numero, "SI es primo")

flag = 0

/*4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizará mediante un método al que le pasamos el número como parámetro. Para calcular
el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si
introducimos un 5, realizará esta operación 5*4*3*2*1=120.*/

let numeroPrompt = 5
let resultado = numeroPrompt

// for (let index = numeroPrompt-1; index >= 1; index--) {
//   resultado *= index
// }

let indice = numeroPrompt - 1
while (indice >= 1) {
  resultado *= indice
  indice--
}
console.log(resultado)

/*5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
realizará un método al que le pasaremos el número como parámetro, devolverá un String
con el número convertido a binario. Para convertir un número decimal a binario, debemos
dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que
no se pueda dividir más, el resto que obtengamos de cada división formará el número
binario, de abajo a arriba.*/
/*13 ÷ 2 = 6 con residuo 1
6 ÷ 2 = 3 con residuo 0
3 ÷ 2 = 1 con residuo 1
1 ÷ 2 = 0 con residuo 1*/

let aDecimal = 13
let aBinario = ""

while (aDecimal > 0) {
  let residuo = aDecimal % 2
  aBinario += residuo
  aDecimal = Math.floor(aDecimal / 2)
}

console.log(aBinario)

/*6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, pasando
el número por parámetro devolverá el número de cifras.*/

let entero = 5235642664556

if (Number.isInteger(entero) && entero > 0) {
  console.log(entero.toString().length)
} else {
  throw new Error("no es entero o positivo")
}

/*7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.

El cambio de divisas es:
• 0.86 libras es un 1 €
• 1.28611 $ es un 1 €
• 129.852 yenes es un 1 €
*/
const convertirMoneda = (cantidadEuros, monedaDestino) => {
  const tasasDeCambio = {
    libras: 0.86,
    dolares: 1.28611,
    yenes: 129.852,
  }

  //busca la propiedad monedadestino dentro del obj tasasdecambio
  const tasaDeCambio = tasasDeCambio[monedaDestino]

  if (!tasaDeCambio) {
    return console.log(
      "Moneda destino no válida. Las opciones son: libras, dolares, yenes"
    )
  }

  const resultado = cantidadEuros * tasaDeCambio

  console.log(
    `${cantidadEuros} euros equivalen a ${resultado.toFixed(
      2
    )} ${monedaDestino}.`
  )
}

/*8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
rellenar valores y otro para mostrar.
*/

//así se puede instanciar un array de 10 posiciones:
// const miArray = new Array(10)

const miArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const mostrarValores = (array) => {
  //siempre vienen los params en este orden, valor e indice en el forEach
  array.forEach((valor, index) => {
    console.log(`En el índice ${index} está el valor ${valor}`)
  })
}

mostrarValores(miArray)

/*9. Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método para
rellenar el array(que tenga como parámetros los números entre los que tenga que generar)
y otro para mostrar el contenido y la suma del array.*/

const crearArrayAleatorio = () => {
  const numeros = []
  while (numeros.length < 10) {
    numeros.push(Math.floor(Math.random() * 10))
  }
  return numeros
}

const mostrarContenidoYSuma = (numeros) => {
  console.log("Contenido del array:")
  numeros.forEach((valor, indice) => {
    console.log(`Posición ${indice}: ${valor}`)
  })

  /*reduce itera a través de cada elemento del array numeros, sumando cada valor al acumulador.
   Al final, suma contendrá la suma total de los valores. El 0 al final es el valor inicial del acumulador antes de comenzar a sumar
  es como usar un for con un contador fuera*/

  const suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
  console.log(`Suma de todos los valores: ${suma}`)
}

const tamañoArray = 10

const miArray2 = crearArrayAleatorio(tamañoArray)
mostrarContenidoYSuma(miArray2)

/*10. Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios primos entre los números deseados, por último, nos indica cuál es el
mayor de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
hacer todos los métodos que necesites.*/

//reutilización de los números primos de arriba, ejercicio 3

let flag2 = 0
let i = 2
let arrayPrimo = []
let sizePrimo = 15
let resultadoPrimo

while (arrayPrimo.length < sizePrimo) {
  resultadoPrimo = Math.floor(Math.random() * 100)

  while (i < resultadoPrimo) {
    res = numero % i

    if (res === 0) {
      flag2++
    }

    i++
  }
  if (flag2 >= 3) {
    console.log("tu primo", resultadoPrimo, "NO es primo")
  } else {
    console.log("tu primo", resultadoPrimo, "SI es primo")
    arrayPrimo.push(resultadoPrimo)
  }

  flag2 = 0
}
console.log("array de primos", arrayPrimo)

/*
Bucle principal:
El bucle while se ejecuta mientras la longitud de arrayPrimo sea menor que sizePrimo.
En cada iteración, se genera un número aleatorio entre 0 y 99 (mediante Math.floor(Math.random() * 100)), y se almacena en resultadoPrimo.
Bucle interno:
El segundo bucle while se ejecuta mientras i sea menor que resultadoPrimo.
Se calcula el residuo de resultadoPrimo dividido por i y se almacena en res.
Si res es igual a 0, incrementamos flag2.

Después de salir del bucle interno, verificamos si flag2 es mayor o igual a 3.
Si es así, imprimimos un mensaje indicando que resultadoPrimo no es primo.
De lo contrario, imprimimos un mensaje indicando que resultadoPrimo sí es primo y agregamos resultadoPrimo al arreglo arrayPrimo.
Reinicio de flag2:
Reiniciamos flag2 a 0 para la siguiente iteración.
Resultado final:
Al final del bucle principal, imprimimos el contenido del arreglo arrayPrimo, que contiene los números primos generados aleatoriamente.*/

/*11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
del segundo array con valores aleatorios. Después, crea un método que tenga como
parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0 del
array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de cada
array.*/
const crearArrays = (tamaño) => {
  // Se pueden crear con .from y diciéndole el tamaño por params
  const array1 = Array.from(
    { length: tamaño },
    () => Math.floor(Math.random() * 100) + 1
  )
  const array2 = Array.from(
    { length: tamaño },
    () => Math.floor(Math.random() * 100) + 1
  )

  return [array1, array2]
}

const multiplicarArrays = (array1, array2) => {
  //se mapea el primer array y se multiplican los valores por cada valor del array 2
  const resultado = array1.map((valor, i) => valor * array2[i])
  return resultado
}

const [arr1, arr2] = crearArrays(5)
const resultadoMultiplicacion = multiplicarArrays(arr1, arr2)

console.log("Contenido del primer array:", arr1)
console.log("Contenido del segundo array:", arr2)
console.log("Resultado de la multiplicación:", resultadoMultiplicacion)

/*12. Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
nosotros le indiquemos por prompt (debes controlar que se introduce un número correcto),
estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10 posiciones le
indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.*/

let size = 10
let array = []

const RellenarArray = () => {
  while (size > 0) {
    array.push(Math.floor(Math.random() * 300))
    size--
  }
}

RellenarArray()
console.log(array)

let cifra = 7

const result = array.filter((x) => {
  return x % 10 === cifra
})

console.log("Números que terminan en " + cifra + ":", result)
