var zufallsgedicht;
(function (zufallsgedicht) {
    //Aufgabe: L01 Zufallsgedicht
    //Name: Paula Charlotte Jordans
    //Matrikel: 271121
    //Datum: 13.10.22
    //Quellen: Pia Giovannelli, Aanya Khetarpal, Julia Befus; Havva Killic;
    let test = "expecto patronum";
    console.log(test);
    let subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"]; //hier wird für die ersten worte in den 6 sätzen der inhalt definiert: subjekte 1. stelle
    let praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"]; //hier wird für die zweiten worte in den 6 sätzen der inhalt definiert: prädikate 2. stelle
    let objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]; //hier wird für die zweiten Worte in den 6 sätzen der inhalt definiert: objekte 3. stelle
    console.log(subjekt, praedikat, objekt); // in der Konsole werden die inhalte der arrays subjekt, praedikat und objekt ausgegeben
    for (let satz = 6; satz >= 1; satz--) { // for schleife: es gibt 6 sätze, die zufällig generiert werden müssen
        //es beginnt bei satz 6 und wird immer weiter runter gezählt. die schleife läuft solange, die anzahl der sätze größer oder gleich 1 ist. 
        let letzterSatz = getVerse(subjekt, praedikat, objekt); //die sätze werden in der funktion get verse gebildet und bestehen jeweils aus einem argument der arrays subjekt, praedikat und objekt
        console.log(letzterSatz); //in der Konsole wird diese variable sechs mal ausgegeben wie die let start definiert, dass von 6 bis 1 gezählt wird
    }
    function getVerse(_subjekt, _praedikat, _objekt) {
        //hier werden arrays mit dem typen string gebildet; die leeren arrays werden mit den zufälligen wörtern aus zwilen 30,31,32 gefüllt
        let zufalligS = Math.floor(Math.random()); // diese variable shuffelt den array mit den subjekten
        let zufalligP = Math.floor(Math.random()); // diese variable shuffelt den Array mit den prädikaten
        let zufalligO = Math.floor(Math.random()); // diese variable shufflet den Array mit den objekten
        let verse = _subjekt[zufalligS] + " " + _praedikat[zufalligP] + " " + _objekt[zufalligO] + " ."; // in der variable verse werden den drei leeren arrays die zufälligen wärter zugewiesen.
        // erst wird dem vers ein subjekt geliefert, dann ein prädikat und dann ein objekt. damit wird der satz vervollständigt
        _subjekt.splice(zufalligS, 1); //in den drei nachfolgenden zwilen wird gesagt, dass sie die arrays spalten sollen und sich ein splitter rausnehmen sollen und diesen dann einsetzen
        _praedikat.splice(zufalligP, 1);
        _objekt.splice(zufalligO, 1);
        return verse; // hier steht, dass in der console das array verse ausgegeben werden soll
    }
})(zufallsgedicht || (zufallsgedicht = {}));
// * _subjekt.length kommt in zeilen 30,31,32 hinter die geschlossene Klammer von math.random, bevor die andere Klammer schließt
//# sourceMappingURL=Zufallsgedicht.js.map