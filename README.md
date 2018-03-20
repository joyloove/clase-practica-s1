# ♡ E J E R C I C I O S ♡

 ## OBJETIVOS
* Practicar codeando junto a tu equipo de profes, resolviendo problemas de estructuras condicionales, repetitivas y funciones
* Practicar, practicar y practicar.

 1.SUM

 Crea una función range que tome dos argumentos: start (principio) y end (fin) y que devuelva un array que contenga los números desde el start hasta el end (incluyéndolo). A continuación, escribe una función sum que tome una array de números y devuelva la suma de estos números. Confirma que al ejecutar console.log(sum(range(1,10))) se imprime el resultado 55. Ahora modifica la función de rango para tomar un tercer argumento opcional que indique el valor de "step" utilizado para construir el array. Si no se da ningún step, los elementos del array suben por incrementos de uno, correspondientes al comportamiento anterior. La llamada range(1, 10, 2) debe devolver [1, 3, 5, 7, 9]. Asegúrate que también funciona con valores de step negativos, de modo que range(5, 2, -1) produce [5, 4, 3, 2].

 2.SCOREKEEPER

 Imagina que estás jugando un juego con algunas amigas y quieres ir registrando el puntaje de cada una. Crea un object llamado scores donde los keys o propiedades son los nombres de tus amigas, y los valores serán los puntajes (todos empiezan con 0).

 Escribe una función que toma dos argumentos, el nombre de tu amiga y la cantidad de puntos nuevos que ha obtenido, y que actualice los puntos de la jugadora en el object scores. También escribe una función que imprima en la consola el total de los puntos.

 3.SORT (+ BINARY SEARCH)

 Crea una función que ordene un array de números, de menor a mayor. Tip: utiliza el algoritmo de selection sort. Revisar otros algoritmos de sorting (por ejemplo: insertion sort y bubble sort)

 Ahora que ya sabes ordenar un array, escribe una función que realice una búsqueda de un elemento en un arreglo utilizando el algoritmo de Binary Search (recuerda que Lourdes explicó el concepto de Binary Search en la sección de casos prácticos).

 4.REMOVE DUPLICATES

 Escribe una función que tome un array como parámetro y retorne otro array pero sin elementos duplicados.

 5.COMPARISON

 Escribe una función llamada areArraysSame que tome dos arrays como argumentos. Debe devolver verdadero si los dos arrays son iguales (es decir, tienen los mismos números, en el mismo orden) y false si son diferentes.

 6.CAJERO AUTOMÁTICO

 Crea un programa que un cajero automático pueda utilizar para determinar el número mínimo de billetes a entregar dado un monto solicitado. El cajero empieza con:

 * 100 billetes de 100
 * 50 billetes de 50
 * 200 billetes de 20
 * 300 billetes de 10
 * 500 billetes de 5
 * 800 billetes de 1
