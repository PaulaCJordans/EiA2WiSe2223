namespace zufallsgedicht {


    //Aufgabe: L01 Zufallsgedicht
    //Name: Paula Charlotte Jordans
    //Matrikel: 271121
    //Datum: 12.10.22
    //Quellen: Pia Giovannelli, Aanya Khetarpal, Julia Befus; himmelju
    let test: string = "expecto patronum";
    console.log(test);


    let subjekt: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    console.log(subjekt, praedikat, objekt);

    for (let satz: number = 6; satz >= 1; satz--) {
        let letzterSatz: string = getVerse(subjekt, praedikat, objekt);
        console.log(letzterSatz);
    }


    function getVerse(_subjekt: string[], _praedikat: string[], _objekt: string[]): string {
        let zufalligS: number = Math.floor(Math.random() * _subjekt.length);
        let zufalligP: number = Math.floor(Math.random() * _subjekt.length);
        let zufalligO: number = Math.floor(Math.random() * subjekt.length);

        let verse: string = _subjekt[zufalligS] + " " + _praedikat[zufalligP] + " " + _objekt[zufalligO] + " .";

        _subjekt.splice(zufalligS, 1);
        _praedikat.splice(zufalligP, 1);
        _objekt.splice(zufalligO, 1);

        return verse;
    }

}