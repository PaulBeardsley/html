let hanSolo = new Map([
    ["vehicle", "Millenium Falcon"],
    ["bff", "Chewbacca"],
    ["sweetheart", "Leia"]
]);

// Instruction 6 - Access map properties
console.log(hanSolo.size);
console.log(`Han Solo's ship is called ${hanSolo.get("vehicle")}`);
console.log(`Han Solo's has a sweetheart? ${hanSolo.has("sweetheart")}`);
console.log(`Han Solo is a Jedi? ${hanSolo.has('Jedi')}`);

// Instruction 7 - Add to the map
hanSolo.set("son", "Ben");
console.log(`Han Solo's son is called ${hanSolo.get("son")}`);

// Instruction 8 - Iterate over the map
for (let [key, value] of hanSolo) {
    console.log(`Han Solo's ${key} is ${value}`);
}

// Instruction 9 - Manipulate the map
hanSolo.set("bff", "Luke");
console.log(hanSolo);
hanSolo.delete("son");
console.log(hanSolo);
hanSolo.clear();
console.log(hanSolo);