const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    //hier moeten console.logs komen
    // 1 hoe ziet elk object eruit?
    console.log("Dit is de gehele persoon:", [person]);

    // 2 log alle namen met daarvoor een introductie
    console.log("Dit is de van : ", person.name)

    // 3 log het geboortejaar en niet de leeftijd, voor ieder persoon
    console.log("dit is het geboortejaar: ", 2021 - (person.age));

    // 4 log alle namen  en beroep, zodat je n.armstong is een spacecowboy
    console.log(person.name + " is een " + person.profession)

    // 5 plaats een if statement in de loopt die checkt of een persoon ouder is dan 50 jaar
    // zet vervolgens een console.log in deze if-statement. werkt je if statement>?
    if (person.age >= 50) {
        console.log(person.name + " is 50 jaar of ouder")
    }
}