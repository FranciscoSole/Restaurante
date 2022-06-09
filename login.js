window.onload = paginaCargada;


function paginaCargada(){
    let abrir = document.getElementById("ingresar");
    let check = 0
    abrir.onclick = abrirFormulario(check);
}

function abrirFormulario(check){
    if (check == 0){document.getElementById("panel").style.display = "block";}


}