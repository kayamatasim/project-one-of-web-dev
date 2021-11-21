// function Person(name,yob,designation) {
//     this.name=name;
//     this.yob=yob;
//     this.designation=designation;
// }
// Person.prototype.getage=function () 
// {
//     console.log(`the current age is ${2021-this.yob}`)    
// }
// let asim=new Person('asim',1997,'tutor');
// asim.getage()

// function praise(age) {
// console.log(`${this.name} is ${age} year old`)
    
// }
// let kasim={
//     name:'kasim'
// }
// praise.call(kasim,22)

// let car={
//     name:['ferrei','nano','800','alto'],
//     model:'2020',

// }
let food= [{"word":"food","phonetic":"fuːd",
"phonetics":[{"text":"fuːd",
"audio":"//ssl.gstatic.com/dictionary/static/sounds/20200429/food--_gb_1.mp3"}],
"origin":"late Old English fōda, of Germanic origin; related to fodder.",
"meanings":[{"partOfSpeech":"noun",
"definitions":[{"definition":"any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.",
"example":"we need food and water",
"synonyms":["nourishment","sustenance",
"nutriment","subsistence","fare","bread",
"daily bread","cooking","baking","cuisine",
"foodstuffs","edibles","refreshments","meals",
"provisions","rations","stores","supplies","solids",
"vivers","eats","eatables","nosh","grub","chow",
"nibbles","scoff","tuck","chuck","victuals","vittles",
"viands","commons","meat","comestibles","provender",
"aliment","commissariat","viaticum","fodder","feed",
"forage","herbage","pasturage","silage"],
"antonyms":[]}]}]}]
console.log(food[0].meanings[0].definitions[0].example)