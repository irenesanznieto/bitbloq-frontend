var conn = connect("localhost:27017/admin");
conn.auth('admin', '******');
db = conn.getSiblingDB('resmi');

db.bitbloq_ChangeLogs.remove({});

db.bitbloq_ChangeLogs.insert({"version":{"ca-ES":"Bitbloq beta v2","de-DE":"Bitbloq beta v2","en-GB":"Bitbloq beta v2","es-ES":"Bitbloq beta v2","eu-ES":"Bitbloq beta v2","fr-FR":"Bitbloq beta v2","it-IT":"Bitbloq beta v2","nl-NL":"Bitbloq beta v2","pt-PT":"Bitbloq beta v2","ru-RU":"Bitbloq beta v2","zh-CN":"Bitbloq beta v2"},"content":[{"es-ES":"Sustituimos blockly por nuestra propia librería \"Bloqs\"","zh-CN":"我们把Blocky更换成\"Bloqs\""},{"es-ES":"Sustituimos la Chrome App con nuestra aplicación nativa Web2board","zh-CN":"我们把Chrome App更换成我们的本机Web2board 应用程序"},{"es-ES":"Mejoras de usabilidad","zh-CN":"改进可用性"},{"es-ES":"Sustituimos backbone y marionette.js por AngularJS","zh-CN":"我们把backbone和marionette.js更换成AngularJS "},{"es-ES":"Compilación del código en cliente","zh-CN":"编译客户端代码"},{"es-ES":"Detección automática de puerto","zh-CN":"自动检测端口"},{"es-ES":"Monitor serie","zh-CN":"显示器系列"},{"es-ES":"Introducida sección de ayuda","zh-CN":"已经加入帮忙部门"},{"es-ES":"Sección de Hardware visual gracias a ProtoBoLa.js","zh-CN":"硬件视觉部门谢谢ProtoBoLa.js"},{"es-ES":"Mejora del login","zh-CN":"改进登录"}],"order":1});db.bitbloq_ChangeLogs.insert({"version":{"ca-ES":"Bitbloq beta v2.0.7","de-DE":"Bitbloq beta v2.0.7","en-GB":"Bitbloq beta v2.0.7","es-ES":"Bitbloq beta v2.0.7","eu-ES":"Bitbloq beta v2.0.7","fr-FR":"Bitbloq beta v2.0.7","it-IT":"Bitbloq beta v2.0.7","nl-NL":"Bitbloq beta v2.0.7","pt-PT":"Bitbloq beta v2.0.7","ru-RU":"Bitbloq beta v2.0.7","zh-CN":"Bitbloq beta v2.0.7"},"content":[{"es-ES":"Arreglos de maquetación","zh-CN":"安排布局"},{"es-ES":"Revisar recuperación de contraseña","zh-CN":"密码恢复修改"},{"es-ES":"Actualizar FAQ's","zh-CN":"更新常见问题解答"},{"es-ES":"Resueltos problemas al actualizar web2board en Mac OS X","zh-CN":"已经解决web2board 更新到Mac OS X 问题了"},{"es-ES":"Mejoras en las alertas","zh-CN":"警报改进"},{"es-ES":"Nuevos bloques con clases","zh-CN":"与类新块"},{"es-ES":"Página de navegador o dispositivo no compatible detectado","zh-CN":"未检测到页面浏览器或设备"},{"es-ES":"Temas: ahora los usuarios pueden elegir tema de colores para bloqs","zh-CN":"主题：现在用户可以选择bloqs颜色"}],"order":2});db.bitbloq_ChangeLogs.insert({"version":{"ca-ES":"Bitbloq beta v2.0.8","de-DE":"Bitbloq beta v2.0.8","en-GB":"Bitbloq beta v2.0.8","es-ES":"Bitbloq beta v2.0.8","eu-ES":"Bitbloq beta v2.0.8","fr-FR":"Bitbloq beta v2.0.8","it-IT":"Bitbloq beta v2.0.8","nl-NL":"Bitbloq beta v2.0.8","pt-PT":"Bitbloq beta v2.0.8","ru-RU":"Bitbloq beta v2.0.8","zh-CN":"Bitbloq beta v2.0.8"},"content":[{"es-ES":"¡ Compartir con usuarios ! Ya puedes compartir tus proyectos a determinados usuarios escribiendo su email.","zh-CN":"与用户分享！从现在开事你可以共享你的项目给特定用户通过输入他们的电子邮件。"},{"es-ES":"¡ Nuevo entorno de desarrollo ! Ya puedes, desde un proyecto de bloques, programar en un entorno de desarrollo para Arduino con autocompletado, atajos de teclado y otras mejoras que te harán más fácil programar el código.","zh-CN":"新的开发环境！你可以在Arduino的程序开发环境更容易对代码进行编程, 运用自动完成，快捷键和其它改进。"},{"es-ES":"Web2board actualizado, corregidos errores en la instalación y serial monitor ya esta disponible en MAC.","zh-CN":"已经更新Web2board, 纠正安装错误和在Mac上加入系列显示器。"},{"es-ES":"Mejora en la búsqueda del explora con la inclusión de filtros.","zh-CN":"因为列入过滤器,所以改进搜索。"}],"order":3});db.bitbloq_ChangeLogs.insert({"version":{"ca-ES":"Bitbloq v2.1.0","de-DE":"Bitbloq v2.1.0","en-GB":"Bitbloq v2.1.0","es-ES":"Bitbloq v2.1.0","eu-ES":"Bitbloq v2.1.0","fr-FR":"Bitbloq v2.1.0","it-IT":"Bitbloq v2.1.0","nl-NL":"Bitbloq v2.1.0","pt-PT":"Bitbloq v2.1.0","ru-RU":"Bitbloq v2.1.0","zh-CN":"Bitbloq v2.1.0"},"content":[{"es-ES":"Acaba la fase Beta de la nueva versión de Bitbloq. Ahora que ya es estable, llega para quedarse.","zh-CN":"完成Bitbloq新版本测试阶段。现在它是稳定的。"},{"es-ES":"Hemos mejorado muchos cosas, sobre todo gracias a vuestras respuestas y comentarios. Poco a poco estamos intentado ser 100% compatible con Firefox, esperamos que pronto podamos asegurar que está certificado con Firefox.","zh-CN":"我们已经改善很多东西了,感谢你的答案和评论。渐渐地我们会与Firefox100％兼容,我们希望不久我们能确保与Firefox浏览器该证书。"},{"es-ES":"Nuevas traducciones. Queremos que Bitbloq sea una herramienta global, y para ello estamos traduciendo la aplicación a Inglés, Alemán, Francés, Portugués, Ruso, Catalán, Euskera, italiano y Neerlandés","zh-CN":"新翻译。我们希望Bitbloq是一个全球性的工具。因此，我们正在翻译到英语，德语，法语，葡萄牙语，俄语，加泰罗尼亚语，巴斯克语，意大利语和荷兰语"}],"order":4});db.bitbloq_ChangeLogs.insert({"version":{"es-ES":"Bitbloq v2.1.1","zh-CN":"Bitbloq v2.1.1"},"content":[{"es-ES":"Tenemos un nuevo botón para descargar todos tus proyectos. Lo encontrarás en el apartado de \"Mis proyectos\".","zh-CN":"我们有一个下载所有项目的新按钮。它在“我的项目”。"},{"es-ES":"Hemos solucionado el error que provocaba que a veces los bloques no se quisieran mover.","zh-CN":"我们已经解决有时会导致块不动的错误。"},{"es-ES":"Ahora cuando te comparten un proyecto de código, desde el IDE podrás hacerte una copia para poder modificarlo y guardarlo.","zh-CN":"从现在开始当您从IDE中共享项目的代码，你可以编辑和存储一个副本。"},{"es-ES":"Arreglado el error del bloque avanzado de componentes, que provocaba que no reflejara los cambios realizados después de colocarlo en el entorno de trabajo.","zh-CN":"修正块先进元器件的错误,从而导致不能反映放置在工作环境中后所做的更改。"},{"es-ES":"Ya tenemos los nuevos idiomas disponibles. Estamos preparando aún más para que el idioma no sea un problema para acercarte a la tecnología.","zh-CN":"我们已经有新的语言。为了让语言不是接近技术的问题,我们正在准备更多语言。"},{"es-ES":"El enlace de Web2Board en Mac de la página de descargas ya está arreglado.","zh-CN":"在Mac的Web2Board下载页面链接已经解决了。"},{"es-ES":"Hemos cambiado el color de los desplegables para que sean más fáciles de leer.","zh-CN":"为了更容易阅读下拉列表,我们已经改变他的颜色。"}],"order":5});db.bitbloq_ChangeLogs.insert({"version":{"ca-ES":"Bitbloq v2.1.2","de-DE":"Bitbloq v2.1.2","en-GB":"Bitbloq v2.1.2","es-ES":"Bitbloq v2.1.2","eu-ES":"Bitbloq v2.1.2","fr-FR":"Bitbloq v2.1.2","it-IT":"Bitbloq v2.1.2","nl-NL":"Bitbloq v2.1.2","pt-PT":"Bitbloq v2.1.2","ru-RU":"Bitbloq v2.1.2","zh-CN":"Bitbloq v2.1.2"},"content":[{"es-ES":"Hemos actualizado Web2Board en Windows para que funcione correctamente en las versiones de 32 y 64 bits."},{"es-ES":"Nuevo modal de profesor, en el cual preguntamos el rol que desempeña el usuario."},{"es-ES":"Nuevo apartado en registro para saber si el usuario es un profesor."},{"es-ES":"La búsqueda de explora ahora se realizarán según el nombre del proyecto y el nombre del usuario."},{"es-ES":"Mejora de los filtros en explora para que un usuario pueda compartir su búsqueda."},{"es-ES":"Mejoras a la hora de importar un proyecto."}],"order":6});db.bitbloq_ChangeLogs.insert({"version":{"es-ES":"Bitbloq v2.1.3"},"content":[{"es-ES":"Arreglado el error que provocaba que no se guardase en los desplegables una variable renombrada."},{"es-ES":"Ahora desde la sección de \"Tu cuenta\" puedes indicar si eres un profesor o si quieres recibir todas las notificaciones que enviemos desde Bitbloq."},{"es-ES":"Arreglado el error que provocaba que al cargar un proyecto a veces no cargase bien los desplegables de componentes hardware."},{"es-ES":"¡ Zowi está aquí ! Selecciónalo en la pestaña de hardware, en el apartado de \"Robots\" y utiliza los nuevos bloques para darle vida, que se marque un baile o programarlo directamente con código Arduino."},{"es-ES":"Nuevos componentes del Zum Extension Kit añadidos. Ahora tenéis disponibles el Reloj de Tiempo Real para obtener la fecha y hora actuales, el Led RGB para poder cambiar los colores mediante código de tu led, el Encoder para medir ángulos, el sensor de Humedad y Temperatura para crear tu primera estación medioambiental , el Final de Carrera para detectar colisiones y el sensor de sonido para detectar ruidos.\n\n¡Añádelos a tu robot o proyecto!"}],"order":7});

db.bitbloq_Properties.remove({});
db.bitbloq_Properties.insert(
{"web2boardVersion":"1.0.0","bitbloqLibsVersion":"0.0.3","bloqsSortTree":{"components":[{"name":"hts221Temperature","addClass":"submenu__item submenu__item--component"},{"name":"hts221Humidity","addClass":"submenu__item submenu__item--component"},{"name":"buzzer","addClass":"submenu__item submenu__item--component"},{"name":"continuousServoStart","addClass":"submenu__item submenu__item--component"},{"name":"continuousServoStop","addClass":"submenu__item submenu__item--component"},{"name":"lcdTurnOnOff","addClass":"submenu__item submenu__item--component"},{"name":"lcdWrite","addClass":"submenu__item submenu__item--component"},{"name":"lcdWritePosition","addClass":"submenu__item submenu__item--component"},{"name":"lcdClear","addClass":"submenu__item submenu__item--component"},{"name":"led","addClass":"submenu__item submenu__item--component"},{"name":"rgbLedSimple","addClass":"submenu__item submenu__item--component"},{"name":"rgbLed","addClass":"submenu__item submenu__item--component"},{"name":"rgbLedFade","addClass":"submenu__item submenu__item--component"},{"name":"clockRTCInit","addClass":"submenu__item submenu__item--component"},{"name":"clockRTC","addClass":"submenu__item submenu__item--component"},{"name":"clockRTCAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"oscillator","addClass":"submenu__item submenu__item--component"},{"name":"oscillatorTimes","addClass":"submenu__item submenu__item--component"},{"name":"oscillatorStart","addClass":"submenu__item submenu__item--component"},{"name":"oscillatorStop","addClass":"submenu__item submenu__item--component"},{"name":"readSensor","addClass":"submenu__item submenu__item--component"},{"name":"servoNormal","addClass":"submenu__item submenu__item--component"}],"advancedComponents":[{"name":"hwVariable","addClass":"submenu__item submenu__item--component"},{"name":"buzzerAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"continuousServoStartAdvanced-v1","addClass":"submenu__item submenu__item--component"},{"name":"continuousServoStopAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"lcdTurnOnOffAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"lcdWriteAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"ledAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"rgbLedAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"oscillatorAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"oscillatorStartAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"oscillatorStopAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"digitalReadAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"analogReadAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"analogWrite","addClass":"submenu__item submenu__item--component"},{"name":"digitalWrite","addClass":"submenu__item submenu__item--component"},{"name":"readAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"servoNormalAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"turnOnOffAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"lcdWritePositionAdvanced-v1","addClass":"submenu__item submenu__item--component"}],"functions":[{"name":"voidFunction","addClass":"submenu__item submenu__item--component"},{"name":"invokeFunction","addClass":"submenu__item submenu__item--component"},{"name":"returnFunction","addClass":"submenu__item submenu__item--component"},{"name":"invokeReturnFunction","addClass":"submenu__item submenu__item--component"}],"advancedFunctions":[{"name":"voidFunctionWithArguments","addClass":"submenu__item submenu__item--component"},{"name":"invokeFunctionWithArguments","addClass":"submenu__item submenu__item--component"},{"name":"returnFunctionWithArguments","addClass":"submenu__item submenu__item--component"},{"name":"invokeReturnFunctionWithArguments","addClass":"submenu__item submenu__item--component"},{"name":"argument","addClass":"submenu__item submenu__item--component"},{"name":"arguments","addClass":"submenu__item submenu__item--component"},{"name":"return","addClass":"submenu__item submenu__item--component"}],"variables":[{"name":"declareVariable","addClass":"submenu__item submenu__item--component"},{"name":"selectVariable","addClass":"submenu__item submenu__item--component"},{"name":"setVariable","addClass":"submenu__item submenu__item--component"},{"name":"arrayVariable","addClass":"submenu__item submenu__item--component"},{"name":"setArrayVariable","addClass":"submenu__item submenu__item--component"}],"advancedVariables":[{"name":"arrayVariableAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"setArrayVariableAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"declareVariableAdvanced","addClass":"submenu__item submenu__item--component"}],"codes":[{"name":"comment","addClass":"submenu__item submenu__item--component"},{"name":"code","addClass":"submenu__item submenu__item--component"}],"classes":[{"name":"class","addClass":"submenu__item submenu__item--component"},{"name":"invokeClass","addClass":"submenu__item submenu__item--component"},{"name":"constructorClass","addClass":"submenu__item submenu__item--component"},{"name":"invokeClassFunction","addClass":"submenu__item submenu__item--component"},{"name":"invokeClassReturnFunction","addClass":"submenu__item submenu__item--component"},{"name":"setClassVariable","addClass":"submenu__item submenu__item--component"},{"name":"selectClassVariable","addClass":"submenu__item submenu__item--component"}],"advancedClasses":[{"name":"classChildren","addClass":"submenu__item submenu__item--component"},{"name":"constructorClassArguments","addClass":"submenu__item submenu__item--component"},{"name":"invokeArgumentsClass","addClass":"submenu__item submenu__item--component"},{"name":"public","addClass":"submenu__item submenu__item--component"},{"name":"protected","addClass":"submenu__item submenu__item--component"},{"name":"private","addClass":"submenu__item submenu__item--component"},{"name":"invokeClassFunctionWithArguments","addClass":"submenu__item submenu__item--component"},{"name":"invokeClassReturnFunctionWithArguments","addClass":"submenu__item submenu__item--component"},{"name":"arrayClassVariable","addClass":"submenu__item submenu__item--component"},{"name":"setClassArrayVariable","addClass":"submenu__item submenu__item--component"}],"mathematics":[{"name":"number","addClass":"submenu__item submenu__item--component"},{"name":"numberArray","addClass":"submenu__item submenu__item--component"},{"name":"basicOperations","addClass":"submenu__item submenu__item--component"},{"name":"mathOperations","addClass":"submenu__item submenu__item--component"},{"name":"map","addClass":"submenu__item submenu__item--component"},{"name":"randomSeed","addClass":"submenu__item submenu__item--component"},{"name":"random","addClass":"submenu__item submenu__item--component"}],"advancedMathematics":[{"name":"numberArrayAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"mapAdvanced","addClass":"submenu__item submenu__item--component"}],"texts":[{"name":"string","addClass":"submenu__item submenu__item--component"},{"name":"stringArray","addClass":"submenu__item submenu__item--component"},{"name":"length","addClass":"submenu__item submenu__item--component"},{"name":"stringCreate","addClass":"submenu__item submenu__item--component"},{"name":"stringSum","addClass":"submenu__item submenu__item--component"}],"advancedText":[{"name":"stringArrayAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"char","addClass":"submenu__item submenu__item--component"}],"controls":[{"name":"wait","addClass":"submenu__item submenu__item--component"},{"name":"millis","addClass":"submenu__item submenu__item--component"},{"name":"if","addClass":"submenu__item submenu__item--component"},{"name":"elseif","addClass":"submenu__item submenu__item--component indent-1"},{"name":"else","addClass":"submenu__item submenu__item--component indent-1"},{"name":"switch","addClass":"submenu__item submenu__item--component"},{"name":"case","addClass":"submenu__item submenu__item--component indent-1"},{"name":"caseDefault","addClass":"submenu__item submenu__item--component indent-1"},{"name":"for-v1","addClass":"submenu__item submenu__item--component"},{"name":"while","addClass":"submenu__item submenu__item--component"},{"name":"continue","addClass":"submenu__item submenu__item--component indent-1"},{"name":"break","addClass":"submenu__item submenu__item--component indent-1"}],"advancedControls":[{"name":"waitAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"ifAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"elseifAdvanced","addClass":"submenu__item submenu__item--component indent-1"},{"name":"else","addClass":"submenu__item submenu__item--component indent-1"},{"name":"forAdvanced-v1","addClass":"submenu__item submenu__item--component"},{"name":"switchAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"case","addClass":"submenu__item submenu__item--component indent-1"},{"name":"caseDefault","addClass":"submenu__item submenu__item--component indent-1"},{"name":"whileAdvanced","addClass":"submenu__item submenu__item--component"},{"name":"continue","addClass":"submenu__item submenu__item--component indent-1"},{"name":"break","addClass":"submenu__item submenu__item--component indent-1"}],"logics":[{"name":"boolean","addClass":"submenu__item submenu__item--component"},{"name":"boolArray","addClass":"submenu__item submenu__item--component"},{"name":"not","addClass":"submenu__item submenu__item--component"},{"name":"equalityOperations","addClass":"submenu__item submenu__item--component"},{"name":"logicOperations","addClass":"submenu__item submenu__item--component"}],"communications":[{"name":"serialReceive","addClass":"submenu__item submenu__item--component"},{"name":"serialSend-v1","addClass":"submenu__item submenu__item--component"}],"zowi":[{"name":"zowiHome","addClass":"submenu__item submenu__item--component"},{"name":"zowiMovementsSimple","addClass":"submenu__item submenu__item--component"},{"name":"zowiGestures","addClass":"submenu__item submenu__item--component"},{"name":"zowiMouth","addClass":"submenu__item submenu__item--component"},{"name":"zowiSounds","addClass":"submenu__item submenu__item--component"},{"name":"zowiDistance","addClass":"submenu__item submenu__item--component"},{"name":"zowiSound","addClass":"submenu__item submenu__item--component"}],"advancedZowis":[{"name":"zowiMovements","addClass":"submenu__item submenu__item--component"},{"name":"zowiMovementsHeight","addClass":"submenu__item submenu__item--component"},{"name":"zowiMovementsNoDir","addClass":"submenu__item submenu__item--component"}]}});

db.bitbloq_Faqs.remove({});

db.bitbloq_Faqs.insert({"title":{"ca-ES":"Què és Bitbloq?","de-DE":"Was ist Bitbloq?","en-GB":"What is Bitbloq?","es-ES":"¿Qué es Bitbloq?","eu-ES":"Zer da bitbloq?","fr-FR":"Bitbloq, quésaco ?","it-IT":"Che cos'è Bitbloq?","pt-PT":"O que é o Bitbloq?","ru-RU":"Что такое Bitbloq?","zh-CN":"Bitbloq是什么?"},"content":{"ca-ES":"Bitbloq és una eina en línia que permet crear programes per a un microcontrolador i carregar-los dins d'aquest de forma senzilla i sense necessitat de tenir coneixements de programació.","de-DE":"Bitbloq ist ein Online-Tool, mit dem auf einfache Art und Weise und ohne unbedingt Programmierkenntnisse zu besitzen, Programme für einen Mikrocontroller erstellt und in diesem geladen werden können.","en-GB":"Bitbloq is an online tool that allows you to create programs for a microcontroller and load them onto it easily.","es-ES":"Bitbloq es una herramienta online que permite crear programas para un microcontrolador y cargarlos en el mismo de forma sencilla y sin tener necesariamente conocimientos de programación.","eu-ES":"bitbloq mikrokontrolagailu batentzako programak modu errazean eta programatzen jakin gabe sortu eta hartan kargatzea ahalbidetzen duen interneteko tresna da. ","fr-FR":"Bitbloq est un outil en ligne qui te permet de créer des programmes et de les charger facilement sur une carte contrôleur. Le tout sans connaissances préalables.","it-IT":"Bitbloq è uno strumento che consente di creare programmi per microcontroller e caricarli in esso in modo semplice, senza che sia necessario avere conoscenze di programmazione.","pt-PT":"O Bitbloq é uma ferramenta online que permite criar programas para um microcontrolador e carregá-os no mesmo, de forma simples e sem ter necessariamente conhecimentos de programação.","ru-RU":"Bitbloq – это онлайновый инструмент, позволяющий создавать программы для микроконтроллера и загружать их в него легко и просто, для этого не обязательно обладать знаниями в области программирования.","zh-CN":"Bitbloq是一个在线工具，可以让你轻松创建和上传到微控制器的程序，而不必任何编程知识。"},"order":1});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Com funciona Bitbloq?","de-DE":"Wie funktioniert Bitbloq?","en-GB":"How does Bitbloq work?","es-ES":"¿Cómo funciona Bitbloq?","eu-ES":"Nola funtzionatzen du bitbloq-ek?","fr-FR":"Comment ça marche ?","it-IT":"Come funziona Bitbloq?","pt-PT":"Como funciona o Bitbloq?","ru-RU":"Как работает Bitbloq?","zh-CN":"Bitbloq这么使用"},"content":{"ca-ES":"Amb Bitbloq programaràs per blocs de forma ràpida i intuïtiva A més podràs crear els teus propis projectes i compartir-los amb la comunitat de Bitbloq. L'electrònica i la programació no havien estat mai tan divertides!","de-DE":"Mit Bitbloq kannst du mit Blöcken auf schnelle und intuitive Art und Weise programmieren. Außerdem kannst du deine eigenen Projekte erstellen und sie mit der Gemeinschaft teilen. Elektronik und Programmieren haben noch nie so viel Spaß gemacht!","en-GB":"Bitbloq allows you to program using blocks in a quick and intuitive way. Also, you can create your own projects and share them with the community. Electronics and programming have never been so fun!","es-ES":"Con Bitbloq programarás por bloques de forma rápida e intuitiva. Además, podrás crear tus propios proyectos y compartirlos con la comunidad. ¡La electrónica y la programación nunca han sido tan divertidas!","eu-ES":"bitbloq-i esker, blokeen bitartez programatu ahalko duzu, azkar eta modu intuitiboan. Gainera, zeure proiektuak sortu eta komunitatearekin konpartitu ahalko dituzu. Elektronika eta programazioa ez dira inoiz hain dibertigarriak izan!","fr-FR":"Avec Bitbloq, tu programmes par blocs. C’est rapide et intuitif.  Tu peux créer tes propres projets et les partager avec la communauté.  L’électronique et la programmation n’ont jamais été aussi amusantes !","it-IT":"Con Bitbloq potrai programmare per blocchi in modo rapido e intuitivo. Potrai creare i tuoi progetti e condividerli con la comunità. L'elettronica e la programmazione non sono mai state così divertenti!","pt-PT":"Com o Bitbloq, programarás por blocos de forma rápida e intuitiva. Além disso, poderás criar os teus próprios projetos e partilhá-los com a comunidade. A eletrónica e a programação nunca foram tão divertidas!","ru-RU":"С помощью Bitbloq вы сможете быстро и интуитивно программировать посредством блоков. Кроме того, вы сможете создавать ваши собственные проекты и делиться ими с сообществом. Электроника и программирование никогда не были такими занимательными!","zh-CN":"跟Bitbloq块程序很快速，直观。此外，你可以创建自己的项目，并与社区分享。电子和编程从来没有这么好玩！"},"order":2});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Què puc fer a Bitbloq?","de-DE":"Was kann ich in Bitbloq erstellen?","en-GB":"What can I do with Bitbloq?","es-ES":"¿Qué puedo hacer en Bitbloq?","eu-ES":"Zer egin dezaket bitbloq-en?","fr-FR":"Qu'est-ce que je peux faire avec Bitbloq ?","it-IT":"Cosa posso fare in Bitbloq?","pt-PT":"O que posso fazer no Bitbloq?","ru-RU":"Что я смогу делать на платформе Bitbloq?","zh-CN":"跟Bitbloq可以做什么?"},"content":{"ca-ES":"Amb Bitbloq i l'electrònica de BQ podràs crear tot el que t'imaginis, des de robots fins a projectes de domòtica per a casa teva, passant per jocs electrònics. La teva imaginació no tindrà límits!","de-DE":"Mit Bitbloq und der Elektronik von BQ sind deiner Phantasie keine Grenzen gesetzt und du kannst alles von Robotern über Haushaltstechnik bis hin zu Elektronik-Spielzeug programmieren. Deiner Phantasie sind keine Grenzen gesetzt!","en-GB":"Using Bitbloq and BQ's electronic kits you will be able to create anything you imagine. Robots, electronic games and even domotic projects. Your imagination is the limit!","es-ES":"Con Bitbloq y la electrónica de BQ podrás crear todo lo que te imagines, desde robots hasta proyectos de domótica para casa, pasando por juegos electrónicos. ¡Tu imaginación no tendrá límites!","eu-ES":"bitbloq-erekin eta BQ-ren elektronikarekin, burura etortzen zaizun guztia sortu ahalko duzu, etxerako domotika-proiektuak, joko elektronikoak, etab. Zure irudikapenak ez du mugarik izango!","fr-FR":"Avec Bitbloq et l’électronique BQ, tu peux créer tout ce que tu veux : des robots, des projets de domotique pour la maison, ou encore des jeux électroniques. Laisse parler ton imagination !","it-IT":"Con Bitbloq e l'elettronica di BQ potrai creare tutto ciò che immagini, dai robot ai progetti di domotica per la casa, passando per i giochi elettronici. La tua immaginazione non avrà limiti!","pt-PT":"Com o Bitbloq e a eletrónica da BQ, poderás criar tudo aquilo que imaginares, desde robots até projetos de domótica para casa, passando por jogos eletrónicos. A tua imaginação não terá limites!","ru-RU":"С помощью Bitbloq и электроники от фирмы BQ вы сможете создавать все, что только подскажет вам ваше воображение, от роботов до электронных игр и бытовых проектов системы «умный дом». Вашему воображению не будет пределов!","zh-CN":"跟Bitbloq和BQ电子你可以创建所有你能想象，从机器人到家庭自动化工程或电子游戏。你的想象力是无限的！"},"order":3});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Qui hi ha darrere d'aquest projecte?","de-DE":"Wer steckt hinter diesem Projekt?","en-GB":"Who is behind this project?","es-ES":"¿Quién está detrás del proyecto?","eu-ES":"Nor dago proiektuaren atzean?","fr-FR":"Qui se cache derrière Bitbloq ?","it-IT":"Chi c'è dietro al progetto?","pt-PT":"Quem está por trás do projeto?","ru-RU":"Кто является разработчиком проекта?","zh-CN":"谁是项目的负责人?"},"content":{"ca-ES":"Aquest projecte es dissenya i es desenvolupa des de BQ. Aquí pots veure el gran equip que fa possible que aquest projecte estigui disponible.","de-DE":"Dieses Projekt wurde von BQ entworfen und entwickelt. Hier kannst du das große Team sehen, das dieses Projekt möglich macht.","en-GB":"This project is being designed and developed in BQ. Here you can see the great team that makes Bitbloq a reality.","es-ES":"Este proyecto se está diseñando y desarrollando desde BQ. Aquí puedes ver el gran equipo que hace posible que este proyecto esté disponible.","eu-ES":"BQ-n ari dira proiektua diseinatzen eta garatzen. Hemen ikus dezakezu proiektua erabilgarri egotea posible egiten duen langile-talde handia.","fr-FR":"Ce projet a été conçu et développé par BQ. Tu peux voir ici l'équipe grâce à qui ce projet a pris vie.","it-IT":"Il progetto è ideato e sviluppato da BQ. Qui puoi vedere il grande team che rende disponibile questo progetto.","pt-PT":"Este projeto foi concebido desenvolvido pela BQ. Podes aqui ver a grande equipa que faz com que este projeto esteja disponível.","ru-RU":"Данный проект разрабатывается в компании BQ. Здесь вы можете увидеть ту великолепную команду, которая делает этот проект доступным для пользователей.","zh-CN":"本项目是BQ设计和开发。你可以在这里看到伟大的团队。"},"order":4});db.bitbloq_Faqs.insert({"title":{"ca-ES":"A qui va adreçat?","de-DE":"An wen richtet sich Bitbloq?","en-GB":"Who is Bitbloq for?","es-ES":"¿A quién va dirigido?","eu-ES":"Nori dago zuzendua?","fr-FR":"À qui s'adresse Bitbloq ?","it-IT":"A chi è rivolto?","pt-PT":"A quem se destina?","ru-RU":"Для кого он предназначен?","zh-CN":"给谁?"},"content":{"ca-ES":"Als pares i mares que volen iniciar als seus fills en la robòtica, l'electrònica o la programació. Bitbloq els donarà les eines necessàries perquè puguin endinsar-se en aquest món apassionant. Als professors que vulguin ensenyar als seus alumnes a crear tecnologia. Als infants que vulguin aprendre com funciona la tecnologia i vulguin crear projectes propis sense limitacions.","de-DE":"An die Eltern, die ihren Kindern die Robotik, Elektronik oder Programmierung näherbringen möchten. Ihnen gibt Bitbloq die nötigen Werkzeuge an die Hand, damit sie in diese faszinierende Welt eintauchen können. An die Lehrer, die den Kindern zeigen möchten, wie sie Technologie entwickeln können. An die Kinder, die lernen möchten, wie Technologie funktioniert und ohne Einschränkungen ihre eigene erstellen möchten.","en-GB":"For parents wanting to introduce their kids to robotics, electronics or programming, Bitbloq provides them with the necessary tools to enter this exciting world.","es-ES":"A los padres que quieren iniciar a sus hijos en la robótica, electrónica o programación, Bitbloq les dará las herramientas necesarias para que se adentren en este apasionante mundo. A los profesores que quieran enseñar a los niños a ser creadores de tecnología. A los niños que quieran aprender cómo funciona la tecnología y quieran crear la suya propia sin tener ningún límite.","eu-ES":"Euren seme-alabei robotika, elektronika eta programazioan  abiarazi nahi dieten gurasoei, bitbloq-ek beharrezko tresnak emango dizkiete mundu zirraragarri honetan barnera daitezen. Haurrei teknologia-sortzaile izateko irakatsi nahi dieten irakasleei. Teknologiak nola funtzionatzen duen eta eurena mugarik gabe sortu nahi duten haurrei.","fr-FR":"Aux parents qui souhaitent initier leurs enfants à la robotique, l’électronique ou encore à la programmation. Grâce à Bitbloq, ils disposeront des outils nécessaires pour découvrir ce monde passionnant. Aux enseignants qui souhaitent apprendre aux enfants à devenir des créateurs de technologie. Aux enfants qui veulent comprendre le fonctionnement de la technologie et créer librement leurs propres inventions.","it-IT":"Ai genitori che desiderano iniziare i propri figli alla robotica, all'elettronica o alla programmazione: Bitbloq fornirà loro gli strumenti necessari affinché possano esplorare questo mondo appassionante. Ai professori che desiderino insegnare ai ragazzi a diventare creatori di tecnologia. Ai ragazzi che desiderino imparare come funziona la tecnologia e crearne a loro volta senza limiti di sorta.","pt-PT":"O Bitbloq dá aos pais que queiram iniciar os seus filhos, na robótica, eletrónica ou programação, as ferramentas necessárias para entrarem neste mundo apaixonante. Aos professores que queiram ensinar às crianças a serem criadores de tecnologia. Às crianças que queiram aprender como funciona la tecnologia e queiram criar a sua própria sem qualquer limite.","ru-RU":"Для родителей, которые хотят познакомить своих детей с робототехникой, электроникой и программированием; Bitbloq предоставит необходимый инструментарий для погружения в этот увлекательный мир. Для преподавателей, желающих научить детей быть создателями технологий. Для детей, которые хотят понять, как работает техника, и стремятся создавать свои собственные технические устройства без каких-либо ограничений.","zh-CN":"如果家长想要他的孩子开始设计自己的机器人, 电子或编程, Bitbloq提供令人兴奋的必要工具。如果老师想要教小朋友如何变成技术的创造者。如果小孩想要学科技怎么运用也想要创建没有任何限制自己的科技。"},"order":5});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Quines plaques són compatibles?","de-DE":"Welche Platinen werden unterstützt?","en-GB":"Which boards are supported?","es-ES":"¿Qué placas soportamos?","eu-ES":"Zein plaka jasaten ditugu?","fr-FR":"Quelles cartes contrôleurs puis-je utiliser ?","it-IT":"Quali schede sono supportate?","pt-PT":"Que placas são suportadas?","ru-RU":"Какие платы поддерживаются?","zh-CN":"我们支持哪些板？"},"content":{"ca-ES":"Actualment les plaques compatibles són Freaduino UNO, Arduino UNO i BQ Zum, però pròximament n'afegirem més; moltes més!","de-DE":"Aktuell werden die Platinen Freaduino UNO, Arduino UNO und BQ ZUM unterstützt, aber in Kürze kommen noch mehr hinzu, viel mehr sogar!","en-GB":"At the moment the supported boards are : Freaduino UNO, Arduino UNO and BQ Zum, but we will add more soon, many more!","es-ES":"Actualmente soportamos las placas Freaduino UNO, Arduino UNO y BQ Zum, pero próximamente añadiremos más, ¡muchas más!","eu-ES":"Egun, Freaduino UNO, Arduino UNO eta BQ Zum plakak jasaten ditugu, baina, aurki, gehiago, askoz ere gehiago gehituko ditugu!","fr-FR":"Pour le moment Bitbloq est compatible avec les cartes contrôleurs Freaduino UNO, Arduino UNO et BQ Zum, mais reste connecté, nous avons programmé l'ajout de nouvelles cartes !","it-IT":"Al momento sono supportate le schede Freaduino UNO, Arduino UNO e BQ Zum, ma presto ne aggiungeremo altre!","pt-PT":"Atualmente suportamos as placas Freaduino UNO, Arduino UNO e BQ Zum, mas iremos em breve adicionar mais, muitas mais!","ru-RU":"В настоящее время это платы Freaduino UNO, Arduino UNO и BQ Zum, однако в ближайшее время мы расширим этот круг, и расширим значительно!","zh-CN":"我们目前支持的Frearduino UNO,Arduino UNO和BQ Zum板，但我们会增加更多！"},"order":6});db.bitbloq_Faqs.insert({"title":{"ca-ES":"On són els projectes que tenia a l'antic Bitbloq?","de-DE":"Wo befinden sich die Projekte, die ich im alten Bitbloq erstellt habe?","en-GB":"Where are the projects I already had in the old Bitbloq?","es-ES":"¿Dónde están los proyectos que tenía en el antiguo Bitbloq?","eu-ES":"Non daude antzinako bitbloq-en nituen proiektuak?","fr-FR":"Que deviennent mes projets créés dans l'ancien Bitbloq ?","it-IT":"Dove si trovano i progetti del vecchio Bitbloq?","pt-PT":"Onde estão os projetos que tinha o antigo Bitbloq?","ru-RU":"Где находятся проекты, которые у меня были на старом Bitbloq?","zh-CN":"究Bitbloq的项目在哪里？"},"content":{"ca-ES":"Els projectes de l'antic Bitbloq no són compatibles amb la nova eina, per la qual cosa no hem pogut fer el traspàs. Hauràs de crear de nou aquests projectes amb la nova eina. Sentim les molèsties.","de-DE":"Die Projekte des alten Bitbloq sind mit diesem neuen Toll nicht kompatibel. Daher konnten wir sie leider nicht übernehmen. Du musst diese Projekte mit dem neuen Tool erneut erstellen. Wir bedauern diese Umstände.","en-GB":"The projects that were developed using the old Bitbloq are not compatible with the new tool and we were not able to transform them. You will have to create them from scratch in this new Bitbloq 2. We apologize for the inconveniences.","es-ES":"Los proyectos del antiguo Bitbloq no son compatibles con la nueva herramienta, por eso no hemos podido hacer el traspaso. Tendrás que crear de nuevo esos proyectos en la nueva herramienta. Sentimos las molestias.","eu-ES":"Antzinako bitbloq-eko proiektuak ez dira tresna berriarekin bateragarriak, horregatik ezin izan ditugu transferitu. Proiektu horiek berriro sortu beharko dituzu tresna berrian. Barkatu eragozpenak","fr-FR":"Les projets créés dans l'ancien Bitbloq ne sont pas compatibles avec la nouvelle version. C'est pourquoi nous n'avons malheureusement pas pu les transférer. Tu devras donc recréer tes projets dans le nouveau Bitbloq. Désolés de te décevoir...","it-IT":"I progetti del vecchio Bitbloq non sono compatibili con il nuovo strumento, e non è stato possibile quindi realizzare il trasferimento. Dovrai creare di nuovo tali progetti nel nuovo strumento. Ci scusiamo per il disagio.","pt-PT":"Os projetos do antigo Bitbloq não são compatíveis com a nova ferramenta, por isso não foi possível fazer a transferência. Terás de voltar a criar esses projetos na nova ferramenta. Pedimos desculpa pelo inconveniente.","ru-RU":"Проекты прежнего Bitbloq несовместимы с новым инструментом, поэтому нам не удалось перенести их. Вам необходимо будет заново создать эти проекты на новой платформе. Приносим извинения за доставленные неудобства.","zh-CN":"因为Bitbloq老项目不符合新的工具，所以我们就无法转移你的项目。你必须用新的工具重新创建新它们。很抱歉给你带来不便。"},"order":7});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Bitbloq i Scratch","de-DE":"Bitbloq und Scratch","en-GB":"Bitbloq and Scratch","es-ES":"Bitbloq y Scratch","eu-ES":"bitbloq eta Scratch","fr-FR":"Bitbloq et Scratch","it-IT":"Bitbloq e Scratch","pt-PT":"Bitbloq e Scratch","ru-RU":"Bitbloq и Scratch","zh-CN":"Bitbloq和Scratch"},"content":{"ca-ES":"Bitbloq utilitza el mateix paradigma de programació que Scratch, és a dir, fan servir blocs que encaixen els uns amb els altres com si fos un puzle per construir programes. Això permet que la programació sigui accessible als infants, perquè no han de preocupar-se per la sintaxi (no cal que aprenguin a escriure el codi en un llenguatge de programació literal com ara Processing, C++ o Java). Bitbloq utilitza aquest paradigma perquè la seva eficàcia està demostrada amb els infants i perquè, a més, Scratch ja s'utilitza a moltes escoles i centres educatius. La nostra filosofia és que és molt millor treballar conjuntament que no pas tornar a inventar la roda. Hem desenvolupat Bitbloq utilitzant biblioteques de software amb llicència lliure, fonamentalment bloqs, una biblioteca desenvolupada per BQ per a la creació d'aplicacions en línia basades en blocs.","de-DE":"Bitbloq verwendet das gleiche Programmierungsparadigma wie Scratch, d.h. es  werden Blöcke verwendet, die so ineinanderpassen, als würde es sich um ein Puzzle für die Konstruktion von Programmen handeln. Dies ermöglicht, dass die Programmierung auch für Kinder zugänglich ist, denn sie müssen sich keine Gedanken über die Syntax machen (sie müssen nicht lernen, wie man Code in einer Programmiersprache wie Processing, C++ oder Java erstellt). Bitbloq verwendet dieses Paradigma, da sich gezeigt hat, wie gut Kinder darauf ansprechen und weil Scratch bereits in vielen Schulen und Bildungseinrichtungen verwendet wird. Wir sind der Meinung, dass es besser ist, bestehende Kräfte zu nutzen, als das Rad neu zu erfinden. Wir haben Bitbloq mithilfe von frei zugänglichen Softwarebibliotheken entwickelt, insbesondere mit bloqs, einer von BQ entwickelten Bibliothek für das Erstellen von Anwendungen, die auf Blöcken basieren.","en-GB":"Bitbloq uses the same programming paradigm as Scratch, meaning that it uses blocks to build programs which fit together like pieces of a puzzle. This makes programming accessible to kids as they don´t have to worry about the syntax (i.e. they don´t need to learn how to write code in a literal programming language such as Processing, C++ or Java). Bitbloq uses this paradigm because it has been proven to be effective among children, and also because Scratch is already used in many schools and education centres. Our philosophy is that it´s better to join forces than to reinvent the wheel. We have developed Bitbloq using open source software libraries, primarily","es-ES":"Bitbloq utiliza el mismo paradigma de programación que Scratch, es decir, emplea bloques que encajan unos con otros como si fuera un puzzle para construir programas. Esto permite que la programación sea accesible para los niños, porque no tienen que preocuparse por la sintaxis (no necesitan aprender cómo se escribe código en un lenguaje de programación literal como Processing, C++ o Java). bitbloq utiliza este paradigma porque está demostrada su eficacia entre los niños y porque, además, scratch ya se utiliza en multitud de escuelas y centros educativos. Nuestra filosofía es que es mejor aunar fuerzas que reinventar la rueda. Hemos desarrollado bitbloq utilizando bibliotecas de software con licencia libre, fundamentalmente bloqs, una biblioteca desarrollada por BQ para la creación de aplicaciones online basadas en bloques.","eu-ES":"bitbloq-ek Scratch-ek erabiltzen duen programazio-paradigma bera erabiltzen du, hau da, batzuk besteekin puzzleen moduan ahokatzen diren blokeak erabiltzen ditu programak sortzeko.  Honek programazioa haurrentzat erabilgarria izatea ahalbidetzen du, sintaxiaz ez direlako kezkatu behar (ez dute kodea Processing, C++ edo Java bezalako programazio literal batean idazten ikasi beharrik ). Haurrengan eraginkorra dela ikusi delako eta ikastetxe ugarik dagoeneko Scratch erabiltzen dutelako erabiltzen du bitbloq-ek paradigma hau. Gure filosofia gurpila berriz asmatu baino hobe dela indarrak bateratzea da. Lizentzia askeko software-liburutegien bitartez garatu dugu bitbloq, bereziki bloqs, blokeetan oinarritutako interneteko aplikazioak sortzeko BQ-k sortutako liburutegia.","fr-FR":"Bitbloq utilise le même paradigme de programmation que Scratch, c’est-à-dire que Bitbloq emploie des blocs s’emboîtant les uns dans les autres, comme les pièces d’un puzzle, pour construire des programmes. La programmation est ainsi accessible aux enfants car ils n’ont pas à se préoccuper de la syntaxe (c’est-à-dire qu’ils n’ont pas besoin d’apprendre à écrire le code dans un langage de programmation littéral tel que Processing, C++ ou Java). Bitbloq utilise ce paradigme car son efficacité chez les enfants a été démontrée. De plus, Scratch est déjà utilisé dans de nombreux établissements scolaires et centres éducatifs. Notre philosophie est qu’il vaut mieux unir nos forces que réinventer ce qui existe déjà. Nous avons développé Bitbloq en utilisant des bibliothèques de logiciels sous licence libre. Nous nous sommes appuyés principalement sur bloqs, une bibliothèque développée par BQ pour la création d’applications en ligne basées sur des blocs. ","it-IT":"Bitbloq usa lo stesso paradigma di programmazione di Scratch, ovvero, impiega blocchi che si incastrano gli uni negli altri, come in un puzzle, per costruire programmi. Ciò rende la programmazione accessibile ai bambini, che non devono preoccuparsi della sintassi (non devono imparare a scrivere in un linguaggio di programmazione letterale come Processing, C++ o Java). Bitbloq utilizza questo paradigma perché è dimostrata la sua efficacia tra i bambini e perché, inoltre, Scratch è già utilizzato in molte scuole e in molti centri educativi. La nostra filosofia è: meglio unire le forze, che impegnarsi da soli per scoprire l'acqua calda! Abbiamo sviluppato Bitbloq utilizzando biblioteche software con licenza free, fondamentalmente Bloqs, una biblioteca sviluppata da BQ per la creazione di applicazioni online basate su blocchi.","pt-PT":"O Bitbloq utiliza o mesmo paradigma de programação que Scratch, ou seja, utiliza blocos que encaixam uns nos outros como se fosse um puzzle para construir programas. Isto permite que a programação seja acessível para as crianças, porque não têm de se preocupar com a sintaxe (não precisam de aprender a escrever código numa linguagem de programação literal como Processing, C++ ou Java). O Bitbloq utiliza este paradigma porque a sua eficiência está demostrada junto das crianças e porque, além disso, o Scratch já é utilizado em muitas escolas e centros educativos. A nossa filosofia é que é melhor juntar forças do que reinventar a roda. Desenvolvemos o Bitbloq utilizando bibliotecas de software com licença livre, fundamentalmente a bloqs, uma biblioteca desenvolvida pela BQ para a criação de aplicações online baseadas em blocos.","ru-RU":"Bitbloq использует ту же парадигму программирования, что и Scratch, то есть использует для написания программ блоки, сочетающиеся друг с другом, как кусочки паззла. Это позволяет сделать программирование доступным для детей, поскольку им не требуется думать о синтаксисе (не нужно учиться, как писать код на настоящем языке программирования, например, Processing, C++ или Java). Bitbloq использует эту парадигму, так как ее эффективность при работе с детьми проверена временем, а кроме того, scratch уже используется в большом количестве школ и образовательных учреждений. Наша философия заключается в том, что лучше объединять усилия, чем изобретать колесо. Мы разработали Bitbloq, используя библиотеки свободного ПО, в основном bloqs – библиотеку, разработанную компанией BQ для создания онлайн-приложений на основе блоков.","zh-CN":"Bitbloq使用像Scratch相同编程范式，像拼图一样即采用模块组合在一起。孩子们不许担心语法（无需学习C ++或Java编写代码）。Bitbloq 使用这种模式因为对孩子很有效, 而且scratch被使用在许多学校和教育中心。我们的理念是联手比较好。我们开发Bitbloq使用自由软件库, 比如bloqs, BQ开发的库。"},"order":8});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Es poden fer videojocs amb Bitbloq?","de-DE":"Können mit Bitbloq Videospiele erstellt werden?","en-GB":"Can video games be made using Bitbloq?","es-ES":"¿Pueden hacerse videojuegos con Bitbloq?","eu-ES":"Bitbloq-ekin bideo-jokoak ere egin al daitezke ?","fr-FR":"Peut-on réaliser des jeux vidéo avec Bitbloq ?","it-IT":"Si possono realizzare videogiochi con Bitbloq?","pt-PT":"É possível fazer videojogos com o Bitbloq?","ru-RU":"Можно ли создавать видеоигры с помощью Bitbloq?","zh-CN":"用Bitbloq可以设计游戏吗?"},"content":{"ca-ES":"No es poden fer videojocs d'ordinador, però sí jocs utilitzant l'electrònica de El Meu Primer Kit de Robòtica o qualsevol altra electrònica que utilitzi la placa ZUM o una placa compatible amb Arduino. Scratch ha estat dissenyat per ensenyar als infants a programar realitzant videojocs, mentre que Bitbloq ha estat dissenyat per ensenyar als infants a programar utilitzant electrònica i a fer projectes robòtics, de domòtica, invents casolans, etc.","de-DE":"Auf dem Computer können keine Videospiele erstellt werden. Allerdings wohl Spiele, die die Elektronik des Bausatzes Mi Primer Kit de Robótica oder vergleichbare Elektroniken mit der Platine ZUM enthalten oder eine mit Arduino kompatible Platine verwenden. Bei Scratch sollen die Kinder über das Erstellen von Videospielen lernen wie man programmiert. Mit Bitbloq hingegen lernen  die Kinder das Programmieren über die Verwendung von Elektronik und das Umsetzen von Robotik- und Automatisierungs-Projekten sowie eigene Erfindungen.","en-GB":"It´s not possible to make video games on the computer, but it can be done using electronics with My First Robotics Kit, or any other electronics that use ZUM or another board compatible with Arduino. Scratch has been designed to teach to kids to program by making video games, whereas Bitbloq is designed to teach to them through electronics, by creating robotics projects, domotics and home inventions, etc.","es-ES":"No pueden hacerse videojuegos en el ordenador, pero sí juegos utilizando la electrónica de Mi Primer Kit de Robótica o cualquier otra electrónica que use la placa ZUM o una placa compatible con Arduino. Scratch ha sido diseñado para enseñar a los niños a programar realizando videojuegos, mientras que Bitbloq ha sido diseñado para enseñar a los niños a programar usando electrónica y realizando proyectos robóticos, domótica, inventos caseros, etc.","eu-ES":"Bideo-jokoak ezin dira ordenagailuan egin, baina bai jokoak Mi Primer Kit de Robótica (Robotikako nire lehenengo kita) edo ZUM plaka edo Arduinorekin bateragarria den beste plaka bat erabiltzen duten beste edozein elektronikarekin. Scratch haurrei bideo-jokoak eginez programatzen irakasteko diseinatu da; bitbloq, aldiz, haurrei elektronika bidez eta proiektu robotikoak, domotikoak, etxeko asmakizunak, eta abar gauzatzen ikasteko diseinatu da.","fr-FR":"On ne peut pas réaliser de jeux vidéo sur ordinateur, mais on peut réaliser des jeux en utilisant les composants électroniques de Mon premier kit de robotique ou d'autres composants compatibles avec la carte ZUM ou une carte compatible avec Arduino. Scratch a été conçu pour apprendre aux enfants à programmer en réalisant des jeux vidéo, alors que Bitbloq a été conçu pour apprendre aux enfants à programmer en utilisant l’électronique, et en réalisant des projets robotiques et domotiques, des inventions maison, etc.","it-IT":"Non è possibile realizzare videogiochi nel computer; è possibile realizzarli, invece, tramite Il mio primo kit di robotica o qualsiasi altro strumento elettronico che usi la scheda ZUM o una scheda compatibile con Arduino. Scratch è stato pensato per insegnare ai bambini a programmare tramite la realizzazione di videogiochi, mentre Bitbloq è stato pensato per insegnare ai bambini a programmare tramite strumenti elettronici e realizzando progetti di robotica, domotica, invenzioni fai da te, ecc.\",","pt-PT":"Não é possível fazer videojogos no computador, mas sim jogos utilizando a eletrónica do Mi Primer Kit de Robótica ou qualquer outra eletrónica que utilize a placa ZUM ou uma placa compatível com Arduino. O Scratch foi concebido para ensinar às crianças a programar realizando videojogos, enquanto o Bitbloq foi concebido para ensinar às crianças a programar utilizando eletrónica e realizando projetos robóticos, domótica, invenções caseiras, etc.","ru-RU":"Вы не сможете создавать компьютерные игры, но сможете создавать игры, используя электронику из «Моего первого робототехнического набора» или любую другую электронику, использующую плату ZUM либо плату, совместимую с Arduino. Scratch был разработан для того, чтобы научить детей программированию путем создания видеоигр, в то время как Bitbloq – для обучения их программированию посредством использования электроники и реализации проектов в области робототехники, систем «умный дом», бытовых изобретений и т.д.","zh-CN":"不能做计算机游戏，但可以跟Mi Primer Kit de Robótica, ZUM板, Arduino板 做电子游戏。Scratch "},"order":9});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Política de privadesa","de-DE":"Datenschutzerklärung","en-GB":"Privacy Policy","es-ES":"Política de privacidad","eu-ES":"Pribatutasun politika","fr-FR":"Politique de confidentialité","it-IT":"Politica sulla privacy","pt-PT":"Política de privacidade","ru-RU":"Политика конфиденциальности","zh-CN":"隐私政策"},"content":{"ca-ES":"Les dades de caràcter personal proporcionades formaran part d'un fitxer del qual n'és responsable Mundo Reader, S.L., i que es gestionarà d'acord amb la normativa espanyola de protecció de dades amb la finalitat de poder oferir aquest servei als usuaris d'acord amb les condicions generals vigents. Consulteu la nostra política de privadesa a www.bq.com En crear un compte, l'usuari confirma que ha llegit i accepta les condicions de la política de privadesa. Si teniu qualsevol dubte respecte a la política o el tractament que fem de les vostres dades personals, contacteu amb lopd@bq.com","de-DE":"Die zur Verfügung gestellten persönlichen Daten sind Teil eines Ordners, dessen Verantwortlicher die Mundo Reader, S.L. ist und der gemäß den spanischen Datenschutzbedingungen verwaltet wird. Ziel ist es, den Nutzern diesen Service nach den geltenden Allgemeinen Bestimmungen anbieten zu können. Weitere Informationen finden sich in unserer Datenschutzerklärung unter www.bq.com. Mit dem Erstellen eines Kontos akzeptiert der Nutzer, dass er die Datenschutzbestimmungen gelesen hat und diesen zustimmt. Fragen zum Datenschutz oder zum Umgang mit persönlichen Daten bitte an lopd@bq.com.","en-GB":"The personal data that you provide will be included in a file owned and managed by Mundo Reader, S.L., pursuant to the Spanish data protections laws, for the purpose of providing this service to users, in accordance with the General Conditions currently in force. Consult our Privacy Policy at www.bq.com. By creating an account, the user acknowledges having read and accepted the terms and conditions of the Privacy Policy. If you have any doubts regarding this policy or the processing of your personal data, please write to lopd@bq.com","es-ES":"Los datos de carácter personal proporcionados formarán parte de un fichero cuyo responsable es Mundo Reader, S.L., el cual se gestiona conforme a la normativa española de protección de datos con la finalidad de poder prestar este servicio a los usuarios conforme a las condiciones generales vigentes. Consulte nuestra la política de privacidad en www.bq.com. Creándose una cuenta el usuario reconoce que ha leído y acepta las condiciones de la política de privacidad. Si tiene cualquier duda respecto a la política o el tratamiento que hacemos de sus datos personales, contacte con lopd@bq.com.","eu-ES":"Emandako datu pertsonalak Mundo Reader, S.L.-ren datu-base batean gordeko dira, datuak espainiar araudiaren arabera kudeatuko ditu, indarrean dauden baldintza orkorrak beteaz erabiltzaileei zerbitzua eskaini ahal izateko. Irakurri gure politika politika www.bq.com webgunean. Kontu bat sortuz erabiltzaileak pribatutasun politika irakurri eta onartzen dituela esan nahi du. Politika edo zure datu pertsonalen kudeaketari buruzko zalantzarik baduzu, jarri gurekin harremanetan lopd@bq.com helbidearen bitartez.","fr-FR":"Les données à caractère personnel fournies intègreront un fichier géré par Mundo Reader, S.L., conformément à la règlementation espagnole de protection des données, dans le but de pouvoir fournir ce service aux utilisateurs en accord avec les conditions générales en vigueur. Notre politique de confidentialité est à consulter sur www.bq.com. En créant un compte, l'utilisateur reconnaît qu'il a lu et accepté les conditions de la politique de confidentialité. Pour toute question au sujet de notre politique ou du traitement des données personnelles, envoyer un message à lopd@bq.com.","it-IT":"I dati di carattere personale forniti fanno parte di un archivio di responsabilità di Mundo Reader, S.L., che viene gestito in conformità alla normativa spagnola sulla protezione dei dati al fine di garantire che il servizio sia conforme alle condizioni generali vigenti. Consulta la nostra politica sulla privacy all'indirizzo www.bq.com Creando un account, l'utente dichiara di aver letto e accettato le condizioni della politica sulla privacy. Per qualsiasi dubbio relativo alla politica o al trattamento dei dati personali, è possibile contattare lopd@bq.com.","pt-PT":"Os dados de caráter pessoal proporcionados farão parte de um ficheiro cujo responsável é a Mundo Reader, S.L., sendo este gerido em conformidade com a regulamentação espanhola de proteção de dados, com a finalidade de prestar este serviço aos utilizadores de acordo com as condições gerais em vigor. Consulta a nossa política de privacidade em www.bq.com. Ao criar uma conta, o utilizador reconhece ter lido e aceite as condições da política de privacidade. Se tiveres qualquer dúvida em relação à política ou ao tratamento que fazemos dos seus dados pessoais, contacta com lopd@bq.com.","ru-RU":"Предоставленные пользователем персональные данные станут частью базы данных, ответственным оператором которой является компания Mundo Reader, S.L. и которая администрируется в соответствии с испанским законодательством о защите данных, с целью обеспечения возможности оказания этой услуги пользователям в соответствии с действующими Общими условиями. Вы можете ознакомиться с нашей политикой конфиденциальности на сайте www.bq.com. Создавая аккаунт, пользователь признает, что ознакомился с условиями политики конфиденциальности и принимает их. Если у вас возникли какие-либо вопросы касательно политики конфиденциальности или обращению с вашими персональными данными, вы можете задать их нам по электронной почте lopd@bq.com.","zh-CN":"提供的个人资料将成为Mundo Reader, S.L., 管理, 按照一般用户条件为西班牙保护法律。请参阅我们在 www.bq.com的隐私政策。创建一个帐户你确认已经阅读并接受隐私政策条款。如果你有关于政策或任何个人资料疑问, 请联系lopd@bq.com。"},"order":10});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Web2Board no s'obre a Windows","de-DE":"Web2Board lässt sich in Windows nicht öffnen.","en-GB":"Web2Board no se abre en Windows","es-ES":"Web2Board no se abre en Windows","eu-ES":"Web2Board ezin da ireki Windows-en.","fr-FR":"Web2Board ne s'ouvre pas dans Windows","it-IT":"Web2Board non si apre in Windows","pt-PT":"O Web2Board não pode ser aberto no Windows","ru-RU":"Web2Board не открывается в Windows","zh-CN":"Web2Board法在Windows中打开"},"content":{"ca-ES":"Torna a instal·lar Web2Board com a administrador. Per fer-ho, fes clic amb el botó dret sobre l'executable i selecciona \"Executa’l com a administrador\".","de-DE":"Installiere Web2Board erneut als Administrator. Klicke hierfür mit der rechten Maustaste auf die ausführbare Datei und wähle \"Als Administrator ausführen\".","en-GB":"Reinstall Web2Board as administrator. In order to do so, right-click over the executable and select the option \"Run as administrator\"","es-ES":"Reinstala Web2Board como administrador. Para ello haz click derecho sobre el ejecutable y selecciona \"Ejecutar como administrador\".","eu-ES":"Berriz instalatu Web2Board administratzaile gisa. Horretarako, egin klik saguaren eskuineko botoiarekin eta hautatu \"Exekutatu administratzaile gisa\".","fr-FR":"Réinstalle Web2Board en tant qu'administrateur. Pour cela, fais un clic droit sur l'exécutable et sélectionne « Exécuter en tant qu'administrateur ».","it-IT":"Reinstalla Web2Board come amministratore. A tal fine, fai clic con il tasto destro sul file eseguibile e seleziona \"Esegui come amministratore\".","pt-PT":"Reinstala o Web2Board como administrador. Para isso, clica direito no executável e seleciona \"Executar como administrador\".","ru-RU":"Переустановите Web2Board с правами администратора. Для этого кликните правой кнопкой мыши на исполняемом файле и выберите «Выполнить с правами администратора».","zh-CN":"为管理员安装Web2Board。请按和选择“以管理员身份运行”。"},"order":11});db.bitbloq_Faqs.insert({"title":{"ca-ES":"No puc iniciar la sessió a Bitbloq","de-DE":"Ich kann mich nicht bei Bitbloq anmelden.","en-GB":"I cannot log in to Bitbloq","es-ES":"No puedo iniciar sesión en Bitbloq","eu-ES":"Ezin dut saioa hasi bitbloq-en.","fr-FR":"Je n'arrive pas ouvrir ma session Bitbloq","it-IT":"Non riesco ad avviare la sessione in Bitbloq","pt-PT":"No posso iniciar sessão no Bitbloq","ru-RU":"Не могу начать сессию на Bitbloq","zh-CN":"无法登录Bitbloq"},"content":{"ca-ES":"Comprova si la data i l'hora del teu ordinador són correctes. Si no és així, corregeix-les i torna-ho a provar.","de-DE":"Überprüfe, ob das Datum und die Uhrzeit in deinem Computer richtig sind. Ist dies nicht der Fall, korrigiere sie zunächst und versuche es dann erneut.","en-GB":"Check that your computer's date and hour are correct. If they aren't, change them and try again.","es-ES":"Comprueba si la fecha y hora de tu ordenador son correctas. Si no es así, corrígelas y prueba de nuevo.","eu-ES":"Egiaztatu ordenagailuko eguna eta ordua ongi dauden. Hala ez bada, zuzen itzazu eta berriro egiaztatu.","fr-FR":"Regarde si la date et l'heure affichées par ton ordinateur sont correctes. Si ce n'est pas le cas, corrige-les puis réessaie.","it-IT":"Verifica se data e ora del tuo computer sono corrette. Diversamente, correggile e prova di nuovo.","pt-PT":"Verifica se a data e hora do teu computador estão corretas. Se não for o caso, corrige-as e tenta novamente.","ru-RU":"Проверьте, правильно ли ваш компьютер отображает дату и время. Если нет, исправьте их и попробуйте еще раз.","zh-CN":"请检查计算机的日期和时间是否正确。如果不是，则更正它们，然后重试。"},"order":12});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Els blocs que estan solts no generen codi","de-DE":"Die einzelnen Blöcke generieren keinen Code.","en-GB":"The blocks that are not connected do not generate code","es-ES":"Los bloques que están sueltos no generan código","eu-ES":"Solte dauden blokeek ez dute koderik sortzen.","fr-FR":"Les blocs isolés ne génèrent pas de code","it-IT":"I blocchi scollegati non generano codice","pt-PT":"Os blocos soltos não geram código","ru-RU":"Несвязанные блоки не генерируют код","zh-CN":"松动的块不会生成代码"},"content":{"ca-ES":"La nova estructura de programació de Bitbloq 2 està pensada de tal forma que has de connectar els blocs a algun bloc de projecte (\"Variables globals i funcions\", \"Instruccions inicials (Setup)\" o Bucle principal (Loop)\") Els bucles que no estiguin connectats no generaran codi i per tant no tindran efecte a la placa o robot.","de-DE":"Die neue Programmierstruktur von Bitbloq 2 ist so gedacht, dass du die Blöcke mit einem der Blöcke der Projekte verbinden musst (\"Globale Variablen und Funktionen\", \"Initialanweisungen (Setup)\" oder \"Hauptschleife (Loop)\"). Jeder Block, der nicht verbunden ist, generiert auch keinen Code und man sieht daher auch keine Auswirkung auf die Platine oder den Roboter.","en-GB":"Bitbloq 2's new programming structure has been developed in a way that your blocks need to be connected to some project block (\"Global variables and functions\", \"Setup\" or \"Loop\"). Unconnected blocks will not generate any code.","es-ES":"La nueva estructura de programación de Bitbloq 2 está pensada de tal forma que debes conectar los bloques a algún bloque de proyecto (\"Variables globales y funciones\", \"Instrucciones iniciales (Setup)\" o \"Bucle principal (Loop)\"). Cualquier bloque no conectado no generará código y por tanto no se verá su efecto en la placa o robot.","eu-ES":"bitbloq 2 programazio-egitura berria proiektu-blokeak elkarrekin konektatzeko dago pentsatuta (\"Aldagai orokorrak eta funtzioak\", \"Hasierako argibideak (Setup)\" edo \"Begizta nagusia (Loop)\"). Konektatu gabeko blokeek ez dute koderik sortuko eta, ondorioz, ez dute eraginik izango plakan edo robotean.","fr-FR":"Avec la nouvelle structure de programmation de Bitbloq 2, tu dois connecter les blocs à un bloc de projet (Variables globales et fonctions, Instructions de départ (Setup) ou Boucle (Loop)). Si un bloc est isolé, il ne génèrera pas de code et par conséquent il n'aura pas d'effet sur la carte ou le robot.","it-IT":"La nuova struttura di programmazione di Bitbloq 2 è pensata in modo tale che occorre collegare i blocchi a qualche blocco del progetto (\"Variabili globali e funzioni\", \"Istruzioni iniziali (Setup)\" o \"Loop principale (Loop)\"). Ogni blocco non collegato non genererà codice e pertanto non se ne vedrà l'effetto sulla scheda o sul robot.","pt-PT":"A nova estrutura de programação do Bitbloq 2 está pensada de tal forma que é preciso conectar os blocos a algum bloco de projeto (\"Variáveis globais e funções\", \"Instruções iniciais (Setup)\" ou \"Circuito principal (Loop)\"). Qualquer bloco não conectado não gera código e portanto não se verás o seu efeito na placa ou robot.","ru-RU":"Новая структура программирования на Bitbloq 2 задумана таким образом, что вам необходимо связать блоки с каким-нибудь блоком проекта («Глобальные переменные и функции», «Начальные инструкции (Setup)» или «Главный цикл (Loop)»). Если блок не связан, он не будет генерировать код и, соответственно, его эффект не будет виден на плате или роботе.","zh-CN":"新的Bitbloq2设计编程结构，使您连接块（“全局变量和函数”，“最初的指令（Setup）”或“主循环（Loop）”）。未连接任何模块不会生成代码，因此不会在板或机器人。"},"order":13});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Els blocs que estan solts han desaparegut del meu projecte","de-DE":"Die einzelnen Blöcke sind aus meinem Programm verschwunden.","en-GB":"The blocks that are not connected have dissappeared from my project","es-ES":"Los bloques que están sueltos han desaparecido de mi proyecto","eu-ES":"Solte dauden blokeak nire proiektutik desagertu dira","fr-FR":"Les blocs isolés ont disparu de mon projet","it-IT":"I blocchi scollegati sono scomparsi dal mio progetto","pt-PT":"Os blocos que estão soltos desapareceram do meu projeto","ru-RU":"Несвязанные блоки исчезли из моего проекта","zh-CN":"这些块从我的项目已经消失"},"content":{"ca-ES":"La nova estructura de programació de Bitbloq 2 està pensada de tal manera que has de connectar els blocs a algun bloc de projecte (\"Variables globals i funcions\", \"Instruccions inicials (Setup)\" o Bucle principal (Loop)\") Els blocs que no estiguin connectats no es desaran al projecte.","de-DE":"Die neue Programmierstruktur von Bitbloq 2 ist so gedacht, dass du die Blöcke mit einem der Blöcke der Projekte verbinden musst (\"Globale Variablen und Funktionen\", \"Initialanweisungen (Setup)\" oder \"Hauptschleife (Loop)\"). Ein Block, der nicht verbunden wurde, wird nicht im Projekt gespeichert.","en-GB":"Bitbloq 2's new programming structure has been developed in a way that your blocks need to be connected to some project block (\"Global variables and functions\", \"Setup\" or \"Loop\"). Unconnected blocks will not be stored in the project.","es-ES":"La nueva estructura de programación de Bitbloq 2 está pensada de tal forma que debes conectar los bloques a algún bloque de proyecto (\"Variables globales y funciones\", \"Instrucciones iniciales (Setup)\" o \"Bucle principal (Loop)\"). Cualquier bloque no conectado no se guardará en el proyecto.","eu-ES":"bitbloq 2 programazio-egitura berria proiektu-blokeak elkarrekin konektatzeko dago pentsatuta (\"Aldagai orokorrak eta funtzioak\", \"Hasierako argibideak (Setup)\" edo \"Begizta nagusia (Loop)\"). Konektatu gabeko blokeak ez dira proiektuan gordeko.","fr-FR":"Avec la nouvelle structure de programmation de Bitbloq 2, tu dois connecter les blocs à un bloc de projet (Variables globales et fonctions, Instructions de départ (Setup) ou Boucle (Loop)). Les blocs isolés disparaîtront du projet.","it-IT":"La nuova struttura di programmazione di Bitbloq 2 è pensata in modo tale che occorre collegare i blocchi a qualche blocco del progetto (\"Variabili globali e funzioni\", \"Istruzioni iniziali (Setup)\" o \"Loop principale (Loop)\"). Ogni blocco non collegato non sarà salvato nel progetto.","pt-PT":"A nova estrutura de programação do Bitbloq 2 está pensada de tal forma que é preciso conectar os blocos a algum bloco de projeto (\"Variáveis globais e funções\", \"Instruções iniciais (Setup)\" ou \"Circuito principal (Loop)\"). Qualquer bloco não conectado não será guardado no projeto.","ru-RU":"Новая структура программирования на Bitbloq 2 задумана таким образом, что вам необходимо связать блоки с каким-нибудь блоком проекта («Глобальные переменные и функции», «Начальные инструкции (Setup)» или «Главный цикл (Loop)»). Любой несвязанный блок не будет сохранен в проекте.","zh-CN":"新的Bitbloq2设计编程结构，使您连接块（“全局变量和函数”，“最初的指令（Setup）”或“主循环（Loop）”）。未连接任何模块不会被保存在项目中。"},"order":14});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Per què no poden crear-se un compte els menors de 14 anys?","de-DE":"Warum kann man sich erst ab 14 Jahren ein Konto erstellen?","en-GB":"Why children under 14 years old cannot create an account?","es-ES":"¿Por qué no pueden crearse una cuenta los menores de 14 años?","eu-ES":"Zergatik ezin dute 14 urtetik beherakoek kontua sortu?","fr-FR":"Pourquoi les enfants de moins de 14 ans ne peuvent pas se créer un compte ?","it-IT":"Perché i minori di 14 anni non possono creare un account?","pt-PT":"Porque é que as crianças de menos de 14 anos não se podem criar uma conta?","ru-RU":"Почему не могут создать аккаунт несовершеннолетние младше 14 лет?","zh-CN":"为什么低于14岁不能创建一个帐户？"},"content":{"ca-ES":"Degut a la Llei Orgànica de Protecció de Dades de Caràcter Personal, per tal que un menor de 14 anys pugui crear-se un compte, necessitem tenir el permís explícit del pare/mare/tutor, els quals ens han de proporcionar extensa documentació. Per aquest motiu no els podem permetre la creació de comptes d'usuari. Hauran d'utilitzar comptes d'usuari creades per un usuari major de 14 anys i utilitzar Bitbloq acompanyats d'aquesta persona.","de-DE":"Laut Gesetz zum Schutz persönlicher Daten würden wir, damit sich ein Kind unter 14 Jahren ein Konto erstellen kann, die ausdrückliche Erlaubnis des Vaters/Mutters/Lehrers benötigen, und diese müsste umfangreich dokumentiert werden. Daher können wir ihnen nicht erlauben, sich ein Nutzerkonto zu erstellen, sondern sie müssen ein Konto verwenden, dass von einer Person über 14 Jahre erstellt worden ist und dieses gemeinsam mit dieser Person verwenden.","en-GB":"Due to the Spanish law \"Ley Orgánica de Protección de Datos de Carácter Personal\",  we would need an explicit permit from the father, mother or legal tutor in order to create an account. Because of this, we cannot allow them to create accounts, and they shall rather use an account owned by somebody older than 14, and be supervised by the latter while doing so.","es-ES":"Debido a la Ley Orgánica de Protección de Datos de Carácter Personal, para que un menor de 14 años pueda crearse una cuenta, deberíamos de tener permiso explícito del padre/madre/tutor, y estos proporcionarnos extensa documentación. Por esa razón no podemos permitir que se creen cuentas de usuario, sino que tendrán que utilizar cuentas de usuario creadas por usuarios mayores de 14 años y usar Bitbloq acompañados de dicha persona.","eu-ES":"Datu Pertsonalak Babesteko Lege Organikoa dela eta, 14 urtetik beherakoek kontu bat sortu ahal izateko, aitaren, amaren edo tutorearen baimena beharko genuke, eta hauek dokumentu ugari bidali beharko lizkigukete. Horregatik, ezin dugu 14 urtetik beherakoek kontuak sortzea onartu, aldiz, 14 urtetik gorakoek sortutako kontuak erabili beharko dituzte eta bitbloq haien konpainian erabili.","fr-FR":"Conformément à la loi organique espagnole de protection des données à caractère personnel, pour qu'un enfant de moins de 14 ans puisse se créer un compte, nous devons obtenir l'accord explicite de ses parents ou de son tuteur, et ces derniers doivent nous fournir des papiers détaillés. C'est pourquoi nous ne pouvons pas laisser des enfants de moins de 14 ans se créer de compte utilisateur. Ils devront utiliser un compte créé par un utilisateur de plus de 14 ans et ce sous la supervision de ce dernier.","it-IT":"A causa della Legge sulla Protezione dei dati personali, affinché un minore di 14 anni possa creare un account, occorre avere il consenso esplicito del pade/madre/tutore, che deve inviarci anche l'opportuna documentazione. Per tale ragione, i minori non possono creare account personali, ma dovranno utilizzare account creati da utenti con età superiore a 14 anni, e utilizzare Bitbloq accompagnati da tale persona.","pt-PT":"Devido à lei orgânica de proteção de dados de caráter pessoal, para que um menor de 14 anos pudesse criar uma conta, devíamos ter a autorização explícita do pai/mãe/tutor, e estes nos fornecerem uma extensa documentação. Por essa razão, não podemos permitir que criem contas de utilizador mas apenas que utilizem contas de utilizadores criadas por pessoas de mais de 14 anos e utilizar o Bitbloq acompanhados dessa pessoa.","ru-RU":"В соответствии с Конституционным законом Испании о защите персональных данных, для того чтобы несовершеннолетний младше 14 лет мог создать себе аккаунт, нам необходимо явно выраженное разрешение одного из его родителей/законных представителей, при условии направления ими соответствующих документов с необходимыми данными. По этой причине мы не можем разрешить лицам моложе 14 лет создавать пользовательские аккаунты, им необходимо будет использовать аккаунты, созданные лицом старше 14 лет, и пользоваться Bitbloq в сопровождении указанного лица.","zh-CN":"由于个人数据保护组织法，14岁以下的孩子不可以创建一个帐户，除非父亲/母亲/监护人提供大量明确许可文档。他们必须使用超过14岁的帐户，而使用Bitbloq时有哪个人伴随。"},"order":15});db.bitbloq_Faqs.insert({"title":{"ca-ES":"No em detecta la placa","de-DE":"Die Platine wird nicht erkannt.","en-GB":"The board is not being detected","es-ES":"No me detecta la placa","eu-ES":"Ez du nire plaka detektatzen","fr-FR":"Ma carte contrôleur n'est pas détectée","it-IT":"La mia scheda non viene rilevata","pt-PT":"Não deteta a minha placa","ru-RU":"Моя плата не обнаруживается","zh-CN":"没有检测到板"},"content":{"ca-ES":"Poden existir diversos problemes que fan que no es detecti la placa. A continuació te’n posem uns exemples. Prova'ls, i si tot i així segueix sense detectar-se, envia'ns un missatge.\n1.- Si la placa és “zum”, comprova que l'interruptor estigui en \"ON\"\n2.- Desconnecta tots els components connectats i intenta tornar a pujar el programa.\n3.- Desconnecta l'USB de la placa i torna'l a connectar.\n4.- Prem el botó “reset” de la placa mentre prems \"carrega\" Deixa'l anar just abans que comenci a programar la placa","de-DE":"Es kann verschiedene Gründe haben, warum die Platine nicht erkannt wird. Hier listen wir dir einige davon auf. Gehe sie durch und sende uns eine Nachricht, wenn sie dennoch nicht erkannt werden sollte.\n1.- Wenn es sich um eine ZUM-Platine handelt, überprüfe, dass sich der Schalter in der \"ON\"-Stellung befindet\n2.- Trenne alle Komponenten und versuche erneut, das Programm zu laden\n3.- Löse das USB-Kabel von der Platine und verbinde sie erneut\n4.- Drücke die Reset-Taste der Platine während du auf \"laden\" klickst. Lass die Taste kurz bevor die Programmierung der Platine beginnt los.","en-GB":"The board may not be detected due to different problems. Try out the solutions listed below:\n1.- If the board you are using is a Zum, check that the switch is \"ON\".\n2.- Disconnect all the hardware components that may be connected and try to upload the program again.\n3.- Disconnect the board from the computer and connect it again. \n4.- Press the reset button while clicking on \"Load\". Release the reset button just before the programming starts.","es-ES":"Puede haber distintos problemas por los cuales no se detecta la placa. Aquí te listamos algunos. Pruébalos y si sigues sin que se te detecte, envíanos un mensaje.\n1.- Si la placa es una zum, comprueba que el interruptor está en \"ON\"\n2.- Desconecta todos los componentes conectados y prueba a subir el programa de nuevo\n3.- Desconecta el usb de la placa y vuelve a conectarla\n4.- Aprieta el botón de reset de la placa mientras le das a \"cargar\". Suéltalo justo antes de que comience a programar la placa","eu-ES":"Hainbat arrazoi daude plaka detektatu ahal ezizateko. Hemen dituzu batzuk. Proba itzazu eta detektatu ezinda jarraitzen baduzu, bidali iezaguzu mezu bat.\n1.- Plaka zum bat bada, egiaztatu etengailua \"ON\" posizioan dagoela\n2.- Konektatuta dauden osagai guztiak deskonektatu eta saiatu programa berriro igotzen\n3.- usb-a plakatik deskonektatu eta berriro konektatu\n4.- Sakatu plakaren \"reset\" botoia \"kargatu\" sakatzen duzun bitartean. Aska ezazu plaka programatzen hasi aurretik","fr-FR":"Ce problème peut avoir différentes causes. Voici quelques possibilités. Si le problème persiste, écris-nous.\n1.- Si tu utilises une carte ZUM, vérifie que l'interrupteur est sur la position ON.\n2.- Déconnecte tous les composants connectés et réessaie de charger le programme\n3.- Débranche le câble USB de la carte puis rebranche-le.\n4.- Appuie sur le bouton reset de ta carte tout en cliquant sur Charger. Relâche le bouton juste avant que ne démarre la programmation de la carte.","it-IT":"Possono esserci vari problemi per cui la scheda non viene rilevata. Eccone alcuni. Verificali e, se il problema continua, inviaci un messaggio.\n1.- Se si tratta di una scheda zum, verifica che l'interruttore sia su \"ON\"\n2.- Scollega tutti i componenti collegati e prova a caricare nuovamente il programma\n3.- Scollega il dispositivo usb dalla scheda e ricollegalo\n4.- Premi il pulsante di reset della scheda mentre avvii il \"caricamento\". Scollegalo appena prima che cominci a programmare la scheda","pt-PT":"Podem existir diferentes problemas que expliquem a não deteção da placa. Apresentamos alguns a seguir. Experimenta e se o problema persistir, envia-nos uma mensagem\n1.- Se a placa for uma zum, verifica se o interruptor está em \"ON\"\n2.- Desconecta todos os componentes conectados e tenta carregar novamente o programa\n3.- Desconecta o usb da placa e volte a conectá-la\n4.- Carrega no botão de reset da placa e clica ao mesmo tempo em \"carregar\". Solta-o imediatamente antes de começares a programar a placa","ru-RU":"Причины, по которым плата не обнаруживается, могут быть различными. Здесь мы приведем некоторые из них. Попробуйте эти варианты, и если плата по-прежнему не будет обнаруживаться, отправьте нам сообщение.\n1.- Если это ZUM-плата, проверьте, проверьте, стоит ли выключатель в положении «Вкл.»\n2.- Отсоедините все подключенные компоненты и попробуйте загрузить программу снова\n3.- Отключите USB от платы и снова подключите ее.\n4.- Нажмите кнопку перезагрузки на плате в процессе «загрузки» на нее. Отпустите ее непосредственно перед тем, как начнете программировать плату.","zh-CN":"板可能检测到的各种问题。我们列出一些在这里。试试吧，如果你仍然无法检测,请发送邮件。\n1.-如果该本是Zum,请检查开关置于“ON”\n2.-切断连接的部件，并再次测试程序\n3.-拔下USB板并重新连接\n4.- 压复位按钮，同时也压“负载”。编程板之前放开它"},"order":16});db.bitbloq_Faqs.insert({"title":{"ca-ES":"A la bq ZUM, no se m'engega l'LCD.","de-DE":"Die LCD der BQ ZUM schaltet sich nicht ein.","en-GB":"The LCD is not showing anything in the bq ZUM board","es-ES":"No se enciende el LCD cuando se conecta a la bq ZUM","eu-ES":"ZUM bq-an ez zait LCD-a pizten.","fr-FR":"L'écran LCD ne s'allume pas avec ma BQ ZUM","it-IT":"Nella bq ZUM, non si accende l'LCD","pt-PT":"Na bq ZUM, o LCD não acende","ru-RU":"На плате bq ZUM не загорается жидкокристаллический дисплей","zh-CN":"当连接到BQ ZUM上液晶不懂"},"content":{"ca-ES":"Assegura't que el botó “on/off” de la placa està connectat, perquè si no ho està, els components senzills sí que funcionen, però els que necessiten més potència, no funcionaran.","de-DE":"Vergewissere dich, dass die on/off-Taste der Platine verbunden ist. Ist dies nicht der Fall, funktionieren zwar die einfacheren Komponenten, aber diejenigen, die mehr Leistung benötigen, funktionieren nicht.","en-GB":"Check that the switch on the board is \"ON\". If it is \"OFF\", some components may work whereas others that need higher current will not.","es-ES":"Asegúrate de que el botón on/off de la placa está en posición on, de lo contrario, los componentes sencillos sí funcionarán, pero aquellos componentes que necesiten mayor potencia, no funcionarán.","eu-ES":"Egiaztatu plakaren on/off botoia konektatuta dagoela. Bestela, osagai sinpleak funtzionatuko dute, baina potentzia gehiago behar duten osagaiek ez.","fr-FR":"Vérifie que le bouton ON/OFF de ta carte est sur ON. Dans le cas contraire les composants de base fonctionnent mais ce n'est pas le cas des composants nécessitant plus de puissance.","it-IT":"Assicurati che il pulsante ON/OFF della scheda sia collegato: in caso contrario, i componenti semplici funzioneranno, ma non quelli che necessitino di una maggiore potenza.","pt-PT":"Verifica que o botão on/off da placa está conectado, no caso contrário, os componentes simples funcionam, mas os componentes que precisam de mais potência não.","ru-RU":"Удостоверьтесь, что кнопка вкл./выкл. на плате подключена, в противном случае простые компоненты будут работать, те же, которым требуется больше мощности, работать не будут.","zh-CN":"请确保在板的开/关按钮处于开的位置，否则，简单的组件会通,但那些需要更多的电力，组件无法正常工作。"},"order":17});db.bitbloq_Faqs.insert({"title":{"ca-ES":"No puc accedir a Google Plus amb Chrome.","de-DE":"Ich kann mich mit Chrome nicht über Google plus anmelden.","en-GB":"I cannot log in via Google using Chrome","es-ES":"No me deja acceder por Google plus con Chrome","eu-ES":"Ez dit uzten Chrome-rekin Google plus bitartez sartzen.","fr-FR":"Chrome ne me laisse pas me connecter via Google plus","it-IT":"Non riesco ad accedere a Google plus con Chrome","pt-PT":"Não consigo aceder através de Google plus com Chrome","ru-RU":"У меня не получается зайти через Google plus в браузере Chrome","zh-CN":"我不能跟Chrome 进如到Google plus "},"content":{"ca-ES":"Actualitza Chrome a la darrera versió. Si té actualitzacions pendents, és possible que no hi puguis accedir.","de-DE":"Aktualisiere Chrome auf die neueste Version. Bei ausstehenden Aktualisierungen ist möglicherweise kein Zugriff möglich.","en-GB":"Update your Chrome version to the latest. If Chrome has pending updates it may block your login.","es-ES":"Actualiza Chrome a la última versión, ya que si tiene actualizaciones pendientes, es posible que no te deje acceder.","eu-ES":"Chrome bertsioa eguneratu, eguneraketak egiteke baditu, baliteke sartzen ez uztea.,","fr-FR":"Mets à jour Chrome. Si tu as des mises à jour en attente, il est possible que tu n'arrives pas à te connecter.","it-IT":"Aggiorna Chrome all'ultima versione: se ci sono degli aggiornamenti in sospeso, è possibile che tu non riesca ad accedere. ","pt-PT":"Atualiza o Chrome para a última versão, uma vez que tem atualizações pendentes, é possível que não te deixe aceder.","ru-RU":"Обновите Chrome до последней версии, поскольку если у вас не самое последнее обновление, то возможно, что вам не удастся зайти.","zh-CN":"请升级Chrome到最新版本。如果有更新的版本，它不会让你访问。"},"order":18});db.bitbloq_Faqs.insert({"title":{"ca-ES":"Com es connecta l'LCD a la placa?","de-DE":"Wie verbindet man die LCD mit der Platine?","en-GB":"How can I connect the LCD to the board?","es-ES":"¿Cómo se conecta el LCD a la placa?","eu-ES":"Nola konektatzen da LCDa plakara?","fr-FR":"Comment dois-je connecter l'écran LCD à la carte ?","it-IT":"Come si collega l'LCD alla scheda?","pt-PT":"Como conectar o LCD à placa?","ru-RU":"Как подключить жидкокристаллический дисплей к плате?","zh-CN":"如何连接到液晶板？"},"content":{"ca-ES":"Has de connectar el cable de SCL al pin \"S\" analògic que s’indica a Bitbloq (a una bq ZUM, s’hauria de connectar al pin blau A5), després el cable SDA al pin \"S\" analògic  (a una bq ZUM seria el pin blau A4). El pin VCC es connecta a qualsevol pin analògic \"V\" i el pin GND es connecta a qualsevol pin analògic \"G\".","de-DE":"Du musst die Taktleitung SCL mit dem in Bitbloq angegebenen analogen Pin \"S\" verbinden (bei einer BQ ZUM wäre dies der blaue Pin A5), anschließend die Datenleitung SDA mit dem in Bitbloq angegebenen analogen Pin \"S\" (bei einer BQ ZUM wäre dies der blaue Pin A4).\nDer Pin VCC kann mit jedem analogen Pin \"V\" verbunden werden und der Pin GDN mit jedem analogen Pin \"G\".","en-GB":"Connect the SCL cable and the SDA cable to the \"S\" analog pins that are shown in Bitbloq. \nThe VCC pin is connected to any \"V\" analog pin and the GND pin to any \"G\" analog pin.","es-ES":"Tienes que conectar el cable de SCL al pin \"S\" analógico indicado en Bitbloq (en una bq ZUM, sería conectarlo al pin azul A5), después el cable SDA, en el pin \"S\" analógico indicado en Bitbloq (en una bq ZUM, sería en el pin azul A4).\nEl pin VCC se conecta a cualquier pin analógico \"V\" y el pin GND se conecta a cualquier pin analógico \"G\".","eu-ES":"SCL kablea bitbloq-en adierazitako \"S\" pin analogikora konektatu behar duzu (ZUM bq batean, A5 pin urdinera konektatu beharko litzateke). Gero, SDA kablea bitbloq-en adierazitako \"S\" pin analogikora (ZUM bq batean A4 pin urdina izango litzateke).\nVCC pina edozein \"V\" pin analogikora konektatzen da eta GND pina edozein \"G\" pin analogikora. ","fr-FR":"Connecte le câble SCL à la broche analogique S indiquée sur Bitbloq (dans le cas d'une BQ ZUM, il s'agit de la broche bleue A5), puis le câble SDA à la broche analogique S indiquée sur Bitbloq (dans le cas d'une BQ ZUM, il s'agit de la broche bleue A4).\nTu peux connecter la broche VCC à n'importe quelle broche analogique V et tu peux connecter la broche GND à n'importe quelle broche analogique G.","it-IT":"Devi collegare il cavo SCL al pin \"S\" analogico indicato in Bitbloq (in una bq ZUM, bisognerebbe collegarlo al pin blu A5), poi il cavo SDA al pin \"S\" analogico indicato in Bitbloq (in una bq ZUM, bisognerebbe collegarlo al pin blu A4).\nIl pin VCC si collega a qualsiasi pin analogico \"V\" e il pin GND a qualsiasi pin analogico \"G\".","pt-PT":"Conecta o cabo de SCL ao pino \"S\" analógico indicado no Bitbloq (numa bq ZUM, seria conectá-lo ao pino azul A5), a seguir, o cabo SDA no pino \"S\" analógico indicado no Bitbloq (numa bq ZUM, seria no pino azul A4).\\No pino VCC é possível conectar qualquer pino analógico \"V\" e o pino GND pode ser conectado a qualquer pino analógico \"G\".","ru-RU":"Вам необходимо подключить кабель SCL к указанному на Bitbloq аналоговому выходу «S» (в случае с платой bq ZUM следует подключить его к выходу A5 синего цвета), затем подключить кабель SDA к указанному на Bitbloq аналоговому выходу «S» (в случае с платой bq ZUM это будет синий выход A4).\nВыход VCC подключается к любому аналоговому выходу «V», а выход GND – любому аналоговому выходу «G».","zh-CN":"你必须连接线SCL引脚“S”模拟显示在Bitbloq(在BQ ZUM ，将连接蓝针A5), 然后在销的“S”模拟的SDA电缆指出Bitbloq(在BQ ZUM ，将连接蓝针A4)。\nVCC引脚连接到任何“V”模拟针和GND引脚连接到任何“G”模拟针。"},"order":19});db.bitbloq_Faqs.insert({"title":{"ca-ES":"La placa LCD mostra caràcters estranys.","de-DE":"Auf der LCD-Anzeige erscheinen seltsame Zeichen ","en-GB":"The LCD is showing strange characters","es-ES":"La placa LCD me muestra caracteres raros","eu-ES":"LCD plakak karaktere arraroak erakusten dizkit","fr-FR":"L'écran LCD affiche de drôles de caractères ","it-IT":"La scheda LCD visualizza caratteri strani","pt-PT":"Aparecem caráteres estranhos na placa LCD","ru-RU":"Жидкокристаллический дисплей на плате показывает странные символы","zh-CN":"液晶显示屏上显示一些奇怪的字符板"},"content":{"ca-ES":"Hi ha dues possible causes que poden fer que l'LCD mostri caràcters estranys en lloc dels que hem programat: \n1.- L'LCD no accepta l'escriptura d'alguns caràcters especials com ara \"¡\", \"¿\" o \"ñ\", o de caràcters accentuats. Si els fem servir, apareixeran caràcters estranys.\n2.- Comprova que l’interruptor de la part posterior de l'LCD està en la posició\"IIC\". Si no ho està, apareixen caràcters estranys.","de-DE":"Es gibt zwei Möglichkeiten, warum die LCD seltsame Zeichen angibt anstelle derer, die wir programmiert haben:\n1.-Die LCD akzeptiert keine Sonderzeichen wie ä, ü, ö oder ß. Schreiben wir sie, erscheinen seltsame Zeichen.\n2.-Überprüfe, dass der Schalter auf der Rückseite der LCD auf \"IIC\" steht. Ist dies nicht der Fall, erscheinen seltsame Zeichen.","en-GB":"The LCD may show strange characters when: \n1.- We are trying to write special characteres such as  “¡”, “¿” o “ñ” or accented characters. \n2.- The switch behind the LCD is in \"ISP\". Change it to \"IIC\" and reset the board for it to work correctly.","es-ES":"Hay dos posibles causas por la cual el LCD muestra caracteres extraños en vez de los que le hemos programado:\n1.- El LCD no acepta la escritura de ciertos caracteres especiales tales como “¡”, “¿” o “ñ” o caracteres acentuados. Si los escribimos, aparecerán caracteres raros.\n2.- Comprueba que el interruptor de la parte trasera del LCD está en \"IIC\". Si no lo está, aparecen caracteres extraños.","eu-ES":"Bi dira LCD-ak guk programatu ditugun karaktereen ordez karaktere arraroak erakustea eagin ditzaketen arrazoiak:\n1.- LCD-ak ez du hainbat karaktere berezi idaztea onartzen, esaterako, \"¡\", \"¿\" edo \"ñ\", edo azentua daramatenak. Idazten baditugu, karaktere arraroak ikusiko dira.\n2.- LCD-aren atzeko aldean dagoen etengailua \"IIC\" posizioan dagoela egiaztatu. Hala ez badago, karaktere arraroak agertuko dira.","fr-FR":"Il y a deux explications à cela : \n1.- L'écran LCD n'accepte pas certains caractères spéciaux, par exemple les caractères accentués. Il les remplace par des caractères étranges. \n2.- L'interrupteur situé à l'arrière de l'écran LCD doit être sur la position IIC. Sinon de drôles de caractères apparaissent !","it-IT":"Se l'LCD mostra caratteri strani, diversi da quelli programmati, possono esserci due cause:\n1.- L'LCD non accetta alcuni caratteri speciali come “¡”, “¿” o “ñ” o caratteri accentati. In uno di questi casi, apparirano caratteri strani.\n2.- Verifica che l'interruttore posteriore dell'LCD sia su \"IIC\". In caso contrario, appariranno caratteri strani.","pt-PT":"Existem duas causas possíveis pela quais podem aparecer caráteres estranhos no LCD em vez dos que foram programados:\n1.- O LCD não aceita a escrita de certos caráteres especiais tais como “¡”, “¿” ou “ñ” ou caráteres acentuados. Se forem usados, aparecem caráteres estranhos.\n2.- Verifica que o interruptor da parte traseira do LCD está em \"IIC\". Se não for o caso, aparecem caráteres estranhos.","ru-RU":"Есть две возможные причины, по которым жидкокристаллический дисплей отображает непонятные символы вместо тех, которые мы запрограммировали:\n1.- Жидкокристаллический дисплей не воспринимает написание некоторых специальных символов типа “¡”, “¿” или “ñ” или символов с диакритическими знаками. В случае их использования появятся непонятные символы.\n2.- Удостоверьтесь, что переключатель в задней части ЖКД установлен в положение «IIC». В противном случае будут появляться непонятные символы.","zh-CN":"屏幕显示奇怪的字符有两个可能的原因:\n1.-液晶不接受某些特殊字符，如“¡”, “¿” o “ñ或重音符号。如果我们写这些,会出现奇怪的字符。\n2.-检查在LCD的背面的开关是“IIC”。如果没有,会出现奇怪的字符。"},"order":20});

db.bitbloq_Bloqs.remove({});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "arrayClassVariable",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-array-class-variable",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-array-class-variable-variable"
      },
      {
        "id": "VAR",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "["
      },
      {
        "id": "POSITION",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "]"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "objects"
      }
    ]
  ],
  "code": "{CLASS}.{VAR}[{POSITION}]",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "VAR",
    "pointer": "true",
    "options": "softwareVars"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "class",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-class",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-class"
      },
      {
        "id": "NAME",
        "alias": "varInput",
        "placeholder": "bloq-class-default"
      }
    ]
  ],
  "createDynamicContent": "classes",
  "code": "class {NAME}{{STATEMENTS}};",
  "hCode": "class {NAME}{{STATEMENTS}};",
  "cppCode": "",
  "returnType": {
    "type": "simple",
    "value": "class"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "classChildren",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-class-children",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-class"
      },
      {
        "id": "NAME",
        "alias": "varInput",
        "placeholder": "bloq-class-default"
      },
      {
        "alias": "text",
        "value": "bloq-class-inheritance-type"
      },
      {
        "id": "TYPE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-class-inheritance-public",
            "value": "public"
          },
          {
            "label": "bloq-class-inheritance-protected",
            "value": "protected"
          },
          {
            "label": "bloq-class-inheritance-private",
            "value": "private"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-class-from"
      },
      {
        "id": "PARENT",
        "alias": "dynamicDropdown",
        "options": "classes"
      }
    ]
  ],
  "createDynamicContent": "classes",
  "code": "class {NAME} : public {PARENT}{{STATEMENTS}};",
  "hCode": "class {NAME}: public {PARENT}{{STATEMENTS}};",
  "cppCode": "",
  "returnType": {
    "type": "simple",
    "value": "class"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "constructorClass",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-constructor",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-constructor"
      }
    ]
  ],
  "code": "{CLASS-OUTSIDE}(){{STATEMENTS}};",
  "hCode": "{CLASS-OUTSIDE} ();",
  "cppCode": "{CLASS-OUTSIDE} :: {CLASS-OUTSIDE} (){{STATEMENTS}};"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "constructorClassArguments",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "745cdc68-610d-4dc7-8082-e3b183178f90"
    }
  ],
  "bloqClass": "bloq-constructor-arguments",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-constructor-arguments"
      },
      {
        "bloqInputId": "ARGS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "745cdc68-610d-4dc7-8082-e3b183178f90"
      }
    ]
  ],
  "code": "{CLASS-OUTSIDE} ({ARGS}){{STATEMENTS}};",
  "hCode": "{CLASS-OUTSIDE} ({ARGS});",
  "cppCode": "{CLASS-OUTSIDE} :: {CLASS-OUTSIDE} ({ARGS}){{STATEMENTS}};"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "includeLib",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-include-lib",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-include-lib-exec"
      },
      {
        "id": "LIB",
        "alias": "dynamicDropdown",
        "options": "libraries"
      }
    ]
  ],
  "code": "#include \"{LIB}\";"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "invokeArgumentsClass",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "b12ab8ea-cd4e-4e1e-9a41-5ce51fefd459"
    }
  ],
  "bloqClass": "bloq-invoke-arguments-class",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-arguments-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "classes"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-arguments-class-name"
      },
      {
        "id": "NAME",
        "alias": "varInput",
        "value": ""
      },
      {
        "alias": "text",
        "value": "bloq-invoke-arguments-args"
      },
      {
        "bloqInputId": "ARGS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "b12ab8ea-cd4e-4e1e-9a41-5ce51fefd459"
      }
    ]
  ],
  "createDynamicContent": "objects",
  "code": "{CLASS} {NAME}({ARGS});",
  "returnType": {
    "type": "simple",
    "value": "var"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "invokeClass",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-invoke-class",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "classes"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-name"
      },
      {
        "id": "NAME",
        "alias": "varInput",
        "value": ""
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "classes"
      }
    ]
  ],
  "createDynamicContent": "objects",
  "code": "{CLASS} {NAME};",
  "returnType": {
    "type": "simple",
    "value": "var"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "invokeClassFunction",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-invoke-class-function",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-exec"
      },
      {
        "id": "FUNCTION",
        "alias": "dynamicDropdown",
        "options": "voidFunctions"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "objects"
      }
    ]
  ],
  "code": "{CLASS}.{FUNCTION}();",
  "dynamicDropdown": {
    "idDropdown": "FUNCTION",
    "options": "voidFunctions"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "invokeClassFunctionWithArguments",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "dca70436-e5a0-4c25-96cd-ca9fd6a831df"
    }
  ],
  "bloqClass": "bloq-invoke-class-function-args",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-exec"
      },
      {
        "id": "FUNCTION",
        "alias": "dynamicDropdown",
        "options": "voidFunctions"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "objects"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-args"
      },
      {
        "bloqInputId": "ARGS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "dca70436-e5a0-4c25-96cd-ca9fd6a831df"
      }
    ]
  ],
  "code": "{CLASS}.{FUNCTION}({ARGS});",
  "dynamicDropdown": {
    "idDropdown": "FUNCTION",
    "options": "voidFunctions"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "invokeClassReturnFunction",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-invoke-class-return-function",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-class-return-function-exec"
      },
      {
        "id": "FUNCTION",
        "alias": "dynamicDropdown",
        "options": "returnFunctions"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "objects"
      }
    ]
  ],
  "code": "{CLASS}.{FUNCTION}()",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "FUNCTION",
    "options": "returnFunctions"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "invokeClassReturnFunctionWithArguments",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "d694d1d5-8513-4b00-a6cd-d482066a9ea4"
    }
  ],
  "bloqClass": "bloq-invoke-class-return-function",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-class-return-function-args-exec"
      },
      {
        "id": "FUNCTION",
        "alias": "dynamicDropdown",
        "options": "returnFunctions"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-return-function-args-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "objects"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-return-function-args-args"
      },
      {
        "bloqInputId": "ARGS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "d694d1d5-8513-4b00-a6cd-d482066a9ea4"
      }
    ]
  ],
  "code": "{CLASS}.{FUNCTION}({ARGS});",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "FUNCTION",
    "options": "returnFunctions"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "private",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-private",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-private"
      }
    ]
  ],
  "code": "private : {STATEMENTS}",
  "hCode": "private : {STATEMENTS}",
  "cppCode": ""
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "protected",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-protected",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-protected"
      }
    ]
  ],
  "code": "protected : {STATEMENTS}",
  "hCode": "protected : {STATEMENTS}",
  "cppCode": ""
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "public",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-public",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-public"
      }
    ]
  ],
  "code": "public : {STATEMENTS}",
  "hCode": "public : {STATEMENTS}",
  "cppCode": ""
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "selectClassVariable",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-select-class-variable",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-select-class-variable-variable"
      },
      {
        "id": "VAR",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "objects"
      }
    ]
  ],
  "code": "{CLASS}.{VAR}",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "VAR",
    "options": "softwareVars"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "setClassArrayVariable",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": {
        "type": "fromDynamicDropdown",
        "idDropdown": "NAME",
        "pointer": "true",
        "options": "softwareVars"
      },
      "name": "3c7c0894-0e0a-443c-a539-21c39a01fd17"
    }
  ],
  "bloqClass": "bloq-set-class-variableArray",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-set-class-variableArray-variable"
      },
      {
        "id": "NAME",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "["
      },
      {
        "id": "ITERATOR",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "]"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "objects"
      },
      {
        "alias": "text",
        "value": "="
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": {
          "type": "fromDynamicDropdown",
          "idDropdown": "NAME",
          "pointer": "true",
          "options": "softwareVars"
        },
        "name": "3c7c0894-0e0a-443c-a539-21c39a01fd17"
      }
    ]
  ],
  "code": "{CLASS}.{NAME}[{ITERATOR}] = {VALUE};"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "setClassVariable",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": {
        "type": "fromDynamicDropdown",
        "idDropdown": "NAME",
        "options": "softwareVars"
      },
      "name": "d05a1bcd-2cd6-4029-8912-c98f06679d8f"
    }
  ],
  "bloqClass": "bloq-set-class-variable",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-set-class-variable-variable"
      },
      {
        "id": "NAME",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-class-function-class"
      },
      {
        "id": "CLASS",
        "alias": "dynamicDropdown",
        "options": "objects"
      },
      {
        "alias": "text",
        "value": "="
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": {
          "type": "fromDynamicDropdown",
          "idDropdown": "NAME",
          "options": "softwareVars"
        },
        "name": "d05a1bcd-2cd6-4029-8912-c98f06679d8f"
      }
    ]
  ],
  "code": "{CLASS}.{NAME} = {VALUE};"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "code",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-code",
  "content": [
    [
      {
        "id": "CODE",
        "alias": "multilineCodeInput",
        "value": "",
        "placeholder": "bloq-code-writeYourCode"
      }
    ]
  ],
  "code": "{CODE}\n"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "comment",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-comment",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-comment-comment"
      },
      {
        "id": "COMMENT",
        "alias": "multilineCodeInput",
        "placeholder": "bloq-comment-default"
      }
    ]
  ],
  "code": "/*\n{COMMENT}\n*/"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "enableInterrupt",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-enable-interrupt",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-enable-interrupt"
      },
      {
        "id": "FUNC",
        "alias": "dynamicDropdown",
        "options": "voidFunctions"
      },
      {
        "alias": "text",
        "value": "bloq-enable-interrupt-pin"
      },
      {
        "id": "PIN",
        "alias": "dynamicDropdown",
        "options": "varComponents"
      },
      {
        "id": "STATE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-enable-interrupt-rising",
            "value": "RISING"
          },
          {
            "label": "bloq-enable-interrupt-falling",
            "value": "FALLING"
          },
          {
            "label": "bloq-enable-interrupt-change",
            "value": "CHANGE"
          }
        ]
      }
    ]
  ],
  "code": "enableInterrupt({PIN}, {FUNC}, {STATE});"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "convert",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "number",
      "name": "8bc07257-4f5a-4761-ad2e-46dcf157732d"
    }
  ],
  "bloqClass": "bloq-convert",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-convert-convert"
      },
      {
        "bloqInputId": "NUMBER",
        "alias": "bloqInput",
        "acceptType": "number",
        "name": "8bc07257-4f5a-4761-ad2e-46dcf157732d"
      },
      {
        "alias": "text",
        "value": "bloq-convert-to"
      },
      {
        "id": "TYPE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-convert-dec",
            "value": "DEC"
          },
          {
            "label": "bloq-convert-hex",
            "value": "HEX"
          },
          {
            "label": "bloq-convert-oct",
            "value": "OCT"
          },
          {
            "label": "bloq-convert-bin",
            "value": "BIN"
          }
        ]
      }
    ]
  ],
  "code": "({NUMBER},{TYPE});",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "serialSend",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "7b2fcc9b-ad78-49d4-80fe-22aafee56e15"
    }
  ],
  "bloqClass": "bloq-serial-send",
  "content": [
    [
      {
        "id": "SERIAL",
        "alias": "dynamicDropdown",
        "options": "serialElements"
      },
      {
        "alias": "text",
        "value": "bloq-serial-send-send"
      },
      {
        "bloqInputId": "DATA",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "7b2fcc9b-ad78-49d4-80fe-22aafee56e15"
      },
      {
        "id": "FUNCTION",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-serial-send-println",
            "value": "println"
          },
          {
            "label": "bloq-serial-send-print",
            "value": "print"
          }
        ]
      }
    ]
  ],
  "code": "{SERIAL}.{FUNCTION}({DATA});"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "serialReceive",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-serial-receiver",
  "content": [
    [
      {
        "id": "SERIAL",
        "alias": "dynamicDropdown",
        "options": "serialElements"
      },
      {
        "alias": "text",
        "value": "bloq-serial-receiver-receive"
      }
    ]
  ],
  "code": "{SERIAL}.readString()",
  "returnType": {
    "type": "simple",
    "value": "String"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "serialSend-v1",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "339cdcc9-8be5-49b5-b4bb-fb64f5ec573c"
    }
  ],
  "bloqClass": "bloq-serial-send",
  "content": [
    [
      {
        "id": "SERIAL",
        "alias": "dynamicDropdown",
        "options": "serialElements"
      },
      {
        "alias": "text",
        "value": "bloq-serial-send-send"
      },
      {
        "bloqInputId": "DATA",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "339cdcc9-8be5-49b5-b4bb-fb64f5ec573c"
      },
      {
        "id": "LN",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-serial-send-println",
            "value": "println"
          },
          {
            "label": "bloq-serial-send-print",
            "value": "print"
          }
        ]
      }
    ]
  ],
  "code": "{SERIAL}.{LN}({DATA});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "rgbLed",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-rgbLed",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-rgbLed"
      },
      {
        "id": "LED",
        "alias": "dynamicDropdown",
        "options": "rgbs"
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-red"
      },
      {
        "id": "RED",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-green"
      },
      {
        "id": "GREEN",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-blue"
      },
      {
        "id": "BLUE",
        "alias": "numberInput",
        "value": 0
      }
    ]
  ],
  "code": "{LED}.setRGBcolor({RED},{GREEN},{BLUE});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "rgbLedFade",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-rgbLed-fade",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-rgbLed-fade"
      },
      {
        "id": "LED",
        "alias": "dynamicDropdown",
        "options": "rgbs"
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-fade-red"
      },
      {
        "id": "RED",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-fade-green"
      },
      {
        "id": "GREEN",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-fade-blue"
      },
      {
        "id": "BLUE",
        "alias": "numberInput",
        "value": 0
      }
    ]
  ],
  "code": "{LED}.crossFade({RED},{GREEN},{BLUE});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "rgbLedSimple",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-rgbLed-simple",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-rgbLed-simple"
      },
      {
        "id": "LED",
        "alias": "dynamicDropdown",
        "options": "rgbs"
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-simple-color"
      },
      {
        "id": "COLOR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-rgbLed-simple-white",
            "value": "255,255,255"
          },
          {
            "label": "bloq-rgbLed-simple-yellow",
            "value": "255,255,0"
          },
          {
            "label": "bloq-rgbLed-simple-orange",
            "value": "200,50,0"
          },
          {
            "label": "bloq-rgbLed-simple-red",
            "value": "255,0,0"
          },
          {
            "label": "bloq-rgbLed-simple-green",
            "value": "0,255,0"
          },
          {
            "label": "bloq-rgbLed-simple-dark-green",
            "value": "0,60,102"
          },
          {
            "label": "bloq-rgbLed-simple-blue",
            "value": "40,40,255"
          },
          {
            "label": "bloq-rgbLed-simple-dark-blue",
            "value": "0,0,255"
          },
          {
            "label": "bloq-rgbLed-simple-pink",
            "value": "255,0,255"
          }
        ]
      }
    ]
  ],
  "code": "{LED}.setRGBcolor({COLOR});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "rgbLedAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "8edee640-2909-41f8-bda1-dbe5843bd82e"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "95688c4a-4861-410b-91bd-5ad9573b584e"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "95e4f0c0-09ad-4f68-9e62-15dd14271733"
    }
  ],
  "bloqClass": "bloq-rgbLed-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-rgbLed"
      },
      {
        "id": "LED",
        "alias": "dynamicDropdown",
        "options": "rgbs"
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-red"
      },
      {
        "bloqInputId": "RED",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "8edee640-2909-41f8-bda1-dbe5843bd82e"
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-green"
      },
      {
        "bloqInputId": "GREEN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "95688c4a-4861-410b-91bd-5ad9573b584e"
      },
      {
        "alias": "text",
        "value": "bloq-rgbLed-blue"
      },
      {
        "bloqInputId": "BLUE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "95e4f0c0-09ad-4f68-9e62-15dd14271733"
      }
    ]
  ],
  "code": "{LED}.setRGBcolor({RED},{GREEN},{BLUE});"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "analogReadAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "9cdc6c06-14f8-4083-af73-7b74efb22eaf"
    }
  ],
  "bloqClass": "bloq-analog-read-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-analog-read-advanced-readpin"
      },
      {
        "bloqInputId": "PIN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "9cdc6c06-14f8-4083-af73-7b74efb22eaf"
      }
    ]
  ],
  "code": "'{PIN}'.indexOf('A') !== -1 ? 'analogRead({PIN})'.replace(/\"/g, '') : 'analogRead({PIN})'",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "analogWrite",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "d31fc06c-fd52-49b9-be6b-85a7954314be"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "43b65e63-488c-4ef0-b004-72c82ef2f613"
    }
  ],
  "bloqClass": "bloq-pin-writte-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-pin-analog-write"
      },
      {
        "bloqInputId": "PIN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "d31fc06c-fd52-49b9-be6b-85a7954314be"
      },
      {
        "alias": "text",
        "value": "bloq-pin-analog-write-data"
      },
      {
        "bloqInputId": "DATA",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "43b65e63-488c-4ef0-b004-72c82ef2f613"
      }
    ]
  ],
  "code": "'{PIN}'.indexOf('A') !== -1 ? 'analogWrite({PIN},{DATA});'.replace(/\"/g, '') : 'analogWrite({PIN},{DATA});'"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "buzzerAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "297b780a-376c-461e-be14-ae7763668e42"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "7c04f678-8c4a-425d-835b-780ca832710b"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "cf9f77b6-de5e-4c43-a54f-9fd3184e2d74"
    }
  ],
  "bloqClass": "bloq-buzzer-advance",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-buzzer-advance-sound"
      },
      {
        "bloqInputId": "BUZZER",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "297b780a-376c-461e-be14-ae7763668e42"
      },
      {
        "alias": "text",
        "value": "bloq-buzzer-advance-note"
      },
      {
        "bloqInputId": "NOTE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "7c04f678-8c4a-425d-835b-780ca832710b"
      },
      {
        "alias": "text",
        "value": "bloq-buzzer-advance-for"
      },
      {
        "bloqInputId": "SECONDS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "cf9f77b6-de5e-4c43-a54f-9fd3184e2d74"
      },
      {
        "alias": "text",
        "value": "bloq-buzzer-advance-ms"
      }
    ]
  ],
  "code": "tone({BUZZER},{NOTE},{SECONDS});\ndelay({SECONDS});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "continuousServoStartAdvanced-v1",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "361dd83c-d4ec-4721-8264-8d4a4ad04b8c"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "698b63da-454c-4de8-bdec-ca716b4aad05"
    }
  ],
  "bloqClass": "bloq-continuous-servo-start-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-continuous-servo-start-advanced-turn"
      },
      {
        "bloqInputId": "SERVO",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "361dd83c-d4ec-4721-8264-8d4a4ad04b8c"
      },
      {
        "alias": "text",
        "value": "bloq-continuous-servo-start-advanced-direction"
      },
      {
        "bloqInputId": "DIRECTION",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "698b63da-454c-4de8-bdec-ca716b4aad05"
      }
    ]
  ],
  "code": "{SERVO}.write({DIRECTION});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "continuousServoStopAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "9e9d2ac6-4207-4776-b0e0-8b129ff192d0"
    }
  ],
  "bloqClass": "bloq-continuous-servo-stop-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-continuous-servo-stop-advanced-stop"
      },
      {
        "bloqInputId": "SERVO",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "9e9d2ac6-4207-4776-b0e0-8b129ff192d0"
      }
    ]
  ],
  "code": "{SERVO}.write(90);"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "digitalReadAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "83ccc252-bea3-48e4-af5c-44a54fac03aa"
    }
  ],
  "bloqClass": "bloq-digital-read-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-digital-read-advanced-readpin"
      },
      {
        "bloqInputId": "PIN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "83ccc252-bea3-48e4-af5c-44a54fac03aa"
      }
    ]
  ],
  "code": "digitalRead({PIN})",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "digitalWrite",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "ccfb109a-a844-4f36-8cd3-2162cb389214"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "368968af-2b7b-458a-a58c-9e4dc9d7af41"
    }
  ],
  "bloqClass": "bloq-pin-writte-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-pin-digital-write"
      },
      {
        "bloqInputId": "PIN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "ccfb109a-a844-4f36-8cd3-2162cb389214"
      },
      {
        "alias": "text",
        "value": "bloq-pin-digital-write-data"
      },
      {
        "bloqInputId": "DATA",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "368968af-2b7b-458a-a58c-9e4dc9d7af41"
      }
    ]
  ],
  "code": "digitalWrite({PIN},{DATA});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "lcdTurnOnOffAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "de73a751-ffe0-4a4c-8c5f-48415d9430fa"
    }
  ],
  "bloqClass": "bloq-lcd-turn-on-off-advanced",
  "content": [
    [
      {
        "id": "STATE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-lcd-turn-on-off-advanced-turnon",
            "value": "HIGH"
          },
          {
            "label": "bloq-lcd-turn-on-off-advanced-turnoff",
            "value": "LOW"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-lcd-turn-on-off-advanced-lcdLigth"
      },
      {
        "bloqInputId": "LCD",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "de73a751-ffe0-4a4c-8c5f-48415d9430fa"
      }
    ]
  ],
  "code": "{LCD}.setBacklight({STATE});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "lcdWriteAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "94a4fea7-0be0-4e35-a89c-6da15794be04"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "cf8b1584-0849-4d51-a02d-d25200441c4c"
    }
  ],
  "bloqClass": "bloq-lcd-writte-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-lcd-writte-advanced-write"
      },
      {
        "bloqInputId": "TEXT",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "94a4fea7-0be0-4e35-a89c-6da15794be04"
      },
      {
        "alias": "text",
        "value": "bloq-lcd-writte-advanced-inLCD"
      },
      {
        "bloqInputId": "LCD",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "cf8b1584-0849-4d51-a02d-d25200441c4c"
      }
    ]
  ],
  "code": "{LCD}.print({TEXT});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "lcdWritePositionAdvanced-v1",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "ec0d1cc3-577f-4c7b-acde-e45d04cc5fa6"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "f370b11a-6f82-42aa-b150-c83a9825f326"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "f14e76c6-2f22-433c-94da-fa812f5a921d"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "4271f6be-7d2e-4aac-8b0b-e2c424b6a5f9"
    }
  ],
  "bloqClass": "bloq-lcd-writte",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-lcd-writte-write"
      },
      {
        "bloqInputId": "TEXT",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "ec0d1cc3-577f-4c7b-acde-e45d04cc5fa6"
      },
      {
        "alias": "text",
        "value": "bloq-lcd-writte-inLCD"
      },
      {
        "bloqInputId": "LCD",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "f370b11a-6f82-42aa-b150-c83a9825f326"
      },
      {
        "alias": "text",
        "value": "bloq-lcd-writte-advanced-inPosition"
      },
      {
        "bloqInputId": "COLUMN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "f14e76c6-2f22-433c-94da-fa812f5a921d"
      },
      {
        "bloqInputId": "ROW",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "4271f6be-7d2e-4aac-8b0b-e2c424b6a5f9"
      }
    ]
  ],
  "code": "{LCD}.setCursor({COLUMN},{ROW});{LCD}.print({TEXT});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "ledAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "588e737d-455d-4c2e-8489-181b2fc8bb19"
    }
  ],
  "bloqClass": "bloq-led-advanced",
  "content": [
    [
      {
        "id": "STATE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-led-advanced-turnon",
            "value": "HIGH"
          },
          {
            "label": "bloq-led-advanced-turnoff",
            "value": "LOW"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-led-advanced-theLED"
      },
      {
        "bloqInputId": "LED",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "588e737d-455d-4c2e-8489-181b2fc8bb19"
      }
    ]
  ],
  "code": "digitalWrite({LED},{STATE});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "oscillatorAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "eceb00e6-8aae-4ea2-b7ff-ff624f3afaaa"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "8e031d0e-3ea3-4c81-8e93-a6565f361d97"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "8732bd4a-f765-43a1-b05e-7c80989705f0"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "fddda392-a338-4086-a2a1-6d2ccebda6d1"
    }
  ],
  "bloqClass": "bloq-oscillator-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-oscillator-advanced-oscillate"
      },
      {
        "bloqInputId": "OSCILLATOR",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "eceb00e6-8aae-4ea2-b7ff-ff624f3afaaa"
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-advanced-around"
      },
      {
        "bloqInputId": "PHASE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "8e031d0e-3ea3-4c81-8e93-a6565f361d97"
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-advanced-amplitude"
      },
      {
        "bloqInputId": "AMPLITUDE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "8732bd4a-f765-43a1-b05e-7c80989705f0"
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-advanced-speed"
      },
      {
        "bloqInputId": "SPEED",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "fddda392-a338-4086-a2a1-6d2ccebda6d1"
      }
    ]
  ],
  "code": "{OSCILLATOR}.SetO({PHASE});\n{OSCILLATOR}.SetA({AMPLITUDE});\n{OSCILLATOR}.SetT({SPEED});\n{OSCILLATOR}.refresh();"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "oscillatorStartAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "cf186810-1e66-4193-89c6-2554032e0e60"
    }
  ],
  "bloqClass": "bloq-oscillator-start-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-oscillator-start-advanced-oscillator"
      },
      {
        "bloqInputId": "OSCILLATOR",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "cf186810-1e66-4193-89c6-2554032e0e60"
      }
    ]
  ],
  "code": "{OSCILLATOR}.start()"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "oscillatorStopAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "5545ee8e-0536-4a69-bb61-b0792dcc4761"
    }
  ],
  "bloqClass": "bloq-oscillator-stop-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-oscillator-stop-advanced-stop"
      },
      {
        "bloqInputId": "OSCILLATOR",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "5545ee8e-0536-4a69-bb61-b0792dcc4761"
      }
    ]
  ],
  "code": "{OSCILLATOR}.stop()"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "pinReadAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "7e6b0987-681b-4e76-a5b0-531fceda55d4"
    }
  ],
  "bloqClass": "bloq-pin-read-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-pin-read-advanced-readpin"
      },
      {
        "bloqInputId": "PIN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "7e6b0987-681b-4e76-a5b0-531fceda55d4"
      }
    ]
  ],
  "code": "'{PIN}'.indexOf('A') !== -1 ? 'analogRead({PIN})' : 'digitalRead({PIN})'",
  "returnType": {
    "type": "simple",
    "value": "bool"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "readSensorAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "fc83b620-7d6b-4e54-bd3d-1fc07443be61"
    }
  ],
  "bloqClass": "bloq-read-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-read-advanced-read"
      },
      {
        "bloqInputId": "PIN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "fc83b620-7d6b-4e54-bd3d-1fc07443be61"
      }
    ]
  ],
  "code": "{SENSOR.type}",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "SENSOR",
    "options": "sensors"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "clockRTCAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-rtc-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-rtc-advanced"
      },
      {
        "id": "FUNCTION",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-rtc-hour",
            "value": "getHour"
          },
          {
            "label": "bloq-rtc-minute",
            "value": "getMinute"
          },
          {
            "label": "bloq-rtc-second",
            "value": "getSecond"
          },
          {
            "label": "bloq-rtc-day",
            "value": "getDay"
          },
          {
            "label": "bloq-rtc-month",
            "value": "getMonth"
          },
          {
            "label": "bloq-rtc-year",
            "value": "getYear"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-rtc-using-advanced"
      },
      {
        "id": "RTC",
        "alias": "dynamicDropdown",
        "options": "clocks"
      }
    ]
  ],
  "code": "{RTC}.{FUNCTION}()",
  "returnType": {
    "type": "simple",
    "value": "int"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "servoNormalAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "67943a65-5711-45f0-93aa-fb113682c14f"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "6409a1fe-ac6d-4838-be66-4bb672afafec"
    }
  ],
  "bloqClass": "bloq-servo-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-servo-advanced-move"
      },
      {
        "bloqInputId": "SERVO",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "67943a65-5711-45f0-93aa-fb113682c14f"
      },
      {
        "alias": "text",
        "value": "bloq-servo-advanced-to"
      },
      {
        "bloqInputId": "POSITION",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "6409a1fe-ac6d-4838-be66-4bb672afafec"
      },
      {
        "alias": "text",
        "value": "bloq-servo-advanced-degrees"
      }
    ]
  ],
  "code": "{SERVO}.write({POSITION});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "buzzer",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-buzzer",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-buzzer-sound"
      },
      {
        "id": "BUZZER",
        "alias": "dynamicDropdown",
        "options": "buzzers"
      },
      {
        "alias": "text",
        "value": "bloq-buzzer-note"
      },
      {
        "id": "NOTE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-buzzer-do",
            "value": "261"
          },
          {
            "label": "bloq-buzzer-re",
            "value": "293"
          },
          {
            "label": "bloq-buzzer-mi",
            "value": "329"
          },
          {
            "label": "bloq-buzzer-fa",
            "value": "349"
          },
          {
            "label": "bloq-buzzer-sol",
            "value": "392"
          },
          {
            "label": "bloq-buzzer-la",
            "value": "440"
          },
          {
            "label": "bloq-buzzer-si",
            "value": "494"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-buzzer-for"
      },
      {
        "id": "SECONDS",
        "alias": "numberInput",
        "value": 2000
      },
      {
        "alias": "text",
        "value": "bloq-buzzer-ms"
      }
    ]
  ],
  "code": "tone({BUZZER},{NOTE},{SECONDS});\ndelay({SECONDS});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "continuousServoStart",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-continuous-servo-start",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-continuous-servo-start-turn"
      },
      {
        "id": "SERVO",
        "alias": "dynamicDropdown",
        "options": "continuousServos"
      },
      {
        "alias": "text",
        "value": "bloq-continuous-servo-start-direction"
      },
      {
        "id": "DIRECTION",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-continuous-servo-start-clockwise",
            "value": "180"
          },
          {
            "label": "bloq-continuous-servo-start-counterclockwise",
            "value": "0"
          }
        ]
      }
    ]
  ],
  "code": "{SERVO}.write({DIRECTION});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "continuousServoStop",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-continuous-servo-stop",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-continuous-servo-stop-stop"
      },
      {
        "id": "SERVO",
        "alias": "dynamicDropdown",
        "options": "continuousServos"
      }
    ]
  ],
  "code": "{SERVO}.write(90);"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "continuousServoStartAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "ccdb01c7-3494-4c3e-9123-2e7e2ba8b6bf"
    }
  ],
  "bloqClass": "bloq-continuous-servo-start-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-continuous-servo-start-advanced-turn"
      },
      {
        "bloqInputId": "SERVO",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "ccdb01c7-3494-4c3e-9123-2e7e2ba8b6bf"
      },
      {
        "alias": "text",
        "value": "bloq-continuous-servo-start-advanced-direction"
      },
      {
        "id": "DIRECTION",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-continuous-servo-start-advanced-clockwise",
            "value": "0"
          },
          {
            "label": "bloq-continuous-servo-start-advanced-counterclockwise",
            "value": "180"
          }
        ]
      }
    ]
  ],
  "code": "{SERVO}.write({DIRECTION});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "lcdWritePositionAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "48d0aa8e-3269-4f32-905e-ef5b24cfb603"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "8ea6578c-0966-4e34-a7ea-be20b2d2725b"
    }
  ],
  "bloqClass": "bloq-lcd-writte deprecated",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-lcd-writte-write"
      },
      {
        "bloqInputId": "TEXT",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "48d0aa8e-3269-4f32-905e-ef5b24cfb603"
      },
      {
        "alias": "text",
        "value": "bloq-lcd-writte-inLCD"
      },
      {
        "bloqInputId": "LCD",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "8ea6578c-0966-4e34-a7ea-be20b2d2725b"
      },
      {
        "alias": "text",
        "value": "bloq-lcd-writte-advanced-inPosition"
      },
      {
        "id": "COLUMN",
        "alias": "numberInput",
        "value": 0
      },
      {
        "id": "ROW",
        "alias": "numberInput",
        "value": 0
      }
    ]
  ],
  "code": "{LCD}.setCursor({COLUMN},{ROW});{LCD}.print({TEXT});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "pinWriteAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "31da6667-cbdb-4e33-ae7a-37441d4ecf60"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "3a88721f-3431-4ea1-8298-c86e8042b70d"
    }
  ],
  "bloqClass": "bloq-pin-writte-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-pin-writte-advanced-writepin"
      },
      {
        "bloqInputId": "PIN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "31da6667-cbdb-4e33-ae7a-37441d4ecf60"
      },
      {
        "alias": "text",
        "value": "bloq-pin-writte-advanced-data"
      },
      {
        "bloqInputId": "DATA",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "3a88721f-3431-4ea1-8298-c86e8042b70d"
      }
    ]
  ],
  "code": "'{PIN}'.indexOf('A') === 0 ? 'analogWrite({PIN},{DATA});' : 'digitalWrite({PIN},{DATA});'"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "hts221Humidity",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-hts221-humidity",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-hts221-humidity"
      },
      {
        "id": "SENSOR",
        "alias": "dynamicDropdown",
        "options": "hts221"
      }
    ]
  ],
  "code": "{SENSOR}.getHumidity()",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "hts221Temperature",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-hts221-temperature",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-hts221-temperature"
      },
      {
        "id": "SENSOR",
        "alias": "dynamicDropdown",
        "options": "hts221"
      }
    ]
  ],
  "code": "{SENSOR}.getTemperature()",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "lcdClear",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-lcd-clear",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-lcd-clear"
      },
      {
        "id": "LCD",
        "alias": "dynamicDropdown",
        "options": "lcds"
      }
    ]
  ],
  "code": "{LCD}.clear();"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "lcdTurnOnOff",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-lcd-turn-on-off",
  "content": [
    [
      {
        "id": "STATE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-lcd-turn-on-off-turnon",
            "value": "HIGH"
          },
          {
            "label": "bloq-lcd-turn-on-off-turnoff",
            "value": "LOW"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-lcd-turn-on-off-lcdLigth"
      },
      {
        "id": "LCD",
        "alias": "dynamicDropdown",
        "options": "lcds"
      }
    ]
  ],
  "code": "{LCD}.setBacklight({STATE});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "lcdWrite",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-lcd-writte",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-lcd-writte-write"
      },
      {
        "id": "TEXT",
        "alias": "stringInput",
        "placeholder": "bloq-lcd-default"
      },
      {
        "alias": "text",
        "value": "bloq-lcd-writte-inLCD"
      },
      {
        "id": "LCD",
        "alias": "dynamicDropdown",
        "options": "lcds"
      }
    ]
  ],
  "code": "{LCD}.print({TEXT});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "lcdWritePosition",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-lcd-writte",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-lcd-writte-write"
      },
      {
        "id": "TEXT",
        "alias": "stringInput",
        "placeholder": "bloq-lcd-default"
      },
      {
        "alias": "text",
        "value": "bloq-lcd-writte-inLCD"
      },
      {
        "id": "LCD",
        "alias": "dynamicDropdown",
        "options": "lcds"
      },
      {
        "alias": "text",
        "value": "bloq-lcd-writte-advanced-inPosition"
      },
      {
        "id": "COLUMN",
        "alias": "numberInput",
        "value": 0
      },
      {
        "id": "ROW",
        "alias": "numberInput",
        "value": 0
      }
    ]
  ],
  "code": "{LCD}.setCursor({COLUMN},{ROW});{LCD}.print({TEXT});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "led",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-led",
  "content": [
    [
      {
        "id": "STATE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-led-turnon",
            "value": "HIGH"
          },
          {
            "label": "bloq-led-turnoff",
            "value": "LOW"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-led-theLED"
      },
      {
        "id": "LED",
        "alias": "dynamicDropdown",
        "options": "leds"
      }
    ]
  ],
  "code": "digitalWrite({LED},{STATE});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "oscillator",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-oscillator",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-oscillator-oscillate"
      },
      {
        "id": "OSCILLATOR",
        "alias": "dynamicDropdown",
        "options": "oscillators"
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-around"
      },
      {
        "id": "PHASE",
        "alias": "numberInput",
        "value": 90
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-amplitude"
      },
      {
        "id": "AMPLITUDE",
        "alias": "numberInput",
        "value": 90
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-speed"
      },
      {
        "id": "SPEED",
        "alias": "numberInput",
        "value": 2000
      }
    ]
  ],
  "code": "{OSCILLATOR}.SetO({PHASE});{OSCILLATOR}.SetA({AMPLITUDE});{OSCILLATOR}.SetT({SPEED});{OSCILLATOR}.refresh();"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "oscillatorStart",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-oscillator-start",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-oscillator-start-oscillator"
      },
      {
        "id": "OSCILLATOR",
        "alias": "dynamicDropdown",
        "options": "oscillators"
      }
    ]
  ],
  "code": "{OSCILLATOR}.Play();"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "oscillatorStop",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-oscillator-stop",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-oscillator-stop-stop"
      },
      {
        "id": "OSCILLATOR",
        "alias": "dynamicDropdown",
        "options": "oscillators"
      }
    ]
  ],
  "code": "{OSCILLATOR}.Stop();"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "oscillatorTimes",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-oscillator",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-oscillator-oscillate"
      },
      {
        "id": "OSCILLATOR",
        "alias": "dynamicDropdown",
        "options": "oscillators"
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-around"
      },
      {
        "id": "PHASE",
        "alias": "numberInput",
        "value": 90
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-amplitude"
      },
      {
        "id": "AMPLITUDE",
        "alias": "numberInput",
        "value": 90
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-speed"
      },
      {
        "id": "SPEED",
        "alias": "numberInput",
        "value": 2000
      },
      {
        "id": "TIMES",
        "alias": "numberInput",
        "value": 2
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-times"
      }
    ]
  ],
  "code": "oscillate({OSCILLATOR}, {AMPLITUDE}, {PHASE}, {SPEED}, {TIMES});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "oscillatorTimesPhase",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-oscillator",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-oscillator-oscillate"
      },
      {
        "id": "OSCILLATOR",
        "alias": "dynamicDropdown",
        "options": "oscillators"
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-around"
      },
      {
        "id": "PHASE",
        "alias": "numberInput",
        "value": 90
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-amplitude"
      },
      {
        "id": "AMPLITUDE",
        "alias": "numberInput",
        "value": 90
      },
      {
        "alias": "text",
        "value": "bloq-oscillator-speed"
      },
      {
        "id": "SPEED",
        "alias": "numberInput",
        "value": 2000
      }
    ]
  ],
  "code": "{OSCILLATOR}.SetO({PHASE});{OSCILLATOR}.SetA({AMPLITUDE});{OSCILLATOR}.SetT({SPEED});{OSCILLATOR}.refresh();"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "readSensor",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-read-sensor",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-read-read"
      },
      {
        "id": "SENSOR",
        "alias": "dynamicDropdown",
        "options": "sensors"
      }
    ]
  ],
  "code": "{SENSOR.type}",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "SENSOR",
    "options": "sensors"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "clockRTC",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-rtc",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-rtc"
      },
      {
        "id": "RTC_FUNC",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-rtc-date",
            "value": "getDate"
          },
          {
            "label": "bloq-rtc-time",
            "value": "getTime"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-rtc-using"
      },
      {
        "id": "RTC",
        "alias": "dynamicDropdown",
        "options": "clocks"
      }
    ]
  ],
  "code": "{RTC}.{RTC_FUNC}()",
  "returnType": {
    "type": "simple",
    "value": "String"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "clockRTCInit",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-rtc-init",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-rtc-init"
      },
      {
        "id": "RTC",
        "alias": "dynamicDropdown",
        "options": "clocks"
      }
    ]
  ],
  "code": "{RTC}.adjust(DateTime(__DATE__, __TIME__));"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "servoNormal",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-servo",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-servo-move"
      },
      {
        "id": "SERVO",
        "alias": "dynamicDropdown",
        "options": "servos"
      },
      {
        "alias": "text",
        "value": "bloq-servo-to"
      },
      {
        "id": "POSITION",
        "alias": "numberInput",
        "value": 90
      },
      {
        "alias": "text",
        "value": "bloq-servo-degrees"
      }
    ]
  ],
  "code": "{SERVO}.write({POSITION});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "elseifAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "ecda8902-f35d-4126-bb5b-abda6a721be9"
    }
  ],
  "bloqClass": "bloq-else-if",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-else-if-if"
      },
      {
        "bloqInputId": "VAR",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "ecda8902-f35d-4126-bb5b-abda6a721be9"
      },
      {
        "alias": "text",
        "value": "bloq-else-if-else"
      }
    ]
  ],
  "code": "else if ({VAR}){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "forAdvanced-v1",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "d5ba5ef1-0eaa-44f3-9d06-349117001048"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "cc5708f4-a36d-4b6e-b079-a3dcc892a16e"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "b10a6a37-e8b0-4d07-8402-edc69b619987"
    }
  ],
  "bloqClass": "bloq-for",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-for-count"
      },
      {
        "bloqInputId": "VAR",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "d5ba5ef1-0eaa-44f3-9d06-349117001048"
      },
      {
        "alias": "text",
        "value": "bloq-for-from"
      },
      {
        "bloqInputId": "INIT",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "cc5708f4-a36d-4b6e-b079-a3dcc892a16e"
      },
      {
        "alias": "text",
        "value": "bloq-for-to"
      },
      {
        "bloqInputId": "FINAL",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "b10a6a37-e8b0-4d07-8402-edc69b619987"
      },
      {
        "id": "MODE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-for-add",
            "value": "+"
          },
          {
            "label": "bloq-for-subtract",
            "value": "-"
          }
        ]
      },
      {
        "id": "ADD",
        "alias": "numberInput",
        "value": 1
      },
      {
        "alias": "text",
        "value": "bloq-for-exec"
      }
    ]
  ],
  "code": "'for({VAR}={INIT};{VAR}' + ('{MODE}' === '+'?'<':'>' ) + '{FINAL};{VAR}{MODE}={ADD}){{STATEMENTS}}'"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "ifAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "5bcd1703-eddc-47a4-afca-73ac3a3cb824"
    }
  ],
  "bloqClass": "bloq-if",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-if-if"
      },
      {
        "bloqInputId": "CONDITION",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "5bcd1703-eddc-47a4-afca-73ac3a3cb824"
      },
      {
        "alias": "text",
        "value": "bloq-if-exec"
      }
    ]
  ],
  "code": "if({CONDITION}){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "switchAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "2133df8d-4b17-49b7-8aa4-917371eb7ac8"
    }
  ],
  "bloqClass": "bloq-switch",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-switch-check"
      },
      {
        "bloqInputId": "VAR",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "2133df8d-4b17-49b7-8aa4-917371eb7ac8"
      }
    ]
  ],
  "code": "switch (int({VAR})) {{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "waitAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "b12df1b2-8b0d-4660-b228-4fa417a74e9f"
    }
  ],
  "bloqClass": "bloq-wait",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-wait-wait"
      },
      {
        "bloqInputId": "TIME",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "b12df1b2-8b0d-4660-b228-4fa417a74e9f"
      }
    ]
  ],
  "code": "delay({TIME});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "whileAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "2ff71b88-11ae-49a1-b44c-c8de3edf78c1"
    }
  ],
  "bloqClass": "bloq-while",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-while-while"
      },
      {
        "bloqInputId": "CONDITION",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "2ff71b88-11ae-49a1-b44c-c8de3edf78c1"
      },
      {
        "alias": "text",
        "value": "bloq-while-exec"
      }
    ]
  ],
  "code": "while ({CONDITION}){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "break",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-break",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-break-stopLoop"
      }
    ]
  ],
  "code": "break;"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "case",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-case",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-case-ifSameTo"
      },
      {
        "id": "VAR",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "bloq-case-exec"
      }
    ]
  ],
  "code": "case {VAR}:{{STATEMENTS}break;}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "caseDefault",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-case-default",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-case-default-inOtherCase"
      }
    ]
  ],
  "code": "default:{{STATEMENTS}break;}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "continue",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-continue",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-continue-continue"
      }
    ]
  ],
  "code": "continue;"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "for",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-for deprecated",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-for-count"
      },
      {
        "id": "VAR",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "bloq-for-from"
      },
      {
        "id": "INIT",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "bloq-for-to"
      },
      {
        "id": "FINAL",
        "alias": "numberInput",
        "value": 10
      },
      {
        "id": "MODE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-for-add",
            "value": "++"
          },
          {
            "label": "bloq-for-subtract",
            "value": "--"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-for-exec"
      }
    ]
  ],
  "code": "for({VAR}={INIT};{VAR}<{FINAL};{VAR}{MODE}){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "forAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "1e636637-513a-4824-a120-2085fc136053"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "468841c4-ccf2-42c0-b04c-d5cd0846c2d7"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "f785bb49-a393-4833-9d24-bca6bb5183bf"
    }
  ],
  "bloqClass": "bloq-for deprecated",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-for-count"
      },
      {
        "bloqInputId": "VAR",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "1e636637-513a-4824-a120-2085fc136053"
      },
      {
        "alias": "text",
        "value": "bloq-for-from"
      },
      {
        "bloqInputId": "INIT",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "468841c4-ccf2-42c0-b04c-d5cd0846c2d7"
      },
      {
        "alias": "text",
        "value": "bloq-for-to"
      },
      {
        "bloqInputId": "FINAL",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "f785bb49-a393-4833-9d24-bca6bb5183bf"
      },
      {
        "id": "MODE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-for-add",
            "value": "++"
          },
          {
            "label": "bloq-for-subtract",
            "value": "--"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-for-exec"
      }
    ]
  ],
  "code": "for({VAR}={INIT};{VAR}<{FINAL};{VAR}{MODE}){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "else",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-else",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-else-else"
      }
    ]
  ],
  "code": "else {{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "elseif",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "7d56deab-88f7-4c49-9c0b-1ef6d74970bc"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "ad2f8816-e94c-4fd9-ae7f-4d505664d203"
    }
  ],
  "bloqClass": "bloq-else-if",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-else-if-if"
      },
      {
        "bloqInputId": "ARG1",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "7d56deab-88f7-4c49-9c0b-1ef6d74970bc"
      },
      {
        "id": "OPERATOR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "=",
            "value": "=="
          },
          {
            "label": "!=",
            "value": "!="
          },
          {
            "label": ">",
            "value": ">"
          },
          {
            "label": ">=",
            "value": ">="
          },
          {
            "label": "<",
            "value": "<"
          },
          {
            "label": "<=",
            "value": "<="
          }
        ]
      },
      {
        "bloqInputId": "ARG2",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "ad2f8816-e94c-4fd9-ae7f-4d505664d203"
      },
      {
        "alias": "text",
        "value": "bloq-else-if-else"
      }
    ]
  ],
  "code": "else if ({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "for-v1",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-for",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-for-count"
      },
      {
        "id": "VAR",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "bloq-for-from"
      },
      {
        "id": "INIT",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "bloq-for-to"
      },
      {
        "id": "FINAL",
        "alias": "numberInput",
        "value": 10
      },
      {
        "id": "MODE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-for-add",
            "value": "+"
          },
          {
            "label": "bloq-for-subtract",
            "value": "-"
          }
        ]
      },
      {
        "id": "ADD",
        "alias": "numberInput",
        "value": 1
      },
      {
        "alias": "text",
        "value": "bloq-for-exec"
      }
    ]
  ],
  "code": "'for({VAR}={INIT};{VAR}' + ('{MODE}' === '+'?'<':'>' ) + '{FINAL};{VAR}{MODE}={ADD}){{STATEMENTS}}'"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "if",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "f6309e70-0048-4454-9466-ac9057b5fc64"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "97e4917b-b235-4d61-89a8-9a8741afbe04"
    }
  ],
  "bloqClass": "bloq-if",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-if-if"
      },
      {
        "bloqInputId": "ARG1",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "f6309e70-0048-4454-9466-ac9057b5fc64"
      },
      {
        "id": "OPERATOR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "=",
            "value": "=="
          },
          {
            "label": "!=",
            "value": "!="
          },
          {
            "label": ">",
            "value": ">"
          },
          {
            "label": ">=",
            "value": ">="
          },
          {
            "label": "<",
            "value": "<"
          },
          {
            "label": "<=",
            "value": "<="
          }
        ]
      },
      {
        "bloqInputId": "ARG2",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "97e4917b-b235-4d61-89a8-9a8741afbe04"
      },
      {
        "alias": "text",
        "value": "bloq-if-exec"
      }
    ]
  ],
  "code": "if({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "millis",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-millis",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-millis"
      }
    ]
  ],
  "code": "millis()",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "switch",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-switch",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-switch-check"
      },
      {
        "id": "VAR",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      }
    ]
  ],
  "code": "switch (int({VAR})) {{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "wait",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-wait",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-wait-wait"
      },
      {
        "id": "TIME",
        "alias": "numberInput",
        "value": 2000
      },
      {
        "alias": "text",
        "value": "bloq-wait-ms"
      }
    ]
  ],
  "code": "delay({TIME});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "while",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "a7be991a-0a55-499c-a52b-1f1a5e2537bb"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "50fa5391-8b9e-4d80-8adf-914cf1ee1487"
    }
  ],
  "bloqClass": "bloq-while",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-while-while"
      },
      {
        "bloqInputId": "ARG1",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "a7be991a-0a55-499c-a52b-1f1a5e2537bb"
      },
      {
        "id": "OPERATOR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "=",
            "value": "=="
          },
          {
            "label": "!=",
            "value": "!="
          },
          {
            "label": ">",
            "value": ">"
          },
          {
            "label": ">=",
            "value": ">="
          },
          {
            "label": "<",
            "value": "<"
          },
          {
            "label": "<=",
            "value": "<="
          }
        ]
      },
      {
        "bloqInputId": "ARG2",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "50fa5391-8b9e-4d80-8adf-914cf1ee1487"
      },
      {
        "alias": "text",
        "value": "bloq-while-exec"
      }
    ]
  ],
  "code": "while ({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "stringToInt",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "String",
      "name": "9ed0f45b-3176-4518-9be7-efd5d3368ec4"
    }
  ],
  "bloqClass": "bloq-string-to-int",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-string-to-int"
      },
      {
        "bloqInputId": "VAR",
        "alias": "bloqInput",
        "acceptType": "String",
        "name": "9ed0f45b-3176-4518-9be7-efd5d3368ec4"
      }
    ]
  ],
  "code": "{VAR}.toInt()",
  "returnType": {
    "type": "simple",
    "value": "int"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "argument",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-argument",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-argument-var"
      },
      {
        "id": "TYPE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-argument-float",
            "value": "float"
          },
          {
            "label": "bloq-argument-string",
            "value": "String"
          },
          {
            "label": "bloq-argument-bool",
            "value": "bool"
          }
        ]
      },
      {
        "id": "VARNAME",
        "alias": "varInput",
        "value": ""
      }
    ]
  ],
  "createDynamicContent": "softwareVars",
  "code": "{TYPE} {VARNAME}",
  "returnType": {
    "type": "fromDropdown",
    "idDropdown": "TYPE",
    "options": "softwareVars"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "arguments",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "b4f6c8f1-4f67-46f7-a29a-b912ab0d31fc"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "02e2e5ec-ec25-437b-a1d8-0f2ae628539d"
    }
  ],
  "bloqClass": "bloq-arguments",
  "content": [
    [
      {
        "bloqInputId": "ARG1",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "b4f6c8f1-4f67-46f7-a29a-b912ab0d31fc"
      },
      {
        "alias": "text",
        "value": ","
      },
      {
        "bloqInputId": "ARG2",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "02e2e5ec-ec25-437b-a1d8-0f2ae628539d"
      }
    ]
  ],
  "createDynamicContent": "softwareVars",
  "code": "{ARG1},{ARG2}",
  "returnType": {
    "type": "simple",
    "value": "var"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "invokeFunctionWithArguments",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "b2083d09-700e-4a74-a50d-ec08ef94cee2"
    }
  ],
  "bloqClass": "bloq-invoke-function-with-arguments",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-function-exec"
      },
      {
        "id": "FUNCTION",
        "alias": "dynamicDropdown",
        "options": "voidFunctions"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-function-args"
      },
      {
        "bloqInputId": "ARGS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "b2083d09-700e-4a74-a50d-ec08ef94cee2"
      }
    ]
  ],
  "code": "{FUNCTION}({ARGS});",
  "dynamicDropdown": {
    "idDropdown": "FUNCTION",
    "options": "voidFunctions"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "invokeReturnFunctionWithArguments",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "ad87d1c3-9b82-4599-b5b6-201e874956a8"
    }
  ],
  "bloqClass": "bloq-invoke-return-function-with-arguments",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-return-function-exec"
      },
      {
        "id": "FUNCTION",
        "alias": "dynamicDropdown",
        "options": "returnFunctions"
      },
      {
        "alias": "text",
        "value": "bloq-invoke-function-args"
      },
      {
        "bloqInputId": "ARGS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "ad87d1c3-9b82-4599-b5b6-201e874956a8"
      }
    ]
  ],
  "code": "{FUNCTION}({ARGS})",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "FUNCTION",
    "options": "returnFunctions"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "return",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "1047bdb4-bebe-4218-afcc-ab01eba68b4b"
    }
  ],
  "bloqClass": "bloq-return",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-return-return"
      },
      {
        "bloqInputId": "RETURN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "1047bdb4-bebe-4218-afcc-ab01eba68b4b"
      }
    ]
  ],
  "code": "return {RETURN};"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "returnFunctionWithArguments",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "a3be3f68-9beb-4fb0-9d62-061047446e73"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "f970bd45-8e41-4897-aa12-7d962f721c42"
    }
  ],
  "bloqClass": "bloq-return-function-with-arguments",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-return-function-with-arguments-declare"
      },
      {
        "id": "FUNCNAME",
        "alias": "varInput",
        "placeholder": "bloq-functions-default"
      },
      {
        "alias": "text",
        "value": "bloq-return-function-with-arguments-count"
      },
      {
        "bloqInputId": "ARGS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "a3be3f68-9beb-4fb0-9d62-061047446e73"
      },
      {
        "position": "DOWN",
        "alias": "text",
        "value": "bloq-return-function-with-arguments-return"
      },
      {
        "position": "DOWN",
        "bloqInputId": "RETURN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "f970bd45-8e41-4897-aa12-7d962f721c42"
      }
    ]
  ],
  "createDynamicContent": "returnFunctions",
  "returnType": {
    "type": "fromInput",
    "bloqInputId": "RETURN"
  },
  "arguments": {
    "type": "fromInput",
    "bloqInputId": "ARGS"
  },
  "code": "{RETURN.connectionType} {FUNCNAME} ({ARGS}) {{STATEMENTS}return {RETURN};}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "voidFunctionWithArguments",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "fcba1253-56a2-435c-b416-52cb1d5316ee"
    }
  ],
  "bloqClass": "bloq-void-function-with-arguments",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-void-function-with-arguments-declare"
      },
      {
        "id": "FUNCNAME",
        "alias": "varInput",
        "placeholder": "bloq-functions-default"
      },
      {
        "alias": "text",
        "value": "bloq-void-function-with-arguments-count"
      },
      {
        "bloqInputId": "ARGS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "fcba1253-56a2-435c-b416-52cb1d5316ee"
      }
    ]
  ],
  "createDynamicContent": "voidFunctions",
  "returnType": {
    "type": "simple",
    "value": "void"
  },
  "arguments": {
    "type": "fromInput",
    "bloqInputId": "ARGS"
  },
  "code": "void {FUNCNAME} ({ARGS}){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "invokeFunction",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-invoke-function",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-function-exec"
      },
      {
        "id": "FUNCTION",
        "alias": "dynamicDropdown",
        "options": "voidFunctions"
      }
    ]
  ],
  "code": "{FUNCTION}();",
  "dynamicDropdown": {
    "idDropdown": "FUNCTION",
    "options": "voidFunctions"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "invokeReturnFunction",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-invoke-return-function",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-invoke-return-function-exec"
      },
      {
        "id": "FUNCTION",
        "alias": "dynamicDropdown",
        "options": "returnFunctions"
      }
    ]
  ],
  "code": "{FUNCTION}()",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "FUNCTION",
    "options": "returnFunctions"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "returnFunction",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "065be4ff-1043-466d-aac2-eb84ecaebeac"
    }
  ],
  "bloqClass": "bloq-return-function",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-return-function-declare"
      },
      {
        "id": "FUNCNAME",
        "alias": "varInput",
        "placeholder": "bloq-functions-default"
      },
      {
        "position": "DOWN",
        "alias": "text",
        "value": "bloq-return-function-return"
      },
      {
        "position": "DOWN",
        "bloqInputId": "RETURN",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "065be4ff-1043-466d-aac2-eb84ecaebeac"
      }
    ]
  ],
  "createDynamicContent": "returnFunctions",
  "returnType": {
    "type": "fromInput",
    "bloqInputId": "RETURN"
  },
  "code": "{RETURN.connectionType} {FUNCNAME} () {{STATEMENTS}return {RETURN};}"
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "voidFunction",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-void-function",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-void-function-declare"
      },
      {
        "id": "FUNCNAME",
        "alias": "varInput",
        "placeholder": "bloq-functions-default"
      }
    ]
  ],
  "createDynamicContent": "voidFunctions",
  "returnType": {
    "type": "simple",
    "value": "void"
  },
  "code": "void {FUNCNAME} (){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "name": "group",
  "type": "group",
  "connectors": [
    {
      "type": "connector--empty"
    },
    {
      "type": "connector--empty"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ]
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "boolArrayAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "b5ac7fd1-050c-4abb-aa8e-9004bfebb73d"
    }
  ],
  "bloqClass": "bloq-boolArray-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-boolArray-advanced-arraySize"
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "b5ac7fd1-050c-4abb-aa8e-9004bfebb73d"
      },
      {
        "alias": "text",
        "value": "bloq-boolArray-advanced-boolType"
      }
    ]
  ],
  "code": "(bool *)malloc({VALUE}*sizeof(bool))",
  "returnType": {
    "type": "simple",
    "value": "bool *"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "boolArray",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-boolArray",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-boolArray-arraySize"
      },
      {
        "id": "VALUE",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "bloq-boolArray-boolType"
      }
    ]
  ],
  "code": "(bool *)malloc({VALUE}*sizeof(bool))",
  "returnType": {
    "type": "simple",
    "value": "bool *"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "boolean",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-boolean",
  "content": [
    [
      {
        "id": "STATE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-boolean-true",
            "value": "true"
          },
          {
            "label": "bloq-boolean-false",
            "value": "false"
          }
        ]
      }
    ]
  ],
  "code": "{STATE}",
  "returnType": {
    "type": "simple",
    "value": "bool"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "equalityOperations",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "1e2b8d83-e813-4c4b-a34a-41c40e9c187a"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "ea360df9-5bc3-4b74-8225-ade0b15169e8"
    }
  ],
  "bloqClass": "bloq-equality-operations",
  "content": [
    [
      {
        "bloqInputId": "ARG1",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "1e2b8d83-e813-4c4b-a34a-41c40e9c187a"
      },
      {
        "id": "OPERATOR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "=",
            "value": "=="
          },
          {
            "label": "!=",
            "value": "!="
          },
          {
            "label": ">",
            "value": ">"
          },
          {
            "label": ">=",
            "value": ">="
          },
          {
            "label": "<",
            "value": "<"
          },
          {
            "label": "<=",
            "value": "<="
          }
        ]
      },
      {
        "bloqInputId": "ARG2",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "ea360df9-5bc3-4b74-8225-ade0b15169e8"
      }
    ]
  ],
  "code": "{ARG1} {OPERATOR} {ARG2}",
  "returnType": {
    "type": "simple",
    "value": "bool"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "logicOperations",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "c1d18e5d-ba14-40e5-8023-bf5f6833f728"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "d2bb22f1-878f-4f20-a42d-7d5d124fc4a5"
    }
  ],
  "bloqClass": "bloq-logic-operations",
  "content": [
    [
      {
        "bloqInputId": "ARG1",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "c1d18e5d-ba14-40e5-8023-bf5f6833f728"
      },
      {
        "id": "OPERATOR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-logic-operations-and",
            "value": "&&"
          },
          {
            "label": "bloq-logic-operations-or",
            "value": "||"
          }
        ]
      },
      {
        "bloqInputId": "ARG2",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "d2bb22f1-878f-4f20-a42d-7d5d124fc4a5"
      }
    ]
  ],
  "code": "{ARG1} {OPERATOR} {ARG2}",
  "returnType": {
    "type": "simple",
    "value": "bool"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "not",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "c19bdaa7-0f8d-4cde-84dc-669eb237d9fc"
    }
  ],
  "bloqClass": "bloq-not",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-not-not"
      },
      {
        "bloqInputId": "CONDITION",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "c19bdaa7-0f8d-4cde-84dc-669eb237d9fc"
      }
    ]
  ],
  "code": "!{CONDITION}",
  "returnType": {
    "type": "simple",
    "value": "bool"
  }
});
db.bitbloq_Bloqs.insert({
  "name": "loopBloq",
  "type": "group",
  "connectors": [
    {
      "type": "connector--empty"
    },
    {
      "type": "connector--empty"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-loop",
  "headerText": "bloq-loop-header",
  "descriptionText": "bloq-loop-description",
  "content": [],
  "code": "void loop(){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "name": "setupBloq",
  "type": "group",
  "connectors": [
    {
      "type": "connector--empty"
    },
    {
      "type": "connector--empty"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-setup",
  "headerText": "bloq-setup-header",
  "descriptionText": "bloq-setup-description",
  "content": [],
  "code": "void setup(){{STATEMENTS}}"
});
db.bitbloq_Bloqs.insert({
  "name": "varsBloq",
  "type": "group",
  "connectors": [
    {
      "type": "connector--empty"
    },
    {
      "type": "connector--empty"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-vars",
  "headerText": "bloq-var-header",
  "descriptionText": "bloq-var-description",
  "content": [],
  "code": "{STATEMENTS}"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "numberArrayAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "66103176-2e33-47af-a108-24dc35a8bf99"
    }
  ],
  "bloqClass": "bloq-numberArray-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-numberArray-advanced-arraySize"
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "66103176-2e33-47af-a108-24dc35a8bf99"
      },
      {
        "alias": "text",
        "value": "bloq-numberArray-advanced-type"
      },
      {
        "id": "TYPE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-numberArray-advanced-float",
            "value": "float *"
          },
          {
            "label": "bloq-numberArray-advanced-int",
            "value": "int *"
          }
        ]
      }
    ]
  ],
  "code": "({TYPE})malloc({VALUE}*sizeof({TYPE}.withoutAsterisk))",
  "returnType": {
    "type": "fromDropdown",
    "idDropdown": "TYPE",
    "options": "softwareVars"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "basicOperations",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "ff48be6a-90c0-4460-8657-66622b7cb097"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "36eff8c4-7abb-4373-ba53-6a2a28a29e78"
    }
  ],
  "bloqClass": "bloq-basic-operations",
  "content": [
    [
      {
        "bloqInputId": "ARG1",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "ff48be6a-90c0-4460-8657-66622b7cb097"
      },
      {
        "id": "OPERATOR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "+",
            "value": "+"
          },
          {
            "label": "-",
            "value": "-"
          },
          {
            "label": "x",
            "value": "*"
          },
          {
            "label": "/",
            "value": "/"
          },
          {
            "label": "^",
            "value": "^"
          },
          {
            "label": "%",
            "value": "%"
          }
        ]
      },
      {
        "bloqInputId": "ARG2",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "36eff8c4-7abb-4373-ba53-6a2a28a29e78"
      }
    ]
  ],
  "code": "'{OPERATOR}' === '^'? 'pow({ARG1},{ARG2})' : '{ARG1} {OPERATOR} {ARG2}'",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "map",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "bd8781ff-6b55-4461-8456-5420af22bca5"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "8c60dcdc-4e68-4f71-8b8c-402da608131b"
    }
  ],
  "bloqClass": "bloq-map",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-map-map"
      },
      {
        "bloqInputId": "VAR",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "bd8781ff-6b55-4461-8456-5420af22bca5"
      },
      {
        "alias": "text",
        "value": "bloq-map-value"
      },
      {
        "bloqInputId": "MAXVAL",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "8c60dcdc-4e68-4f71-8b8c-402da608131b"
      },
      {
        "alias": "text",
        "value": "]"
      }
    ]
  ],
  "code": "map({VAR},0,1023,0,{MAXVAL})",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "mapAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "0a1508c8-6035-4e92-a541-2d4956a0be80"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "0ad92b94-bc76-4c96-84f3-ec7ffae7b5df"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "60282f5f-abc9-4de8-8172-f02383e74d40"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "26e41bc9-e383-42da-a015-369cece90e69"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "469444f5-981c-46a2-8a41-c6494acebcf8"
    }
  ],
  "bloqClass": "bloq-map-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-map-advanced-map"
      },
      {
        "bloqInputId": "VAR",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "0a1508c8-6035-4e92-a541-2d4956a0be80"
      },
      {
        "alias": "text",
        "value": "bloq-map-advanced-value"
      },
      {
        "bloqInputId": "INITMIN",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "0ad92b94-bc76-4c96-84f3-ec7ffae7b5df"
      },
      {
        "alias": "text",
        "value": "-"
      },
      {
        "bloqInputId": "INITMAX",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "60282f5f-abc9-4de8-8172-f02383e74d40"
      },
      {
        "alias": "text",
        "value": "bloq-map-advanced-and"
      },
      {
        "bloqInputId": "FINMIN",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "26e41bc9-e383-42da-a015-369cece90e69"
      },
      {
        "alias": "text",
        "value": "-"
      },
      {
        "bloqInputId": "FINMAX",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "469444f5-981c-46a2-8a41-c6494acebcf8"
      },
      {
        "alias": "text",
        "value": "]"
      }
    ]
  ],
  "code": "map({VAR},{INITMIN},{INITMAX},{FINMIN},{FINMAX})",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "mathOperations",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "750b79fa-5acf-4a5d-ac48-5a0f185285d1"
    }
  ],
  "bloqClass": "bloq-math-operations",
  "content": [
    [
      {
        "id": "OPERATOR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-math-operations-sqrt",
            "value": "sqrt"
          },
          {
            "label": "bloq-math-operations-abs",
            "value": "abs"
          },
          {
            "label": "ln",
            "value": "log"
          },
          {
            "label": "log10",
            "value": "log10"
          },
          {
            "label": "e^",
            "value": "exp"
          }
        ]
      },
      {
        "bloqInputId": "ARG",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "750b79fa-5acf-4a5d-ac48-5a0f185285d1"
      }
    ]
  ],
  "code": "{OPERATOR}({ARG})",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "number",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-number",
  "content": [
    [
      {
        "id": "VALUE",
        "alias": "numberInput",
        "value": 0
      }
    ]
  ],
  "code": "{VALUE}",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "numberArray",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-numberArray",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-numberArray-arraySize"
      },
      {
        "id": "VALUE",
        "alias": "numberInput",
        "value": 3
      },
      {
        "alias": "text",
        "value": "bloq-numberArray-floatType"
      }
    ]
  ],
  "code": "(float*)malloc({VALUE}*sizeof(float))",
  "returnType": {
    "type": "simple",
    "value": "float *"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "random",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "396fac17-df47-45ab-aa4a-1ee54336cea2"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "float",
      "name": "14ba93ee-70b4-4c20-bc00-cdea0ef1340a"
    }
  ],
  "bloqClass": "bloq-random",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-random-random"
      },
      {
        "bloqInputId": "ARG1",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "396fac17-df47-45ab-aa4a-1ee54336cea2"
      },
      {
        "alias": "text",
        "value": "bloq-random-and"
      },
      {
        "bloqInputId": "ARG2",
        "alias": "bloqInput",
        "acceptType": "float",
        "name": "14ba93ee-70b4-4c20-bc00-cdea0ef1340a"
      }
    ]
  ],
  "code": "random({ARG1},{ARG2}+1)",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "randomSeed",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-random-seed",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-random-seed"
      }
    ]
  ],
  "code": "randomSeed(analogRead(0));",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "output",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ]
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "statement",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ]
});
db.bitbloq_Bloqs.insert({
  "type": "statement-input",
  "name": "statement-input",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--root",
      "accept": "connector--top"
    }
  ]
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "char",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-string",
  "content": [
    [
      {
        "alias": "text",
        "value": "'"
      },
      {
        "id": "TEXT",
        "alias": "charInput",
        "placeholder": "bloq-char"
      },
      {
        "alias": "text",
        "value": "'"
      }
    ]
  ],
  "code": "{TEXT}",
  "returnType": {
    "type": "simple",
    "value": "char"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "stringArrayAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "3ea35317-97c4-4fbe-9e83-02a409b44fe1"
    }
  ],
  "bloqClass": "bloq-stringArray-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-stringArray-advanced-arraySize"
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "3ea35317-97c4-4fbe-9e83-02a409b44fe1"
      },
      {
        "alias": "text",
        "value": "bloq-stringArray-advanced-type"
      },
      {
        "id": "TYPE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-stringArray-advanced-string",
            "value": "String *"
          },
          {
            "label": "bloq-stringArray-advanced-char",
            "value": "char *"
          }
        ]
      }
    ]
  ],
  "code": "({TYPE})malloc({VALUE}*sizeof({TYPE}.withoutAsterisk))",
  "returnType": {
    "type": "fromDropdown",
    "idDropdown": "TYPE",
    "options": "softwareVars"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "length",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "String",
      "name": "4f56a4c8-d81c-4297-aa8d-354de3503cf9"
    }
  ],
  "bloqClass": "bloq-length",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-length-length"
      },
      {
        "bloqInputId": "TEXT",
        "alias": "bloqInput",
        "acceptType": "String",
        "name": "4f56a4c8-d81c-4297-aa8d-354de3503cf9"
      }
    ]
  ],
  "code": "{TEXT}.length()",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "string",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-string",
  "content": [
    [
      {
        "alias": "text",
        "value": "\""
      },
      {
        "id": "TEXT",
        "alias": "stringInput",
        "placeholder": "bloq-string-string"
      },
      {
        "alias": "text",
        "value": "\""
      }
    ]
  ],
  "code": "{TEXT}",
  "returnType": {
    "type": "simple",
    "value": "String"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "stringArray",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-stringArray",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-stringArray-arraySize"
      },
      {
        "id": "VALUE",
        "alias": "numberInput",
        "value": 3
      },
      {
        "alias": "text",
        "value": "bloq-stringArray-stringType"
      }
    ]
  ],
  "code": "(String *)malloc({VALUE}*sizeof(String))",
  "returnType": {
    "type": "simple",
    "value": "String *"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "stringCreate",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "6fc5a1d2-737d-4f4d-aa77-4a0ce6680b45"
    }
  ],
  "bloqClass": "bloq-string-create",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-string-create-create"
      },
      {
        "bloqInputId": "TEXT",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "6fc5a1d2-737d-4f4d-aa77-4a0ce6680b45"
      }
    ]
  ],
  "code": "String({TEXT})",
  "returnType": {
    "type": "simple",
    "value": "String"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "stringSum",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "String",
      "name": "f1671218-88a2-4735-aca8-4a6a92a4975f"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "String",
      "name": "d89650cd-0a4f-47f1-9caf-84a2485f89dd"
    }
  ],
  "bloqClass": "bloq-string-sum",
  "content": [
    [
      {
        "bloqInputId": "ARG1",
        "alias": "bloqInput",
        "acceptType": "String",
        "name": "f1671218-88a2-4735-aca8-4a6a92a4975f"
      },
      {
        "alias": "text",
        "value": "+"
      },
      {
        "bloqInputId": "ARG2",
        "alias": "bloqInput",
        "acceptType": "String",
        "name": "d89650cd-0a4f-47f1-9caf-84a2485f89dd"
      }
    ]
  ],
  "code": "String({ARG1})+String({ARG2})",
  "returnType": {
    "type": "simple",
    "value": "String"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "arrayVariableAdvanced",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "4ab199ec-1470-4804-aaa3-78f2181aa744"
    }
  ],
  "bloqClass": "bloq-array-variable",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-array-variable-variable"
      },
      {
        "id": "VAR",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "["
      },
      {
        "bloqInputId": "POSITION",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "4ab199ec-1470-4804-aaa3-78f2181aa744"
      },
      {
        "alias": "text",
        "value": "]"
      }
    ]
  ],
  "code": "{VAR}[{POSITION}]",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "VAR",
    "pointer": "true",
    "options": "softwareVars"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "declareVariableAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "7d79bbd8-9584-4b37-bbca-4a2c1cddccc2"
    }
  ],
  "bloqClass": "bloq-declare-variable",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-declare-variable-declare"
      },
      {
        "id": "NAME",
        "alias": "varInput",
        "value": ""
      },
      {
        "alias": "text",
        "value": "bloq-declare-variable-declare-type"
      },
      {
        "id": "TYPE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-declare-variable-declare-type-int",
            "value": "int"
          },
          {
            "label": "bloq-declare-variable-declare-type-float",
            "value": "float"
          },
          {
            "label": "bloq-declare-variable-declare-type-text",
            "value": "String"
          },
          {
            "label": "bloq-declare-variable-declare-type-char",
            "value": "char"
          },
          {
            "label": "bloq-declare-variable-declare-type-bool",
            "value": "bool"
          }
        ]
      },
      {
        "alias": "text",
        "value": "="
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "7d79bbd8-9584-4b37-bbca-4a2c1cddccc2"
      }
    ]
  ],
  "returnType": {
    "type": "fromInput",
    "bloqInputId": "VALUE"
  },
  "createDynamicContent": "softwareVars",
  "code": "{TYPE} {NAME} = {VALUE};"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "hwVariable",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-hw-variable-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-hw-variable-advanced-variable"
      },
      {
        "id": "COMPONENT",
        "alias": "dynamicDropdown",
        "options": "varComponents"
      }
    ]
  ],
  "code": "{COMPONENT}",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "COMPONENT",
    "options": "varComponents"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "setArrayVariableAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "2463659f-ffa2-4a7a-aaef-fee7051902f3"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "c946dc9d-6745-4301-aa30-af75ab047605"
    }
  ],
  "bloqClass": "bloq-set-variableArray",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-set-variableArray-variable"
      },
      {
        "id": "NAME",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "["
      },
      {
        "bloqInputId": "ITERATOR",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "2463659f-ffa2-4a7a-aaef-fee7051902f3"
      },
      {
        "alias": "text",
        "value": "]"
      },
      {
        "alias": "text",
        "value": "="
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "c946dc9d-6745-4301-aa30-af75ab047605"
      }
    ]
  ],
  "code": "{NAME}[{ITERATOR}] = {VALUE};"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "swVariable",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-sw-variable-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-sw-variable-advanced-variable"
      },
      {
        "id": "VALUE",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      }
    ]
  ],
  "code": "{VALUE}",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "VAR",
    "options": "softwareVars"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "arrayVariable",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-array-variable",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-array-variable-variable"
      },
      {
        "id": "VAR",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "["
      },
      {
        "id": "POSITION",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "]"
      }
    ]
  ],
  "code": "{VAR}[{POSITION}]",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "VAR",
    "pointer": "true",
    "options": "softwareVars"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "declareVariable",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "ffe264ea-0113-407e-8c2f-10a1153db465"
    }
  ],
  "bloqClass": "bloq-declare-variable",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-declare-variable-declare"
      },
      {
        "id": "NAME",
        "alias": "varInput",
        "value": ""
      },
      {
        "alias": "text",
        "value": "="
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "ffe264ea-0113-407e-8c2f-10a1153db465"
      }
    ]
  ],
  "returnType": {
    "type": "fromInput",
    "bloqInputId": "VALUE"
  },
  "createDynamicContent": "softwareVars",
  "code": "{VALUE.connectionType} {NAME} = {VALUE};"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "selectVariable",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-select-variable",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-select-variable-variable"
      },
      {
        "id": "VAR",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      }
    ]
  ],
  "code": "{VAR}",
  "returnType": {
    "type": "fromDynamicDropdown",
    "idDropdown": "VAR",
    "options": "softwareVars"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "setArrayVariable",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": {
        "type": "fromDynamicDropdown",
        "idDropdown": "NAME",
        "pointer": "true",
        "options": "softwareVars"
      },
      "name": "b199d025-9b7e-4c43-a095-e18af729cd36"
    }
  ],
  "bloqClass": "bloq-set-variableArray",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-set-variableArray-variable"
      },
      {
        "id": "NAME",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "["
      },
      {
        "id": "ITERATOR",
        "alias": "numberInput",
        "value": 0
      },
      {
        "alias": "text",
        "value": "]"
      },
      {
        "alias": "text",
        "value": "="
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": {
          "type": "fromDynamicDropdown",
          "idDropdown": "NAME",
          "pointer": "true",
          "options": "softwareVars"
        },
        "name": "b199d025-9b7e-4c43-a095-e18af729cd36"
      }
    ]
  ],
  "code": "{NAME}[{ITERATOR}] = {VALUE};"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "setVariable",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": {
        "type": "fromDynamicDropdown",
        "idDropdown": "NAME",
        "options": "softwareVars"
      },
      "name": "7600892a-39fe-4d3b-a1ca-6185b130cae1"
    }
  ],
  "bloqClass": "bloq-set-variable",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-set-variable-variable"
      },
      {
        "id": "NAME",
        "alias": "dynamicDropdown",
        "options": "softwareVars"
      },
      {
        "alias": "text",
        "value": "="
      },
      {
        "bloqInputId": "VALUE",
        "alias": "bloqInput",
        "acceptType": {
          "type": "fromDynamicDropdown",
          "idDropdown": "NAME",
          "options": "softwareVars"
        },
        "name": "7600892a-39fe-4d3b-a1ca-6185b130cae1"
      }
    ]
  ],
  "code": "{NAME} = {VALUE};"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiMovementsAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "12b6dd23-2bee-4aff-aa7a-6848adde9e38"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "c3163b40-c5f6-47ba-9a64-dc6806423863"
    }
  ],
  "bloqClass": "bloq-zowi-movements-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-movements-advanced"
      },
      {
        "id": "MOVEMENT",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-advanced-walk",
            "value": "walk"
          },
          {
            "label": "bloq-zowi-movements-advanced-turn",
            "value": "turn"
          },
          {
            "label": "bloq-zowi-movements-advanced-shakeLeg",
            "value": "shakeLeg"
          },
          {
            "label": "bloq-zowi-movements-advanced-bend",
            "value": "bend"
          }
        ]
      },
      {
        "id": "DIR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-advanced-forward",
            "value": "FORWARD"
          },
          {
            "label": "bloq-zowi-movements-advanced-backward",
            "value": "BACKWARD"
          },
          {
            "label": "bloq-zowi-movements-advanced-left",
            "value": "LEFT"
          },
          {
            "label": "bloq-zowi-movements-advanced-right",
            "value": "RIGHT"
          }
        ]
      },
      {
        "bloqInputId": "STEPS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "12b6dd23-2bee-4aff-aa7a-6848adde9e38"
      },
      {
        "alias": "text",
        "value": "bloq-zowi-movements-advanced-speed"
      },
      {
        "bloqInputId": "SPEED",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "c3163b40-c5f6-47ba-9a64-dc6806423863"
      }
    ]
  ],
  "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{DIR});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiMovementsHeightAdvanced",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "ad6829ba-3e24-478d-ace7-fb4b7ba0377c"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "aace8f32-edf1-4227-8273-c8bb5d303d32"
    },
    {
      "type": "connector--input",
      "accept": "connector--output",
      "acceptType": "all",
      "name": "f3dd6af7-4ed5-4fd7-8c44-fbafd309f472"
    }
  ],
  "bloqClass": "bloq-zowi-movements-height-advanced",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-movements-height-advanced"
      },
      {
        "id": "MOVEMENT",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-height-advanced-moonwalker",
            "value": "moonwalker"
          },
          {
            "label": "bloq-zowi-movements-height-advanced-crusaito",
            "value": "crusaito"
          },
          {
            "label": "bloq-zowi-movements-height-advanced-flapping",
            "value": "flapping"
          }
        ]
      },
      {
        "id": "DIR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-height-advanced-forward",
            "value": "FORWARD"
          },
          {
            "label": "bloq-zowi-movements-height-advanced-backward",
            "value": "BACKWARD"
          },
          {
            "label": "bloq-zowi-movements-height-advanced-left",
            "value": "LEFT"
          },
          {
            "label": "bloq-zowi-movements-height-advanced-right",
            "value": "RIGHT"
          }
        ]
      },
      {
        "bloqInputId": "STEPS",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "ad6829ba-3e24-478d-ace7-fb4b7ba0377c"
      },
      {
        "alias": "text",
        "value": "bloq-zowi-movements-height-advanced-speed"
      },
      {
        "bloqInputId": "SPEED",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "aace8f32-edf1-4227-8273-c8bb5d303d32"
      },
      {
        "alias": "text",
        "value": "bloq-zowi-movements-height-advanced-height"
      },
      {
        "bloqInputId": "HEIGHT",
        "alias": "bloqInput",
        "acceptType": "all",
        "name": "f3dd6af7-4ed5-4fd7-8c44-fbafd309f472"
      }
    ]
  ],
  "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{HEIGHT},{DIR});"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "zowiDistance",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-zowi-distance",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-distance"
      }
    ]
  ],
  "code": "zowi.getDistance()",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiGestures",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-zowi-gestures",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-gestures"
      },
      {
        "id": "GESTURE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-gestures-ZowiHappy",
            "value": "ZowiHappy"
          },
          {
            "label": "bloq-zowi-gestures-ZowiSuperHappy",
            "value": "ZowiSuperHappy"
          },
          {
            "label": "bloq-zowi-gestures-ZowiSad",
            "value": "ZowiSad"
          },
          {
            "label": "bloq-zowi-gestures-ZowiSleeping",
            "value": "ZowiSleeping"
          },
          {
            "label": "bloq-zowi-gestures-ZowiFart",
            "value": "ZowiFart"
          },
          {
            "label": "bloq-zowi-gestures-ZowiConfused",
            "value": "ZowiConfused"
          },
          {
            "label": "bloq-zowi-gestures-ZowiLove",
            "value": "ZowiLove"
          },
          {
            "label": "bloq-zowi-gestures-ZowiAngry",
            "value": "ZowiAngry"
          },
          {
            "label": "bloq-zowi-gestures-ZowiFretful",
            "value": "ZowiFretful"
          },
          {
            "label": "bloq-zowi-gestures-ZowiVictory",
            "value": "ZowiVictory"
          },
          {
            "label": "bloq-zowi-gestures-ZowiFail",
            "value": "ZowiFail"
          }
        ]
      }
    ]
  ],
  "code": "zowi.playGesture({GESTURE});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiHome",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-zowi-rest",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-rest"
      }
    ]
  ],
  "code": "zowi.home();"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiMouth",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-zowi-mouth",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-mouth"
      },
      {
        "id": "GESTURE",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-mouth-smile",
            "value": "smile_code"
          },
          {
            "label": "bloq-zowi-mouth-sad",
            "value": "sad_code"
          },
          {
            "label": "bloq-zowi-mouth-happy",
            "value": "happyOpenMouth_code"
          },
          {
            "label": "bloq-zowi-mouth-confused",
            "value": "confused_code"
          },
          {
            "label": "bloq-zowi-mouth-bigSurprise",
            "value": "bigSurprise_code"
          },
          {
            "label": "bloq-zowi-mouth-tongueOut",
            "value": "tongueOut_code"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-zowi-mouth-mouth"
      }
    ]
  ],
  "code": "zowi.putMouth({GESTURE}, false);"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiMovements",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-zowi-movements",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-movements"
      },
      {
        "id": "MOVEMENT",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-walk",
            "value": "walk"
          },
          {
            "label": "bloq-zowi-movements-turn",
            "value": "turn"
          },
          {
            "label": "bloq-zowi-movements-shakeLeg",
            "value": "shakeLeg"
          },
          {
            "label": "bloq-zowi-movements-bend",
            "value": "bend"
          }
        ]
      },
      {
        "id": "DIR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-forward",
            "value": "FORWARD"
          },
          {
            "label": "bloq-zowi-movements-backward",
            "value": "BACKWARD"
          },
          {
            "label": "bloq-zowi-movements-left",
            "value": "LEFT"
          },
          {
            "label": "bloq-zowi-movements-right",
            "value": "RIGHT"
          }
        ]
      },
      {
        "id": "STEPS",
        "alias": "numberInput",
        "value": 4
      },
      {
        "alias": "text",
        "value": "bloq-zowi-movements-speed"
      },
      {
        "id": "SPEED",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-speed-small",
            "value": "LOW_SPEED"
          },
          {
            "label": "bloq-zowi-movements-speed-medium",
            "value": "MEDIUM_SPEED"
          },
          {
            "label": "bloq-zowi-movements-speed-high",
            "value": "HIGH_SPEED"
          }
        ]
      }
    ]
  ],
  "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{DIR});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiMovementsHeight",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-zowi-movements-height",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-movements-height"
      },
      {
        "id": "MOVEMENT",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-height-moonwalker",
            "value": "moonwalker"
          },
          {
            "label": "bloq-zowi-movements-height-crusaito",
            "value": "crusaito"
          },
          {
            "label": "bloq-zowi-movements-height-flapping",
            "value": "flapping"
          }
        ]
      },
      {
        "id": "DIR",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-height-forward",
            "value": "FORWARD"
          },
          {
            "label": "bloq-zowi-movements-height-backward",
            "value": "BACKWARD"
          },
          {
            "label": "bloq-zowi-movements-height-left",
            "value": "LEFT"
          },
          {
            "label": "bloq-zowi-movements-height-right",
            "value": "RIGHT"
          }
        ]
      },
      {
        "id": "STEPS",
        "alias": "numberInput",
        "value": 1
      },
      {
        "alias": "text",
        "value": "bloq-zowi-movements-height-speed"
      },
      {
        "id": "SPEED",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-speed-small",
            "value": "LOW_SPEED"
          },
          {
            "label": "bloq-zowi-movements-speed-medium",
            "value": "MEDIUM_SPEED"
          },
          {
            "label": "bloq-zowi-movements-speed-high",
            "value": "HIGH_SPEED"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-zowi-movements-height-height"
      },
      {
        "id": "HEIGHT",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-height-small",
            "value": "SMALL_HEIGHT"
          },
          {
            "label": "bloq-zowi-movements-height-medium",
            "value": "MEDIUM_HEIGHT"
          },
          {
            "label": "bloq-zowi-movements-height-big",
            "value": "BIG_HEIGHT"
          }
        ]
      }
    ]
  ],
  "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{HEIGHT},{DIR});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiMovementsNoDir",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-zowi-movements-no-dir",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-movements-no-dir"
      },
      {
        "id": "MOVEMENT",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-no-dir-updown",
            "value": "updown"
          },
          {
            "label": "bloq-zowi-movements-no-dir-swing",
            "value": "swing"
          },
          {
            "label": "bloq-zowi-movements-no-dir-tiptoeSwing",
            "value": "tiptoeSwing"
          },
          {
            "label": "bloq-zowi-movements-no-dir-jitter",
            "value": "jitter"
          },
          {
            "label": "bloq-zowi-movements-no-dir-ascendingTurn",
            "value": "ascendingTurn"
          },
          {
            "label": "bloq-zowi-movements-no-dir-jump",
            "value": "jump"
          }
        ]
      },
      {
        "id": "STEPS",
        "alias": "numberInput",
        "value": 4
      },
      {
        "alias": "text",
        "value": "bloq-zowi-movements-no-dir-speed"
      },
      {
        "id": "SPEED",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-speed-small",
            "value": "LOW_SPEED"
          },
          {
            "label": "bloq-zowi-movements-speed-medium",
            "value": "MEDIUM_SPEED"
          },
          {
            "label": "bloq-zowi-movements-speed-high",
            "value": "HIGH_SPEED"
          }
        ]
      },
      {
        "alias": "text",
        "value": "bloq-zowi-movements-no-dir-height"
      },
      {
        "id": "HEIGHT",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-height-small",
            "value": "SMALL_HEIGHT"
          },
          {
            "label": "bloq-zowi-movements-height-medium",
            "value": "MEDIUM_HEIGHT"
          },
          {
            "label": "bloq-zowi-movements-height-big",
            "value": "BIG_HEIGHT"
          }
        ]
      }
    ]
  ],
  "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{HEIGHT});"
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiMovementsSimple",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-zowi-movements-simple",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-movements-simple"
      },
      {
        "id": "MOVEMENT",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-movements-simple-walk",
            "value": "walk"
          },
          {
            "label": "bloq-zowi-movements-simple-turn",
            "value": "turn"
          },
          {
            "label": "bloq-zowi-movements-simple-shakeLeg",
            "value": "shakeLeg"
          },
          {
            "label": "bloq-zowi-movements-simple-bend",
            "value": "bend"
          },
          {
            "label": "bloq-zowi-movements-simple-moonwalker",
            "value": "moonwalker"
          },
          {
            "label": "bloq-zowi-movements-simple-crusaito",
            "value": "crusaito"
          },
          {
            "label": "bloq-zowi-movements-simple-flapping",
            "value": "flapping"
          },
          {
            "label": "bloq-zowi-movements-simple-updown",
            "value": "updown"
          },
          {
            "label": "bloq-zowi-movements-simple-swing",
            "value": "swing"
          },
          {
            "label": "bloq-zowi-movements-simple-tiptoeSwing",
            "value": "tiptoeSwing"
          },
          {
            "label": "bloq-zowi-movements-simple-jitter",
            "value": "jitter"
          },
          {
            "label": "bloq-zowi-movements-simple-ascendingTurn",
            "value": "ascendingTurn"
          },
          {
            "label": "bloq-zowi-movements-simple-jump",
            "value": "jump"
          }
        ]
      },
      {
        "id": "STEPS",
        "alias": "numberInput",
        "value": 4
      },
      {
        "alias": "text",
        "value": "bloq-zowi-movements-simple-steps"
      }
    ]
  ],
  "code": "zowi.{MOVEMENT}({STEPS});"
});
db.bitbloq_Bloqs.insert({
  "type": "output",
  "name": "zowiSound",
  "connectors": [
    {
      "type": "connector--output",
      "accept": "connector--input"
    }
  ],
  "bloqClass": "bloq-zowi-sound",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-sound"
      }
    ]
  ],
  "code": "zowi.getNoise()",
  "returnType": {
    "type": "simple",
    "value": "float"
  }
});
db.bitbloq_Bloqs.insert({
  "type": "statement",
  "name": "zowiSounds",
  "connectors": [
    {
      "type": "connector--top",
      "accept": "connector--bottom"
    },
    {
      "type": "connector--bottom",
      "accept": "connector--top"
    }
  ],
  "bloqClass": "bloq-zowi-sounds",
  "content": [
    [
      {
        "alias": "text",
        "value": "bloq-zowi-sounds"
      },
      {
        "id": "SOUND",
        "alias": "staticDropdown",
        "options": [
          {
            "label": "bloq-zowi-sounds-surprise",
            "value": "S_surprise"
          },
          {
            "label": "bloq-zowi-sounds-OhOoh",
            "value": "S_OhOoh"
          },
          {
            "label": "bloq-zowi-sounds-cuddly",
            "value": "S_cuddly"
          },
          {
            "label": "bloq-zowi-sounds-sleeping",
            "value": "S_sleeping"
          },
          {
            "label": "bloq-zowi-sounds-happy",
            "value": "S_happy"
          },
          {
            "label": "bloq-zowi-sounds-sad",
            "value": "S_sad"
          },
          {
            "label": "bloq-zowi-sounds-confused",
            "value": "S_confused"
          },
          {
            "label": "bloq-zowi-sounds-fart1",
            "value": "S_fart1"
          }
        ]
      }
    ]
  ],
  "code": "zowi.sing({SOUND});"
});


