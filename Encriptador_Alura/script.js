
var validarMayusculas = false;
//window.onload = ocultar;

function validaMayusculas(textoEntrada) {
    const pattern = new RegExp('^[a-z 0-9 \u00F1]+$');
    validarMayusculas = !pattern.test(textoEntrada);
    return validarMayusculas;
}

function encriptar(){
    var textoEntrada = document.getElementById("textoEntrada").value;
    if(validaMayusculas(textoEntrada)){
        return alert("El texto contine mayusculas o caracteres especiales");
    }
    ocultar();
    mostar();
    var textoEncriptado = textoEntrada.replace(/e/img, "enter")
                    .replace(/o/img, "ober")
                    .replace(/i/img, "imes")
                    .replace(/a/img, "ai")
                    .replace(/u/img, "ufat");
    console.log(textoEncriptado);
    document.getElementById("textoSalida").innerHTML = textoEncriptado;
}

function desencriptar(){
    var textoEntrada = document.getElementById("textoEntrada").value;
    if(validaMayusculas(textoEntrada)){
        return alert("El texto contine mayusculas o caracteres especiales");
    }
    ocultar();
    mostar();
    var textoEncriptado = textoEntrada.replace(/enter/img, "e")
                    .replace(/ober/img, "o")
                    .replace(/imes/img, "i")
                    .replace(/ai/img, "a")
                    .replace(/ufat/img, "u");
    console.log(textoEncriptado);
    document.getElementById("textoSalida").innerHTML = textoEncriptado;
}

function copiar(){
    var textoACopiar = document.getElementById("textoSalida").value; 
    navigator.clipboard.writeText(textoACopiar);
}

function ocultar(){
    document.querySelector("#muneco").classList.add("ocultar");
    document.querySelector("#noTexto").classList.add("ocultar");
    document.querySelector("#ingreseTexto").classList.add("ocultar");
}

function mostar(){
    document.querySelector("#textoSalida").classList.replace("ocultar","mostrar");
    document.querySelector("#copiar").style.display="block";
}

function limpiar(){
    document.getElementById("textoEntrada").value = '';
}
