const animes = [
    "Boku no Hero",
    "Death Note",
    "Tokyo Ghoul",
    "Yu Yu hakusho",
    "Hunter x Hunter",
    "Full Metal: BloodHood",
];

function deleteArrayElement(name, array) {
    const index = array.indexOf(name);
    array.splice(index, 1);
    return array;
}

console.log(deleteArrayElement("Boku no Hero", animes));