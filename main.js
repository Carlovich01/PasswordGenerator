let cantidad = document.getElementById('cantidad');
let contrasena = document.getElementById('contrasena');
let nivelDeSeguridad = document.getElementById('nivelDeSeguridad')
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    if (cantidad.value == '') {
        alert("Ingrese la cantidad de caracteres de la contraseña");
    }
    else {
        let numeroDigitado = parseInt(cantidad.value);
        if (numeroDigitado < 8) {
            alert("La cantidad de caracteres tiene que ser mayor o igual que 8");
        }
        else {
            let password = '';
            for (let i = 0; i < numeroDigitado; i++) {
                let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
                password += caracterAleatorio;
            }
            contrasena.value = password;
            validar(numeroDigitado);
        }
    }
}

function validar(numeroDigitado) {
    let HayCaracter = 0;
    let HayNumero = 0;
    let HaySimbolo = 0;
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()';

    for (let i = 0; i < numeroDigitado; i++) {
        for (let j = 0; j < caracteres.length; j++) {
            if (contrasena.value[i] == caracteres[j]) {
                HayCaracter = 1;
                break;
            }
        }
        for (let j = 0; j < numeros.length; j++) {
            if (contrasena.value[i] == numeros[j]) {
                HayNumero = 1;
                break;
            }
        }
        for (let j = 0; j < simbolos.length; j++) {
            if (contrasena.value[i] == simbolos[j]) {
                HaySimbolo = 1;
                break;
            }
        }
        if (HayCaracter == 1 && HayNumero == 1 && HaySimbolo == 1) {
            break;
        }
    }
    if (HayCaracter == 1 && HayNumero == 1 && HaySimbolo == 1) {
        nivelDeSeguridad.value = 'Fuerte';
    }
    else {
        nivelDeSeguridad.value = 'Debil';
    }
}

function limpiar() {
    contrasena.value = '';
    nivelDeSeguridad.value = '';
    cantidad.value='';
}

function copiarAlPortapapeles() {
    if (contrasena.value == '') {
        alert("No hay contraseña para copiar");
    } else {
        contrasena.select(); 
        document.execCommand("copy"); 
        alert("Contraseña copiada al portapapeles");
    }
}





