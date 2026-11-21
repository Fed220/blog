export type ArticleCategory = "wallets" | "security" | "basics";

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  summary: string;
  publishedAt: string;
  readTimeMinutes: number;
  author: {
    name: string;
    role: string;
  };
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const ARTICLES_MOCK: Article[] = [
  {
    id: "1",
    slug: "billeteras-custodia-y-no-custodia-cual-es-la-diferencia",
    title: "Billeteras de custodia y sin custodia: cuál es la diferencia",
    category: "wallets",
    summary:
      "Análisis técnico detallado de dos modelos de almacenamiento de claves privadas: quién controla el acceso a las direcciones en la blockchain y cómo funciona la arquitectura de autocustodia.",
    publishedAt: "10 de noviembre de 2026",
    readTimeMinutes: 6,
    author: {
      name: "Alexéi Morózov",
      role: "Editor técnico, especialista en infraestructura blockchain",
    },
    sections: [
      {
        heading: "Qué almacena realmente una billetera",
        paragraphs: [
          "Un error común es pensar que una billetera de criptomonedas guarda las monedas o tokens dentro de la propia aplicación. En realidad, todos los registros de saldos se encuentran directamente en el libro mayor distribuido (blockchain), mientras que la billetera actúa como una interfaz de software o hardware para gestionar las claves criptográficas.",
          "Para interactuar con la red se utilizan dos elementos vinculados: una dirección pública (similar a un número de cuenta que se puede compartir para recibir transferencias) y una clave privada, una combinación secreta de caracteres con la que se genera la firma digital de cada transacción.",
        ],
      },
      {
        heading: "Arquitectura de las soluciones de custodia",
        paragraphs: [
          "En el modelo de custodia, las claves privadas se almacenan en los servidores de un proveedor de servicios externo. El usuario accede a la interfaz mediante una combinación estándar de usuario, contraseña y autenticación de dos factores.",
          "La principal característica de este enfoque es la posibilidad de recuperar el acceso a la cuenta a través del servicio de soporte en caso de perder la contraseña. Sin embargo, desde el punto de vista técnico, el usuario no firma las transacciones directamente: la solicitud es procesada por la infraestructura interna de la plataforma.",
        ],
      },
      {
        heading: "Principio de funcionamiento de las billeteras sin custodia",
        paragraphs: [
          "Las billeteras sin custodia o de autocustodia (como MetaMask, Trust Wallet o dispositivos de hardware como Ledger y Trezor) generan las claves privadas de forma local en el dispositivo del usuario. Los desarrolladores de la aplicación no tienen acceso a estos datos ni los almacenan en sus servidores.",
          "El control total implica también una responsabilidad total: al crear la billetera, el programa genera una frase mnemotécnica (frase semilla o Seed phrase) de 12 o 24 palabras. Si el dispositivo falla, solo será posible restaurar el acceso a las direcciones contando con esta copia de seguridad.",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "que-es-la-frase-semilla-y-el-estandar-bip39",
    title: "Cómo funciona la frase semilla y para qué sirve el estándar BIP-39",
    category: "security",
    summary:
      "Analizamos el estándar criptográfico de generación de frases mnemotécnicas: de dónde salen las 12 o 24 palabras, cómo se convierten en una clave maestra y por qué importa su orden.",
    publishedAt: "08 de noviembre de 2026",
    readTimeMinutes: 7,
    author: {
      name: "Dmitri Sokolov",
      role: "Experto en seguridad de la información",
    },
    sections: [
      {
        heading: "El problema de memorizar claves hexadecimales",
        paragraphs: [
          "La clave privada base en la mayoría de las blockchains es un número de 256 bits que, en formato hexadecimal, se ve como una cadena de 64 letras y números aleatorios. Copiar una cadena así a mano sin cometer un solo error resulta extremadamente difícil.",
          "Para simplificar las copias de seguridad, en 2013 se propuso el estándar BIP-39 (Bitcoin Improvement Proposal 39). Este describe un algoritmo para transformar la entropía aleatoria en una secuencia de palabras sencillas en inglés extraídas de un diccionario predefinido.",
        ],
      },
      {
        heading: "Cómo se forma el diccionario y la suma de verificación",
        paragraphs: [
          "El diccionario oficial BIP-39 incluye exactamente 2048 palabras en inglés. Están seleccionadas de manera que las primeras cuatro letras de cada palabra sean únicas y no coincidan con ninguna otra palabra de la lista.",
          "La última palabra de una frase de 12 o 24 palabras no es completamente aleatoria, ya que contiene una suma de verificación (checksum). Gracias a esto, al introducir la frase, la billetera comprueba al instante la validez del registro y avisa si alguna palabra está mal escrita o desordenada.",
        ],
      },
      {
        heading: "Reglas básicas de almacenamiento sin conexión",
        paragraphs: [
          "Dado que a partir de una única frase mnemotécnica se derivan matemáticamente todas las claves privadas secundarias para decenas de redes distintas (billetera jerárquica determinista), comprometer la frase conlleva la pérdida total del control sobre las direcciones.",
          "Los especialistas en seguridad recomiendan anotar las palabras exclusivamente en soportes físicos —papel o placas metálicas especializadas—, evitando hacer capturas de pantalla, guardarlas en notas en la nube o enviarlas por aplicaciones de mensajería.",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "billeteras-de-hardware-como-funciona-el-chip-secure-element",
    title:
      "Arquitectura de las billeteras de hardware: para qué sirve el chip Secure Element",
    category: "wallets",
    summary:
      "Análisis de la arquitectura de las billeteras frías: cómo un entorno de ejecución aislado protege las claves privadas al conectarse a un ordenador o smartphone infectado.",
    publishedAt: "05 de noviembre de 2026",
    readTimeMinutes: 6,
    author: {
      name: "Alexéi Morózov",
      role: "Editor técnico, especialista en infraestructura blockchain",
    },
    sections: [
      {
        heading: "La principal vulnerabilidad de las billeteras de software",
        paragraphs: [
          "Las extensiones de navegador y las aplicaciones móviles funcionan dentro de un sistema operativo que está conectado permanentemente a internet. Si un software malicioso infecta el equipo y lee el portapapeles o la memoria de los procesos, las claves privadas pueden quedar expuestas al desbloquear la aplicación.",
          "Una billetera de hardware resuelve este problema separando físicamente el entorno donde se crea la transacción del entorno donde se realiza su firma criptográfica.",
        ],
      },
      {
        heading: "Cómo se realiza la firma dentro del dispositivo",
        paragraphs: [
          "Al enviar una transferencia, la interfaz de software en el ordenador genera una transacción «en bruto» sin firmar y la envía por cable o Bluetooth al dispositivo físico. En el interior de la billetera hay un microcontrolador seguro (a menudo de clase Secure Element, similar a los chips de las tarjetas bancarias y los pasaportes biométricos).",
          "El chip verifica los datos y muestra la dirección del destinatario y el importe en la pantalla integrada del propio dispositivo. Solo después de que el usuario pulse físicamente los botones de confirmación en la carcasa, el chip firma la transacción con la clave privada y devuelve al exterior la firma digital ya lista. La clave en sí nunca sale del microprocesador.",
        ],
      },
      {
        heading: "La importancia de la pantalla integrada",
        paragraphs: [
          "La pantalla independiente de una billetera de hardware actúa como la última línea de verificación. Incluso si la pantalla del ordenador está manipulada por un virus y muestra una dirección de destino falsa, el visor del dispositivo mostrará los datos reales codificados en la transacción.",
          "Comprobar que los caracteres de la dirección coincidan tanto en el monitor como en la pantalla del dispositivo permite evitar por completo los ataques de suplantación de datos.",
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "que-es-la-comision-de-red-gas-y-como-se-calcula",
    title:
      "Comisión de red (Gas) en la blockchain: de qué depende el coste de una transferencia",
    category: "basics",
    summary:
      "Explicación técnica del mecanismo de tarifas de gas en las redes Ethereum, TRON y Bitcoin: qué es el Gwei, la comisión base y por qué las transferencias simples son más baratas que interactuar con contratos inteligentes.",
    publishedAt: "02 de noviembre de 2026",
    readTimeMinutes: 5,
    author: {
      name: "Alexéi Morózov",
      role: "Editor técnico, especialista en infraestructura blockchain",
    },
    sections: [
      {
        heading: "Por qué existen las comisiones en las blockchains",
        paragraphs: [
          "En las redes descentralizadas no existe un centro de datos único financiado por una sola empresa. Del mantenimiento del registro, la verificación de transacciones y la creación de nuevos bloques se encargan nodos independientes de la red (validadores o mineros), que invierten recursos computacionales y energía eléctrica.",
          "La comisión de red cumple dos funciones: compensar los gastos de los operadores de nodos y proteger la blockchain contra ataques de spam, haciendo que el envío masivo de transacciones sin sentido resulte económicamente inviable.",
        ],
      },
      {
        heading: "Concepto de gas (Gas) y Gwei",
        paragraphs: [
          "En la red Ethereum y en las blockchains compatibles con ella (EVM), la complejidad computacional de cada operación se mide en unidades convencionales llamadas gas (Gas). Una transferencia estándar de la moneda nativa ETH requiere exactamente 21 000 unidades de gas, mientras que la ejecución de un contrato inteligente complejo puede exigir entre 60 000 y 300 000 unidades.",
          "El coste final se obtiene multiplicando la cantidad de gas por el precio actual de cada unidad, que se mide en Gwei (la milmillonésima parte de un ETH). Cuando la red está muy congestionada, los usuarios compiten por un espacio en el bloque, lo que provoca un aumento temporal del precio del gas.",
        ],
      },
      {
        heading: "Particularidades de las comisiones en distintos estándares",
        paragraphs: [
          "Es importante tener en cuenta que la comisión siempre se paga en la moneda nativa de la blockchain en la que se realiza la operación. Por ejemplo, para transferir un token bajo el estándar ERC-20, es imprescindible contar con un pequeño saldo de ETH en la dirección.",
          "En la red TRON (estándar TRC-20) se utiliza un modelo alternativo de recursos: para las transacciones se consumen unidades de ancho de banda (Bandwidth) y energía (Energy); si estas no son suficientes, se descuenta automáticamente la moneda nativa TRX.",
        ],
      },
    ],
  },
  {
    id: "5",
    slug: "estandares-de-tokens-erc20-trc20-bep20-por-que-importa-la-red",
    title:
      "Estándares de red ERC-20, TRC-20 y BEP-20: por qué no se deben confundir las blockchains al transferir",
    category: "basics",
    summary:
      "Analizamos la arquitectura de los tokens multired: cómo una misma stablecoin existe en diferentes blockchains y qué ocurre al enviar fondos a una red incompatible.",
    publishedAt: "29 de octubre de 2026",
    readTimeMinutes: 5,
    author: {
      name: "Dmitri Sokolov",
      role: "Experto en seguridad de la información",
    },
    sections: [
      {
        heading: "Qué es un estándar de token",
        paragraphs: [
          "La mayoría de los activos digitales actuales no cuentan con una blockchain propia independiente, sino que se emiten en forma de contratos inteligentes sobre grandes redes ya existentes. Para que las billeteras y aplicaciones puedan mostrar los saldos y procesar transferencias de manera uniforme, se desarrollaron estándares técnicos para las interfaces de los contratos inteligentes.",
          "Los más extendidos son ERC-20 (en la red Ethereum), TRC-20 (en la red TRON) y BEP-20 (en BNB Smart Chain). Formalmente, son reglas que definen las funciones del contrato inteligente: consulta de saldo, envío y autorización de gasto.",
        ],
      },
      {
        heading: "Por qué un mismo activo existe en varias redes",
        paragraphs: [
          "Los grandes emisores de tokens (por ejemplo, de las stablecoins USDT o USDC) despliegan sus contratos inteligentes simultáneamente en varias blockchains independientes. Esto permite a los usuarios elegir la infraestructura con la velocidad de confirmación de bloques y el importe de comisión de red que mejor se adapten a sus necesidades.",
          "A pesar de tener el mismo símbolo (ticker) en la interfaz de la billetera, desde el punto de vista técnico un token en la red TRON y un token en la red Ethereum pertenecen a dos registros distintos que no están conectados directamente entre sí.",
        ],
      },
      {
        heading: "Cómo comprobar la compatibilidad antes de enviar",
        paragraphs: [
          "En la blockchain no existe un botón para cancelar una operación. Si se envía un token desde la red ERC-20 a una dirección que únicamente admite la red TRC-20, la transacción se ejecutará en la red de origen, pero el destinatario no verá el saldo en su interfaz.",
          "Antes de confirmar cualquier operación, es indispensable asegurarse de que el nombre de la red de envío seleccionada coincida exactamente con el estándar de red indicado al generar la dirección de recepción.",
        ],
      },
    ],
  },
  {
    id: "6",
    slug: "analisis-interfaz-metamask-como-trabajar-con-redes-evm",
    title:
      "Análisis técnico de MetaMask: cómo funciona el trabajo con redes compatibles con EVM",
    category: "wallets",
    summary:
      "Revisamos las funciones de una de las billeteras de navegador sin custodia más populares: cómo añadir nodos RPC personalizados, gestionar permisos y verificar firmas.",
    publishedAt: "25 de octubre de 2026",
    readTimeMinutes: 6,
    author: {
      name: "Alexéi Morózov",
      role: "Editor técnico, especialista en infraestructura blockchain",
    },
    sections: [
      {
        heading: "Propósito y arquitectura de la extensión",
        paragraphs: [
          "MetaMask es una billetera de software sin custodia disponible como extensión para navegadores web y aplicación móvil. Desarrollada originalmente para interactuar con la blockchain de Ethereum, admite cualquier red compatible con la Máquina Virtual de Ethereum (EVM), incluidas Polygon, Arbitrum, Optimism y BNB Smart Chain.",
          "La característica principal de las redes EVM es que comparten un mismo formato de direcciones públicas (que comienzan por los caracteres 0x) y una única clave privada para todas las redes conectadas dentro de una misma cuenta.",
        ],
      },
      {
        heading: "Conexión de redes personalizadas mediante RPC",
        paragraphs: [
          "Para enviar solicitudes a la blockchain, la billetera utiliza puntos de llamada a procedimiento remoto (nodos RPC). Por defecto, MetaMask se conecta a proveedores de infraestructura básicos, aunque el usuario puede añadir manualmente cualquier red principal o de pruebas.",
          "Para la configuración manual basta con indicar cuatro parámetros: el nombre de la red, la URL del servidor RPC, el identificador numérico de la cadena (Chain ID) y el símbolo del token nativo para mostrar las comisiones.",
        ],
      },
      {
        heading: "Control de las aplicaciones web conectadas",
        paragraphs: [
          "Al interactuar con aplicaciones web descentralizadas, el navegador solicita permiso para visualizar la dirección pública. En los ajustes de MetaMask existe una sección de sitios conectados que permite revocar en cualquier momento el acceso de visualización de la cuenta para dominios concretos.",
        ],
      },
    ],
  },

  {
    id: "7",
    slug: "como-verificar-una-transaccion-en-un-explorador-de-bloques",
    title:
      "Cómo verificar el estado de una transacción mediante un explorador de bloques (Etherscan, Tronscan)",
    category: "basics",
    summary:
      "Guía paso a paso para leer el registro público: qué es el hash de transacción (TxID), cuántas confirmaciones de bloque se necesitan para la finalización y cómo interpretar los registros.",
    publishedAt: "21 de octubre de 2026",
    readTimeMinutes: 5,
    author: {
      name: "Alexéi Morózov",
      role: "Editor técnico, especialista en infraestructura blockchain",
    },
    sections: [
      {
        heading: "Qué es un explorador de bloques",
        paragraphs: [
          "Dado que las blockchains públicas son bases de datos abiertas, cualquier operación puede rastrearse sin necesidad de registro ni contraseñas. Para ello se utilizan buscadores web especializados llamados exploradores de bloques (Block Explorers). Para la red Bitcoin esta herramienta es Mempool.space; para Ethereum, Etherscan; y para TRON, Tronscan.",
        ],
      },
      {
        heading: "Búsqueda por hash de transacción (TxID)",
        paragraphs: [
          "Tras enviar una transferencia, la billetera genera un identificador único de la operación: el hash de transacción (Transaction Hash o TxID), que consiste en una larga cadena de letras y números.",
          "Al pegar este identificador en la barra de búsqueda del explorador, se puede consultar la hora exacta de creación del registro, la dirección del remitente, la dirección del destinatario, el importe de la comisión de red descontada y el estado actual de la operación (Pending — pendiente, Success — confirmada, Failed — rechazada por la red).",
        ],
      },
      {
        heading: "Número de confirmaciones de bloque (Confirmations)",
        paragraphs: [
          "Cuando una transacción se incluye por primera vez en un bloque, recibe 1 confirmación. Cada bloque posterior que se añade a la cadena encima de ese bloque incrementa el contador de confirmaciones en una unidad. Cuantas más confirmaciones acumula una operación, mayor es la garantía criptográfica de su irreversibilidad.",
        ],
      },
    ],
  },
  {
    id: "8",
    slug: "revocar-permisos-de-contratos-inteligentes-token-approvals",
    title:
      "Qué son los Token Approvals y por qué revisar periódicamente los permisos de contratos inteligentes",
    category: "security",
    summary:
      "Analizamos la mecánica de concesión de permisos para gestionar tokens en redes EVM: en qué se diferencia la firma de un mensaje normal de una autorización de gasto y cómo cerrar límites antiguos.",
    publishedAt: "17 de octubre de 2026",
    readTimeMinutes: 6,
    author: {
      name: "Dmitri Sokolov",
      role: "Experto en seguridad de la información",
    },
    sections: [
      {
        heading: "Cómo funcionan los permisos (Approve) en el estándar ERC-20",
        paragraphs: [
          "Para que una aplicación descentralizada pueda interactuar con tokens del estándar ERC-20 o BEP-20 en la dirección de un usuario, el estándar contempla la función Approve (aprobación). Al firmar dicha transacción, el propietario de la dirección autoriza a un contrato inteligente específico a disponer de una cantidad determinada de tokens.",
          "Para ahorrar en comisiones de red, muchas interfaces solicitan por defecto un límite ilimitado (Unlimited Approval), evitando así que el usuario tenga que confirmar el permiso antes de cada operación posterior.",
        ],
      },
      {
        heading: "Riesgos potenciales de los permisos indefinidos",
        paragraphs: [
          "El permiso concedido permanece activo en la blockchain de forma indefinida, incluso si el usuario cierra la pestaña del navegador y deja de utilizar el servicio. Si meses después se descubre una vulnerabilidad en el código del contrato inteligente externo, ese permiso activo podría aprovecharse teóricamente para retirar los tokens aprobados.",
        ],
      },
      {
        heading: "Auditoría y revocación de accesos activos",
        paragraphs: [
          "Las buenas prácticas de higiene digital recomiendan revisar periódicamente la lista de permisos otorgados mediante las herramientas integradas en los exploradores de bloques (por ejemplo, la sección Token Approval Checker en Etherscan) y revocar los accesos que ya no se utilicen estableciendo un límite cero.",
        ],
      },
    ],
  },
  {
    id: "9",
    slug: "analisis-arquitectura-trust-wallet-billetera-movil",
    title:
      "Análisis de la arquitectura de Trust Wallet: particularidades del almacenamiento multicadena en el smartphone",
    category: "wallets",
    summary:
      "Estudiamos la organización técnica de la billetera móvil sin custodia: cómo a partir de una sola frase mnemotécnica se generan direcciones para Bitcoin, Solana, TRON y redes EVM.",
    publishedAt: "14 de octubre de 2026",
    readTimeMinutes: 5,
    author: {
      name: "Alexéi Morózov",
      role: "Editor técnico, especialista en infraestructura blockchain",
    },
    sections: [
      {
        heading: "Principio de determinismo jerárquico (billetera HD)",
        paragraphs: [
          "Trust Wallet pertenece a la categoría de billeteras multicadena jerárquicas deterministas (estándar BIP-44). Esto significa que el usuario no necesita anotar una clave independiente para cada criptomoneda: la aplicación utiliza una única frase de 12 palabras como fuente raíz de entropía.",
          "Aplicando distintas rutas de derivación (derivation paths), el programa calcula matemáticamente pares de claves compatibles para decenas de protocolos independientes, incluidos Bitcoin, Ethereum, Solana, TON y TRON.",
        ],
      },
      {
        heading: "Cifrado local y protección de la aplicación",
        paragraphs: [
          "La frase secreta y las claves privadas se guardan cifradas en el almacenamiento local seguro del sistema operativo del smartphone (Keychain en iOS o Keystore en Android). Para evitar accesos no autorizados cuando el teléfono está desbloqueado, la aplicación incorpora protección mediante código PIN y sensores biométricos del dispositivo.",
        ],
      },
    ],
  },

  {
    id: "10",
    slug: "proteccion-contra-phishing-y-suplantacion-de-direcciones",
    title:
      "Protección contra el phishing y la suplantación de direcciones: reglas básicas de higiene digital",
    category: "security",
    summary:
      "Análisis de los vectores de ataque más habituales contra usuarios de billeteras: clippers del portapapeles, dominios falsos y envenenamiento de direcciones mediante transacciones de importe cero.",
    publishedAt: "10 de octubre de 2026",
    readTimeMinutes: 6,
    author: {
      name: "Dmitri Sokolov",
      role: "Experto en seguridad de la información",
    },
    sections: [
      {
        heading: "Software malicioso tipo clipper",
        paragraphs: [
          "Uno de los métodos clásicos de interceptación de transacciones son los programas maliciosos llamados clippers, que monitorizan el contenido del portapapeles del sistema operativo. Cuando el usuario copia la dirección del destinatario, el programa reconoce su formato al instante y la sustituye de forma imperceptible por una dirección similar del atacante.",
          "La única forma fiable de protegerse frente a este tipo de suplantación consiste en verificar visualmente no solo los 4 primeros y los 4 últimos caracteres de la dirección pegada, sino también varios caracteres intermedios antes de pulsar el botón de envío.",
        ],
      },
      {
        heading: "Ataque de envenenamiento del historial (Address Poisoning)",
        paragraphs: [
          "Los atacantes analizan las transacciones públicas en la blockchain y, mediante generadores de direcciones, crean una billetera cuyos primeros y últimos caracteres coinciden con una dirección del historial de transferencias de la víctima. A continuación, envían una transacción de importe cero desde esa dirección falsa hacia la billetera de la víctima.",
          "La maniobra busca que, en la siguiente transferencia, el usuario copie la dirección desde la lista de operaciones recientes del explorador en lugar de hacerlo desde una agenda de contactos verificada. Utilizar la libreta de direcciones integrada en la billetera neutraliza por completo este vector de ataque.",
        ],
      },
    ],
  },
];
