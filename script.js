const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function encryptText() {
    processText(true);
}

function decryptText() {
    processText(false);
}

function processText(isEncrypt) {
    let text = document.getElementById("text").value.toLowerCase();
    let shift = parseInt(document.getElementById("shift").value);
    if (!isEncrypt) {
        shift = -shift;
    }
    let result = "";

    text.split('').forEach((char) => {
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            let newIndex = (index + shift + alphabet.length) % alphabet.length;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    });

    document.getElementById("result").textContent = result;
}