const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function encryptText() {
    processText(true);
}

function decryptText() {
    processText(false);
}

function processText(isEncrypt) {
    // isEncrypt es un booleano que indica si se va a encriptar o desencriptar dinamicamente
    let text = document.getElementById("text").value.toLowerCase();
    let shift = parseInt(document.getElementById("shift").value);
    console.log(text);
    console.log(shift);
    // Esto es una forma corta de isEncrypt == false
    if (!isEncrypt) {
        shift = -shift;
    }

    let result = "";
    text.split('').forEach(char => {
        let index = alphabet.indexOf(char);
        console.log("la letra es: " + char + " y su indice es: " + index);
        if (index !== -1) {
            // Se calcula el nuevo indice de la letra
            let newIndex = (index + shift + alphabet.length) % alphabet.length;
            // Esto es una forma corta de result = result + alphabet[newIndex];
            result += alphabet[newIndex];
        } else {
            // Si el caracter no esta en el alfabeto, se agrega tal cual
            result += char;
        }
    });
    document.getElementById("result").textContent = result;
}