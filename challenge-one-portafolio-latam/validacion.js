const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});


function valida(input) {
    const tipoDeInput = input.dataset.tipo; //este data tipo hace referencia al data-tipo del html, este "tipo" se puede cambiar por otra valor personalizado
  
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];

const mensajesDeError = {

    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
      patternMismatch: "El nombre debe ser valido y no debe superar los 50 caracteres"
    },
    email: {
      valueMissing: "El campo email no puede estar vacío",
      typeMismatch: "El correo no es válido debe tener un @ y un provedor despues de éste",
    },
    asunto: {
      valueMissing: "El campo asunto no puede estar vacío",
      patternMismatch: "El asunto debe ser valido y no debe superar los 50 caracteres",
    },
    mensaje: {
      valueMissing: "El campo mensaje no puede estar vacío",
    }
    
};