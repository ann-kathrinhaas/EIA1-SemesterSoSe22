var Aufgabe7;
(function (Aufgabe7) {
    var deutschland = "Deutschland";
    var frankreich = "Frankreich";
    var italien = "Italien";
    var spanien = "Spanien";
    var eu = "der europäischen Union";
    /** 1 Gesamteinwohnerzahl 2022 */
    var deutschland2022 = 83.77;
    var frankreich2022 = 65.48;
    var italien2022 = 59.53;
    var spanien2022 = 47.36;
    var eu2022 = 447.01;
    /** Gesamteinwohnerzahl 2002 */
    var deutschland2002 = 82.54;
    var frankreich2002 = 59.65;
    var italien2002 = 56.99;
    var spanien2002 = 41.42;
    var eu2002 = 378.22;
    window.addEventListener("load", function () {
        function start() {
        }
        function einwohnerzahl(land, land2022, land2002) {
            document.querySelector("h1").innerHTML = "Einwohnerzahl in " + land;
            document.querySelector("#land").innerHTML = land;
            document.querySelector("#sec1").innerHTML = land2022 + "Mio";
            document.querySelector("#sec2").innerHTML = (land2022 / eu2022 * 100).toFixed(2) + "%";
            document.querySelector("#sec3").innerHTML = ((land2022 - land2002) / land2002 * 100).toFixed(2) + "%";
            document.querySelector("#sec4").innerHTML = (land2022 - land2002).toFixed(2) + "Mio";
            document.querySelector(".chart").setAttribute("style", "height:" + (land2022 / eu2022) * 100 + "%");
        }
        document.querySelector(".germany").addEventListener('click', function () {
            einwohnerzahl(deutschland, deutschland2022, deutschland2002);
        });
        document.querySelector(".france").addEventListener('click', function () {
            einwohnerzahl(frankreich, frankreich2022, frankreich2002);
        });
        document.querySelector(".italy").addEventListener('click', function () {
            einwohnerzahl(italien, italien2022, italien2002);
        });
        document.querySelector(".spain").addEventListener('click', function () {
            einwohnerzahl(spanien, spanien2022, spanien2002);
        });
        document.querySelector(".stars").addEventListener('click', function () {
            einwohnerzahl(eu, eu2022, eu2002);
        });
    });
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=eu.js.map