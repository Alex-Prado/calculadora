let a = {
  teclas          : document.querySelectorAll("#calculadora ul button"),
  operaciones     : document.querySelector("#operaciones"),
  digito          : null,
  accion          : null,
  cantidadSigno   : false,
  cantidadDecimal : false,
  resultado       : false,
  cero            : false,
};

let b = {
  Inicio: () => {
    a.teclas.forEach((element) => {
      element.addEventListener("click", () => {
        a.accion = element.className;
        a.digito = element.innerHTML;
        b.Mostrar(a.accion, a.digito);
      });
    });
  },

  Mostrar: (accion, digito) => {
    switch (accion) {
      case "signo":
        if (!a.cantidadSigno && a.operaciones.innerHTML != 0) {
          a.operaciones.innerHTML += digito;
          a.cantidadSigno   = true;
          a.cantidadDecimal = false;
          a.resultado       = false;
        }
        break;

      case "numero":

        if (a.operaciones.innerHTML == 0) {
          a.operaciones.innerHTML = digito;
        } else {
            if (a.resultado) {
                a.operaciones.innerHTML = digito;
                a.resultado             = false;
                a.cantidadSigno         = false
            }else{
                a.operaciones.innerHTML += digito;
                a.cantidadSigno = false;
            }
        }
        break;

      case "decimal":
        if (!a.cantidadDecimal && a.operaciones.innerHTML != 0) {
          a.operaciones.innerHTML += digito;
          a.cantidadDecimal = true;
          a.resultado = false
        }
        break;

      case "igual":
        a.operaciones.innerHTML = eval(a.operaciones.innerHTML);
        a.resultado = true;
        break;

      case "limpiar":
        console.log('limpiar')
        a.operaciones.innerHTML = 0;
        break;
    }
  },
};

b.Inicio();
