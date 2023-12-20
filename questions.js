let questions = [
    { text: "Toda funcion de libreria realiza una llamada al sistema", answer: false },
    { text: "En UNIX (un sistema multiusuario) un proceso de usuario puede utilizar llamadas al sistema para realizar operaciones E/S de una forma sencilla, o utilizar codigo ensamblador para trabajar directamente con los puertos de E/S de los controladores de los dispositivos", answer: false },
    { text: "La multiprogramación es posible debido a las interrupciones y a la existencia de unidades de procesamiento especifico para la E/S", answer: false },
    { text: "El S.O. está formado por una serie de modulos software y hardware", answer: false },
    { text: "Algunas llamadas al sistema no implican la ejecución de codigo del S.O.", answer: false },
    { text: "En un S.O. multiusuario los procesos de usuario pueden inhibir las interrupciones, pero no lo suelen hacer, pues podrían paralizar el sistema", answer: false },
    { text: "Los procesos de usuario pueden desactivar las interrupciones, pues se ejecutan en modo usuario", answer: false },
    { text: "En modo supervisor no es posible realizar operaciones de E/S", answer: false },
    { text: "En los sistemas operativos que se estructuran siguiendo el modelo cliente-servidor el sistema operativo controla la comunicacion entre servidores y clientes. Funciones tradicionales del sistema operativo, como el sistema de ficheros, se implementan como procesos de usuario.", answer: true },
    { text: "El codigo de un sistema operativo (como UNIX) es siempre el mismo, independientemente del ordenador sobre el que se ejecute", answer: false },
    { text: "A lo largo de la evolución historica de los sistemas operativos se ha ido proporcionando una maquina virtual mas facil de utilizar, siempre a costa de una utilizacion menor de la CPU", answer: true },
    { text: "Los canales y las interrupciones permiten la superposición de las E/S con el procesamiento de instrucciones por la CPU", answer: true },
    { text: "El interprete de ordenes es un programa del S.O.", answer: true },
    { text: "Los interpretes de ordenes son programas que no tienen por que realizar llamadas al sistema", answer: false },
    { text: "Una de las misiones del S.O. multiusuario es proteger los procesos y ficheros de un usuario de las acciones del resto de los usuarios", answer: true },
    { text: "Los editores se ejecutan en modo supervisor con total acceso al hardware del ordenador", answer: false },
    { text: "Desde el interior de los programas, los servicios del sistema operativo se solicitan realizando llamadas al sistema", answer: true },
    { text: "Debido a que una llamada al sistema implica utilizar instrucciones ensamblador, en C existen una o varias rutinas de biblioteca por cada llamada al sistema que aislan el codigo de la realizacion de la llamada", answer: true },
    { text: "Las ordenes internas de un S.O. llevan asociadas un fichero ejecutable en disco", answer: false },
    { text: "Los procesos de usuario tienen acceso a los puertos de E/S del controlador de la impresora", answer: false },
    { text: "Cuando un proceso realiza una operacion WAIT sobre un semaforo se bloquea", answer: true },
    { text: "El mecanismo de semaforos satisface las necesidades de comunicacion y sincronizacion", answer: true },
    { text: "En el sistema de designacion directa de mensajes el emisor y el receptor trabajan sobre buzones", answer: true },
    { text: "Un fichero de solo lectura es un recurso compartible", answer: true },
    { text: "La solucion al problema de la exclusion mutua utilizando semaforos tiene la ventaja de que no se pierde tiempo de CPU en realizar espera ocupada", answer: true },
    { text: "El hecho de que dos procesos quieran leer concurrentemente una misma zona de memoria plantea un problema de exclusion mutua", answer: false },
    { text: "Las operaciones WAIT y SIGNAL se realizan de forma indivisible", answer: true },
    { text: "Varios procesos pueden estar ejecutando simultaneamente los procedimientos definidos en un monitor", answer: false },
    { text: "Para realizar una operacion sobre semaforos es necesario realizar una llamada al sistema", answer: true },
    { text: "En modo supervisor no es posible realizar operaciones de E/S", answer: false },
    { text: "Una de las misiones de un S.O. multiusuario es proteger a los procesos y ficheros de un usuario de la accion de los usuarios restantes", answer: true },
    { text: "El paso de mensajes permite la comunicacion entre procesos", answer: true },
    { text: "Los interbloqueos (deadlock) no pueden ocurrir cuando hay tres procesos ejecutandose concurrentemente", answer: false },
    { text: "La instruccion TSL no se puede utilizar para implementar la exclusion mutua en un sistema formado por varios procesadores y una memoria principal comun", answer: false },
    { text: "Un Sistema Operativo solo gestiona los recursos no compartibles de un ordenador", answer: false },
    { text: "Un archivo con permisos de solo lectura puede ser un recurso compartible", answer: true },
    { text: "Una seccion critica puede ser un archivo", answer: false },
    { text: "Un semaforo se puede inicializar a un valor negativo", answer: false },
    { text: "El paso de mensajes se pueden utilizar para la sincronizacion y comunicacion entre procesos", answer: true },
    { text: "Una variable de condicion es igual que un semaforo", answer: false },
    { text: "\"Espera ocupada\" significa que un proceso que esta bloqueado a la espera de entrar en su seccion critica no consume tiempo de CPU", answer: true },
    { text: "Dentro de un monitor tan solo puede haber un proceso activo", answer: true },
    { text: "Una operacion WAIT sobre un semáforo no debe ocurrir dentro de una seccion critica controlada por dicho semaforo que que se produira un interbloqueo", answer: true },
    { text: "Un semaforo binario solo se puede utilizar cuando el numero maximo de procesos es 2", answer: false },
    { text: "Un proceso del sistema puede desactivar las interrupciones", answer: false },
    { text: "Un sistema que utiliza el modelo de proceso basado en la ejecucion de procedimientos puede ser mono- o multi-usuario", answer: true },
    { text: "La segmentacion, al igual que la paginacion, permite superar el inconveniente de la limitacion del tamaño de memoria fisica por parte de la memoria RAM", answer: true },
    { text: "La segmentacion de la memoria se lleva a cabo para poder superar el inconveniente de la paginacion", answer: false },
    { text: "El espacio de direcciones de un proceso en paginacion se divide en paginas", answer: true },
    { text: "La paginacion y la segmentacion son tecnicas mutuamente excluyentes", answer: false },
    { text: "En el mecanismo de paginacion, el sistema operativo debe mantener una tabla de paginas para cada proceso", answer: true },
    { text: "El método de asignación contigua de memoria puede generar fragmentación externa", answer: true },
    { text: "La multiprogramacion permite que varios procesos se ejecuten simultaneamente", answer: true },
    { text: "En un sistema monoprogramado, el sistema operativo solo puede ejecutar un proceso a la vez", answer: true },
    { text: "Un sistema operativo es un conjunto de programas que gestionan los recursos hardware y proveen servicios a los programas de aplicación", answer: true },
    { text: "Un sistema operativo se ejecuta siempre en modo supervisor", answer: false },
    { text: "El DMA se encarga de colocar en Memoria principal la informacion que se esta leyendo del disco, tantos bytes como se le han indicado", answer: true },
    { text: "Con el mismo conjunto de peticiones, el algoritmo de planificacion del brazo del disco FCFS suele ser mas rapido que el algoritmo SSF", answer: false },
    { text: "Una tecnica para mejorar el uso del disco es crear una memoria cache de disco mediante un buffer situado en Memoria principal", answer: true },
    { text: "Todos los dispositivos utilizan la misma unidad de transferencia", answer: false },
    { text: "Las entradas/salidas mapeadas consisten en asignarle a cada dispositivo una localizacion de memoria concreta para su control", answer: true },
    { text: "Una interrupcion no permite que un S.O. multiusuario se ejecute concurrentemente", answer: false },
    { text: "Las interrupciones permiten que un proceso de usuario solicite los servicios del S.O.", answer: true },
    { text: "Si un proceso de usuario solicita los servicios del S.O. es necesario que este ultimo se detenga", answer: false },
    { text: "La proteccion se realiza mediante el uso de temporizadores que controlan el tiempo maximo de ejecucion de un proceso de usuario", answer: false },
    { text: "El codigo de un sistema operativo (como UNIX) es siempre el mismo, independientemente del ordenador sobre el que se ejecute", answer: false },
    { text: "Un disco de 100 RPM (revoluciones por minuto) tiene un tiempo de rotacion de 10 ms", answer: true },
    { text: "La unidad de transferencia (transfer unit) es el numero de bits que se leen o escriben simultaneamente del o en el dispositivo", answer: true },
    { text: "Cuando una particion de un disco tiene fragmentacion interna", answer: true },
    { text: "En un sistema monoprogamado todos los bloques libres estan enlazados entre si formando una lista", answer: false },
    { text: "En un sistema paginado, todos los bloques libres estan enlazados entre si formando una lista", answer: false },
    { text: "El paginado y la segmentacion son mutuamente excluyentes", answer: false },
    { text: "La capacidad de un disco es el numero maximo de bloques que se pueden almacenar en el", answer: true },
    { text: "El sectorizacion y el formato de bajo nivel de un disco son dos cosas diferentes", answer: false },
    { text: "Un cilindro de un disco es la pista que se encuentra directamente por encima o por debajo de la pista que ocupa el mismo radio", answer: true },
    { text: "Cuando se realiza un acceso a un disco se puede utilizar la siguiente estrategia para optimizar el tiempo de busqueda del brazo y del tiempo de rotacion: en cada interseccion de un cilindro con una pista el acceso sigue el orden determinado por el ultimo acceso", answer: false },
    { text: "Cuando se realiza un acceso a un disco se puede utilizar la siguiente estrategia para optimizar el tiempo de busqueda del brazo y del tiempo de rotacion: en cada interseccion de un cilindro con una pista el acceso sigue el orden determinado por el ultimo acceso", answer: false },
    { text: "En un sistema de particiones fijas, cuando un proceso termina su ejecucion se puede reutilizar el hueco que queda", answer: false },
    { text: "La memoria cache de un sistema multiprogramado se puede utilizar para mantener la imagen de los programas", answer: true },
    { text: "Una memoria cache no puede contener palabras de varias lineas de bloque", answer: false },
    { text: "Un buffer de disco tiene la utilidad de aumentar el rendimiento de las operaciones E/S", answer: true },
    { text: "En un sistema paginado se puede utilizar el formato de direccionamiento relativo para reducir la longitud de las direcciones fisicas", answer: false },
    { text: "La funcion de un buffer de disco es almacenar los bloques que son leidos o escritos desde o hacia el disco", answer: true },
    { text: "El formato de direccionamiento relativo se utiliza para reducir la longitud de las direcciones fisicas", answer: true },
    { text: "Un disco de 100 RPM (revoluciones por minuto) tiene un tiempo de rotacion de 6 ms", answer: false },
    { text: "Un Sistema Operativo solo gestiona los recursos no compartibles de un ordenador", answer: false },
    { text: "Un archivo con permisos de solo lectura puede ser un recurso compartible", answer: true },
    { text: "Una seccion critica puede ser un archivo", answer: false },
    { text: "Un semaforo se puede inicializar a un valor negativo", answer: false },
    { text: "El paso de mensajes se pueden utilizar para la sincronizacion y comunicacion entre procesos", answer: true },
    { text: "Una variable de condicion es igual que un semaforo", answer: false },
    { text: "\"Espera ocupada\" significa que un proceso que esta bloqueado", answer: false}
]

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
