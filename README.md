# Medieinstitutet-Cars

-Filtrera och söka
-Ändra
-Radera
-Spara och lägga till nya dokument

## Nytt repo
- på gitHub.
- kopiera adressen på gitHub
- I terminalen skriv där du vill att projektet ska vara:
- git clone adresserntillgithubrepot.git
- öppna mappen: code . 
- installera Express, se nedan:

## Installationer som gjorts:

- npx express-generator --no-view . 

- npm i

- npm i nodemon

- npx nodemon start
- eller nodemon start

## Mockaroo.com - det finns färdiga APIER där man kan mocka fram data. Vi tog boklistan därifrån. Valde format JSON. Välj preview och kopiera- klistra in. 

- REST Client (Huachao Mao)- en ny extension som är som att ha Postman inbyggt i VSC.Gå bara till extensions-knappen och leta upp i sökrutan., tryck på installera. Skapa sedan en ny fil i roten som du döper till test.rest Här kan man sedan skriva test-anrop. Skriv GET: http://localhost:3000/books Två tommar rader och ### för att visa att mitt test är färdigt. Tryck på send request ovanför det du skrivit. Testanropet öppnas bredvid.

## Böckerna sparas i book.json -filen
## Vi skriver i books.js den mesta koden
## Vi testar i test.rest -filen

## Cors - problem:
Om du har ett "origin"-problem.  
Stäng först av nodemon om den är på (ctrl c).  
installera cors: npm i cors  

Lägg till detta i app.js-filen högst upp, och eventuellt i andra filer som innehåller routrar:  
let cors = require("cors");  
app.use(cors()); eller router.use(cors());

## .gitignore
- skapa en .gitignore fil direkt i roten.
- skriv i den: /node_modules
- Då kommer inte denna mapp - node_modules - att laddas upp på GitHub, för den ska inte vara där.



## Installera MongoDB in i VSC
- npm install mongodb
- Skriv i app.js:   

const MongoClient = require("mongodb").MongoClient;  

MongoClient.connect("mongodb://127.0.0.1:27017", {  
    useUnifiedTopology:true  
})  

.then (client => {  
    console.log("Vi är uppkopplade mot databasen!");  
  
    const db = client.db("cars");
    app.locals.db = db;   
})

## För att databasen ska sättas på, skriv mongod

## REST Client (Huachao Mao)- 
en ny extension som är som att ha Postman inbyggt i VSC.Gå bara till extensions-knappen och leta upp i sökrutan., tryck på installera. Skapa sedan en ny fil i roten som du döper till test.rest Här kan man sedan skriva test-anrop. Skriv GET: http://localhost:3000/books Två tommar rader och ### för att visa att mitt test är färdigt. Tryck på send request ovanför det du skrivit. Testanropet öppnas bredvid.
För post skriv:  

POST http://localhost:3000/books
Content-Type: application/json

{
  "bookName": "Det",
  "isbn": "417028859-6",
  "rented": false,
  "author": "Stephen King"
}

###

För patch skriv:
PATCH http://localhost:3000/books/34
Content-Type: application/json

###

## En ny router:
skriv i app.js:  
var carsRouter = require('./routes/cars');  
app.use('/cars', carsRouter);  
- Kopiera t.ex users.js och döp om den till routernamnet: cars.js


## För att MongoDB ska fungera: (Det räcker att göra det första gången du använder den på en dator)
- efter installation - högerklicka på "Den här datorn" i Utforskaren.
- Välj Egenskaper, system, avancerade systeminställningar och Miljövariabler. 
- Det finns två, users och system. Öppna users, tryck på path och redigera.
- Dubbelklicka på en tom ruta och bläddra fram stället där du har din MongoDB, ända fram till och med bin-mappen.
- Spara
- Gör likadant i system.