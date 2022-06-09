window.onload = paginaCargada;

function paginaCargada(visible){
    var visible = false
    if (visible === false){
        let abrir = document.getElementById("ingresar");
        abrir.onclick = abrirFormulario;
    }
    else{
        document.getElementById("panel").style.display = "none";
    }

    let connect = document.getElementById("conectar");
    connect.onclick = conectado;
}

function abrirFormulario(){
    document.getElementById("panel").style.display = "block";
}

function cerrarFormulario(){
    var visible = true
    paginaCargada(visible)
}

function conectado(){
    let lastUser = document.getElementById("user");
    if (lastUser === "a"){
        alert("Error: no existe una cuenta con ese usuario");
        return;
    }
}