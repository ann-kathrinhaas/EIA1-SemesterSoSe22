/** 1 Gesamteinwohnerzahl 2022 */
var deutschland2022 = 83.77;
var frankreich2022 = 65.48;
var italien2022 = 59.53;
var spanien2022 = 47.36;
var eu2022 = 447.01;
/** 2 Relativ zur Gesamtzahl */
var deutschland2 = deutschland2022 / eu2022 * 100;
var frankreich2 = frankreich2022 / eu2022 * 100;
var italien2 = italien2022 / eu2022 * 100;
var spanien2 = spanien2022 / eu2022 * 100;
/** Gesamteinwohnerzahl 2002 */
var deutschland2002 = 82.54;
var frankreich2002 = 59.65;
var italien2002 = 56.99;
var spanien2002 = 41.42;
/** 3 Wachstumsrate seit 2002 */
var deutschland3 = (deutschland2022 - deutschland2002) / deutschland2002 * 100;
var frankreich3 = (frankreich2022 - frankreich2002) / frankreich2002 * 100;
var italien3 = (italien2022 - italien2002) / italien2002 * 100;
var spanien3 = (spanien2022 - spanien2002) / spanien2002 * 100;
/** 4 Wachstumsrate gesamt zwischen 2002 und 2022 */
var deutschland4 = deutschland2022 - deutschland2002;
var frankreich4 = frankreich2022 - frankreich2002;
var italien4 = italien2022 - italien2002;
var spanien4 = spanien2022 - spanien2002;
/** Deutschland */
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Deutschland im Jahr 2022 beträgt: " + deutschland2022 + "Mio");
console.log("Realtiv zur Gesamtzahl in der EU ist die Einwohnerzahl in Deutschland: " + deutschland2.toFixed(2) + "%");
console.log("Die Wachstumsrate der Einwohnerzahl in Deutschland seit 2002 beträgt: " + deutschland3.toFixed(2) + "%");
console.log("Die Wachstumsrate gesamt in Deutschland zwischen 2002 und 2022 beträgt: " + deutschland4.toFixed(2) + "Mio");
/** Frankreich */
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Frankreich im Jahr 2022 beträgt: " + frankreich2022 + "Mio");
console.log("Realtiv zur Gesamtzahl in der EU ist die Einwohnerzahl in Frankreich: " + frankreich2.toFixed(2) + "%");
console.log("Die Wachstumsrate der Einwohnerzahl in Frankreich seit 2002 beträgt: " + frankreich3.toFixed(2) + "%");
console.log("Die Wachstumsrate gesamt in Frankreich zwischen 2002 und 2022 beträgt: " + frankreich4.toFixed(2) + "Mio");
/** Italien */
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Italien im Jahr 2022 beträgt: " + italien2022 + "Mio");
console.log("Realtiv zur Gesamtzahl in der EU ist die Einwohnerzahl in Italien: " + italien2.toFixed(2) + "%");
console.log("Die Wachstumsrate der Einwohnerzahl in Italien seit 2002 beträgt: " + italien3.toFixed(2) + "%");
console.log("Die Wachstumsrate gesamt in Italien zwischen 2002 und 2022 beträgt: " + italien4.toFixed(2) + "Mio");
/** Spanien */
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Spanien im Jahr 2022 beträgt: " + spanien2022 + "Mio");
console.log("Realtiv zur Gesamtzahl in der EU ist die Einwohnerzahl in Spanien: " + spanien2.toFixed(2) + "%");
console.log("Die Wachstumsrate der Einwohnerzahl in Spanien seit 2002 beträgt: " + spanien3.toFixed(2) + "%");
console.log("Die Wachstumsrate gesamt in Spanien zwischen 2002 und 2022 beträgt: " + spanien4.toFixed(2) + "Mio");
//# sourceMappingURL=eu.js.map