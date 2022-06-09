window.onload = paginaCargada;

function paginaCargada(){
    var visible = false;
    let abrir = document.getElementById("ingresar");
    abrir.onclick = abrirFormulario(visible);
    
    let connect = document.getElementById("conectar");
    connect.onclick = conectado;
}

function abrirFormulario(visible){
    if (visible === false){
        document.getElementById("panel").style.display = "block";
        var visible = true;
    }
    else{
        document.getElementById("panel").style.display = "none";
    }
}

function conectado(){
    let lastUser = document.getElementById("user");
    if (lastUser === "a"){
        alert("Error: no existe una cuenta con ese usuario");
        return;
    }
}