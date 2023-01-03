// Obtenemos una letra minúscula aleatoria
// Get a random lower case
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Obtenemos una letra mayúscula aleatoria
// Get a random upper case
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Obtenemos un número aleatorio
// Get a random number
function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Obtenemos un símbolo aleatorio
// Get a random symbol
function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

const randomFunc = {
    // clave : valor
    // keys : value
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

// Generamos la contraseña basándonos en las opciones seleccionadas
// Generate the password based on the selected options
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        (item) => Object.values(item)[0]
    );

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

const generate = document.getElementById("generateBtn");
generate.addEventListener("click", () => {
    const length = document.getElementById("Passwordlength").value;
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasNumber = document.getElementById("numbers").checked;
    const hasSymbol = document.getElementById("symbols").checked;

    // getting dom element textarea by id PasswordResult and assigning into result variable
    const result = document.getElementById("PasswordResult");
    result.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

let button = document.getElementById("clipboardBtn");
button.addEventListener("click", (e) => {
    e.preventDefault();
    document.execCommand(
        "copy",
        false,
        document.getElementById("PasswordResult").select()
    );
});