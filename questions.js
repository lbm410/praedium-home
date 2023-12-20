let questions = [
    Toda funcion de libreria realiza una llamada al sistema
F
En UNIX (un sistema multiusuario) un proceso de usuario puede utilizar llamadas al sistema para realizar operaciones E/S de una forma sencilla, o utilizar codigo ensamblador para trabajar directamente con los puertos de E/S de los controladores de los dispositivos
F
La multiprogramación es posible debido a las interrupciones y a la existencia de unidades de procesamiento especifico para la E/S
F
El S.O. está formado por una serie de modulos software y hardware
F
Algunas llamadas al sistema no implican la ejecución de codigo del S.O.
F
En un S.O. multiusuario los procesos de usuario pueden inhibir las interrupciones, pero no lo suelen hacer, pues podrian paralizar el sistema
F
Los procesos de usuario pueden desactivar las interrupciones, pues se ejecutan en modo usuario
F
En modo supervisor no es posible realizar operaciones de E/S
F
En los sistemas operativos que se estructuran siguiendo el modelo cliente-servidor el sistema operativo controla la comunicacion entre servidores y clientes. Funciones tradicionales del sistema operativo, como el sistema de ficheros, se implementan como procesos de usuario.
V
El codigo de un sistema operativo (como UNIX) es siempre el mismo, independientemente del ordenador sobre el que se ejecute
F
A lo largo de la evolución historica de los sistemas operativos se ha ido proporcionando una maquina virtual mas facil de utilizar, siempre a costa de una utilizacion menor de la CPU
F
Los canales y las interrupciones permiten la superposicion de las E/S con el procesamiento de instrucciones por la CPU
V
El interprete de ordenes es un programa del S.O.
V
Los interpretes de ordenes son programas que no tienen por que realizar llamadas al sistema
F
Una de las misiones del S.O. multiusuario es proteger los procesos y ficheros de un usuario de las acciones del resto de los usuarios
V
Los editores se ejecutan en modo supervisor con total acceso al hardware del ordenador
F
Desde el interior de los programas, los servicios del sistema operativo se solicitan realizando llamadas al sistema
V
Debido a que una llamada al sistema implica utilizar instrucciones ensamblador, en C existen una o varias rutinas de biblioteca por cada llamada al sistema que aislan el codigo de la realizacion de la llamada
V
Las ordenes internas de un S.O. llevan asociadas un fichero ejecutable en disco
F
Los procesos de usuario tienen acceso a los puertos de E/S del controlador de la impresora
F
Cuando un proceso realiza una operacion WAIT sobre un semaforo se bloquea
F
El mecanismo de semaforos satisface las necesidades de comunicacion y sincronizacion
F
En el sistema de designacion directa de mensajes el emisor y el receptor trabajan sobre buzones
F
Un fichero de solo lectura es un recurso compartible
V
La solucion al problema de la exclusion mutua utilizando semaforos tiene la ventaja de que no se pierde tiempo de CPU en realizar espera ocupada
V
El hecho de que dos procesos quieran leer concurrentemente una misma zona de memoria plantea un problema de exclusion mutua
F
Las operaciones WAIT y SIGNAL se realizan de forma indivisible
V
Varios procesos pueden estar ejecutando simultaneamente los procedimientos definidos en un monitor
F
Para realizar una operacion sobre semaforos es necesario realizar una llamada al sistema
V
En modo supervisor no es posible realizar operaciones de E/S
F
Una de las misiones de un S.O. multiusuario es proteger a los procesos y ficheros de un usuario de la accion de los usuarios restantes
V
El paso de mensajes permite la comunicacion entre procesos
V
Los interbloqueos (deadlock) no pueden ocurrir cuando hay tres procesos ejecutandose concurrentemente
F
La instruccion TSL no se puede utilizar para implementar la exclusion mutua en un sistema formado por varios procesadores y una memoria principal comun
F
Un Sistema Operativo solo gestiona los recursos no compartibles de un ordenador
F
Un archivo con permisos de solo lectura puede ser un recurso compartible
V
Una seccion critica puede ser un archivo
F
Un semaforo se puede inicializar a un valor negativo
F
El paso de mensajes se pueden utilizar para la sincronizacion y comunicacion entre procesos
V
Una variable de condicion es igual que un semaforo
F
"Espera ocupada" significa que un proceso que esta bloqueado a la espera de entrar en su seccion critica no consume tiempo de CPU
F
Dentro de un monitor tan solo puede haber un proceso activo
V
Una operacion WAIT sobre un semáforo no debe ocurrir dentro de una seccion critica controlada por dicho semaforo que que se producira un interbloqueo
V
Un semaforo binario solo se puede utilizar cuando el numero maximo de procesos es 2
F
Un proceso del sistema puede desactivar las interrupciones
F
Todo el software de un S.O. se encuentra en el nucleo de un S.O.
F
Una operacion SIGNAL siempre desbloquea a un proceso
F
Hay sistemas operativos modernos que no tienen API
F
Una señal no es lo mismo que una interrupcion
V
Una tuberia es un mecanismo de comunicacion con almacenamiento
V
En una tuberia puede haber multiples procesos lectores pero un solo proceso escritor
V
Una condicion de carrera puede provocar un interbloqueo
F
En un S.O. multiusuario los procesos de usuario no pueden inhubir las interrupciones pues podrian paralizar el sistema
V
El hardware de un sistema informático no forma parte del S.O. que esté utilizando dicho sistema
V
Los procesos de usuario no pueden tener acceso a los puertos de E/S del controlador de la impresora
V
Los procesos de usuario no pueden desactivar las interrupciones porque se ejecutan en modo usuario
V
Una operacion WAIT sobre un semaforo siempre bloquea al proceso que ha ejecutado dicha operacion
F
Un archivo de lectura/escritura es un recurso compartible
F
Una ventaja de la solución al problema de la exclusion mutua utilizando semaforos es que no se pierde tiempo de CPU en realizar espera ocupada
V
El hecho de que dos procesos quieran leer concurrentemente una misma zona de memoria plantea un problema de exclusion mutua
F
La operacion WAIT se ejecuta de forma indivisible. Para la operacion SIGNAL no es necesario
F
Dos procesos no pueden estar ejecutando simultaneamente los procedimientos definidos en un monitor
V
Para realizar una operacion sobre semaforos es necesario realizar una llamada al sistema
V
En modo supervisor no es posible realizar operaciones de E/S
F
Una de las misiones de un S.O. multiusuario es proteger a los procesos y ficheros de un usuario de la accion de los usuarios restantes
V
El paso de mensajes no permite la comunicacion entre procesos
F
¿Es cierto que pueden existir procesos con mayor prioridad que el planificador (scheduler) a corto plazo?
F
Un marco de pagina puede tener más espacio que una pagina virtual
F
El planificador (scheduler) a corto plazo determina cual será el proximo proceso que entrara en ejecucion
V
Una de las condiciones para que se produzca un interbloqueo es que intervengan recursos no compartibles del sistema
V
La memoria virtual paginada es mas facil de gestionar por parte de un sistema operativo que la multiprogramacion con particiones variables
V
Los segmentos de memoria virtual segmentada son generados por el hardware del ordenador
F
La planificacion apropiada permite que un proceso de usuario se apropie de la CPU asignada a otro proceso de menor prioridad
V
Suponga que ejecutamos 100 procesos en un ordenador. ¿Es cierto que el algoritmo de planificacion SJF llamaria mas veces al despachador (dispatcher) que el algoritmo FIFO?
F
¿Es cierto que los procesos bloqueados no se desbloquean en orden de prioridad?
V
Para prevenir los interbloqueos no es necesario imponer restricciones a los procesos
F
La condicion de Coffman de "retener y esperar" indica que los procesos que retienen recursos asignados pueden demandar nuevos recursos
V
La memoria virtual tiene el mismo tamaño que la memoria principal
F
¿Es cierto que los procesos solo pueden bloquearse debido a operaciones de Entrada/Salida?
F
La imagen de un proceso esta formada por la imagen de memoria de un proceso y los atributos de un proceso
V
Un hilo no puede ser planificado por un sistema operativo
F
Dado 2 paginas (P1 y P2) de un proceso. La pagina P1 ha sido usada mucho por el proceso, mientras que la pagina P2 ha sido usada menos pero, sin embargo, P2 ha sido referenciada mas recientemente que P1. El algoritmo LRU reemplazara la pagina P2, ¿verdad?
F
El algoritmo de envejecimiento (aging) es util para implementar una politica de carga de paginas anticipatoria
V
La Unidad de gestion de memoria (MMU) transforma una direccion virtual en una direccion real
V
La compactacion se utiliza para eliminar la fragmentacion externa
V
Un proceso que causa Faltas de paginas cada pocas instrucciones se dice que se encuentra azotado
V
¿Es cierto que los procesos solo pueden bloquearse debido a operaciones de Entrada/Salida?
F
La memoria virtual paginada puede producir fragmentacion externa de los procesos
F
Para prevenir los interbloqueos es necesario imponer restricciones a los procesos
V
Los algoritmos con prioridades dinamicas reducen las prioridades de los procesos que hacen uso de la CPU
V
En un sistema de memoria segmentada, todos los segmentos de un proceso son del mismo tamaño
F
La cabecera de un archivo ejecutable contiene una palabra "magica" para identificar a dicho archivo como "ejecutable"
V
La imagen de un proceso esta formada por la imagen de memoria de un proceso y los atributos de un proceso
V
un cambio de proceso siempre provoca un cambio de contexto
V
La planificacion apropiativa permite que el sistema operativo pueda apropiarse de la CPU siempre que lo crea oportuno
V
Dado 2 paginas (P1 y P2) de un proceso. La pagina P1 ha sido refereniada recientemente pero no modificada. La pagina P2 fue modificada hace mucho tiempo. El algoritmo NRU reemplazara la pagina P2, ¿verdad?
V
Cuando se utiliza una politica de carga de paginas local, si un proceso necesita sustituir una pagina, el sistema operativo elegira la pagina menos usada examinando las paginas de todos los procesos
F
La politica de obtencion determina donde se coloca un proceso, o la parte que necesita un proceso, en memoria principal
F
La memoria virtual utiliza un esquema de asignacion de almacenamiento contiguo
F
En un sistema de monoprogramacion, en un momento dado existen varios procesos en un estado intermedio entre su inicio y fin
F
La ocurrencia de una interrupcion provoca un cambio de proceso
F
En un S.O. de tiempo compartido varios programas de usuario pueden estar ejecutando un mismo programa, por ejemplo, un interprete de ordenes. El S.O. mantendra un unico proceso para gestionar las distintas ejecuciones
F
Cuando se produce una interrupcion de reloj normalmente se produce un cambio de proceso
V
En un S.O. de tiempo compartido, dado un intervalo de tiempo largo, pongamos 10 segundos, en algun momento la CPU habrá ejecutado instrucciones pertenecientes al S.O.
V
En un sistema operativo con hilos, el numero de estos puede ser inferior, igual o superior al numero de procesos del sistema
F
Un proceso que agota su cuanto pasa a estado bloqueado
F
La actuacion sobre un semaforo puede acarrear la activacion del dispatcher
V
En el entorno volatil de un descriptor de proceso se almacenan las variables locales del proceso
F
La realizacion de una llamada al sistema implica la transferencia del control de la CPU al S.O.
V
Ante una interrupcion el S.O. se encarga de salvar el contador de programa
V
La ocurrencia de una interrupcion implica un cambio de contexto
V
Existe un descriptor de proceso para cada controlador
F
Existe una operacion sobre semaforos que permite leer su contenido
F
Cuando finaliza una operacion de E/S de un proceso, este pasa del estado bloqueado al de ejecucion
F
El dispatcher elige entre todos los procesos cual es el siguiente al que se le asigna la CPU
F
Un proceso puede pasar de un estado bloqueado a un estado terminado
V
El numero de procesos bloqueados siempre ha de ser menor al numero de procesos listos
F
El tamaño de la Imagen de memoria de un proceso puede variar de tamaño
V
En el modelo de 3 estados de procesos (listo, bloqueado y en ejecucion), de las 4 transiciones de estado posibles, solo hay una iniciada por el proceso de usuario, la de en ejecucion a listo
F
El algoritmo "El trabajo mas corto primero" (Shortest Job First) necesita conocer los tiempos de ejecucion de los procesos para su planificacion
V
Un S.O. en tiempo compartido no agota el cuantum de tiempo asignado a un proceso si este realiza una operacion de E/S
V
la planificacion apropiativa permite que un proceso sea suspendido en un estdo arbitrario
V
Los algoritmos con prioridades estaticas reducen las prioridades de los procesos con cada cuantum de tiempo
F
A los procesos limitados por operaciones de E/S el Scheduler debe asignarles la menor prioridad para que no se produzcan demasiadas interrupciones
F
El Scheduler se activa solo cuando se termina un proceso o cuando llega un nuevo proceso
F
Un cuantum de tiempo muy pequeño aumenta la eficiencia de la CPU
F
La planificacion apropiativa permite que un proceso de usuario se apropie de la CPU asignada a otro proceso de menor prioridad
F
El trabajo mas corto primero (Shortest Job First) es apropiado para sistemas batch
V
El scheduler es el modulo del S.O. que asigna la CPU al proceso con mayor prioridad
F
El scheduler es el modulo del S.O. que establece la politica de asignacion de los procesos centrales
V
Puede ser posible diseñar algoritmos que permitan trabajar con prioridades y con planificacion Round Robin de peticiones
V
Para prevenir los interbloqueos no es necesario imponer restricciones a los procesos
F
Para detectar los interbloqueos, el sistema debe monitorizar las demandas/liberaciones de recursos
V
El algoritmo del banquero considera cada demanda sobre un recurso disponible y analiza si su concesion conduce a un estado seguro
V
El espacio de intercambio del disco (swap) es un recurso limitado susceptible de generar un interbloqueo
V
El algoritmo del banquero es facil de implementar ya que los procesos normalmente conocen por adelantado sus necesidades maximas de recursos
F
una situacion insegura en el algoritmo del banquero llevara siempre a un interbloqueo
F
una de las condiciones para que se produzca un interbloqueo es que intervengan recursos compartibles del sistema
F
La tecnica de swapping se puede utilizar en un sistema de memoria virtual
V
En un sistema de memoria con segmentacion, la division en segmentos es tarea del programador
V
La politica de carga de paginas por demanda prevee el comportamiento futuro del proceso
F
El algoritmo NRU (Not Recently Used) tiene en cuenta el factor tiempo en el momento de seleccionar la pagina que ha de ser reemplazada
F
El conjunto de trabajo se utiliza para politicas de carga por demanda
F
La memoria virtual puede ser del mismo tamaño que la memoria principal
F
La tecnica de swapping se puede utilizar en sistemas de multiprogramacion con particiones fijas absolutas
F
Si se intenta usar una direccion virtual son correspondencia en MP, la MMU envia un error al SO
F
La MMU es el dispisitivo hardware encargado de obtener una direccion virtual a partir de una direccion real de la MP
F
Un sistema de memoria virtual siempre trabaja con paginacion
F
Para optimizar el suo de la memoria es posible que varios procesos compartan codigo situado en una unica zona de memoria
V
En un sistema de memoria con paginacion, las paginas de datos pueden ser de mayor tamaño que las paginas de codigo
F
Un disco duro es un dispositvo de tipo caracter
F
Pueden estar ejecutandose mas de un driver para el mismo dispositivo de E/S
F
El tiempo de busqueda depende de la posicion de la cabeza de lectura/grabacion dentro de una pista
F
El algoritmo de planificacion del brazo FCFS es aceptable cuando la carga de un disco es ligera
V
Existe una parte del software de E/S que no pertenece al SO
V
Los controladores se comunican con la CPU mediante unos registros especiales que en algunos sistemas son direcciones de memoria
V
Los drivers son las unicas partes de un SO que conocen las pecualiaridades de los dispositivos
V
Cuando el DMA esta ejecutandose, la CPU no puede acceder a la MP
V
No es posible que se produzcan errores en los controladores de los dispositivos
F
Los unicos factores que influyen en el acceso a disco son el tiempo de busqueda y el retraso rotacional
V
Todos los perifericos trabajan con la misma representacion de datos
F
El algoritmo SSF (Shortest Seek First) se planificacion del brazo del disco, en situaciones de cargas pesadas discrimina los cilindros externos
V
El software de E/S independiente de los dispositivos es el que establece mecanismos de proteccion en el acceso a los dispositovos
V
Las tecnicas de spooling permiten tratar dispositivos dedicados en sistemas multiprogramacion
V
Los drivers o manejadores de dispositivos son los unicos modulos del SO que utilizan los registros del controlador
V
El driver del dispositivo se bloquea tras haber comunicado una orden al controlador del dispositivo, siendo desbloqueado por una interrupcion de fin de operacion
F
El factor de interleave (intercalacion) nos permite almacenar mas informacion en una pista del disco
F
El factor de "interleave" debe tomarse en cuenta al formatear un disco
V
El software de E/S independiente del dispositivo es el que asigna nombres a los dispositivos y los asocia al driver adecuado
V
Un canal de E/S es un procesador independiente encargado de controlar la trasnferencia de informacion entre perifericos o entre perifericos y MP
V
En Unix, antes de utilizar un archivo hay que "abrir" el directorio donde pertenece dicho archivo
V
En Unix, para cada archivo hay un nodo-i independientemente del numero de enlaces que apunten a ese archivo
V
El problema de la FAT cuando un disco es muy grande radica en que las listas de bloques perteneientes a los archivos se almacenan separadas
F
En Unix, los nombres de los archivos se almacenan en los nodos-i
F
Las copias incrementales se pueden realizar concurrentemente con otros procesos
V
Los sistemas operativos MS DOS y UNIX cumplen la condicion de independencia del dispositivo con respecto al sistema de archivos
F
Una de las funciones del sistema de archivos es permitir el uso compartido de archivos
V
Si la gestion del espacio de disco, en un sistema de archivos, se realiza asignando bytes cosecutivos, la eficiencia del espacio disminuye frente a la eficiencia del tiempo
F
En el S.O. UNIX existe un nodo-indice para cada directorio
V
En los direccionamientos relativos de un archivo se parte del directorio raiz
F
Todos los dispositivos tienen la misma velocidad de transferencia de informacion
F
Los dispositivos clasificados como de bloque acepta o entregan un flujo de caracteres que puede ser de tamaño variable
F
Los dispositivos clasificados como de interaccion con el usuario se utilizan para porporcionar almacenamiento a los usuarios
F
Los puertos de E/S son utilizados por los drivers y los controladores de dispositivos
V
Los puertos de E/S de todos los dispositivos siempre se encuentran en la memoria principal
F
El Acceso Directo a Memoria (DMA) permite liberar la CPU de la transferencia de datos entre Memoria Principal y dispositivo y viceversa
V
A los Canales solo se pueden conectar dispositivos de disco
F
Cuando estamos construyendo un sistema operativo, las diferencias especificas de cada dispositivo se encapsulan en los manejadores de dispositivos (drivers)
V
El software de E/S independiente de los dispositivos tiene, entre sus funciones, proporcionar buffers a los dispositivos
V
El driver de un disco es el que determina el tamaño del bloque de dicho disco
F
Cada disco en un ordenador puede tener un tamaño de bloque diferente
V
Un archivo es la unidad que almacena y manipula el Sistema de archivos
V
Un enlace simbolico crea un archivo de tipo LINK
V
Un Sistema de archivos tipo FAT utiliza listas encadenadas para gestionar los bloques asignados a los archivos
V
En Unix, antes de "abrir" un archivo tienes que conocer su nodo-i
V
En los direccionamientos absolutos de un archivo se comienza la busqueda desde el directorio raiz
V
Las copias incrementales no se pueden realizar concurrentemente con otros procesos
F
Una de las funciones de muchos Sistemas de archivos es la operacion de busqueda
F
En Unix, la extension de los archivos se almacena en los nodos-i
F
La lista de bloques libres ocupa siempre menos espacio que el mapa de bits
F
Las tecnicas de Spooling pueden disminuir la ocurrencia de interbloqueos
V
Cada enlace simbolico entre distintos sistemas de archivos que utilizan nodos-i ocupa 1 bloque de disco
V
Existen perifericos que trabajan con distinta representacion de los datos
V
Los drivers y el Sofwtare de E/S independiente son los elementos de un S.O. que conocen las peculiaridades de los dispositivos
F
Las tecnicas de spooling permiten asignar prioridades a los procesos cuando manejan recursos compartibles
F
El numero del primer bloqie de un archivo en un Sistema de archivos que utiliza FAT se encuentra en la entrada de directorio asociada a dicho archivo
V
En los direccionamientos relativos de un archivo se comienza desde el directorio raiz
F
Los drivers de los dispositivos son los que establecen mecanismos de proteccion en el acceso a los dispositivos
F
Los drivers utilizan los registros de un controlador
V
Una de las funciones de muchos Sistemas de archivos es permitir el uso compartido de archivos
V
No todos los dispositivos compartibles pueden ser tratados mediante tecnicas de Spooling
V
En los sistemas informaticos actuales, todos los dispositivos se conectan al mismo bus del sistema
F
El DMA se encarga de colocar en Memoria principal la informacion que se esta leyendo del disco, tantos bytes como se le han indicado
V
Con el mismo conjunto de peticiones, el algoritmo de planificacion del brazo del disco FCFS suele ser mas rapido que el algoritmo SSF
F
Una tecnica para mejorar el uso del disco es crear una memoria cache de disco mediante un buffer situado en Memoria principal
V
Todos los dispositivos utilizan la misma unidad de transferencia
F
Todos los dispositivos tienen los mismos tipos de errores
F
Los puertos de E/S son utilizados por los drivers y los dispositivos
V
Los puertos de E/S de todos los dispositivos siempre se encuentran en memoria principal
F
Una tecnica para realizar E/S es a traves del uso de interrupciones
V
Cuando estamos construyendo un sistema operativo, las diferencias especificas de cada dispositivo se encapsulan en los manejadores de dispositivos (drivers)
V
El software de E/S independiente de los dispositivos tiene, entre sus funciones, asignar nombres a los dispositivos y asociarlos al driver adecuado
V
El software de E/S independiente de los dispositivos tiene, entre sus funciones, proporcionar buffers a los dispositivos
V
El driver de un disco es el que determina el tamaño de un bloque en dicho disco
F
Cada disco de un ordenador puede tener un tamaño de bloque diferente
V
Un Sistema de archivos tipo FAT utiliza listas encadenadas para gestionar los bloques asignados a los archivos
V
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function startTest() {
    shuffleQuestions();
    showQuestion();
}

function showQuestion() {
    const questionText = document.getElementById('question-text');
    questionText.textContent = `Pregunta: ${questions[currentQuestionIndex].text}`;
}

function answerQuestion(isTrue) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answer === isTrue) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const correctCount = document.getElementById('correct-count');
    const incorrectCount = document.getElementById('incorrect-count');
    const examStatus = document.getElementById('exam-status');

    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    correctCount.textContent = correctAnswers;
    incorrectCount.textContent = incorrectAnswers;

    if (incorrectAnswers <= 8) {
        examStatus.textContent = '¡Aprobado!';
    } else {
        examStatus.textContent = '¡Suspendido!';
    }
}
