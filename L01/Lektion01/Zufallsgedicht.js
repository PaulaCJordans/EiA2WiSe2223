var zufallsgedicht;
(function (zufallsgedicht) {
    //Aufgabe: L01 Zufallsgedicht
    //Name: Paula Charlotte Jordans
    //Matrikel: 271121
    //Datum: 12.10.22
    //Quellen: Pia Giovannelli, Aanya Khetapal, Julia Befus; himmelju
    let test = "expecto patronum";
    console.log(test);
    let subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subjekt, praedikat, objekt);
    for (let satz = 6; satz >= 1; satz--) {
        let letzterSatz = getVerse(subjekt, praedikat, objekt);
        console.log(letzterSatz);
    }
    function getVerse(_subjekt, _praedikat, _objekt) {
        let zufalligS = Math.floor(Math.random() * _subjekt.length);
        let zufalligP = Math.floor(Math.random() * _subjekt.length);
        let zufalligO = Math.floor(Math.random() * subjekt.length);
        let verse = _subjekt[zufalligS] + " " + _praedikat[zufalligP] + " " + _objekt[zufalligO] + " .";
        _subjekt.splice(zufalligS, 1);
        _praedikat.splice(zufalligP, 1);
        _objekt.splice(zufalligO, 1);
        return verse;
    }
})(zufallsgedicht || (zufallsgedicht = {}));
//# sourceMappingURL=Zufallsgedicht.js.map