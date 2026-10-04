/*
  ============================================================
  CONTENT.JS: everything on the site lives in this file.
  ============================================================

  How to edit (in GitHub, click the pencil icon, change text, click "Commit changes"):

  - Change only the text between quotes. Keep the quotes, commas, and brackets.
  - Every line ends with a comma, except the last item in a list (and even that is OK).
  - Dates are always written "YYYY-MM-DD". Example: October 5, 2026 is "2026-10-05".
  - Times are always 24-hour "HH:MM". Example: 1:45 PM is "13:45".
  - en: is English. es: is Spanish. Fill in both.
  - Leave a link as "" if you don't have it yet. The site will say "Coming soon".
  - If the site goes blank after an edit, you probably deleted a comma or a quote.
    Open the last commit in GitHub to see what changed.

  SAMPLE = sample data for you to replace.
  PLACEHOLDER = your real details go here.
  TODO(es) = Spanish I want you (or a Spanish-speaking colleague) to double-check.
*/

window.CONTENT = {

  /* ----------------------------------------------------------
     SITE: your name, contact info, school info, and shared links.
     ---------------------------------------------------------- */
  site: {
    siteName: { en: "Mrs. Barbee's Math", es: "Matemáticas con la Sra. Barbee" },
    teacher: { en: "Mrs. Barbee", es: "Sra. Barbee" },

    // Change this one letter to switch fonts: "A", "B", or "C". See README.
    fontPairing: "A",

    // The date you last updated this file. Shows in the footer.
    lastUpdated: "2026-10-04",

    // How many announcements to show on the home page.
    maxAnnouncements: 4,

    contact: {
      email: "",          // PLACEHOLDER: your school email, like "name@school.org"
      classDojo: true,    // PLACEHOLDER: true if families can message you on ClassDojo, false if not
      replyTime: {
        en: "I reply within one school day. If you write on the weekend, I'll answer on Monday.",
        es: "Respondo en un día escolar o menos. Si me escribe el fin de semana, le contesto el lunes."
      },
      preferred: {
        // PLACEHOLDER: say how you like to be reached.
        en: "ClassDojo is the fastest way to reach me. You can write in English or Spanish.",
        es: "ClassDojo es la forma más rápida de comunicarse conmigo. Puede escribirme en español o en inglés."
        // TODO(es): only keep "en español" if you or a colleague can read Spanish messages.
      }
    },

    school: {
      name: "Pan American Academy Charter School",
      address: "[School address]",       // PLACEHOLDER
      phone: "[School phone]",           // PLACEHOLDER
      hours: { en: "[School hours]", es: "[Horario de la escuela]" },  // PLACEHOLDER
      website: "",                       // PLACEHOLDER: school website link
      calendar: ""                       // PLACEHOLDER: school calendar link
    },

    // Links used in more than one place.
    links: {
      eurekaFamily: "https://greatminds.org/programs/math/eureka-math-2/k-8", // TODO: swap in the exact family page you share with families
      manipulatives: "https://www.mathlearningcenter.org/apps",
      desmos: "https://www.desmos.com/calculator",
      calculator: "https://www.desmos.com/fourfunction"
    }
  },


  /* ----------------------------------------------------------
     ANNOUNCEMENTS: short dated notes on the home page.
     Newest shows first. grade: "5", "6", or "" for both grades.
     ---------------------------------------------------------- */
  announcements: [
    {
      date: "2026-10-02", grade: "",
      en: "SAMPLE: The class store is open Friday. Bring your points and your patience.",
      es: "SAMPLE: La tienda de la clase abre el viernes. Traigan sus puntos y su paciencia."
    },
    {
      date: "2026-10-02", grade: "6",
      en: "SAMPLE: Module 1 assessment is Thursday, October 15. Start reviewing your ratio tables.",
      es: "SAMPLE: La evaluación del módulo 1 es el jueves 15 de octubre. Empiecen a repasar sus tablas de razones."
    },
    {
      date: "2026-09-30", grade: "5",
      en: "SAMPLE: Module 2 starts Thursday. We will be sharing a lot of pizza. On paper.",
      es: "SAMPLE: El módulo 2 empieza el jueves. Vamos a repartir mucha pizza. En papel."
    },
    {
      date: "2026-09-28", grade: "",
      en: "SAMPLE: Module 1 tests come home this week. Please sign and return them.",
      es: "SAMPLE: Esta semana van a casa los exámenes del módulo 1. Por favor, fírmelos y devuélvalos."
    }
  ],


  /* ----------------------------------------------------------
     PUZZLE OF THE WEEK: one problem. Image is optional.
     If you add an image, put it in the images folder and write alt text.
     Keep images under 200 KB.
     ---------------------------------------------------------- */
  puzzle: {
    title: { en: "Count the squares", es: "Cuenta los cuadrados" },
    prompt: {
      en: "How many squares are in this picture? Hint: it's more than 9.",
      es: "¿Cuántos cuadrados hay en este dibujo? Pista: son más de 9."
    },
    image: "images/puzzle-squares.svg",
    alt: {
      en: "A big square split into a 3 by 3 grid of small squares.",
      es: "Un cuadrado grande dividido en una cuadrícula de 3 por 3 cuadrados pequeños."
    }
  },


  /* ----------------------------------------------------------
     GRADES: one block for 5th grade, one for 6th grade.

     classroom, slides, videos: links for the whole grade.

     modules: one entry per Eureka Math² module.
       number, title, start, end (dates), bigIdea, vocab, slides,
       topics (for the Homework help page), assessments (show in "Due soon").

     homework: one line per assignment. Shows in "Due soon" during
       the 7 days before it's due.
     ---------------------------------------------------------- */
  grades: {

    /* ======================== 5TH GRADE ======================== */
    "5": {
      classroom: "https://classroom.google.com/",  // PLACEHOLDER: your 5th grade class link
      slides: "",                                  // PLACEHOLDER: 5th grade slides link
      videos: "",                                  // PLACEHOLDER: 5th grade videos link

      homework: [
        // SAMPLE homework. due: date, title: en/es, link: "" or a link.
        { due: "2026-10-06", title: { en: "Lesson 2 practice: fractions as division", es: "Práctica de la lección 2: fracciones como división" }, link: "" },
        { due: "2026-10-08", title: { en: "Lesson 4 practice: fractions on a number line", es: "Práctica de la lección 4: fracciones en la recta numérica" }, link: "" },
        { due: "2026-10-14", title: { en: "Lesson 6 practice: equivalent fractions", es: "Práctica de la lección 6: fracciones equivalentes" }, link: "" }
      ],

      modules: [
        {
          number: 1,
          title: { en: "Place Value Concepts for Multiplication and Division with Whole Numbers", es: "Valor posicional para multiplicar y dividir números enteros" },
          start: "2026-08-31", end: "2026-09-30",
          bigIdea: {
            en: "Our number system is built on tens. We use place value to multiply and divide big numbers.",
            es: "Nuestro sistema de numeración se basa en el diez. Usamos el valor posicional para multiplicar y dividir números grandes."
          },
          vocab: [
            { en: "place value", es: "valor posicional", example: "In 352, the 5 is worth 50." },
            { en: "exponent", es: "exponente", example: "10³ = 10 × 10 × 10" },
            { en: "product", es: "producto", example: "6 × 4 = 24" }
          ],
          slides: "",
          assessments: [
            { date: "2026-09-29", title: { en: "Module 1 assessment", es: "Evaluación del módulo 1" } }
          ],
          topics: [
            {
              letter: "A",
              title: { en: "Place value and powers of 10", es: "Valor posicional y potencias de 10" },
              bigIdea: {
                en: "Each place is worth 10 times the place to its right. When you multiply by 10, every digit moves one place to the left.",
                es: "Cada lugar vale 10 veces más que el lugar de su derecha. Cuando multiplicas por 10, cada dígito se mueve un lugar a la izquierda."
              },
              vocab: [
                { en: "power of 10", es: "potencia de 10", example: "100 = 10²" },
                { en: "exponent", es: "exponente", example: "10³ = 10 × 10 × 10" },
                { en: "digit", es: "dígito", example: "352 has 3 digits." }
              ],
              example: {
                problem: { en: "What is 34 × 100?", es: "¿Cuánto es 34 × 100?" },
                steps: [
                  { en: "100 is 10 × 10. So multiply by 10 two times.", es: "100 es 10 × 10. Entonces multiplica por 10 dos veces." },
                  { en: "34 × 10 = 340. Each digit moved one place left.", es: "34 × 10 = 340. Cada dígito se movió un lugar a la izquierda." },
                  { en: "340 × 10 = 3,400. They moved one more place.", es: "340 × 10 = 3,400. Se movieron un lugar más." }
                ],
                answer: { en: "3,400", es: "3,400" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "B",
              title: { en: "Multiply big numbers", es: "Multiplicar números grandes" },
              bigIdea: {
                en: "Break a big number into parts. Multiply each part. Then add the parts back together.",
                es: "Separa un número grande en partes. Multiplica cada parte. Después suma todas las partes."
              },
              vocab: [
                { en: "area model", es: "modelo de área", example: "A rectangle split into parts" },
                { en: "partial products", es: "productos parciales", example: "20 × 14 and 3 × 14" },
                { en: "standard algorithm", es: "algoritmo convencional", example: "Stacking the numbers to multiply" }
                // TODO(es): check "algoritmo convencional" matches the Spanish Eureka materials.
              ],
              example: {
                problem: { en: "What is 23 × 14?", es: "¿Cuánto es 23 × 14?" },
                steps: [
                  { en: "Break 23 into 20 and 3.", es: "Separa 23 en 20 y 3." },
                  { en: "20 × 14 = 280.", es: "20 × 14 = 280." },
                  { en: "3 × 14 = 42.", es: "3 × 14 = 42." },
                  { en: "Add the parts: 280 + 42 = 322.", es: "Suma las partes: 280 + 42 = 322." }
                ],
                answer: { en: "322", es: "322" }
              },
              video: "", slides: "", family: ""
            }
          ]
        },
        {
          number: 2,
          title: { en: "Addition and Subtraction with Fractions", es: "Suma y resta de fracciones" },
          start: "2026-10-01", end: "2026-11-20",
          bigIdea: {
            en: "A fraction is a division problem. To add or subtract fractions, the pieces have to be the same size.",
            es: "Una fracción es una división. Para sumar o restar fracciones, las partes tienen que ser del mismo tamaño."
          },
          vocab: [
            { en: "numerator", es: "numerador", example: "The 3 in 3/4" },
            { en: "denominator", es: "denominador", example: "The 4 in 3/4" },
            { en: "equivalent fractions", es: "fracciones equivalentes", example: "1/2 = 2/4" },
            { en: "mixed number", es: "número mixto", example: "2 1/3" }
          ],
          slides: "",
          assessments: [
            { date: "2026-10-09", title: { en: "Topic A quiz", es: "Prueba del tema A" } },
            { date: "2026-11-19", title: { en: "Module 2 assessment", es: "Evaluación del módulo 2" } }
          ],
          topics: [
            // TODO: match topic names and letters to your Eureka Math² teacher edition.
            {
              letter: "A",
              title: { en: "Fractions as division", es: "Fracciones como división" },
              bigIdea: {
                en: "A fraction is a division problem. 3/4 means 3 divided by 4.",
                es: "Una fracción es una división. 3/4 quiere decir 3 dividido entre 4."
              },
              vocab: [
                { en: "numerator", es: "numerador", example: "The 3 in 3/4" },
                { en: "denominator", es: "denominador", example: "The 4 in 3/4" },
                { en: "quotient", es: "cociente", example: "12 ÷ 3 = 4. The quotient is 4." }
              ],
              example: {
                problem: {
                  en: "4 friends share 3 pizzas equally. How much pizza does each friend get?",
                  es: "4 amigos comparten 3 pizzas en partes iguales. ¿Cuánta pizza le toca a cada uno?"
                },
                steps: [
                  { en: "This is 3 ÷ 4.", es: "Esto es 3 ÷ 4." },
                  { en: "Draw 3 pizzas. Cut each one into 4 equal slices.", es: "Dibuja 3 pizzas. Corta cada una en 4 partes iguales." },
                  { en: "Each friend gets 1 slice from each pizza. That's 3 fourths.", es: "Cada amigo recibe 1 parte de cada pizza. Son 3 cuartos." }
                ],
                answer: { en: "3/4 of a pizza", es: "3/4 de pizza" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "B",
              title: { en: "Add and subtract fractions with different denominators", es: "Sumar y restar fracciones con distinto denominador" },
              bigIdea: {
                en: "You can only add pieces that are the same size. Rename the fractions so they have the same denominator. Then add.",
                es: "Solo puedes sumar partes del mismo tamaño. Cambia las fracciones para que tengan el mismo denominador. Después suma."
              },
              vocab: [
                { en: "common denominator", es: "denominador común", example: "1/2 and 1/3 can both be sixths." },
                { en: "equivalent fractions", es: "fracciones equivalentes", example: "1/2 = 3/6" },
                { en: "unit fraction", es: "fracción unitaria", example: "1/6" }
              ],
              example: {
                problem: { en: "What is 1/2 + 1/3?", es: "¿Cuánto es 1/2 + 1/3?" },
                steps: [
                  { en: "Halves and thirds are different sizes. We can't add them yet.", es: "Los medios y los tercios son de distinto tamaño. Todavía no se pueden sumar." },
                  { en: "Rename both as sixths: 1/2 = 3/6 and 1/3 = 2/6.", es: "Cámbialos a sextos: 1/2 = 3/6 y 1/3 = 2/6." },
                  { en: "Add the sixths: 3/6 + 2/6 = 5/6.", es: "Suma los sextos: 3/6 + 2/6 = 5/6." }
                ],
                answer: { en: "5/6", es: "5/6" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "C",
              title: { en: "Add and subtract mixed numbers", es: "Sumar y restar números mixtos" },
              bigIdea: {
                en: "A mixed number is wholes plus a fraction. Work with the wholes and the fractions, and trade a whole for pieces when you need to.",
                es: "Un número mixto es enteros más una fracción. Trabaja con los enteros y las fracciones, y cambia un entero por partes cuando lo necesites."
              },
              vocab: [
                { en: "mixed number", es: "número mixto", example: "3 1/4" },
                { en: "whole", es: "entero", example: "4/4 = 1 whole" },
                { en: "rename", es: "reagrupar", example: "3 1/4 = 2 5/4" }
                // TODO(es): check "reagrupar" vs. "volver a escribir" for "rename".
              ],
              example: {
                problem: { en: "What is 3 1/4 − 1 3/4?", es: "¿Cuánto es 3 1/4 − 1 3/4?" },
                steps: [
                  { en: "You can't take 3/4 from 1/4. Trade 1 whole for 4 fourths: 3 1/4 = 2 5/4.", es: "No puedes quitar 3/4 de 1/4. Cambia 1 entero por 4 cuartos: 3 1/4 = 2 5/4." },
                  { en: "Subtract the wholes: 2 − 1 = 1.", es: "Resta los enteros: 2 − 1 = 1." },
                  { en: "Subtract the fourths: 5/4 − 3/4 = 2/4.", es: "Resta los cuartos: 5/4 − 3/4 = 2/4." }
                ],
                answer: { en: "1 2/4, which is the same as 1 1/2", es: "1 2/4, que es lo mismo que 1 1/2" }
              },
              video: "", slides: "", family: ""
            }
          ]
        },
        {
          number: 3,
          title: { en: "Multiplication and Division with Fractions", es: "Multiplicación y división con fracciones" },
          start: "2026-11-30", end: "2027-02-05",
          bigIdea: {
            en: "Multiplying by a fraction can make a number smaller. We draw it first, then write the math.",
            es: "Multiplicar por una fracción puede hacer un número más pequeño. Primero lo dibujamos y después escribimos la operación."
          },
          vocab: [
            { en: "fraction of a set", es: "fracción de un conjunto", example: "1/3 of 12 is 4." },
            { en: "unit fraction", es: "fracción unitaria", example: "1/5" }
          ],
          slides: "", assessments: [], topics: []
        },
        {
          number: 4,
          title: { en: "Place Value Concepts for Decimal Operations", es: "Valor posicional para operaciones con decimales" },
          start: "2027-02-08", end: "2027-03-26",
          bigIdea: {
            en: "Decimals follow the same place value rules as whole numbers. We add, subtract, multiply, and divide with them.",
            es: "Los decimales siguen las mismas reglas de valor posicional que los números enteros. Sumamos, restamos, multiplicamos y dividimos con ellos."
          },
          vocab: [
            { en: "tenths", es: "décimos", example: "0.3 is 3 tenths." },
            { en: "hundredths", es: "centésimos", example: "0.07 is 7 hundredths." }
          ],
          slides: "", assessments: [], topics: []
        },
        {
          number: 5,
          title: { en: "Addition and Multiplication with Area and Volume", es: "Suma y multiplicación con área y volumen" },
          start: "2027-04-05", end: "2027-05-07",
          bigIdea: {
            en: "Area covers a flat space. Volume fills a 3D space. We find both by counting units and multiplying.",
            es: "El área cubre un espacio plano. El volumen llena un espacio en 3D. Hallamos los dos contando unidades y multiplicando."
          },
          vocab: [
            { en: "area", es: "área", example: "A 3 by 4 rectangle has an area of 12 square units." },
            { en: "volume", es: "volumen", example: "A 2 by 3 by 4 box holds 24 cubes." }
          ],
          slides: "", assessments: [], topics: []
        },
        {
          number: 6,
          title: { en: "Foundations to Geometry in the Coordinate Plane", es: "Bases de geometría en el plano de coordenadas" },
          start: "2027-05-10", end: "2027-06-11",
          bigIdea: {
            en: "A coordinate plane uses two number lines to name an exact spot. We use it to graph patterns and shapes.",
            es: "El plano de coordenadas usa dos rectas numéricas para nombrar un punto exacto. Lo usamos para graficar patrones y figuras."
          },
          vocab: [
            { en: "coordinate pair", es: "par ordenado", example: "(3, 5)" },
            { en: "axis", es: "eje", example: "The x-axis goes side to side." }
          ],
          slides: "", assessments: [], topics: []
        }
      ]
    },

    /* ======================== 6TH GRADE ======================== */
    "6": {
      classroom: "https://classroom.google.com/",  // PLACEHOLDER: your 6th grade class link
      slides: "",                                  // PLACEHOLDER: 6th grade slides link
      videos: "",                                  // PLACEHOLDER: 6th grade videos link

      homework: [
        { due: "2026-10-05", title: { en: "Lesson 14 practice: unit rates", es: "Práctica de la lección 14: tasas unitarias" }, link: "" },
        { due: "2026-10-07", title: { en: "Lesson 16 practice: percents", es: "Práctica de la lección 16: porcentajes" }, link: "" },
        { due: "2026-10-13", title: { en: "Module 1 review sheet", es: "Hoja de repaso del módulo 1" }, link: "" }
      ],

      modules: [
        {
          number: 1,
          title: { en: "Ratios, Rates, and Percentages", es: "Razones, tasas y porcentajes" },
          start: "2026-08-31", end: "2026-10-16",
          bigIdea: {
            en: "Ratios compare amounts. Rates and percents are ratios we see every day, like prices and sales.",
            es: "Las razones comparan cantidades. Las tasas y los porcentajes son razones que vemos todos los días, como los precios y las ofertas."
          },
          vocab: [
            { en: "ratio", es: "razón", example: "3 : 2" },
            { en: "unit rate", es: "tasa unitaria", example: "$1.50 per taco" },
            { en: "percent", es: "porcentaje", example: "25% = 25 out of 100" }
          ],
          slides: "",
          assessments: [
            { date: "2026-10-08", title: { en: "Topic D quiz", es: "Prueba del tema D" } },
            { date: "2026-10-15", title: { en: "Module 1 assessment", es: "Evaluación del módulo 1" } }
          ],
          topics: [
            // TODO: match topic names and letters to your Eureka Math² teacher edition.
            {
              letter: "A",
              title: { en: "Ratios", es: "Razones" },
              bigIdea: {
                en: "A ratio compares two amounts. 3 cups of rice for every 2 cups of beans is the ratio 3 : 2.",
                es: "Una razón compara dos cantidades. 3 tazas de arroz por cada 2 tazas de frijoles es la razón 3 : 2."
              },
              vocab: [
                { en: "ratio", es: "razón", example: "3 : 2" },
                { en: "for every", es: "por cada", example: "2 dogs for every 1 cat" },
                { en: "tape diagram", es: "diagrama de cinta", example: "Boxes in a row that show amounts" }
              ],
              example: {
                problem: {
                  en: "A class has 2 boys for every 3 girls. Write the ratio of girls to boys.",
                  es: "En una clase hay 2 niños por cada 3 niñas. Escribe la razón de niñas a niños."
                },
                steps: [
                  { en: "The question asks for girls first.", es: "La pregunta pide primero las niñas." },
                  { en: "Girls: 3. Boys: 2.", es: "Niñas: 3. Niños: 2." }
                ],
                answer: { en: "3 : 2", es: "3 : 2" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "B",
              title: { en: "Ratio tables and double number lines", es: "Tablas de razones y rectas numéricas dobles" },
              bigIdea: {
                en: "Equivalent ratios grow together. If you double one amount, you double the other one too.",
                es: "Las razones equivalentes crecen juntas. Si duplicas una cantidad, también duplicas la otra."
              },
              vocab: [
                { en: "equivalent ratios", es: "razones equivalentes", example: "3 : 2 and 6 : 4" },
                { en: "ratio table", es: "tabla de razones", example: "A table where each row is the same ratio" },
                { en: "double number line", es: "recta numérica doble", example: "Two number lines that line up" }
              ],
              example: {
                problem: {
                  en: "A recipe uses 2 cups of flour for every 3 eggs. How many eggs go with 8 cups of flour?",
                  es: "Una receta usa 2 tazas de harina por cada 3 huevos. ¿Cuántos huevos van con 8 tazas de harina?"
                },
                steps: [
                  { en: "Make a table. First row: 2 flour, 3 eggs.", es: "Haz una tabla. Primera fila: 2 de harina, 3 huevos." },
                  { en: "8 is 2 × 4. So multiply both by 4.", es: "8 es 2 × 4. Entonces multiplica los dos por 4." },
                  { en: "3 × 4 = 12.", es: "3 × 4 = 12." }
                ],
                answer: { en: "12 eggs", es: "12 huevos" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "C",
              title: { en: "Rates and unit rates", es: "Tasas y tasas unitarias" },
              bigIdea: {
                en: "A unit rate tells you how much for 1. If 4 tacos cost $6, then 1 taco costs $1.50.",
                es: "Una tasa unitaria te dice cuánto hay por 1. Si 4 tacos cuestan $6, entonces 1 taco cuesta $1.50."
              },
              vocab: [
                { en: "rate", es: "tasa", example: "60 miles in 2 hours" },
                { en: "unit rate", es: "tasa unitaria", example: "30 miles per hour" },
                { en: "per", es: "por", example: "$2 per pound" }
              ],
              example: {
                problem: {
                  en: "A car goes 150 miles in 3 hours. How far does it go in 1 hour?",
                  es: "Un carro recorre 150 millas en 3 horas. ¿Cuánto recorre en 1 hora?"
                },
                steps: [
                  { en: "We want the amount for 1 hour. Divide by 3.", es: "Queremos la cantidad para 1 hora. Divide entre 3." },
                  { en: "150 ÷ 3 = 50.", es: "150 ÷ 3 = 50." }
                ],
                answer: { en: "50 miles per hour", es: "50 millas por hora" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "D",
              title: { en: "Percents", es: "Porcentajes" },
              bigIdea: {
                en: "Percent means out of 100. 25% is 25 out of 100, which is the same as 1/4.",
                es: "Por ciento quiere decir de cada 100. 25% es 25 de cada 100, que es lo mismo que 1/4."
              },
              vocab: [
                { en: "percent", es: "porcentaje", example: "50% = 50 out of 100" },
                { en: "part", es: "parte", example: "20 is part of 80." },
                { en: "whole", es: "total", example: "80 is the whole." }
              ],
              example: {
                problem: { en: "What is 25% of 80?", es: "¿Cuánto es el 25% de 80?" },
                steps: [
                  { en: "25% is the same as 1/4.", es: "25% es lo mismo que 1/4." },
                  { en: "1/4 of 80 means 80 ÷ 4.", es: "1/4 de 80 quiere decir 80 ÷ 4." },
                  { en: "80 ÷ 4 = 20.", es: "80 ÷ 4 = 20." }
                ],
                answer: { en: "20", es: "20" }
              },
              video: "", slides: "", family: ""
            }
          ]
        },
        {
          number: 2,
          title: { en: "Arithmetic Operations Including Division of Fractions", es: "Operaciones aritméticas, incluida la división de fracciones" },
          start: "2026-10-19", end: "2026-12-18",
          bigIdea: {
            en: "We divide fractions and work with multi-digit decimals. Drawings come first.",
            es: "Dividimos fracciones y trabajamos con decimales de varios dígitos. Primero hacemos dibujos."
          },
          vocab: [
            { en: "quotient", es: "cociente", example: "3 ÷ 1/2 = 6" },
            { en: "reciprocal", es: "recíproco", example: "The reciprocal of 2/3 is 3/2." }
          ],
          slides: "", assessments: [], topics: []
        },
        {
          number: 3,
          title: { en: "Rational Numbers", es: "Números racionales" },
          start: "2027-01-04", end: "2027-02-12",
          bigIdea: {
            en: "Numbers can be less than zero. Negative numbers live to the left of 0 on the number line.",
            es: "Hay números menores que cero. Los números negativos están a la izquierda del 0 en la recta numérica."
          },
          vocab: [
            { en: "negative number", es: "número negativo", example: "−5" },
            { en: "absolute value", es: "valor absoluto", example: "|−5| = 5" }
          ],
          slides: "", assessments: [], topics: []
        },
        {
          number: 4,
          // TODO: check this module title against your Eureka Math² materials.
          title: { en: "Expressions and One-Step Equations", es: "Expresiones y ecuaciones de un paso" },
          start: "2027-02-22", end: "2027-04-16",
          bigIdea: {
            en: "Letters can stand for numbers. We write expressions and solve equations to find what's missing.",
            es: "Las letras pueden representar números. Escribimos expresiones y resolvemos ecuaciones para hallar lo que falta."
          },
          vocab: [
            { en: "variable", es: "variable", example: "x in x + 3 = 10" },
            { en: "equation", es: "ecuación", example: "x + 3 = 10" }
          ],
          slides: "", assessments: [], topics: []
        },
        {
          number: 5,
          title: { en: "Area, Surface Area, and Volume", es: "Área, área total y volumen" },
          start: "2027-04-19", end: "2027-05-21",
          bigIdea: {
            en: "We find the area of triangles and other shapes, then the surface area and volume of solids.",
            es: "Hallamos el área de triángulos y otras figuras, y después el área total y el volumen de cuerpos geométricos."
          },
          vocab: [
            { en: "surface area", es: "área total", example: "All the faces of a box added up" },
            // TODO(es): some materials say "área de superficie". Use whichever your school uses.
            { en: "net", es: "plantilla", example: "A box unfolded flat" }
            // TODO(es): "plantilla" or "desarrollo plano"? Check with your Spanish materials.
          ],
          slides: "", assessments: [], topics: []
        },
        {
          number: 6,
          title: { en: "Statistics", es: "Estadística" },
          start: "2027-05-24", end: "2027-06-11",
          bigIdea: {
            en: "Data tells a story. We find the center and the spread of a data set to describe it.",
            es: "Los datos cuentan una historia. Hallamos el centro y la dispersión de un conjunto de datos para describirlo."
          },
          vocab: [
            { en: "mean", es: "media", example: "The mean of 2, 4, 6 is 4." },
            { en: "median", es: "mediana", example: "The median of 1, 3, 9 is 3." }
          ],
          slides: "", assessments: [], topics: []
        }
      ]
    }
  },


  /* ----------------------------------------------------------
     SYLLABUS: the same for both grades.
     SAMPLE: I drafted this for you to edit. Check it against school policy.
     ---------------------------------------------------------- */
  syllabus: {
    expectations: [
      { en: "Come ready to think. Mistakes are part of the work.", es: "Llega con ganas de pensar. Los errores son parte del trabajo." },
      { en: "Show your thinking. A drawing counts.", es: "Muestra cómo lo pensaste. Un dibujo cuenta." },
      { en: "Listen when someone is sharing. You might learn a shortcut.", es: "Escucha cuando alguien está compartiendo. A lo mejor aprendes un atajo." },
      { en: "Ask questions. If you're wondering, someone else is too.", es: "Haz preguntas. Si tienes una duda, seguro que alguien más también." }
    ],
    materials: [
      { en: "Pencil with an eraser", es: "Lápiz con borrador" },
      { en: "Math notebook (I'll give you one)", es: "Cuaderno de matemáticas (yo te doy uno)" },
      { en: "Charged Chromebook", es: "Chromebook con batería cargada" },
      { en: "Your Eureka Math² Learn book", es: "Tu libro Learn de Eureka Math²" }
    ],
    grading: [
      { label: { en: "Classwork and exit tickets", es: "Trabajo en clase y boletos de salida" }, percent: 30 },
      { label: { en: "Topic quizzes", es: "Pruebas de cada tema" }, percent: 25 },
      { label: { en: "Module assessments", es: "Evaluaciones de cada módulo" }, percent: 30 },
      { label: { en: "Homework", es: "Tarea" }, percent: 15 }
    ],
    gradingNote: {
      en: "You can redo one topic quiz per module to show me you learned it.",
      es: "Puedes repetir una prueba de tema por módulo para demostrar que ya lo aprendiste."
    },
    lateWork: {
      en: "Late homework is accepted until the module assessment. Turn it in, even if it's late. Something is better than nothing.",
      es: "Acepto tareas atrasadas hasta el día de la evaluación del módulo. Entrégala aunque sea tarde. Algo es mejor que nada."
    },
    help: [
      { en: "Use the Homework help page on this site.", es: "Usa la página de Ayuda con la tarea de este sitio." },
      { en: "Ask a classmate first. Then ask me.", es: "Pregúntale primero a un compañero. Después pregúntame a mí." },
      { en: "Come to math help on Tuesdays and Thursdays at lunch.", es: "Ven a la ayuda de matemáticas los martes y jueves a la hora del almuerzo." },
      { en: "Families can reach me on ClassDojo.", es: "Las familias pueden comunicarse conmigo por ClassDojo." }
    ]
  },


  /* ----------------------------------------------------------
     SCHEDULE

     firstDay / lastDay: the school year. Outside those dates the site says "Summer break".

     periodNames: what each period is called.

     dayTypes: one bell schedule per kind of day. Each period has an id,
       a start, and an end. The id has to match a name in periodNames.
       defaultDayType is used on any normal school day.

     specialDays: days that use a different bell schedule.
       type has to match a dayType name, like "early" or "delayed".

     noSchoolDates: use date for one day, or start and end for a break.

     subjects: class names. mathSubject is the one that gets highlighted.

     sections: each class section and what it has each period.
       Only section numbers. Never student names.

     importantDates: shows on the Schedule page. No-school days show up there too.
     ---------------------------------------------------------- */
  schedule: {
    firstDay: "2026-08-31",   // SAMPLE
    lastDay: "2027-06-11",    // SAMPLE
    calendar: "",             // PLACEHOLDER: school calendar link (or leave "" to use the one in site.school)

    periodNames: {
      arrival:   { en: "Arrival and breakfast", es: "Llegada y desayuno" },
      homeroom:  { en: "Homeroom", es: "Salón hogar" },   // TODO(es): or "Tutoría"? Use what your school says.
      p1:        { en: "Period 1", es: "Periodo 1" },
      p2:        { en: "Period 2", es: "Periodo 2" },
      p3:        { en: "Period 3", es: "Periodo 3" },
      p4:        { en: "Period 4", es: "Periodo 4" },
      p5:        { en: "Period 5", es: "Periodo 5" },
      p6:        { en: "Period 6", es: "Periodo 6" },
      lunch:     { en: "Lunch and recess", es: "Almuerzo y recreo" },
      dismissal: { en: "Dismissal", es: "Salida" }
    },

    defaultDayType: "regular",

    // PLACEHOLDER: SAMPLE bell schedules. Replace with your real times.
    dayTypes: {
      regular: {
        name: { en: "Regular day", es: "Día normal" },
        periods: [
          { id: "arrival",   start: "07:45", end: "08:00" },
          { id: "homeroom",  start: "08:00", end: "08:10" },
          { id: "p1",        start: "08:10", end: "09:05" },
          { id: "p2",        start: "09:08", end: "10:03" },
          { id: "p3",        start: "10:06", end: "11:01" },
          { id: "lunch",     start: "11:04", end: "11:44" },
          { id: "p4",        start: "11:47", end: "12:42" },
          { id: "p5",        start: "12:45", end: "13:40" },
          { id: "p6",        start: "13:43", end: "14:38" },
          { id: "dismissal", start: "14:38", end: "14:45" }
        ]
      },
      early: {
        name: { en: "Early dismissal", es: "Salida temprano" },
        periods: [
          { id: "arrival",   start: "07:45", end: "08:00" },
          { id: "homeroom",  start: "08:00", end: "08:05" },
          { id: "p1",        start: "08:05", end: "08:40" },
          { id: "p2",        start: "08:43", end: "09:18" },
          { id: "p3",        start: "09:21", end: "09:56" },
          { id: "p4",        start: "09:59", end: "10:34" },
          { id: "p5",        start: "10:37", end: "11:12" },
          { id: "p6",        start: "11:15", end: "11:50" },
          { id: "lunch",     start: "11:50", end: "12:20" },
          { id: "dismissal", start: "12:20", end: "12:30" }
        ]
      },
      delayed: {
        name: { en: "Delayed opening", es: "Entrada tarde" },
        periods: [
          { id: "arrival",   start: "09:45", end: "10:00" },
          { id: "p1",        start: "10:00", end: "10:35" },
          { id: "p2",        start: "10:38", end: "11:13" },
          { id: "p3",        start: "11:16", end: "11:51" },
          { id: "lunch",     start: "11:54", end: "12:34" },
          { id: "p4",        start: "12:37", end: "13:12" },
          { id: "p5",        start: "13:15", end: "13:50" },
          { id: "p6",        start: "13:53", end: "14:38" },
          { id: "dismissal", start: "14:38", end: "14:45" }
        ]
      }
    },

    specialDays: [
      { date: "2026-10-09", type: "early" },   // SAMPLE
      { date: "2026-11-25", type: "early" }    // SAMPLE
    ],

    noSchoolDates: [
      // SAMPLE: check these against the school calendar.
      { date: "2026-10-12", en: "No school: Indigenous Peoples' Day", es: "No hay clases: Día de los Pueblos Indígenas" },
      { date: "2026-11-03", en: "No school: Election Day", es: "No hay clases: Día de Elecciones" },
      { start: "2026-11-26", end: "2026-11-27", en: "No school: Thanksgiving break", es: "No hay clases: feriado de Acción de Gracias" },
      { start: "2026-12-23", end: "2027-01-01", en: "No school: Winter break", es: "No hay clases: vacaciones de invierno" }
    ],

    subjects: {
      math:     { en: "Math", es: "Matemáticas" },
      ela:      { en: "English Language Arts", es: "Lectura y escritura en inglés" },  // TODO(es): check
      science:  { en: "Science", es: "Ciencias" },
      social:   { en: "Social Studies", es: "Estudios Sociales" },
      specials: { en: "Specials (art, music, gym)", es: "Especiales (arte, música, educación física)" }
    },
    mathSubject: "math",

    // PLACEHOLDER: SAMPLE sections. grade must be "5" or "6".
    sections: [
      { id: "5-201", grade: "5", periods: { homeroom: "", p1: "math", p2: "ela", p3: "ela", p4: "science", p5: "specials", p6: "social" } },
      { id: "5-202", grade: "5", periods: { p1: "ela", p2: "ela", p3: "math", p4: "specials", p5: "science", p6: "social" } },
      { id: "6-301", grade: "6", periods: { p1: "science", p2: "social", p3: "specials", p4: "math", p5: "ela", p6: "ela" } },
      { id: "6-302", grade: "6", periods: { p1: "specials", p2: "science", p3: "social", p4: "ela", p5: "ela", p6: "math" } }
    ],

    // How many upcoming dates to show.
    showDates: 8,

    importantDates: [
      // SAMPLE
      { date: "2026-10-09", en: "Early dismissal at 12:30", es: "Salida temprano a las 12:30" },
      { date: "2026-10-21", en: "Progress reports go home", es: "Se envían los informes de progreso a casa" },
      { date: "2026-10-29", en: "Family conferences", es: "Reuniones con las familias" },
      { date: "2026-11-20", en: "End of the first marking period", es: "Fin del primer periodo de calificaciones" },
      { date: "2026-11-25", en: "Early dismissal at 12:30", es: "Salida temprano a las 12:30" }
    ]
  },


  /* ----------------------------------------------------------
     STORE: what students can buy with points. Browsing only.
     category must be "supplies", "privileges", or "treats".
     inStock: true or false. image is optional. If you add one, add alt text too.
     ---------------------------------------------------------- */
  store: {
    currency: { en: "Dojo points", es: "puntos de Dojo" },  // PLACEHOLDER
    hours: {
      en: "SAMPLE: Fridays, the last 10 minutes of math class.",
      es: "SAMPLE: Los viernes, en los últimos 10 minutos de la clase de matemáticas."
    },
    rules: [
      { en: "One item per visit.", es: "Una cosa por visita." },
      { en: "Points are spent when you buy. No refunds, no trades.", es: "Los puntos se gastan al comprar. No hay devoluciones ni cambios." },
      { en: "Privileges are used within two weeks.", es: "Los privilegios se usan en un plazo de dos semanas." },
      { en: "Treats are eaten at lunch, not in class.", es: "Las golosinas se comen en el almuerzo, no en clase." }
    ],
    earn: [
      { en: "Show your thinking on a hard problem.", es: "Muestra cómo pensaste un problema difícil." },
      { en: "Help a classmate without giving away the answer.", es: "Ayuda a un compañero sin decirle la respuesta." },
      { en: "Turn in homework on time.", es: "Entrega la tarea a tiempo." },
      { en: "Fix a mistake and explain what changed.", es: "Corrige un error y explica qué cambiaste." }
    ],
    items: [
      // SAMPLE items
      { name: { en: "Pencil", es: "Lápiz" }, price: 5, category: "supplies", inStock: true, image: "images/store-pencils.svg", alt: { en: "Two sharpened pencils.", es: "Dos lápices con punta." } },
      { name: { en: "Fancy eraser", es: "Borrador divertido" }, price: 10, category: "supplies", inStock: true, image: "", alt: "" },
      { name: { en: "Mini notebook", es: "Libreta pequeña" }, price: 20, category: "supplies", inStock: true, image: "images/store-notebook.svg", alt: { en: "A small spiral notebook.", es: "Una libreta pequeña de espiral." } },
      { name: { en: "Mechanical pencil", es: "Lapicero" }, price: 15, category: "supplies", inStock: false, image: "", alt: "" },
      // TODO(es): "lapicero" means a pen in some countries. Maybe "portaminas"?
      { name: { en: "Line leader for a day", es: "Primero en la fila por un día" }, price: 15, category: "privileges", inStock: true, image: "", alt: "" },
      { name: { en: "Pick the warm-up", es: "Elegir el calentamiento" }, price: 25, category: "privileges", inStock: true, image: "", alt: "" },
      { name: { en: "Music during work time", es: "Música durante el trabajo" }, price: 30, category: "privileges", inStock: true, image: "", alt: "" },
      { name: { en: "Sit at the teacher's desk", es: "Sentarte en el escritorio de la maestra" }, price: 40, category: "privileges", inStock: true, image: "", alt: "" },
      { name: { en: "Skip one homework problem", es: "Saltar un problema de la tarea" }, price: 50, category: "privileges", inStock: true, image: "", alt: "" },
      { name: { en: "Sticker", es: "Calcomanía" }, price: 5, category: "treats", inStock: true, image: "", alt: "" },
      // TODO(es): "calcomanía" or "sticker"? Many families just say "sticker".
      { name: { en: "Fruit snacks", es: "Gomitas de fruta" }, price: 10, category: "treats", inStock: true, image: "", alt: "" },
      { name: { en: "Pretzels", es: "Pretzels" }, price: 15, category: "treats", inStock: false, image: "", alt: "" }
    ]
  },


  /* ----------------------------------------------------------
     FAMILIES: the Families / Familias page.
     ---------------------------------------------------------- */
  families: {
    intro: {
      en: "You don't need to know how to do the math to help. Your job is to ask questions and listen. Your child's job is to explain.",
      es: "No necesita saber hacer la matemática para ayudar. Su tarea es hacer preguntas y escuchar. La tarea de su hijo o hija es explicar."
    },
    helpAtHome: [
      { en: "Ask your child to teach you what we did in class today.", es: "Pídale a su hijo o hija que le enseñe lo que hicimos hoy en clase." },
      { en: "Give them time to think. Wait a little before you jump in.", es: "Dele tiempo para pensar. Espere un poco antes de ayudar." },
      { en: "Please don't teach a new method. It can mix them up. Ask them to draw it instead.", es: "Por favor, no le enseñe otro método. Lo puede confundir. Mejor pídale que lo dibuje." },
      { en: "Talk about math in the language you're most comfortable with. Spanish helps too.", es: "Hablen de matemáticas en el idioma en que se sientan más cómodos. Hablar en español también ayuda." },
      { en: "Look at the Homework help page together.", es: "Miren juntos la página de Ayuda con la tarea." },
      { en: "15 to 20 minutes of focused homework is enough. If it takes much longer, send me a note.", es: "De 15 a 20 minutos de tarea con concentración es suficiente. Si tarda mucho más, envíeme una nota." }
    ],
    questions: [
      { en: "What did you draw?", es: "¿Qué dibujaste?" },
      { en: "How do you know?", es: "¿Cómo lo sabes?" },
      { en: "Can you show me another way?", es: "¿Me lo puedes mostrar de otra manera?" },
      { en: "What is the question asking?", es: "¿Qué te pide la pregunta?" },
      { en: "Does your answer make sense?", es: "¿Tiene sentido tu respuesta?" }
    ]
  },


  /* ----------------------------------------------------------
     STRINGS: every button and label on the site.
     You rarely need to change these. {n}, {date}, and similar
     words in curly brackets get filled in by the site. Keep them.
     ---------------------------------------------------------- */
  strings: {
    en: {
      skip: "Skip to main content",
      navLabel: "Main",
      langLabel: "Language",
      nav_home: "This week", nav_help: "Help", nav_syllabus: "Syllabus", nav_schedule: "Schedule", nav_store: "Store", nav_families: "Families",
      title_home: "This week", title_help: "Homework help", title_syllabus: "Syllabus", title_schedule: "Schedule", title_store: "Class store", title_families: "Families",
      classroom: "Google Classroom",
      comingSoon: "Coming soon",
      newTab: "opens in a new tab",
      gradeLabel: "Grade",
      grade5: "5th grade", grade6: "6th grade",
      whereWeAre: "Where we are",
      youAreHere: "You are here",
      moduleN: "Module {n}",
      topicN: "Topic {n}",
      weekOf: "Week {n} of {total}",
      dateRange: "{start} to {end}",
      beforeYear: "Module {n} starts {date}.",
      yearDone: "We finished every module this year. Nice work.",
      dueSoon: "Due soon",
      dueNone: "Nothing due in the next 7 days.",
      today: "Today", tomorrow: "Tomorrow", inDays: "In {n} days",
      homework: "Homework", assessment: "Assessment",
      quickLinks: "Quick links",
      slides: "Slides",
      homeworkHelp: "Homework help",
      announcements: "Announcements",
      noAnnouncements: "No announcements right now.",
      puzzle: "Puzzle of the week",
      puzzleNote: "Bring your answer to class. I don't post answers here.",
      tools: "Tools",
      toolManip: "Manipulatives",
      toolDesmos: "Desmos",
      toolCalc: "Calculator",
      pickModule: "Pick a module",
      bigIdea: "Big idea",
      keyWords: "Key words",
      seeExample: "See the example",
      answer: "Answer",
      watchVideo: "Watch the video",
      familyGuide: "Family guide",
      stuck: "Stuck?",
      stuckSteps: [
        "Read it again and underline the question.",
        "Draw it: tape diagram, number line, or table.",
        "Try smaller numbers.",
        "Look at the example.",
        "Write your question down for class."
      ],
      topicsSoon: "Topics for this module are coming soon.",
      theYear: "The school year",
      done: "Done",
      comingUp: "Coming up",
      assessments: "Assessments",
      noAssessments: "No assessments listed yet.",
      print: "Print",
      allModules: "All modules",
      expectations: "Expectations",
      materials: "Materials",
      grading: "Grading",
      lateWork: "Late work",
      getHelp: "How to get help",
      nowNext: "Now and next",
      now: "Now", next: "Next",
      todayIs: "Today is {day}.",
      until: "until {time}", untilOne: "until {time}",
      at: "at {time}", atOne: "at {time}",
      beforeSchool: "Before school",
      afterSchool: "School is out for today",
      endOfDay: "End of the day",
      passing: "Passing time",
      noSchool: "No school today",
      weekend: "Weekend",
      summer: "Summer break",
      yourClass: "Your class",
      pickClass: "Pick your class",
      pickClassHint: "Pick your class to see your day. Math is marked.",
      dayType: "Day type",
      yourDay: "Your day: {section}",
      time: "Time", period: "Period", classCol: "Class",
      mathWith: "Math with {teacher}",
      timeRange: "{start} to {end}",
      bellSchedules: "Bell schedules",
      importantDates: "Important dates",
      noDates: "No upcoming dates.",
      schoolCalendar: "School calendar",
      currencyNote: "Prices are in {currency}.",
      browseOnly: "This page is for looking. You buy things in class.",
      iHave: "I have",
      show: "Show",
      all: "All",
      cat_supplies: "Supplies", cat_privileges: "Privileges", cat_treats: "Treats",
      items: "What's in the store",
      inStock: "In stock", outOfStock: "Out of stock",
      canGet: "You can get this",
      needMore: "{n} more to go",
      affordCount: "You can get {n} of these.",
      affordOne: "You can get 1 of these.",
      affordNone: "Not enough yet. Keep earning.",
      storeHours: "Store hours",
      storeRules: "Store rules",
      earnPoints: "How to earn points",
      familiesIntro: "For families",
      helpAtHome: "How to help at home",
      questionsToAsk: "Questions to ask",
      reachMe: "How to reach me",
      schoolInfo: "School information",
      address: "Address", phone: "Phone", hours: "Hours",
      email: "Email",
      classDojo: "ClassDojo",
      classDojoNote: "Message me on ClassDojo.",
      schoolWebsite: "School website",
      eurekaFamily: "Eureka Math² for families",
      footerClasses: "5th and 6th grade math",
      updated: "Updated {date}.",
      privacy: "This site has no ads and no cookies, and it doesn't collect any information."
    },
    es: {
      skip: "Ir al contenido principal",
      navLabel: "Principal",
      langLabel: "Idioma",
      nav_home: "Esta semana", nav_help: "Ayuda", nav_syllabus: "Plan del curso", nav_schedule: "Horario", nav_store: "Tienda", nav_families: "Familias",
      title_home: "Esta semana", title_help: "Ayuda con la tarea", title_syllabus: "Plan del curso", title_schedule: "Horario", title_store: "Tienda de la clase", title_families: "Familias",
      classroom: "Google Classroom",
      comingSoon: "Muy pronto",
      newTab: "se abre en una pestaña nueva",
      gradeLabel: "Grado",
      grade5: "5.º grado", grade6: "6.º grado",
      whereWeAre: "Dónde estamos",
      youAreHere: "Estás aquí",
      moduleN: "Módulo {n}",
      topicN: "Tema {n}",
      weekOf: "Semana {n} de {total}",
      dateRange: "Del {start} al {end}",
      beforeYear: "El módulo {n} empieza el {date}.",
      yearDone: "Terminamos todos los módulos del año. Buen trabajo.",
      dueSoon: "Próximas entregas",
      dueNone: "No hay nada para entregar en los próximos 7 días.",
      today: "Hoy", tomorrow: "Mañana", inDays: "En {n} días",
      homework: "Tarea", assessment: "Evaluación",
      quickLinks: "Enlaces rápidos",
      slides: "Diapositivas",
      homeworkHelp: "Ayuda con la tarea",
      announcements: "Anuncios",
      noAnnouncements: "No hay anuncios por ahora.",
      puzzle: "El reto de la semana",
      puzzleNote: "Trae tu respuesta a clase. Aquí no publico las respuestas.",
      tools: "Herramientas",
      toolManip: "Manipulativos",
      toolDesmos: "Desmos",
      toolCalc: "Calculadora",
      pickModule: "Elige un módulo",
      bigIdea: "La idea principal",
      keyWords: "Palabras clave",
      seeExample: "Ver el ejemplo",
      answer: "Respuesta",
      watchVideo: "Ver el video",
      familyGuide: "Guía para familias",
      stuck: "¿Te trabaste?",   // TODO(es): or "¿No sabes cómo seguir?"
      stuckSteps: [
        "Léelo otra vez y subraya la pregunta.",
        "Dibújalo: diagrama de cinta, recta numérica o tabla.",
        "Prueba con números más pequeños.",
        "Mira el ejemplo.",
        "Escribe tu pregunta para traerla a clase."
      ],
      topicsSoon: "Muy pronto vas a encontrar aquí los temas de este módulo.",
      theYear: "El año escolar",
      done: "Terminado",
      comingUp: "Lo que viene",
      assessments: "Evaluaciones",
      noAssessments: "Todavía no hay evaluaciones.",
      print: "Imprimir",
      allModules: "Todos los módulos",
      expectations: "Lo que espero de ti",
      materials: "Materiales",
      grading: "Calificaciones",
      lateWork: "Trabajos atrasados",
      getHelp: "Cómo pedir ayuda",
      nowNext: "Ahora y después",
      now: "Ahora", next: "Sigue",
      todayIs: "Hoy es {day}.",
      until: "hasta las {time}", untilOne: "hasta la {time}",
      at: "a las {time}", atOne: "a la {time}",
      beforeSchool: "Antes de clases",
      afterSchool: "Ya terminaron las clases de hoy",
      endOfDay: "Fin del día",
      passing: "Cambio de clase",
      noSchool: "Hoy no hay clases",
      weekend: "Fin de semana",
      summer: "Vacaciones de verano",
      yourClass: "Tu clase",
      pickClass: "Elige tu clase",
      pickClassHint: "Elige tu clase para ver tu día. Matemáticas está marcada.",
      dayType: "Tipo de día",
      yourDay: "Tu día: {section}",
      time: "Hora", period: "Periodo", classCol: "Clase",
      mathWith: "Matemáticas con la {teacher}",
      timeRange: "{start} a {end}",
      bellSchedules: "Horarios de clases",
      importantDates: "Fechas importantes",
      noDates: "No hay fechas próximas.",
      schoolCalendar: "Calendario escolar",
      currencyNote: "Los precios están en {currency}.",
      browseOnly: "Esta página es solo para mirar. Las compras se hacen en clase.",
      iHave: "Tengo",
      show: "Mostrar",
      all: "Todo",
      cat_supplies: "Útiles", cat_privileges: "Privilegios", cat_treats: "Golosinas",
      items: "Lo que hay en la tienda",
      inStock: "Disponible", outOfStock: "Agotado",
      canGet: "Te alcanza",
      needMore: "Te faltan {n}",
      affordCount: "Te alcanza para {n} de estas cosas.",
      affordOne: "Te alcanza para 1 de estas cosas.",
      affordNone: "Todavía no te alcanza. Sigue ganando puntos.",
      storeHours: "Horario de la tienda",
      storeRules: "Reglas de la tienda",
      earnPoints: "Cómo ganar puntos",
      familiesIntro: "Para las familias",
      helpAtHome: "Cómo ayudar en casa",
      questionsToAsk: "Preguntas que puede hacer",
      reachMe: "Cómo comunicarse conmigo",
      schoolInfo: "Información de la escuela",
      address: "Dirección", phone: "Teléfono", hours: "Horario",
      email: "Correo electrónico",
      classDojo: "ClassDojo",
      classDojoNote: "Envíeme un mensaje por ClassDojo.",
      schoolWebsite: "Sitio web de la escuela",
      eurekaFamily: "Eureka Math² para familias",
      footerClasses: "Matemáticas de 5.º y 6.º grado",
      updated: "Actualizado el {date}.",
      privacy: "Este sitio no tiene anuncios ni cookies, y no recoge ninguna información."
    }
  }
};
