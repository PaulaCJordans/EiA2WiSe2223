//Aufgabe: L03 Einkaufsliste
//Name: Paula Charlotte Jordans
//Matrikel: 271121   
//Datum: 29.10.22
//Quellen: <Aanya Khetarpal, Julia Befus, Pia Giovannelli, Havva Sümeyye Kilic> 
var shoppingListe;
(function (shoppingListe) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.querySelector("#trash").addEventListener("click", trash);
        document.querySelector("#check").addEventListener("click", check);
        document.querySelector("#newitem").addEventListener("click", item);
        document.querySelector("#edit").addEventListener("click", edit);
    }
    //Funktion fürs Löschen eines Items (durch Mülleimer)
    function trash() {
        console.log("Item wird von der Liste gelöscht");
    }
    //Funktion fürs abhacken eines Items (durch checkbox)
    function check() {
        console.log("Item wird gecheckt");
    }
    //Funktion für das hinzufügen eines Items (durch Plus)
    function item() {
        console.log("Neues Item");
    }
    //Funktion für das bearbeiten eines Items (durch Stift)
    function edit() {
        console.log("Item wird bearbeitet");
    }
})(shoppingListe || (shoppingListe = {}));
//# sourceMappingURL=shopping.js.map