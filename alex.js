//*! OBJETO PROPIEDADES
let a = {
  teclas          : document.querySelectorAll('#calculadora ul button'),
  operaciones     : document.querySelector('#operaciones'),
  digito          : null,
  accion          : null,
  cantidadSignos  : false,
  cantidadDecimal : false,
  resultado       : false

};

//*! OBJETO METODOS
let b = {
  
  Inicio: () => {
    a.teclas.forEach(elem =>{
      elem.addEventListener('click', () => {
        a.digito = elem.innerHTML;
        a.accion = elem.className;
        b.Mostrar(a.digito, a.accion);
      })
    })
  },

  Mostrar: (digito, accion) => {
    switch (accion){
      case 'numero':
        if (a.operaciones.innerHTML == 0) {
          a.operaciones.innerHTML = digito
        }else{
          if (a.resultado) {
            a.operaciones.innerHTML = digito;
            a.resultado = false
          }else{

            a.operaciones.innerHTML += digito;
            a.cantidadSignos = false;
            a.resultado = false;
          }
        }
        break

      case 'signo':
        if (a.operaciones.innerHTML != 0 && !a.cantidadSignos) {
          a.operaciones.innerHTML += digito;
          a.cantidadSignos = true;
          a.cantidadDecimal = false;
          a.resultado = false;
        }
        break

      case 'igual':
        a.operaciones.innerHTML = eval(a.operaciones.innerHTML);
        a.resultado = true;
        break

      case 'decimal':
        if (!a.cantidadDecimal) {
          a.operaciones.innerHTML += digito;
          a.cantidadDecimal = true;
          a.resultado = false
          
        }
        console.log('es decimal')
        break

      case 'limpiar':
        console.log('es limpíar')
        a.operaciones.innerHTML = 0;
        break
    }

  }
}
b.Inicio();