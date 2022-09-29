function validacionNumero(componente) {
    let dato = componente.value;
    if(isNaN(dato) || dato.includes(" ") || dato.includes(".")) {
        document.getElementById("caja_num_control").value = dato.substr(0,dato.length-1);
    } else {
        return dato;
    }
}


function validarFormulario() {
    document.getElementById("msj_num_control").innerHTML = " ";
    document.getElementById("msj_nombre").innerHTML = " ";
    document.getElementById("msj_primer_ap").innerHTML = " ";
    document.getElementById("msj_segundo_ap").innerHTML = " ";
    document.getElementById("msj_edad").innerHTML = " ";
    document.getElementById("msj_carrera").innerHTML = " ";
    document.getElementById("msj_semestre").innerHTML = " ";
    document.getElementById("msj_especialidad").innerHTML = " ";


    //VALIDACION DE NUMERO DE CONTROL
    let datoNumControl = document.getElementById("caja_num_control");
    if(datoNumControl.value.length != 8) {
        let texto = document.getElementById("msj_num_control");
        texto.innerHTML = "Incorrecto";
        texto.style.color = "red";
        return false;
    }
    

    //VALIDACION DE NOMBRE
    let nombre = document.getElementById("caja_nombre").value;
    if(nombre == "" || !/^[a-zA-Z]+(\ [a-zA-Z]+)*$/g.test(nombre)){
        let texto = document.getElementById("msj_nombre");
        texto.innerHTML = "Incorrecto";
        texto.style.color = "red";
        return false;
    }


    //VALIDACION DE PRIMER AP
    let primerAp = document.getElementById("caja_primer_ap").value;
    if(primerAp == "" || !/^[a-zA-Z]+(\ [a-zA-Z]+)*$/g.test(primerAp)){
        let texto = document.getElementById("msj_primer_ap");
        texto.innerHTML = "Incorrecto";
        texto.style.color = "red";
        return false;
    }


    //VALIDACION DE SEGUNDO AP
    let segundoAp = document.getElementById("caja_segundo_ap").value;
    if(segundoAp == "" || !/^[a-zA-Z]+(\ [a-zA-Z]+)*$/g.test(segundoAp)){
        let texto = document.getElementById("msj_segundo_ap");
        texto.innerHTML = "Incorrecto";
        texto.style.color = "red";
        return false;
    }


    //VALIDACION DE EDAD
    let edad = document.getElementById("select_edad").selectedIndex;
    if (edad == 0) {
        let texto = document.getElementById("msj_edad");
        texto.innerHTML = "Incorrecto";
        texto.style.color = "red";
        return false;
    }


    //VALIDACION DE CARRERA
    let rb = document.getElementsByClassName("rb");
    let haySelec = false;
    for (const key in rb) {
        if (Object.hasOwnProperty.call(rb, key)) {
            if(rb[key].checked) {
                haySelec = true;
                break;
            }
        }
    }

    if(!haySelec) {
        let texto = document.getElementById("msj_carrera");
        texto.innerHTML = "Incorrecto";
        texto.style.color = "red";
        return false;
    }

    //VALIDACION DE SEMESTRE
    let semestre = document.getElementById("caja_semestre");
    if(!(semestre.value >= 1 && semestre.value <= 12)) {
        let texto = document.getElementById("msj_semestre");
        texto.innerHTML = "Incorrecto";
        texto.style.color = "red";
        return false;
    }


    //VALIDACION DE ESPECIALIDAD
    let checks = document.getElementsByClassName("checks");
    let haySeleccion = false;
    for (const key in checks) {
        if (Object.hasOwnProperty.call(checks, key)) {
            if(checks[key].checked) {
                haySeleccion = true;
                break;
            }
        }
    }

    if(!haySeleccion) {
        let texto = document.getElementById("msj_especialidad");
        texto.innerHTML = "Incorrecto";
        texto.style.color = "red";
        return false;
    }


    return true;
}

function mostrar_ocultar() {
    let comprobante = document.getElementById("comp");

    if(comprobante.style.display == "none") {
        comprobante.style.display = "block";
    } else {
        comprobante.style.display = "none";
    }
}

