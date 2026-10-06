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
      email: "ebarbee@panamcs.org",
      phone: "215-550-1935",   // Google Voice work number
      classDojo: true,         // The school uses ClassDojo for classroom messages. TODO: confirm you use it with families.
      replyTime: {
        // From the school handbook: allow 24 hours. Urgent matters go to the main office.
        en: "I reply within 24 hours on school days. For an emergency, call the main office at 215-425-1212.",
        es: "Respondo en un plazo de 24 horas en días de clases. En una emergencia, llame a la oficina principal al 215-425-1212."
      },
      preferred: {
        en: "ClassDojo and email are the best ways to reach me. You can also call or text my school number. You can write in English or Spanish.",
        es: "ClassDojo y el correo electrónico son las mejores formas de comunicarse conmigo. También puede llamar o enviar un mensaje de texto a mi número de la escuela. Puede escribirme en español o en inglés."
        // TODO(es): only keep "in Spanish" if you or a colleague can read Spanish messages.
      }
    },

    school: {
      name: "Pan American Academy Charter School",
      address: "2830 North American Street, Philadelphia, PA 19133",
      phone: "215-425-1212",   // main school office
      // From the handbook: gates open 7:50 AM, close 8:15 AM. Instruction ends 3:15 PM.
      hours: { en: "Gates open at 7:50 AM. School day ends at 3:15 PM.", es: "Las puertas abren a las 7:50 a. m. El día escolar termina a las 3:15 p. m." },
      website: "https://panamcs.org/",
      calendar: "https://panamcs.org/wp-content/uploads/2026/08/2026-2027-PAACS-Academic-Calendar-Board-Approved-1-1.pdf"   // 2026-2027 academic calendar (PDF)
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
            { en: "power of 10", es: "potencia de 10", example: "10, 100, 1,000" },
            { en: "exponent", es: "exponente", example: "10³ = 10 × 10 × 10" },
            { en: "dividend", es: "dividendo", example: "In 926 ÷ 23, the dividend is 926." },
            { en: "quotient", es: "cociente", example: "The answer to a division problem" },
            { en: "expression", es: "expresión", example: "3 × (15 + 25)" }
          ],
          slides: "",
          assessments: [
            { date: "2026-09-29", title: { en: "Module 1 assessment", es: "Evaluación del módulo 1" } }
          ],
          // Topic names and lessons are from the Eureka Math² Teacher Edition. TODO: add video and slide links for each topic.
          // TODO(es): have a Spanish speaker check the Spanish in these topics.
          topics: [
            {
              letter: "A",
              title: { en: "Place Value Understanding for Whole Numbers", es: "Comprensión del valor posicional de números enteros" },
              bigIdea: {
                en: "Each place is worth 10 times the place to its right. When you multiply by 10, 100, or 1,000, the digits shift to the left. When you divide, they shift to the right. We use this to estimate and to change metric units.",
                es: "Cada lugar vale 10 veces más que el lugar de su derecha. Cuando multiplicas por 10, 100 o 1,000, los dígitos se mueven a la izquierda. Cuando divides, se mueven a la derecha. Lo usamos para estimar y para cambiar unidades métricas."
              },
              lessons: [
                { n: 1, title: { en: "Relate adjacent place value units by using place value understanding.", es: "Relacionar unidades de valor posicional adyacentes usando el valor posicional." } },
                { n: 2, title: { en: "Multiply and divide by 10, 100, and 1,000 and identify patterns in the products and quotients.", es: "Multiplicar y dividir por 10, 100 y 1,000 e identificar patrones en los productos y cocientes." } },
                { n: 3, title: { en: "Use exponents to multiply and divide by powers of 10.", es: "Usar exponentes para multiplicar y dividir por potencias de 10." } },
                { n: 4, title: { en: "Estimate products and quotients by using powers of 10 and their multiples.", es: "Estimar productos y cocientes usando potencias de 10 y sus múltiplos." } },
                { n: 5, title: { en: "Convert measurements and describe relationships between metric units.", es: "Convertir medidas y describir las relaciones entre unidades métricas." } },
                { n: 6, title: { en: "Solve multi-step word problems by using metric measurement conversion.", es: "Resolver problemas de varios pasos usando la conversión de medidas métricas." } }
              ],
              vocab: [
                { en: "place value", es: "valor posicional", example: "In 1,731,225, the 7 is worth 700,000." },
                { en: "power of 10", es: "potencia de 10", example: "10, 100, 1,000" },
                { en: "exponent", es: "exponente", example: "In 10³, the exponent is 3." },
                { en: "exponential form", es: "forma exponencial", example: "1,000 = 10³" },
                { en: "milligram", es: "miligramo", example: "1,000 mg = 1 g" },
                { en: "kiloliter", es: "kilolitro", example: "1 kL = 1,000 L" },
                { en: "centiliter", es: "centilitro", example: "100 cL = 1 L" },
                { en: "millimeter", es: "milímetro", example: "10 mm = 1 cm" }
              ],
              example: {
                problem: { en: "What is 50 × 1,000?", es: "¿Cuánto es 50 × 1,000?" },
                steps: [
                  { en: "1,000 is 10 × 10 × 10. So 50 × 1,000 = 50 × 10 × 10 × 10.", es: "1,000 es 10 × 10 × 10. Entonces 50 × 1,000 = 50 × 10 × 10 × 10." },
                  { en: "Write it with an exponent: 50 × 10³.", es: "Escríbelo con un exponente: 50 × 10³." },
                  { en: "Each × 10 shifts the digits one place to the left. 50 becomes 50,000.", es: "Cada × 10 mueve los dígitos un lugar a la izquierda. 50 se convierte en 50,000." }
                ],
                answer: { en: "50,000", es: "50,000" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "B",
              title: { en: "Multiplication of Whole Numbers", es: "Multiplicación de números enteros" },
              bigIdea: {
                en: "Break a number into place value parts. Multiply each part. Add the partial products. The standard algorithm does the same thing, one digit at a time. An area model shows why it works.",
                es: "Separa un número en partes según el valor posicional. Multiplica cada parte. Suma los productos parciales. El algoritmo convencional hace lo mismo, un dígito a la vez. Un modelo de área muestra por qué funciona."
              },
              lessons: [
                { n: 7, title: { en: "Multiply by using familiar methods.", es: "Multiplicar usando métodos conocidos." } },
                { n: 8, title: { en: "Multiply two- and three-digit numbers by two-digit numbers by using the distributive property.", es: "Multiplicar números de dos y tres dígitos por números de dos dígitos usando la propiedad distributiva." } },
                { n: 9, title: { en: "Multiply two- and three-digit numbers by two-digit numbers by using the standard algorithm.", es: "Multiplicar números de dos y tres dígitos por números de dos dígitos usando el algoritmo convencional." } },
                { n: 10, title: { en: "Multiply three- and four-digit numbers by three-digit numbers by using the standard algorithm.", es: "Multiplicar números de tres y cuatro dígitos por números de tres dígitos usando el algoritmo convencional." } },
                { n: 11, title: { en: "Multiply two multi-digit numbers by using the standard algorithm.", es: "Multiplicar dos números de varios dígitos usando el algoritmo convencional." } }
              ],
              vocab: [
                { en: "area model", es: "modelo de área", example: "A rectangle split into parts" },
                { en: "partial products", es: "productos parciales", example: "20 × 14 and 3 × 14" },
                { en: "standard algorithm", es: "algoritmo convencional", example: "Stacking the numbers to multiply" },
                { en: "distributive property", es: "propiedad distributiva", example: "4 × 13 = (4 × 10) + (4 × 3)" },
                { en: "factor", es: "factor", example: "In 6 × 4 = 24, the factors are 6 and 4." }
              ],
              example: {
                problem: { en: "What is 427 × 52?", es: "¿Cuánto es 427 × 52?" },
                steps: [
                  { en: "Break 52 into 50 and 2.", es: "Separa 52 en 50 y 2." },
                  { en: "427 × 2 = 854.", es: "427 × 2 = 854." },
                  { en: "427 × 50 = 21,350.", es: "427 × 50 = 21,350." },
                  { en: "Add the partial products: 854 + 21,350 = 22,204.", es: "Suma los productos parciales: 854 + 21,350 = 22,204." }
                ],
                answer: { en: "22,204", es: "22,204" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "C",
              title: { en: "Division of Whole Numbers", es: "División de números enteros" },
              bigIdea: {
                en: "Estimate first. Then find how many groups of the divisor fit in the dividend. You can take out friendly chunks, called partial quotients, and add them up. Check with multiplication.",
                es: "Primero estima. Después halla cuántos grupos del divisor caben en el dividendo. Puedes sacar partes fáciles, llamadas cocientes parciales, y sumarlas. Comprueba con la multiplicación."
              },
              lessons: [
                { n: 12, title: { en: "Divide two- and three-digit numbers by multiples of 10.", es: "Dividir números de dos y tres dígitos entre múltiplos de 10." } },
                { n: 13, title: { en: "Divide two-digit numbers by two-digit numbers in problems that result in one-digit quotients.", es: "Dividir números de dos dígitos entre números de dos dígitos en problemas con cocientes de un dígito." } },
                { n: 14, title: { en: "Divide three-digit numbers by two-digit numbers in problems that result in one-digit quotients.", es: "Dividir números de tres dígitos entre números de dos dígitos en problemas con cocientes de un dígito." } },
                { n: 15, title: { en: "Divide three-digit numbers by two-digit numbers in problems that result in two-digit quotients.", es: "Dividir números de tres dígitos entre números de dos dígitos en problemas con cocientes de dos dígitos." } },
                { n: 16, title: { en: "Divide four-digit numbers by two-digit numbers.", es: "Dividir números de cuatro dígitos entre números de dos dígitos." } }
              ],
              vocab: [
                { en: "dividend", es: "dividendo", example: "In 926 ÷ 23, the dividend is 926." },
                { en: "divisor", es: "divisor", example: "In 926 ÷ 23, the divisor is 23." },
                { en: "quotient", es: "cociente", example: "The answer to a division problem" },
                { en: "remainder", es: "residuo", example: "What is left over" },
                { en: "partial quotient", es: "cociente parcial", example: "30 + 10 = 40 groups" }
              ],
              example: {
                problem: { en: "What is 926 ÷ 23?", es: "¿Cuánto es 926 ÷ 23?" },
                steps: [
                  { en: "Estimate: 900 ÷ 30 = 30. The answer is close to 30.", es: "Estima: 900 ÷ 30 = 30. La respuesta está cerca de 30." },
                  { en: "Take out 30 groups of 23: 30 × 23 = 690. Then 10 groups: 10 × 23 = 230.", es: "Saca 30 grupos de 23: 30 × 23 = 690. Después 10 grupos: 10 × 23 = 230." },
                  { en: "690 + 230 = 920. And 926 − 920 = 6 is left.", es: "690 + 230 = 920. Y 926 − 920 = 6 es lo que queda." },
                  { en: "30 + 10 = 40 groups.", es: "30 + 10 = 40 grupos." }
                ],
                answer: { en: "40 R 6 (40 with a remainder of 6)", es: "40 R 6 (40 con residuo 6)" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "D",
              title: { en: "Multi-Step Problems with Whole Numbers", es: "Problemas de varios pasos con números enteros" },
              bigIdea: {
                en: "Read the problem. Draw a tape diagram. Write an expression that matches it. Parentheses show which step comes first, so they can change the answer. Then solve and check that your answer makes sense.",
                es: "Lee el problema. Dibuja un diagrama de cinta. Escribe una expresión que coincida. Los paréntesis muestran qué paso va primero, así que pueden cambiar la respuesta. Después resuelve y comprueba que tu respuesta tenga sentido."
              },
              lessons: [
                { n: 17, title: { en: "Write, interpret, and compare numerical expressions.", es: "Escribir, interpretar y comparar expresiones numéricas." } },
                { n: 18, title: { en: "Create and solve real-world problems for given numerical expressions.", es: "Crear y resolver problemas de la vida real a partir de expresiones numéricas dadas." } },
                { n: 19, title: { en: "Solve multi-step word problems involving multiplication and division.", es: "Resolver problemas de varios pasos con multiplicación y división." } },
                { n: 20, title: { en: "Solve multi-step word problems involving the four operations.", es: "Resolver problemas de varios pasos con las cuatro operaciones." } }
              ],
              vocab: [
                { en: "numerical expression", es: "expresión numérica", example: "3 × (15 + 25)" },
                { en: "parentheses", es: "paréntesis", example: "(26 − 8) ÷ 2" },
                { en: "tape diagram", es: "diagrama de cinta", example: "Boxes in a row that show amounts" },
                { en: "evaluate", es: "evaluar", example: "Find the value of an expression." },
                { en: "Read, Draw, Write", es: "Leer, Dibujar, Escribir", example: "The steps for solving a word problem" }
              ],
              example: {
                problem: { en: "There are 26 people at the park. 8 people go home. The rest make 2 equal groups to play a game. How many people are in each group?", es: "Hay 26 personas en el parque. 8 personas se van a casa. Las demás forman 2 grupos iguales para jugar. ¿Cuántas personas hay en cada grupo?" },
                steps: [
                  { en: "Read. Draw a tape diagram: 26 people, take away 8, then split the rest into 2 groups.", es: "Lee. Dibuja un diagrama de cinta: 26 personas, quita 8, y reparte las que quedan en 2 grupos." },
                  { en: "Write an expression: (26 − 8) ÷ 2.", es: "Escribe una expresión: (26 − 8) ÷ 2." },
                  { en: "26 − 8 = 18. Then 18 ÷ 2 = 9.", es: "26 − 8 = 18. Después 18 ÷ 2 = 9." }
                ],
                answer: { en: "9 people in each group", es: "9 personas en cada grupo" }
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
          // Topic names and lessons are from the Eureka Math² Teacher Edition. TODO: add video and slide links for each topic.
          // TODO(es): have a Spanish speaker check the Spanish in these topics.
          topics: [
            {
              letter: "A",
              title: { en: "Fractions and Division", es: "Fracciones y división" },
              bigIdea: {
                en: "A fraction is a division problem. When you share whole things equally, each share can be a fraction. A remainder can be written as a fraction too.",
                es: "Una fracción es una división. Cuando repartes cosas enteras en partes iguales, cada parte puede ser una fracción. Un residuo también se puede escribir como fracción."
              },
              lessons: [
                { n: 1, title: { en: "Interpret a fraction as division.", es: "Interpretar una fracción como una división." } },
                { n: 2, title: { en: "Interpret a fraction as division by writing remainders as fractions.", es: "Interpretar una fracción como una división escribiendo los residuos como fracciones." } },
                { n: 3, title: { en: "Represent fractions as division by using models.", es: "Representar fracciones como divisiones usando modelos." } },
                { n: 4, title: { en: "Solve word problems involving division and fractions.", es: "Resolver problemas con palabras que incluyen división y fracciones." } }
              ],
              vocab: [
                { en: "numerator", es: "numerador", example: "The 3 in 3/4" },
                { en: "denominator", es: "denominador", example: "The 4 in 3/4" },
                { en: "quotient", es: "cociente", example: "11 ÷ 4 = 2 3/4" },
                { en: "remainder", es: "residuo", example: "11 ÷ 4 is 2 with 3 left over." },
                { en: "equal sharing", es: "reparto equitativo", example: "Sharing so everyone gets the same" }
              ],
              example: {
                problem: { en: "Mr. Evans pours 11 liters of water equally into 4 containers. How many liters are in 1 container?", es: "El Sr. Evans vierte 11 litros de agua en partes iguales en 4 recipientes. ¿Cuántos litros hay en 1 recipiente?" },
                steps: [
                  { en: "Divide: 11 ÷ 4. Each container gets 2 liters, and 3 liters are left.", es: "Divide: 11 ÷ 4. Cada recipiente recibe 2 litros y sobran 3 litros." },
                  { en: "Share the 3 leftover liters into 4 equal parts. Each container gets 3/4 of a liter.", es: "Reparte los 3 litros que sobran en 4 partes iguales. Cada recipiente recibe 3/4 de litro." },
                  { en: "11 ÷ 4 = 2 3/4.", es: "11 ÷ 4 = 2 3/4." }
                ],
                answer: { en: "2 3/4 liters", es: "2 3/4 litros" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "B",
              title: { en: "Addition and Subtraction of Fractions by Making Like Units", es: "Suma y resta de fracciones formando unidades iguales" },
              bigIdea: {
                en: "You can only add or subtract pieces that are the same size. If the units are different, rename one or both fractions so they match. Then add or subtract the numerators.",
                es: "Solo puedes sumar o restar partes del mismo tamaño. Si las unidades son diferentes, cambia una o las dos fracciones para que coincidan. Después suma o resta los numeradores."
              },
              lessons: [
                { n: 5, title: { en: "Add and subtract fractions with related units by using pictorial models.", es: "Sumar y restar fracciones con unidades relacionadas usando modelos gráficos." } },
                { n: 6, title: { en: "Add and subtract fractions with related units by using area models to rename fractions.", es: "Sumar y restar fracciones con unidades relacionadas usando modelos de área para renombrar fracciones." } },
                { n: 7, title: { en: "Add and subtract fractions with related units by finding equivalent fractions numerically.", es: "Sumar y restar fracciones con unidades relacionadas hallando fracciones equivalentes con números." } },
                { n: 8, title: { en: "Add and subtract fractions with unrelated units by finding equivalent fractions pictorially.", es: "Sumar y restar fracciones con unidades no relacionadas hallando fracciones equivalentes con modelos gráficos." } },
                { n: 9, title: { en: "Add and subtract fractions with unrelated units by finding equivalent fractions numerically.", es: "Sumar y restar fracciones con unidades no relacionadas hallando fracciones equivalentes con números." } }
              ],
              vocab: [
                { en: "like units", es: "unidades iguales", example: "3/4 and 2/4 are both fourths." },
                { en: "related units", es: "unidades relacionadas", example: "Fourths and twelfths" },
                { en: "unrelated units", es: "unidades no relacionadas", example: "Halves and thirds" },
                { en: "equivalent fractions", es: "fracciones equivalentes", example: "1/2 = 2/4" },
                { en: "minuend", es: "minuendo", example: "In 7 − 3, the minuend is 7." },
                { en: "subtrahend", es: "sustraendo", example: "In 7 − 3, the subtrahend is 3." }
              ],
              example: {
                problem: { en: "What is 3/4 + 6/12?", es: "¿Cuánto es 3/4 + 6/12?" },
                steps: [
                  { en: "Fourths and twelfths are related units. Rename 6/12 as fourths.", es: "Los cuartos y los doceavos son unidades relacionadas. Cambia 6/12 a cuartos." },
                  { en: "Divide the top and bottom by 3: 6/12 = 2/4.", es: "Divide el numerador y el denominador entre 3: 6/12 = 2/4." },
                  { en: "3/4 + 2/4 = 5/4, which is 1 1/4.", es: "3/4 + 2/4 = 5/4, que es 1 1/4." }
                ],
                answer: { en: "5/4, or 1 1/4", es: "5/4, o 1 1/4" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "C",
              title: { en: "Addition and Subtraction of Fractions, Whole Numbers, and Mixed Numbers", es: "Suma y resta de fracciones, números enteros y números mixtos" },
              bigIdea: {
                en: "A mixed number is wholes plus a fraction. Add or subtract the wholes and the fractions. When you need more pieces, trade one whole for fractions. A number line or the arrow way can show your thinking.",
                es: "Un número mixto es enteros más una fracción. Suma o resta los enteros y las fracciones. Cuando necesites más partes, cambia un entero por fracciones. Una recta numérica o el método de la flecha pueden mostrar tu razonamiento."
              },
              lessons: [
                { n: 10, title: { en: "Add whole numbers and mixed numbers and add mixed numbers with related units.", es: "Sumar números enteros y números mixtos, y sumar números mixtos con unidades relacionadas." } },
                { n: 11, title: { en: "Add mixed numbers with unrelated units.", es: "Sumar números mixtos con unidades no relacionadas." } },
                { n: 12, title: { en: "Subtract whole numbers from mixed numbers and mixed numbers from whole numbers.", es: "Restar números enteros de números mixtos y números mixtos de números enteros." } },
                { n: 13, title: { en: "Subtract mixed numbers from mixed numbers with related units.", es: "Restar números mixtos de números mixtos con unidades relacionadas." } },
                { n: 14, title: { en: "Subtract mixed numbers from mixed numbers with unrelated units.", es: "Restar números mixtos de números mixtos con unidades no relacionadas." } }
              ],
              vocab: [
                { en: "mixed number", es: "número mixto", example: "3 1/4" },
                { en: "whole", es: "entero", example: "4/4 = 1 whole" },
                { en: "rename", es: "renombrar", example: "3 1/4 = 2 5/4" },
                { en: "number line", es: "recta numérica", example: "A line with numbers in order" },
                { en: "the arrow way", es: "el método de la flecha", example: "Adding on in steps with arrows" }
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
            },
            {
              letter: "D",
              title: { en: "Problem Solving and Line Plots with Fractional Measurements", es: "Resolución de problemas y diagramas de puntos con medidas fraccionarias" },
              bigIdea: {
                en: "A line plot shows data on a number line. Pick a scale that fits the smallest and biggest values. Then use the plot to answer questions. To share a total equally, find the sum of all the data, then divide by how many data points there are.",
                es: "Un diagrama de puntos muestra datos en una recta numérica. Elige una escala que incluya el valor más pequeño y el más grande. Después usa el diagrama para responder preguntas. Para repartir un total en partes iguales, halla la suma de todos los datos y divídela entre la cantidad de datos."
              },
              lessons: [
                { n: 15, title: { en: "Represent data on a line plot.", es: "Representar datos en un diagrama de puntos." } },
                { n: 16, title: { en: "Solve problems by using data from a line plot.", es: "Resolver problemas usando los datos de un diagrama de puntos." } },
                { n: 17, title: { en: "Solve problems by equally redistributing a total amount.", es: "Resolver problemas redistribuyendo una cantidad total en partes iguales." } }
              ],
              vocab: [
                { en: "line plot", es: "diagrama de puntos", example: "Xs above a number line" },
                { en: "data", es: "datos", example: "The measurements we collect" },
                { en: "scale", es: "escala", example: "How the number line is labeled" },
                { en: "redistribute", es: "redistribuir", example: "Share a total equally again" }
              ],
              example: {
                problem: { en: "Four plants have heights of 1/4, 1/2, 1/2, and 3/4 foot. If all four were the same height, how tall would each be?", es: "Cuatro plantas miden 1/4, 1/2, 1/2 y 3/4 de pie. Si las cuatro tuvieran la misma altura, ¿cuánto mediría cada una?" },
                steps: [
                  { en: "Add all the heights: 1/4 + 1/2 + 1/2 + 3/4 = 2 feet.", es: "Suma todas las alturas: 1/4 + 1/2 + 1/2 + 3/4 = 2 pies." },
                  { en: "Share the total equally among 4 plants: 2 ÷ 4 = 1/2.", es: "Reparte el total en partes iguales entre las 4 plantas: 2 ÷ 4 = 1/2." }
                ],
                answer: { en: "1/2 foot", es: "1/2 pie" }
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
          slides: "", assessments: [],
          // Topic names and lessons are from the Eureka Math² Teacher Edition. TODO: add video and slide links for each topic.
          // TODO(es): have a Spanish speaker check the Spanish in these topics.
          topics: [
            {
              letter: "A",
              title: { en: "Multiplication of a Whole Number by a Fraction", es: "Multiplicación de un número entero por una fracción" },
              bigIdea: {
                en: "Finding a fraction of a group means multiplying. To find 3/4 of 12, split 12 into 4 equal groups, then take 3 of them. We also use this to change customary units, like feet to inches.",
                es: "Hallar una fracción de un grupo es multiplicar. Para hallar 3/4 de 12, divide 12 en 4 grupos iguales y toma 3 de ellos. También lo usamos para cambiar unidades usuales, como pies a pulgadas."
              },
              lessons: [
                { n: 1, title: { en: "Find fractions of a set with arrays.", es: "Hallar fracciones de un conjunto con arreglos." } },
                { n: 2, title: { en: "Interpret fractions as division to find fractions of a set with tape diagrams and number lines.", es: "Interpretar fracciones como división para hallar fracciones de un conjunto con diagramas de cinta y rectas numéricas." } },
                { n: 3, title: { en: "Multiply a whole number by a fraction less than 1.", es: "Multiplicar un número entero por una fracción menor que 1." } },
                { n: 4, title: { en: "Multiply a whole number by a fraction.", es: "Multiplicar un número entero por una fracción." } },
                { n: 5, title: { en: "Convert larger customary measurement units to smaller measurement units.", es: "Convertir unidades de medida usuales más grandes a unidades más pequeñas." } },
                { n: 6, title: { en: "Convert smaller customary measurement units to larger measurement units.", es: "Convertir unidades de medida usuales más pequeñas a unidades más grandes." } }
              ],
              vocab: [
                { en: "fraction of a set", es: "fracción de un conjunto", example: "1/3 of 12 is 4." },
                { en: "unit fraction", es: "fracción unitaria", example: "1/5" },
                { en: "array", es: "arreglo", example: "Rows and columns of objects" },
                { en: "convert", es: "convertir", example: "3 feet = 36 inches" },
                { en: "customary unit", es: "unidad usual", example: "Inch, foot, pound, gallon" }
              ],
              example: {
                problem: { en: "What is 3/4 of 12?", es: "¿Cuánto es 3/4 de 12?" },
                steps: [
                  { en: "Split 12 into 4 equal groups. 12 ÷ 4 = 3 in each group.", es: "Divide 12 en 4 grupos iguales. 12 ÷ 4 = 3 en cada grupo." },
                  { en: "3/4 means 3 of those groups.", es: "3/4 quiere decir 3 de esos grupos." },
                  { en: "3 × 3 = 9.", es: "3 × 3 = 9." }
                ],
                answer: { en: "9", es: "9" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "B",
              title: { en: "Multiplication of Fractions", es: "Multiplicación de fracciones" },
              bigIdea: {
                en: "Multiplying fractions means finding a part of a part. An area model shows it: cut a rectangle into rows and columns. Multiply the numerators. Multiply the denominators. When you multiply by a fraction less than 1, the product is smaller than the number you started with.",
                es: "Multiplicar fracciones es hallar una parte de una parte. Un modelo de área lo muestra: corta un rectángulo en filas y columnas. Multiplica los numeradores. Multiplica los denominadores. Cuando multiplicas por una fracción menor que 1, el producto es menor que el número con el que empezaste."
              },
              lessons: [
                { n: 7, title: { en: "Multiply fractions less than 1 by unit fractions pictorially.", es: "Multiplicar fracciones menores que 1 por fracciones unitarias con modelos gráficos." } },
                { n: 8, title: { en: "Multiply fractions less than 1 pictorially.", es: "Multiplicar fracciones menores que 1 con modelos gráficos." } },
                { n: 9, title: { en: "Multiply fractions by unit fractions by making simpler problems.", es: "Multiplicar fracciones por fracciones unitarias creando problemas más sencillos." } },
                { n: 10, title: { en: "Multiply fractions greater than 1 by fractions.", es: "Multiplicar fracciones mayores que 1 por fracciones." } },
                { n: 11, title: { en: "Multiply fractions.", es: "Multiplicar fracciones." } }
              ],
              vocab: [
                { en: "area model", es: "modelo de área", example: "A rectangle cut into rows and columns" },
                { en: "numerator", es: "numerador", example: "The 2 in 2/3" },
                { en: "denominator", es: "denominador", example: "The 3 in 2/3" },
                { en: "product", es: "producto", example: "The answer to a multiplication problem" },
                { en: "unit fraction", es: "fracción unitaria", example: "1/4" }
              ],
              example: {
                problem: { en: "What is 2/3 × 3/4?", es: "¿Cuánto es 2/3 × 3/4?" },
                steps: [
                  { en: "Multiply the numerators: 2 × 3 = 6.", es: "Multiplica los numeradores: 2 × 3 = 6." },
                  { en: "Multiply the denominators: 3 × 4 = 12.", es: "Multiplica los denominadores: 3 × 4 = 12." },
                  { en: "6/12 = 1/2.", es: "6/12 = 1/2." },
                  { en: "Check: both factors are less than 1, so the product is smaller than 3/4. It is.", es: "Comprueba: los dos factores son menores que 1, así que el producto es menor que 3/4. Sí lo es." }
                ],
                answer: { en: "1/2", es: "1/2" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "C",
              title: { en: "Division with a Unit Fraction and a Whole Number", es: "División con una fracción unitaria y un número entero" },
              bigIdea: {
                en: "To divide a whole number by a unit fraction, ask how many pieces fit. 3 ÷ 1/4 asks how many fourths are in 3. To divide a unit fraction by a whole number, split the piece into smaller equal pieces. Multiplication and division are partners.",
                es: "Para dividir un número entero entre una fracción unitaria, pregunta cuántas partes caben. 3 ÷ 1/4 pregunta cuántos cuartos hay en 3. Para dividir una fracción unitaria entre un número entero, divide la parte en partes iguales más pequeñas. La multiplicación y la división son compañeras."
              },
              lessons: [
                { n: 12, title: { en: "Divide a nonzero whole number by a unit fraction to find the number of groups.", es: "Dividir un número entero distinto de cero entre una fracción unitaria para hallar la cantidad de grupos." } },
                { n: 13, title: { en: "Divide a nonzero whole number by a unit fraction to find the size of the group.", es: "Dividir un número entero distinto de cero entre una fracción unitaria para hallar el tamaño del grupo." } },
                { n: 14, title: { en: "Divide a unit fraction by a nonzero whole number.", es: "Dividir una fracción unitaria entre un número entero distinto de cero." } },
                { n: 15, title: { en: "Divide by whole numbers and unit fractions.", es: "Dividir entre números enteros y fracciones unitarias." } },
                { n: 16, title: { en: "Reason about the size of quotients of whole numbers and unit fractions and quotients of unit fractions and whole numbers.", es: "Razonar sobre el tamaño de los cocientes de números enteros y fracciones unitarias, y de fracciones unitarias y números enteros." } },
                { n: 17, title: { en: "Solve word problems involving fractions with multiplication and division.", es: "Resolver problemas con palabras que incluyen fracciones con multiplicación y división." } }
              ],
              vocab: [
                { en: "unit fraction", es: "fracción unitaria", example: "1/4" },
                { en: "quotient", es: "cociente", example: "The answer to a division problem" },
                { en: "number of groups", es: "cantidad de grupos", example: "How many fourths fit in 3?" },
                { en: "size of the group", es: "tamaño del grupo", example: "How big is each share?" }
              ],
              example: {
                problem: { en: "What is 3 ÷ 1/4?", es: "¿Cuánto es 3 ÷ 1/4?" },
                steps: [
                  { en: "This asks how many fourths are in 3 wholes.", es: "Esto pregunta cuántos cuartos hay en 3 enteros." },
                  { en: "1 whole has 4 fourths.", es: "1 entero tiene 4 cuartos." },
                  { en: "3 wholes have 3 × 4 = 12 fourths.", es: "3 enteros tienen 3 × 4 = 12 cuartos." }
                ],
                answer: { en: "12", es: "12" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "D",
              title: { en: "Multi-Step Problems with Fractions", es: "Problemas de varios pasos con fracciones" },
              bigIdea: {
                en: "Use everything you know about fractions. Draw a tape diagram. Write an equation with parentheses to show which step comes first. Work one step at a time, and check that your answer makes sense.",
                es: "Usa todo lo que sabes de fracciones. Dibuja un diagrama de cinta. Escribe una ecuación con paréntesis para mostrar qué paso va primero. Trabaja un paso a la vez y comprueba que tu respuesta tenga sentido."
              },
              lessons: [
                { n: 18, title: { en: "Compare and evaluate expressions with parentheses.", es: "Comparar y evaluar expresiones con paréntesis." } },
                { n: 19, title: { en: "Create and solve one-step word problems involving fractions.", es: "Crear y resolver problemas de un paso con fracciones." } },
                { n: 20, title: { en: "Solve multi-step word problems involving fractions and write equations with parentheses.", es: "Resolver problemas de varios pasos con fracciones y escribir ecuaciones con paréntesis." } },
                { n: 21, title: { en: "Solve multi-step word problems involving fractions.", es: "Resolver problemas de varios pasos con fracciones." } },
                { n: 22, title: { en: "Evaluate expressions involving nested grouping symbols. (Optional)", es: "Evaluar expresiones con símbolos de agrupación anidados. (Opcional)" } }
              ],
              vocab: [
                { en: "parentheses", es: "paréntesis", example: "(1/2 + 1/4) × 8" },
                { en: "expression", es: "expresión", example: "3 × (1/2 + 1/4)" },
                { en: "equation", es: "ecuación", example: "10 = 2 × 5" },
                { en: "tape diagram", es: "diagrama de cinta", example: "Boxes in a row that show amounts" },
                { en: "grouping symbols", es: "símbolos de agrupación", example: "Parentheses, brackets, and braces" }
              ],
              example: {
                problem: { en: "Toby spends 2/5 of his money on movie tickets. He spends 1/3 of the remaining money on popcorn. He has $10 left. How much money did Toby have to begin with?", es: "Toby gasta 2/5 de su dinero en boletos de cine. Gasta 1/3 del dinero que le queda en palomitas. Le quedan $10. ¿Con cuánto dinero empezó Toby?" },
                steps: [
                  { en: "Draw 5 equal units for all of Toby's money. Tickets use 2 units. 3 units remain.", es: "Dibuja 5 unidades iguales para todo el dinero de Toby. Los boletos usan 2 unidades. Quedan 3 unidades." },
                  { en: "Popcorn uses 1/3 of the 3 remaining units. That is 1 unit. 2 units are left.", es: "Las palomitas usan 1/3 de las 3 unidades que quedan. Es 1 unidad. Quedan 2 unidades." },
                  { en: "2 units are $10, so 1 unit is $5.", es: "2 unidades son $10, así que 1 unidad es $5." },
                  { en: "All 5 units: 5 × $5 = $25.", es: "Las 5 unidades: 5 × $5 = $25." }
                ],
                answer: { en: "$25", es: "$25" }
              },
              video: "", slides: "", family: ""
            }
          ]
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
          slides: "", assessments: [],
          // Topic names and lessons are from the Eureka Math² Teacher Edition. TODO: add video and slide links for each topic.
          // TODO(es): have a Spanish speaker check the Spanish in these topics.
          topics: [
            {
              letter: "A",
              title: { en: "Understanding Decimal Numbers with Place Value and Fraction Thinking", es: "Comprensión de los números decimales con el valor posicional y el pensamiento fraccionario" },
              bigIdea: {
                en: "Decimal places continue to the right of the ones place: tenths, hundredths, thousandths. Each place is 10 times as much as the place to its right. We use place value to read, compare, and round decimals.",
                es: "Los lugares decimales continúan a la derecha del lugar de las unidades: décimos, centésimos, milésimos. Cada lugar vale 10 veces más que el lugar de su derecha. Usamos el valor posicional para leer, comparar y redondear decimales."
              },
              lessons: [
                { n: 1, title: { en: "Model and relate decimal place value units to thousandths.", es: "Modelar y relacionar las unidades de valor posicional decimal hasta los milésimos." } },
                { n: 2, title: { en: "Represent thousandths as a place value unit.", es: "Representar los milésimos como una unidad de valor posicional." } },
                { n: 3, title: { en: "Represent decimal numbers to the thousandths place in different forms.", es: "Representar números decimales hasta los milésimos de diferentes formas." } },
                { n: 4, title: { en: "Relate the values of digits in a decimal number by using place value understanding.", es: "Relacionar los valores de los dígitos de un número decimal usando el valor posicional." } },
                { n: 5, title: { en: "Multiply and divide decimal numbers by powers of 10.", es: "Multiplicar y dividir números decimales por potencias de 10." } },
                { n: 6, title: { en: "Compare decimal numbers to the thousandths place.", es: "Comparar números decimales hasta los milésimos." } },
                { n: 7, title: { en: "Round decimal numbers to the nearest one, tenth, or hundredth.", es: "Redondear números decimales a la unidad, el décimo o el centésimo más cercano." } },
                { n: 8, title: { en: "Round decimal numbers to any place value unit.", es: "Redondear números decimales a cualquier unidad de valor posicional." } }
              ],
              vocab: [
                { en: "tenths", es: "décimos", example: "0.3 is 3 tenths." },
                { en: "hundredths", es: "centésimos", example: "0.07 is 7 hundredths." },
                { en: "thousandths", es: "milésimos", example: "0.016 is 16 thousandths." },
                { en: "decimal point", es: "punto decimal", example: "The dot in 2.5" },
                { en: "round", es: "redondear", example: "2.47 rounds to 2.5." },
                { en: "compare", es: "comparar", example: "0.35 > 0.305" }
              ],
              example: {
                problem: { en: "Write sixteen thousandths as a decimal number.", es: "Escribe dieciséis milésimos como número decimal." },
                steps: [
                  { en: "16 thousandths is 1 hundredth and 6 thousandths.", es: "16 milésimos son 1 centésimo y 6 milésimos." },
                  { en: "Put 0 in the ones place and 0 in the tenths place.", es: "Pon 0 en el lugar de las unidades y 0 en el lugar de los décimos." },
                  { en: "Write 1 in the hundredths place and 6 in the thousandths place: 0.016.", es: "Escribe 1 en el lugar de los centésimos y 6 en el de los milésimos: 0.016." }
                ],
                answer: { en: "0.016", es: "0.016" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "B",
              title: { en: "Addition and Subtraction of Decimal Numbers", es: "Suma y resta de números decimales" },
              bigIdea: {
                en: "Add and subtract decimals the way you add and subtract whole numbers. Line up the places: ones with ones, tenths with tenths, hundredths with hundredths. Then add or subtract each place, and bundle or unbundle when you need to.",
                es: "Suma y resta decimales como sumas y restas números enteros. Alinea los lugares: unidades con unidades, décimos con décimos, centésimos con centésimos. Después suma o resta cada lugar, y agrupa o desagrupa cuando lo necesites."
              },
              lessons: [
                { n: 9, title: { en: "Add decimal numbers by using different methods.", es: "Sumar números decimales usando diferentes métodos." } },
                { n: 10, title: { en: "Add decimal numbers by using place value understanding.", es: "Sumar números decimales usando el valor posicional." } },
                { n: 11, title: { en: "Subtract decimal numbers by using different methods.", es: "Restar números decimales usando diferentes métodos." } },
                { n: 12, title: { en: "Subtract decimal numbers by using place value understanding.", es: "Restar números decimales usando el valor posicional." } },
                { n: 13, title: { en: "Solve word problems involving addition and subtraction of decimal numbers and fractions.", es: "Resolver problemas con palabras que incluyen suma y resta de números decimales y fracciones." } }
              ],
              vocab: [
                { en: "place value", es: "valor posicional", example: "In 2.35, the 3 is in the tenths place." },
                { en: "decimal point", es: "punto decimal", example: "Line up the decimal points." },
                { en: "bundle", es: "agrupar", example: "10 hundredths bundle into 1 tenth." },
                { en: "sum", es: "suma", example: "The answer to an addition problem" },
                { en: "difference", es: "diferencia", example: "The answer to a subtraction problem" }
              ],
              example: {
                problem: { en: "What is 2.35 + 1.8?", es: "¿Cuánto es 2.35 + 1.8?" },
                steps: [
                  { en: "Line up the decimal points. Write 1.8 as 1.80.", es: "Alinea los puntos decimales. Escribe 1.8 como 1.80." },
                  { en: "Add the hundredths: 5 + 0 = 5. Add the tenths: 3 + 8 = 11 tenths. Bundle 10 tenths into 1 one.", es: "Suma los centésimos: 5 + 0 = 5. Suma los décimos: 3 + 8 = 11 décimos. Agrupa 10 décimos en 1 unidad." },
                  { en: "Add the ones: 2 + 1 + 1 = 4. The answer is 4.15.", es: "Suma las unidades: 2 + 1 + 1 = 4. La respuesta es 4.15." }
                ],
                answer: { en: "4.15", es: "4.15" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "C",
              title: { en: "Multiplication of Decimal Numbers", es: "Multiplicación de números decimales" },
              bigIdea: {
                en: "Think in units. 0.4 is 4 tenths. 6 groups of 4 tenths is 24 tenths. Multiply like whole numbers, then use place value to name the units. To multiply two decimals, you can rename them as fractions.",
                es: "Piensa en unidades. 0.4 son 4 décimos. 6 grupos de 4 décimos son 24 décimos. Multiplica como con números enteros y después usa el valor posicional para nombrar las unidades. Para multiplicar dos decimales, puedes cambiarlos a fracciones."
              },
              lessons: [
                { n: 14, title: { en: "Multiply decimal numbers to hundredths by one-digit whole numbers by using different models.", es: "Multiplicar números decimales hasta los centésimos por números enteros de un dígito usando diferentes modelos." } },
                { n: 15, title: { en: "Multiply decimal numbers to hundredths by one-digit whole numbers and multiples of 10, 100, or 1,000 by using different written methods.", es: "Multiplicar números decimales hasta los centésimos por números enteros de un dígito y múltiplos de 10, 100 o 1,000 usando diferentes métodos escritos." } },
                { n: 16, title: { en: "Multiply decimal numbers to hundredths by two-digit whole numbers by using area models and vertical form.", es: "Multiplicar números decimales hasta los centésimos por números enteros de dos dígitos usando modelos de área y forma vertical." } },
                { n: 17, title: { en: "Multiply decimal numbers to hundredths by two-digit whole numbers by using different methods.", es: "Multiplicar números decimales hasta los centésimos por números enteros de dos dígitos usando diferentes métodos." } },
                { n: 18, title: { en: "Relate decimal-number multiplication to fraction multiplication.", es: "Relacionar la multiplicación de números decimales con la multiplicación de fracciones." } },
                { n: 19, title: { en: "Multiply a decimal number by a decimal number.", es: "Multiplicar un número decimal por un número decimal." } }
              ],
              vocab: [
                { en: "unit form", es: "forma de unidades", example: "0.4 = 4 tenths" },
                { en: "area model", es: "modelo de área", example: "A rectangle split into parts" },
                { en: "partial products", es: "productos parciales", example: "Products of each part" },
                { en: "product", es: "producto", example: "The answer to a multiplication problem" }
              ],
              example: {
                problem: { en: "What is 0.4 × 6?", es: "¿Cuánto es 0.4 × 6?" },
                steps: [
                  { en: "0.4 is 4 tenths.", es: "0.4 son 4 décimos." },
                  { en: "6 groups of 4 tenths is 6 × 4 = 24 tenths.", es: "6 grupos de 4 décimos son 6 × 4 = 24 décimos." },
                  { en: "24 tenths is 2 ones and 4 tenths: 2.4.", es: "24 décimos son 2 unidades y 4 décimos: 2.4." }
                ],
                answer: { en: "2.4", es: "2.4" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "D",
              title: { en: "Division of Decimal Numbers", es: "División de números decimales" },
              bigIdea: {
                en: "Use unit form. 4.8 is 48 tenths. Divide 48 tenths by 6 to get 8 tenths. Then write the answer as a decimal. Dividing by 0.1 or 0.01 is like dividing by a unit fraction: it asks how many tenths or hundredths fit.",
                es: "Usa la forma de unidades. 4.8 son 48 décimos. Divide 48 décimos entre 6 y obtienes 8 décimos. Después escribe la respuesta como decimal. Dividir entre 0.1 o 0.01 es como dividir entre una fracción unitaria: pregunta cuántos décimos o centésimos caben."
              },
              lessons: [
                { n: 20, title: { en: "Divide decimal numbers to hundredths by one-digit whole numbers and multiples of 10, 100, or 1,000 by using unit form and place value understanding.", es: "Dividir números decimales hasta los centésimos entre números enteros de un dígito y múltiplos de 10, 100 o 1,000 usando la forma de unidades y el valor posicional." } },
                { n: 21, title: { en: "Divide decimal numbers to hundredths by one-digit whole numbers and multiples of 10, 100, or 1,000 by using place value understanding and vertical form.", es: "Dividir números decimales hasta los centésimos entre números enteros de un dígito y múltiplos de 10, 100 o 1,000 usando el valor posicional y la forma vertical." } },
                { n: 22, title: { en: "Divide decimal numbers to hundredths by two-digit whole numbers.", es: "Dividir números decimales hasta los centésimos entre números enteros de dos dígitos." } },
                { n: 23, title: { en: "Relate division by 0.1 and 0.01 to division by a unit fraction.", es: "Relacionar la división entre 0.1 y 0.01 con la división entre una fracción unitaria." } },
                { n: 24, title: { en: "Divide decimal numbers by decimal numbers, resulting in whole-number quotients.", es: "Dividir números decimales entre números decimales con cocientes que son números enteros." } },
                { n: 25, title: { en: "Divide decimal numbers by decimal numbers, resulting in decimal-number quotients.", es: "Dividir números decimales entre números decimales con cocientes que son números decimales." } }
              ],
              vocab: [
                { en: "dividend", es: "dividendo", example: "In 4.8 ÷ 6, the dividend is 4.8." },
                { en: "divisor", es: "divisor", example: "In 4.8 ÷ 6, the divisor is 6." },
                { en: "quotient", es: "cociente", example: "The answer to a division problem" },
                { en: "unit form", es: "forma de unidades", example: "4.8 = 48 tenths" }
              ],
              example: {
                problem: { en: "What is 4.8 ÷ 6?", es: "¿Cuánto es 4.8 ÷ 6?" },
                steps: [
                  { en: "Write 4.8 in unit form: 48 tenths.", es: "Escribe 4.8 en forma de unidades: 48 décimos." },
                  { en: "48 tenths ÷ 6 = 8 tenths.", es: "48 décimos ÷ 6 = 8 décimos." },
                  { en: "8 tenths is 0.8.", es: "8 décimos es 0.8." }
                ],
                answer: { en: "0.8", es: "0.8" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "E",
              title: { en: "Applications of Decimals", es: "Aplicaciones de los decimales" },
              bigIdea: {
                en: "Use decimals in real life. To change a metric unit, multiply or divide by a power of 10, like 1,000. To change a customary unit, use the fact that relates the two units. Tape diagrams help us write and understand expressions.",
                es: "Usa los decimales en la vida real. Para cambiar una unidad métrica, multiplica o divide por una potencia de 10, como 1,000. Para cambiar una unidad usual, usa el dato que relaciona las dos unidades. Los diagramas de cinta nos ayudan a escribir y entender expresiones."
              },
              lessons: [
                { n: 26, title: { en: "Solve a real-world problem involving metric measurements. (Optional)", es: "Resolver un problema de la vida real con medidas métricas. (Opcional)" } },
                { n: 27, title: { en: "Convert metric measurements involving decimals.", es: "Convertir medidas métricas con decimales." } },
                { n: 28, title: { en: "Convert customary measurements involving decimals.", es: "Convertir medidas usuales con decimales." } },
                { n: 29, title: { en: "Interpret, evaluate, and compare numerical expressions involving decimals.", es: "Interpretar, evaluar y comparar expresiones numéricas con decimales." } },
                { n: 30, title: { en: "Create and solve real-world problems for given numerical expressions involving decimals.", es: "Crear y resolver problemas de la vida real a partir de expresiones numéricas con decimales." } }
              ],
              vocab: [
                { en: "convert", es: "convertir", example: "2.5 km = 2,500 m" },
                { en: "metric unit", es: "unidad métrica", example: "Meter, gram, liter" },
                { en: "customary unit", es: "unidad usual", example: "Foot, pound, gallon" },
                { en: "expression", es: "expresión", example: "3 × (1.5 + 0.5)" },
                { en: "tape diagram", es: "diagrama de cinta", example: "Boxes in a row that show amounts" }
              ],
              example: {
                problem: { en: "How many meters are in 2.5 kilometers?", es: "¿Cuántos metros hay en 2.5 kilómetros?" },
                steps: [
                  { en: "1 kilometer is 1,000 meters.", es: "1 kilómetro son 1,000 metros." },
                  { en: "Multiply: 2.5 × 1,000.", es: "Multiplica: 2.5 × 1,000." },
                  { en: "Each × 10 shifts the digits one place left. 2.5 becomes 2,500.", es: "Cada × 10 mueve los dígitos un lugar a la izquierda. 2.5 se convierte en 2,500." }
                ],
                answer: { en: "2,500 meters", es: "2,500 metros" }
              },
              video: "", slides: "", family: ""
            }
          ]
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
          start: "2027-05-10", end: "2027-06-16",
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
          title: { en: "Ratios, Rates, and Percents", es: "Razones, tasas y porcentajes" },
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
          // DRAFT: topic names, big ideas, and examples are drafted from your lesson plans. TODO: check each topic name and letter against your teacher edition, and add video and slide links.
          // TODO(es): have a Spanish speaker check the Spanish in these topics.
          topics: [
            {
              letter: "A",
              title: { en: "Ratios, batches, and tape diagrams", es: "Razones, tandas y diagramas de cinta" },
              bigIdea: {
                en: "A ratio compares two amounts. A batch is one full set of the ratio. Make more batches and both amounts grow together. A tape diagram helps when you only know the total.",
                es: "Una razón compara dos cantidades. Una tanda es un conjunto completo de la razón. Si haces más tandas, las dos cantidades crecen juntas. Un diagrama de cinta ayuda cuando solo conoces el total."
              },
              vocab: [
                { en: "ratio", es: "razón", example: "3 : 4" },
                { en: "batch", es: "tanda", example: "One full set of the recipe" },
                { en: "tape diagram", es: "diagrama de cinta", example: "Boxes in a row, all the same size" },
                { en: "part-to-whole", es: "parte a total", example: "3 raisins : 7 snacks total" }
              ],
              example: {
                problem: { en: "Trail mix uses 3 cups of raisins for every 4 cups of peanuts. How many cups of raisins go with 20 cups of peanuts?", es: "Una mezcla usa 3 tazas de pasas por cada 4 tazas de cacahuates. ¿Cuántas tazas de pasas van con 20 tazas de cacahuates?" },
                steps: [
                  { en: "One batch is 3 raisins : 4 peanuts.", es: "Una tanda es 3 de pasas : 4 de cacahuates." },
                  { en: "20 peanuts is 20 ÷ 4 = 5 batches.", es: "20 de cacahuates son 20 ÷ 4 = 5 tandas." },
                  { en: "5 batches of raisins is 5 × 3 = 15.", es: "5 tandas de pasas son 5 × 3 = 15." }
                ],
                answer: { en: "15 cups of raisins", es: "15 tazas de pasas" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "B",
              title: { en: "Equivalent ratios, tables, double number lines, and graphs", es: "Razones equivalentes, tablas, rectas numéricas dobles y gráficas" },
              bigIdea: {
                en: "Equivalent ratios show the same relationship in different amounts. Multiply both numbers by the same number to make one. A table, a double number line, and a graph can all show the same ratios. Careful: adding the same number to both parts does not work.",
                es: "Las razones equivalentes muestran la misma relación con cantidades distintas. Multiplica los dos números por el mismo número para hacer una. Una tabla, una recta numérica doble y una gráfica pueden mostrar las mismas razones. Ojo: sumar el mismo número a las dos partes no funciona."
              },
              vocab: [
                { en: "equivalent ratios", es: "razones equivalentes", example: "3 : 2 and 6 : 4" },
                { en: "ratio table", es: "tabla de razones", example: "A table where each row is the same ratio" },
                { en: "double number line", es: "recta numérica doble", example: "Two number lines that line up" },
                { en: "ordered pair", es: "par ordenado", example: "(4, 6) is a point on a graph" }
              ],
              example: {
                problem: { en: "A recipe uses 2 cups of flour for every 3 eggs. How many eggs go with 8 cups of flour?", es: "Una receta usa 2 tazas de harina por cada 3 huevos. ¿Cuántos huevos van con 8 tazas de harina?" },
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
              title: { en: "Comparing ratio relationships", es: "Comparar relaciones de razones" },
              bigIdea: {
                en: "To compare two ratios, make an equivalent ratio so one number matches. Then look at the other number.",
                es: "Para comparar dos razones, haz una razón equivalente para que un número sea igual. Después mira el otro número."
              },
              vocab: [
                { en: "compare", es: "comparar", example: "Which mix is stronger?" },
                { en: "equivalent ratios", es: "razones equivalentes", example: "2 : 5 and 6 : 15" },
                { en: "mixture", es: "mezcla", example: "Juice and water mixed together" }
              ],
              example: {
                problem: { en: "Mix A has 2 cups of juice for every 5 cups of water. Mix B has 3 cups of juice for every 6 cups of water. Which mix tastes more like juice?", es: "La mezcla A tiene 2 tazas de jugo por cada 5 tazas de agua. La mezcla B tiene 3 tazas de jugo por cada 6 tazas de agua. ¿Cuál sabe más a jugo?" },
                steps: [
                  { en: "Make the juice match. Use 6 cups of juice for both mixes.", es: "Haz que el jugo sea igual. Usa 6 tazas de jugo en las dos mezclas." },
                  { en: "Mix A: 2 : 5 times 3 is 6 : 15.", es: "Mezcla A: 2 : 5 por 3 es 6 : 15." },
                  { en: "Mix B: 3 : 6 times 2 is 6 : 12.", es: "Mezcla B: 3 : 6 por 2 es 6 : 12." },
                  { en: "Same juice, less water in B. B tastes more like juice.", es: "Mismo jugo, menos agua en B. B sabe más a jugo." }
                ],
                answer: { en: "Mix B", es: "Mezcla B" }
              },
              video: "", slides: "", family: ""
            },
            {
              letter: "D",
              title: { en: "Rates, unit rates, and percents", es: "Tasas, tasas unitarias y porcentajes" },
              bigIdea: {
                en: "A unit rate tells you how much for 1. A percent is a rate out of 100. 25% means 25 out of every 100.",
                es: "Una tasa unitaria te dice cuánto hay por 1. Un porcentaje es una tasa por cada 100. 25% quiere decir 25 de cada 100."
              },
              vocab: [
                { en: "rate", es: "tasa", example: "60 miles in 2 hours" },
                { en: "unit rate", es: "tasa unitaria", example: "30 miles per hour" },
                { en: "percent", es: "porcentaje", example: "25% = 25 out of 100" },
                { en: "per", es: "por", example: "$2 per pound" }
              ],
              example: {
                problem: { en: "A car goes 150 miles in 3 hours. How far does it go in 1 hour?", es: "Un carro recorre 150 millas en 3 horas. ¿Cuánto recorre en 1 hora?" },
                steps: [
                  { en: "We want the amount for 1 hour. Divide by 3.", es: "Queremos la cantidad para 1 hora. Divide entre 3." },
                  { en: "150 ÷ 3 = 50.", es: "150 ÷ 3 = 50." }
                ],
                answer: { en: "50 miles per hour", es: "50 millas por hora" }
              },
              video: "", slides: "", family: ""
            }
          ]
        },
        {
          number: 2,
          title: { en: "Operations with Fractions and Multi-Digit Numbers", es: "Operaciones con fracciones y números de varios dígitos" },
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
          start: "2027-05-24", end: "2027-06-16",
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
      { en: "Your school device, charged (at least 75%)", es: "Tu dispositivo de la escuela, cargado (al menos 75%)" },   // TODO: the handbook says iPads. Change to Chromebook if that's what you use.
      { en: "Your Eureka Math² Learn book", es: "Tu libro Learn de Eureka Math²" }
    ],
    grading: [
      // TODO: add a line or two saying what mastery and growth mean in your class.
      { label: { en: "Mastery", es: "Dominio" }, percent: 60 },
      { label: { en: "Growth", es: "Crecimiento" }, percent: 40 }
      // TODO(es): "Dominio" and "Crecimiento" are my best guesses. Check them.
    ],
    gradingNote: {
      // From the school handbook, the same scale for every subject.
      en: "School grading scale: Advanced 93 to 100. Proficient 80 to 92. Basic 66 to 79. Below Basic 0 to 65.",
      es: "Escala de calificaciones de la escuela: Avanzado 93 a 100. Competente 80 a 92. Básico 66 a 79. Por debajo del nivel básico 0 a 65."
      // TODO(es): check the Spanish level names against the school's Spanish handbook.
    },
    lateWork: {
      // TODO: check this against what you do. It follows the school handbook: homework is usually Monday to Thursday.
      en: "Homework is usually Monday to Thursday. If you miss school, ask me what you missed and we'll set a time for quizzes and tests. If homework isn't done, I'll let your family know and we'll make a plan.",
      es: "La tarea suele ser de lunes a jueves. Si faltas a la escuela, pregúntame qué te perdiste y fijaremos un día para las pruebas y los exámenes. Si la tarea no está hecha, aviso a tu familia y hacemos un plan juntos."
    },
    help: [
      { en: "Use the Homework help page on this site.", es: "Usa la página de Ayuda con la tarea de este sitio." },
      { en: "Ask a classmate first. Then ask me.", es: "Pregúntale primero a un compañero. Después pregúntame a mí." },
      { en: "Use W.I.N. time (What I Need) to get help or catch up.", es: "Usa el tiempo de W.I.N. (Lo que necesito) para pedir ayuda o ponerte al día." },
      { en: "Families can reach me by email or phone.", es: "Las familias pueden comunicarse conmigo por correo electrónico o teléfono." }
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
    firstDay: "2026-08-31",   // from the school calendar
    lastDay: "2027-06-16",    // from the school calendar
    calendar: "",             // PLACEHOLDER: school calendar link (or leave "" to use the one in site.school)

    periodNames: {
      homeroom:  { en: "Homeroom", es: "Salón hogar" },   // TODO(es): or "Tutoría"? Use what your school says.
      p1:        { en: "Period 1", es: "Periodo 1" },
      p2:        { en: "Period 2", es: "Periodo 2" },
      win:       { en: "W.I.N.", es: "W.I.N." },
      p3:        { en: "Period 3", es: "Periodo 3" },
      p4:        { en: "Period 4", es: "Periodo 4" },
      lunch:     { en: "Lunch", es: "Almuerzo" },
      p5:        { en: "Period 5", es: "Periodo 5" },
      specials:  { en: "Specials", es: "Especiales" },
      community: { en: "Community meeting", es: "Reunión comunitaria" },
      dismissal: { en: "Dismissal", es: "Salida" }
    },

    defaultDayType: "regular",

    // Bell schedules from the "Schedules 5/6th Grade" PDF. An id has to match a name in periodNames.
    dayTypes: {
      regular: {
        name: { en: "Regular day", es: "Día normal" },
        periods: [
          { id: "homeroom",  start: "08:00", end: "08:25" },
          { id: "p1",        start: "08:27", end: "09:17" },
          { id: "p2",        start: "09:19", end: "10:09" },
          { id: "win",       start: "10:11", end: "11:01" },
          { id: "p3",        start: "11:03", end: "11:53" },
          { id: "p4",        start: "11:55", end: "12:45" },
          { id: "lunch",     start: "12:45", end: "13:30" },
          { id: "p5",        start: "13:30", end: "14:20" },
          { id: "specials",  start: "14:25", end: "15:15" },
          { id: "dismissal", start: "15:15", end: "15:30" }
        ]
      },
      early: {
        name: { en: "12 PM dismissal", es: "Salida a las 12 p. m." },
        // TODO: this half-day schedule is from the 6B page. Send me the 5th grade one if it's different.
        periods: [
          { id: "homeroom",  start: "08:00", end: "08:15" },
          { id: "p1",        start: "08:15", end: "08:45" },
          { id: "p2",        start: "08:45", end: "09:15" },
          { id: "p3",        start: "09:15", end: "09:45" },
          { id: "p4",        start: "09:45", end: "10:15" },
          { id: "p5",        start: "10:15", end: "10:30" },
          { id: "lunch",     start: "10:30", end: "11:00" },
          { id: "community", start: "11:05", end: "11:55" },
          { id: "dismissal", start: "11:55", end: "12:00" }
        ]
      }
    },

    // From the 2026-2027 school calendar. Use date for one day, or start and end for a range.
    // grade: "6" means only that grade has the day. Leave grade out if both grades do.
    specialDays: [
      { date: "2026-10-30", type: "early" },
      { date: "2026-11-03", type: "early" },
      { date: "2026-11-25", type: "early" },
      { date: "2026-12-04", type: "early" },
      { start: "2026-12-16", end: "2026-12-18", type: "early" },
      { date: "2027-01-29", type: "early" },
      { date: "2027-02-26", type: "early" },
      { start: "2027-03-17", end: "2027-03-19", type: "early" },
      { start: "2027-04-28", end: "2027-05-04", type: "early", grade: "6" },
      { date: "2027-05-28", type: "early" },
      { date: "2027-06-11", type: "early" },
      { start: "2027-06-14", end: "2027-06-16", type: "early" }
    ],

    // Days with no school for students, from the school calendar.
    noSchoolDates: [
      { date: "2026-10-12", en: "No school for students", es: "No hay clases para los estudiantes" },
      { date: "2026-11-11", en: "No school: Veterans Day", es: "No hay clases: Día de los Veteranos" },
      { start: "2026-11-26", end: "2026-11-27", en: "No school: Thanksgiving break", es: "No hay clases: vacaciones de Acción de Gracias" },
      { start: "2026-12-21", end: "2027-01-01", en: "No school: Winter break", es: "No hay clases: vacaciones de invierno" },
      { date: "2027-01-15", en: "No school for students", es: "No hay clases para los estudiantes" },
      { date: "2027-01-18", en: "No school: MLK Day", es: "No hay clases: Día de Martin Luther King Jr." },
      { date: "2027-02-15", en: "No school: Presidents' Day", es: "No hay clases: Día de los Presidentes" },
      { date: "2027-03-10", en: "No school: Eid al-Fitr", es: "No hay clases: Eid al-Fitr" },
      { start: "2027-03-22", end: "2027-03-26", en: "No school: Spring break", es: "No hay clases: vacaciones de primavera" },
      { date: "2027-04-16", en: "No school for students", es: "No hay clases para los estudiantes" },
      { date: "2027-05-14", en: "No school for students", es: "No hay clases para los estudiantes" },
      { date: "2027-05-17", en: "No school: Eid al-Adha", es: "No hay clases: Eid al-Adha" },
      { date: "2027-05-31", en: "No school: Memorial Day", es: "No hay clases: Día de los Caídos" }
    ],

    // Class names. mathSubject is the one that gets highlighted. A period with math: true is highlighted too.
    subjects: {
      math:       { en: "Math", es: "Matemáticas" },
      ela:        { en: "English Language Arts", es: "Artes del lenguaje en inglés" },   // TODO(es): check
      sla:        { en: "Spanish Language Arts", es: "Artes del lenguaje en español" }, // TODO(es): check
      science:    { en: "Science", es: "Ciencias" },
      ins:        { en: "Social Studies (I&S)", es: "Estudios Sociales (I&S)" },
      win:        { en: "W.I.N. (What I Need)", es: "W.I.N. (Lo que necesito)" },        // TODO(es): check
      homeroom:   { en: "Homeroom", es: "Salón hogar" },
      community:  { en: "Community meeting", es: "Reunión comunitaria" },
      specials:   { en: "Specials", es: "Especiales" },
      music:      { en: "Music", es: "Música" },
      gym:        { en: "Gym", es: "Educación física" },
      thinquiry:  { en: "Thinquiry", es: "Thinquiry" },
      service:    { en: "Service Learning", es: "Aprendizaje de servicio" },            // TODO(es): check
      art:        { en: "Art", es: "Arte" }
    },
    mathSubject: "math",

    // Each class section and what it has each period. Only section names, never student names.
    // A period can be just a subject ("math") or { subject, teacher, room }.
    // Specials have one entry for each weekday (mon to fri).
    // byDayType: classes for a different bell schedule. Left out means "coming soon" on that day.
    sections: [
      { id: "5A", grade: "5", homeroom: "Mr. Emilio",
        periods: {
        homeroom: { subject: "homeroom", teacher: "Mr. Emilio", room: "222" },
        p1: { subject: "science", teacher: "Mr. Emilio", room: "222" },
        p2: { subject: "ins", teacher: "Mrs. Martinez", room: "222" },
        win: { subject: "win", teacher: "Mr. Emilio", room: "222" },
        p3: { subject: "math", teacher: "Mrs. Barbee", room: "314" },
        p4: { subject: "sla", teacher: "Ms. Padilla", room: "313" },
        p5: { subject: "ela", teacher: "Mr. Perez", room: "201" },
        specials: {
          mon: { subject: "art", teacher: "Ms. Chambers", room: "225" },
          tue: { subject: "music", teacher: "Ms. Yen", room: { en: "Music Room", es: "Salón de música" } },
          wed: { subject: "gym", teacher: "Mr. Bonilla", room: { en: "Annex", es: "Anexo" } },
          thu: { subject: "thinquiry", teacher: "Ms. Donelly", room: { en: "Modular", es: "Modular" } },
          fri: { subject: "service", teacher: "Mr. Williams", room: "201" }
        }
        }
      },
      { id: "5B", grade: "5", homeroom: "Mr. Perez",
        periods: {
        homeroom: { subject: "homeroom", teacher: "Mr. Perez", room: "201" },
        p1: { subject: "ins", teacher: "Mrs. Martinez", room: "201" },
        p2: { subject: "math", teacher: "Mrs. Barbee", room: "314" },
        win: { subject: "win", teacher: "Mrs. Barbee", room: "314", math: true },
        p3: { subject: "ela", teacher: "Mr. Perez", room: "201" },
        p4: { subject: "science", teacher: "Mr. Emilio", room: "222" },
        p5: { subject: "sla", teacher: "Ms. Padilla", room: "313" },
        specials: {
          mon: { subject: "service", teacher: "Mr. Williams", room: "313" },
          tue: { subject: "art", teacher: "Ms. Chambers", room: "225" },
          wed: { subject: "music", teacher: "Ms. Yen", room: { en: "Music Room", es: "Salón de música" } },
          thu: { subject: "gym", teacher: "Mr. Bonilla", room: { en: "Annex", es: "Anexo" } },
          fri: { subject: "thinquiry", teacher: "Ms. Donelly", room: { en: "Modular", es: "Modular" } }
        }
        }
      },
      { id: "5C", grade: "5", homeroom: "Mrs. Barbee",
        periods: {
        homeroom: { subject: "homeroom", teacher: "Mrs. Barbee", room: "314" },
        p1: { subject: "math", teacher: "Mrs. Barbee", room: "314" },
        p2: { subject: "sla", teacher: "Ms. Padilla", room: "313" },
        win: { subject: "win", teacher: "Ms. Padilla", room: "313" },
        p3: { subject: "ins", teacher: "Mrs. Martinez", room: "313" },
        p4: { subject: "ela", teacher: "Mr. Perez", room: "201" },
        p5: { subject: "science", teacher: "Mr. Emilio", room: "222" },
        specials: {
          mon: { subject: "gym", teacher: "Mr. Bonilla", room: { en: "Annex", es: "Anexo" } },
          tue: { subject: "thinquiry", teacher: "Ms. Donelly", room: { en: "Modular", es: "Modular" } },
          wed: { subject: "service", teacher: "Mr. Williams", room: "222" },
          thu: { subject: "art", teacher: "Ms. Chambers", room: "225" },
          fri: { subject: "music", teacher: "Ms. Yen", room: { en: "Music Room", es: "Salón de música" } }
        }
        }
      },
      { id: "6B", grade: "6", homeroom: "Ms. Padilla",
        periods: {
        homeroom: { subject: "homeroom", teacher: "Ms. Padilla", room: "313" },
        p1: { subject: "sla", teacher: "Ms. Padilla", room: "313" },
        p2: { subject: "ela", teacher: "Mr. Perez", room: "201" },
        win: { subject: "win", teacher: "Mr. Perez", room: "201" },
        p3: { subject: "science", teacher: "Mr. Emilio", room: "222" },
        p4: { subject: "math", teacher: "Mrs. Barbee", room: "314" },
        p5: { subject: "ins", teacher: "Mrs. Martinez", room: "314" },
        specials: {
          mon: { subject: "music", teacher: "Ms. Yen", room: { en: "Music Room", es: "Salón de música" } },
          tue: { subject: "gym", teacher: "Mr. Bonilla", room: { en: "Gym", es: "Gimnasio" } },
          wed: { subject: "thinquiry", teacher: "Ms. Donelly", room: { en: "Modular", es: "Modular" } },
          thu: { subject: "service", teacher: "Mr. Williams", room: "314" },
          fri: { subject: "art", teacher: "Ms. Chambers", room: "225" }
        }
        },
        // Half-day schedule (12 PM dismissal). Same classes, shorter periods.
        byDayType: {
          early: {
            homeroom:  { subject: "homeroom", teacher: "Ms. Padilla", room: "313" },
            p1:        { subject: "ins", teacher: "Mrs. Martinez", room: "313" },
            p2:        { subject: "science", teacher: "Mr. Emilio", room: "313" },
            p3:        { subject: "ela", teacher: "Mr. Perez", room: "313" },
            p4:        { subject: "math", teacher: "Mrs. Barbee", room: "313" },
            p5:        { subject: "sla", teacher: "Ms. Padilla", room: "313" },
            community: { subject: "community", teacher: "Ms. Padilla", room: { en: "Annex", es: "Anexo" } }
          }
        }
      }
    ],

    // How many upcoming dates to show.
    showDates: 8,

    // Early dismissal and no-school days show up on their own. Add anything else here.
    importantDates: [
      // From the school calendar. TODO(es): have a Spanish speaker check these.
      { date: "2026-12-16", en: "Report card conferences (Dec 16 and 17)", es: "Reuniones sobre las boletas de calificaciones (16 y 17 de dic.)" },
      { date: "2027-03-17", en: "Report card conferences (Mar 17 and 18)", es: "Reuniones sobre las boletas de calificaciones (17 y 18 de mar.)" },
      { date: "2027-04-28", en: "PSSA testing, grades 3 to 8 (Apr 28 to May 4)", es: "Exámenes PSSA, grados 3 a 8 (del 28 de abr. al 4 de may.)" },
      { date: "2027-06-16", en: "Last day for students", es: "Último día de clases" }
    ]
  },


  /* ----------------------------------------------------------
     STORE: what students can buy with points. Browsing only.
     category must be "supplies", "privileges", or "treats".
     inStock: true or false. image is optional. If you add one, add alt text too.
     ---------------------------------------------------------- */
  store: {
    currency: { en: "Dojo points", es: "puntos de Dojo" },  // The school gives ClassDojo points and runs school stores.
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
    // School information for families, from panamcs.org and the 2026-27 Student & Family Handbook.
    // title and text need en and es. Check the Spanish against the school's Spanish handbook.
    policies: [
      { title: { en: "Arrival", es: "Llegada" },
        text: { en: "Gates open at 7:50 AM and close at 8:15 AM. Students in grades 5 to 8 come in through the American Street gate and go to the cafeteria. If you arrive after 8:15 AM, use the Main Entrance and get a late pass.",
                es: "Las puertas abren a las 7:50 a. m. y cierran a las 8:15 a. m. Los estudiantes de 5.º a 8.º grado entran por la puerta de la calle American y van a la cafetería. Si llega después de las 8:15 a. m., use la entrada principal y pida un pase de tardanza." } },
      { title: { en: "Dismissal", es: "Salida" },
        text: { en: "The school day ends at 3:15 PM. Students in grades 5 to 8 leave through the Front Entrance or the Small Gate on their own, unless you have set up something different with the school.",
                es: "El día escolar termina a las 3:15 p. m. Los estudiantes de 5.º a 8.º grado salen solos por la entrada principal o por la puerta pequeña, a menos que usted haya acordado otra cosa con la escuela." } },
      { title: { en: "Absences", es: "Ausencias" },
        text: { en: "Call the main office if your child will be absent. Send an excuse note within 3 school days of their return. Family vacations are not excused absences.",
                es: "Llame a la oficina principal si su hijo o hija va a faltar. Envíe una excusa dentro de los 3 días de clases después de su regreso. Las vacaciones familiares no son una ausencia justificada." } },
      { title: { en: "Homework", es: "Tarea" },
        text: { en: "Homework is usually Monday to Thursday, with a daily quiet reading time. You can see assignments in the PowerSchool Parent Portal.",
                es: "La tarea suele ser de lunes a jueves, con un tiempo diario de lectura en silencio. Puede ver las tareas en el Portal para Padres de PowerSchool." } },
      { title: { en: "Uniform", es: "Uniforme" },
        text: { en: "Students wear the full uniform every day. No outside jackets or hoodies. The Uniform Policy is on page 28 of the handbook.",
                es: "Los estudiantes usan el uniforme completo todos los días. No se permiten chaquetas ni sudaderas de afuera. La política de uniforme está en la página 28 del manual." } },
      { title: { en: "School devices", es: "Dispositivos de la escuela" },
        text: { en: "Every student has a school device. It should come to school every day with at least 75% charge.",
                es: "Cada estudiante tiene un dispositivo de la escuela. Debe llevarlo a la escuela todos los días con al menos 75% de carga." } },
      { title: { en: "Meals", es: "Comidas" },
        text: { en: "All students get breakfast and lunch at no cost.",
                es: "Todos los estudiantes reciben desayuno y almuerzo sin costo." } }
    ],

    // Buttons on the Families page. Blank link shows "Coming soon".
    links: [
      { label: { en: "Student & Family Handbook", es: "Manual para estudiantes y familias" },
        url: { en: "https://panamcs.org/wp-content/uploads/2026/08/26-27-PAACS-Student-Family-Handbook_final_approved20260803.docx-1.pdf",
               es: "https://panamcs.org/wp-content/uploads/2026/08/Translated-Copy-of-26-27-PAACS-Student-Family-Handbook_final_approved20260803.docx.pdf" } },
      { label: { en: "Absence excuse note", es: "Excusa por ausencia" }, url: "https://forms.gle/RakUsa1s3tmsR75Q6" },
      { label: { en: "School supply list", es: "Lista de útiles escolares" }, url: "https://panamcs.org/wp-content/uploads/2026/06/2026-2027-School-Supply-List.pdf" },
      { label: { en: "Lunch menu", es: "Menú del almuerzo" }, url: "https://panamcs.org/wp-content/uploads/2026/10/October-Menu.pdf" },   // TODO: this link changes every month
      { label: { en: "Parent concern form", es: "Formulario de inquietudes" }, url: "https://docs.google.com/forms/d/e/1FAIpQLScOQazp20x0jB8-HtjSCkO-6hwteMv7qdw0Ubfd6Lnv5zZkIA/viewform?usp=pp_url" }
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
      roomN: "Room {n}",
      lessonsLabel: "Lessons",
      lessonN: "Lesson {n}",
      daySoon: "Classes for this day are coming soon.",
      schoolPolicies: "School policies",
      schoolLinks: "School links",
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
      roomN: "Salón {n}",
      lessonsLabel: "Lecciones",
      lessonN: "Lección {n}",
      daySoon: "Muy pronto vas a ver aquí las clases de este día.",
      schoolPolicies: "Reglas de la escuela",
      schoolLinks: "Enlaces de la escuela",
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
