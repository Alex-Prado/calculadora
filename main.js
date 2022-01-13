
const d = document;

let a = {
    teclas           :    d.querySelectorAll('#calculadora ul button'),
    operaciones      :    d.querySelector('#operaciones'),
    digito           :    null,
    accion           :    null,
    cantidadsigno    :    0,
    cantidadDecimal  :    false,
    resultado        :    false
    
}
let b = {
    Inicio: () => {
       for (let i = 0; i < a.teclas.length; i++) {
           a.teclas[i].addEventListener("click",b.Mostrar);
           
       }
    },
    Mostrar:(event) => {
        a.digito  =  (event.target.innerHTML);
        a.accion  =  (event.target.getAttribute("class"));
        b.Calculadora(a.digito, a.accion);

    },
    Calculadora: (digito, accion) => {
        switch(accion) {


            case "numero":
                a.cantidadsigno = 0;

                if(a.operaciones.innerHTML == 0){
                    a.operaciones.innerHTML = digito;
                }else{
                    if(a.resultado){
                        a.resultado = false;
                        a.operaciones.innerHTML = digito;
                    }else{
                        a.operaciones.innerHTML += digito;
                    }
                }
                break


            case "signo":

                a.cantidadsigno++;
                if(a.cantidadsigno == 1){
                    if(a.operaciones.innerHTML == 0){
                        a.operaciones.innerHTML =   0
                        a.cantidadsigno         =   0
                    }else{
                        a.operaciones.innerHTML += digito;

                        a.cantidadDecimal = false;
                        a.resultado       = false;
                    }
                }
                break


            case "decimal":
                if(a.operaciones.innerHTML == 0){
                    a.operaciones.innerHTML = 0;
                }else{
                    if(!a.cantidadDecimal){
                        a.operaciones.innerHTML += digito;
                        a.cantidadDecimal = true;
                    }
                }
                break


            case "igual":
                a.operaciones.innerHTML = eval(a.operaciones.innerHTML);
                a.resultado = true
                break


            case "limpiar":
                a.operaciones.innerHTML = 0;
                break
        }
    }
}
b.Inicio();