var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var buscarIndice = (cadena, letra) => {

    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] === letra) {
           
            return i;
        }
    }
    return -1;
}

var transformarLetra = (letra, alfabetoOrigen, alfabetoDestino) => {
    var indiceLetra = buscarIndice(alfabetoOrigen, letra);
    if (indiceLetra === -1) {
        return letra;
    }
    else {
        return alfabetoDestino[indiceLetra];
    }

}
var transformarMensaje = (mensaje, textoOrigen, textoDestino) => {
    mensajeMinusculas = mensaje.toLowerCase();
    var result = "";
    for (var letra of mensajeMinusculas) {
        result = result + transformarLetra(letra, textoOrigen, textoDestino);

    }
    return result;

}
document.getElementById("encriptado").addEventListener("click", function () {
    var mensaje = document.getElementById("plano").value;
    document.getElementById("enigma").value = transformarMensaje(mensaje, plainAlphabet, encryptedAlphabet);

})
document.getElementById("desencriptado").addEventListener("click", function () {
    var mensaje = document.getElementById("enigma").value;
    document.getElementById("plano").value = transformarMensaje(mensaje, encryptedAlphabet, plainAlphabet);
}
)