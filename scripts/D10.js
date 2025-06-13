/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

// RISPOSTA A
let sum = 10 + 20
console.log("ESERCIZIO A: La somma è:", sum) // Ho creato una variabile e le ho assegnato il risultato della somma tra 10 e 20.

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

// RISPOSTA B
let random = Math.floor(Math.random() * 21)
console.log("ESERCIZIO B: Numero casuale:", random) // Ho creato una variabile e le ho assegnato un numero casuale tra 0 e 20.

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

// RISPOSTA C
let me = {
  name: "Emiliano",
  surname: "Massari",
  age: 21,
} // Ho creato una variabile chiamata "me" e le ho assegnato un oggetto con le proprietà richieste.
console.log("ESERCIZIO C: Le mie proprietà:", me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

// RISPOSTA D
delete me.age // Ho rimosso la proprietà "age" dall'oggetto "me".
console.log("ESERCIZIO D: Oggetto dopo rimozione di 'age':", me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

// RISPOSTA E
me.skills = ["HTML", "CSS"] // Ho aggiunto un array "skills" all'oggetto "me" con i linguaggi di programmazione che conosco.
console.log("ESERCIZIO E: Le mie skills:", me.skills)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

// RISPOSTA F
me.skills.push("JavaScript") // Ho aggiunto un nuovo elemento nell'array "skills" dell'oggetto "me".
console.log("ESERCIZIO F: Skills dopo l'aggiunta di un elemento:", me.skills)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

// RISPOSTA G
me.skills.pop() // Ho rimosso l'ultimo elemento dall'array "skills" dell'oggetto "me".
console.log(
  "ESERCIZIO G: Skills dopo la rimozione dell'ultimo elemento:",
  me.skills
)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

// RISPOSTA 1
function dice() {
  return Math.floor(Math.random() * 6) + 1 // Ho creato una funzione che genera un numero casuale tra 1 e 6.
}
console.log("ESERCIZIO 1: Numero casuale generato da dice():", dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

// RISPOSTA 2
function whoIsBigger(num1, num2) {
  return num1 > num2 ? num1 : num2 // Ho creato una funzione che ritorna il numero maggiore tra i due numeri come parametri.
}
console.log("ESERCIZIO 2: Il numero maggiore tra 24 e 8 è:", whoIsBigger(24, 8))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

// RISPOSTA 3
function splitMe(str) {
  return str.split(" ") // Ho creato una funzione che divide la stringa in un array di parole.
}
console.log("ESERCIZIO 3: Array di parole:", splitMe("Io sono Emiliano"))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

// RISPOSTA 4
function deleteOne(str, shouldDeleteFirst) {
  if (shouldDeleteFirst) {
    return str.slice(1) // Se il booleano è true ritorna la stringa senza il primo carattere.
  } else {
    return str.slice(0, -1) // Altrimenti ritorna la stringa senza l'ultimo carattere.
  }
}
console.log(
  "ESERCIZIO 4: Stringa senza primo carattere:",
  deleteOne("Emiliano", true)
)

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// RISPOSTA 5
function onlyLetters(str) {
  let risultato = ""
  for (let i = 0; i < str.length; i++) {
    //Ho fato confrontare ogni carrattere con le difre da 0 a 9 e li esclude uno per uno.
    if (
      str[i] !== "0" &&
      str[i] !== "1" &&
      str[i] !== "2" &&
      str[i] !== "3" &&
      str[i] !== "4" &&
      str[i] !== "5" &&
      str[i] !== "6" &&
      str[i] !== "7" &&
      str[i] !== "8" &&
      str[i] !== "9"
    ) {
      risultato += str[i]
    }
  }
  return risultato
}
console.log(
  "ESERCIZIO 5: Stringa senza cifre numeriche:",
  onlyLetters("Io ho 1 cane")
)

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// RISPOSTA 6
function isThisAnEmail(str) {
  if (str.includes("@") && str.includes(".")) {
    // Ho fatto verificare se la stringa contiene @ e un punto.
    return true
  } else {
    return false
  }
}
console.log("ESERCIZIO 6:")
console.log(isThisAnEmail("emilianomassa@hotmail.com"))
console.log(isThisAnEmail("emilianomassahotmail.com"))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

// RISPOSTA 7
function whatDayIsIt() {
  const days = [
    "Domenica", // In JavaScript i giorni della settimana iniziano dalla Domenica
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ]
  const today = new Date().getDay() // Ottiene il giorno della settimana come numero
  return days[today] // Ritorna il nome del giorno corrispondente
}
console.log("ESERCIZIO 7: Oggi è:", whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

// RISPOSTA 8
function rollTheDices(num) {
  let sum = 0
  let values = []
  for (let i = 0; i < num; i++) {
    let risultato = dice() // Invoca la funzione dice() per ottenere un numero casuale
    values.push(risultato)
    sum += risultato // Aggiunge il valore al totale
  }

  return {
    sum: sum,
    values: values,
  }
}
console.log("ESERCIZIO 8:", rollTheDices(3))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// RISPOSTA 9
function howManyDays(date) {
  const today = new Date() // Ottiene la data corrente
  const pastDate = new Date(date) // Converte la stringa in un oggetto Date
  const timeDifference = today - pastDate // Calcola la differenza in millisecondi
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) // Converte i millisecondi in giorni
  return daysDifference
}
console.log(
  "ESERCIZIO 9: Giorni trascorsi dal 24 agosto 2003:",
  howManyDays("2003-08-24")
)

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// RISPOSTA 10
function isTodayMyBirthday() {
  const oggi = new Date()
  const giorno = oggi.getDate()
  const mese = oggi.getMonth() // I mesi vanno da 0 in poi

  return giorno === 24 && mese === 7
}

if (isTodayMyBirthday()) {
  console.log("Buon compleanno!")
} else {
  console.log("ESERCIZIO 10: Oggi non è il tuo compleanno")
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// RISPOSTA 11
function deleteProp(obj, str) {
  delete obj[str]
  return obj
}

let persona = {
  nome: "Emiliano",
  età: 21,
  città: "Roma",
}

console.log("ESERCIZIO 11:", deleteProp(persona, "età"))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

// RISPOSTA 12
function newestMovie(movies) {
  if (!Array.isArray(movies) || movies.length === 0) return null

  return movies.reduce((piuRecente, corrente) => {
    return parseInt(corrente.Year) > parseInt(piuRecente.Year)
      ? corrente
      : piuRecente
  })
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

// RISPOSTA 13
function countMovies(movies) {
  if (!Array.isArray(movies)) return 0 // Verifica se l'input è un array
  return movies.length // Ritorna la lunghezza dell'array
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

// RISPOSTA 14
function onlyTheYears(movies) {
  if (!Array.isArray(movies)) return []
  return movies.map((movie) => parseInt(movie.Year)) // Mappa l'array per ottenere solo gli anni come numeri
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

// RISPOSTA 15
function onlyInLastMillennium(movies) {
  if (!Array.isArray(movies)) return []
  return movies.filter((movie) => parseInt(movie.Year) < 2000) // Filtra i film prodotti prima del 2000
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

// RISPOSTA 16
function sumAllTheYears(movies) {
  if (!Array.isArray(movies)) return []
  return movies.reduce((acc, movie) => acc + parseInt(movie.Year), 0) // Somma gli anni dei film
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

// RISPOSTA 17
function searchByTitle(title) {
  if (typeof title !== "string" || !title) return [] // Verifica se il titolo è una stringa non vuota
  return movies.filter((movie) =>
    movie.Title.toLowerCase().includes(title.toLowerCase())
  ) // Filtra i film che contengono il titolo
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

// RISPOSTA 18
function searchAndDivide(title) {
  if (typeof title !== "string" || !title) return { match: [], unmatch: [] }

  const match = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(title.toLowerCase())
  ) // Trova i film che contengono il titolo
  const unmatch = movies.filter(
    (movie) => !movie.Title.toLowerCase().includes(title.toLowerCase())
  ) // Trova i film che non contengono il titolo

  return { match, unmatch }
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// RISPOSTA 19
function removeIndex(index) {
  if (!Array.isArray(movies) || index < 0 || index >= movies.length) {
    return movies // ritorna l'array originale se l'indice non è valido
  }

  return movies.slice(0, index).concat(movies.slice(index + 1))
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

// RISPOSTA 20
function selectContainer() {
  const container = document.getElementById("container") // Seleziona l'elemento con id "container"
  if (container) {
    console.log("ESERCIZIO 20: Elemento con id 'container' trovato:", container)
  } else {
    console.log("ESERCIZIO 20: Elemento con id 'container' non trovato.")
  }
}
// Invoca la funzione per testarla
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

// RISPOSTA 21
function selectAllTd() {
  const tds = document.querySelectorAll("td") // Seleziona tutti i tag <td> nella pagina
  if (tds.length > 0) {
    console.log("ESERCIZIO 21: Trovati", tds.length, "tag <td> nella pagina.")
  } else {
    console.log("ESERCIZIO 21: Nessun tag <td> trovato nella pagina.")
  }
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

// RISPOSTA 22
function printTdText() {
  const tds = document.querySelectorAll("td") // Seleziona tutti i tag <td>
  if (tds.length > 0) {
    tds.forEach((td, index) => {
      console.log(
        `ESERCIZIO 22: Testo del tag <td> ${index + 1}:`,
        td.textContent
      )
    })
  } else {
    console.log("ESERCIZIO 22: Nessun tag <td> trovato nella pagina.")
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

// RISPOSTA 23
function addRedBackgroundToLinks() {
  const links = document.querySelectorAll("a") // Seleziona tutti i link nella pagina
  links.forEach((link) => {
    link.style.backgroundColor = "red" // Aggiunge un background rosso a ogni link
  })
  console.log("ESERCIZIO 23: Background rosso aggiunto a tutti i link.")
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

// RISPOSTA 24
function addItemToList() {
  const list = document.getElementById("myList") // Seleziona la lista non ordinata con id "myList"
  if (list) {
    const newItem = document.createElement("li") // Crea un nuovo elemento <li>
    newItem.textContent = "Nuovo elemento" // Imposta il testo del nuovo elemento
    list.appendChild(newItem) // Aggiunge il nuovo elemento alla lista
    console.log("ESERCIZIO 24: Nuovo elemento aggiunto alla lista.")
  } else {
    console.log("ESERCIZIO 24: Lista con id 'myList' non trovata.")
  }
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// RISPOSTA 25
function clearList() {
  const list = document.getElementById("myList") // Seleziona la lista non ordinata con id "myList"
  if (list) {
    list.innerHTML = "" // Svuota il contenuto della lista
    console.log("ESERCIZIO 25: Lista svuotata.")
  } else {
    console.log("ESERCIZIO 25: Lista con id 'myList' non trovata.")
  }
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// RISPOSTA 26
function addClassToTr() {
  const trs = document.querySelectorAll("tr") // Seleziona tutti i tag <tr>
  trs.forEach((tr) => {
    tr.classList.add("test") // Aggiunge la classe "test" a ogni tag <tr>
  })
  console.log("ESERCIZIO 26: Classe 'test' aggiunta a tutti i tag <tr>.")
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

// RISPOSTA 27
function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    console.log("*".repeat(i)) // Stampa un numero di asterischi pari all'altezza corrente
  }
}
console.log("ESERCIZIO 27")

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

// RISPOSTA 28
function tree(height) {
  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height - i) // Calcola gli spazi da aggiungere a sinistra
    const stars = "*".repeat(2 * i - 1) // Calcola il numero di asterischi da stampare
    console.log(spaces + stars) // Stampa la riga con spazi e asterischi
  }
}

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

// RISPOSTA 29
function isItPrime(n) {
  if (n <= 1) return false
  if (n === 2) return true

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }

  return true
}

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

// CONSOLE.LOG DELL'ESERCIZIO 12
const risultato = newestMovie(movies)
console.log(
  "ESERCIZIO 12: Il film più recente è:",
  risultato.Title,
  "del",
  risultato.Year
)

// CONSOLE.LOG DELL'ESERCIZIO 13
console.log("ESERCIZIO 13: Numero di film:", countMovies(movies))

// CONSOLE.LOG DELL'ESERCIZIO 14
console.log("ESERCIZIO 14: Anni di uscita dei film:", onlyTheYears(movies))

// CONSOLE.LOG DELL'ESERCIZIO 15
console.log(
  "ESERCIZIO 15: Film prodotti nel millennio scorso:",
  onlyInLastMillennium(movies)
)

// CONSOLE.LOG DELL'ESERCIZIO 16
console.log(
  "ESERCIZIO 16: Somma di tutti gli anni di produzione dei film:",
  sumAllTheYears(movies)
)

// CONSOLE.LOG DELL'ESERCIZIO 17
console.log(
  "ESERCIZIO 17: Film che contengono 'Avengers':",
  searchByTitle("Avengers")
)

// CONSOLE.LOG DELL'ESERCIZIO 18
console.log("ESERCIZIO 18:", searchAndDivide("Avengers"))

// CONSOLE.LOG DELL'ESERCIZIO 19
const nuovaLista = removeIndex(3)
console.log("ESERCIZIO 19: Film rimanenti:", nuovaLista)

// Invoca la funzione per selezionare l'elemento con id "container" ESERCIZIO 20
selectContainer()

// Invoca la funzione per selezionare tutti i tag <td> ESERCIZIO 21
selectAllTd()

// Invoca la funzione per stampare il testo di ogni tag <td> ESERCIZIO 22
printTdText()

// Invoca la funzione per aggiungere un background rosso a ogni link ESERCIZIO 23
addRedBackgroundToLinks()

// Invoca la funzione per aggiungere un nuovo elemento alla lista non ordinata ESERCIZIO 24
addItemToList()

// Invoca la funzione per svuotare la lista non ordinata ESERCIZIO 25
clearList()

// Invoca la funzione per aggiungere la classe "test" a ogni tag <tr> ESERCIZIO 26
addClassToTr()

// Invoca la funzione per costruire un mezzo albero di asterischi con altezza 3 ESERCIZIO 27
console.log("ESERCIZIO 27:")
halfTree(3)

// Invoca la funzione per costruire un albero di asterischi con altezza 3 ESERCIZIO 28
console.log("ESERCIZIO 28:")
tree(3)

// Invoca la funzione per verificare se un numero è primo ESERCIZIO 29
console.log("ESERCIZIO 29:")
console.log(isItPrime(7))
console.log(isItPrime(10))
console.log(isItPrime(24))
