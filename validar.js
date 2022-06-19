window.onload= paginaCargada; 

function paginaCargada(){
    let muz = document.getElementById("cant1");
    let pys = document.getElementById("cant2");
    let fgz = document.getElementById("cant3");
    let vdr = document.getElementById("cant4");

    muz.onchange = precio;
    pys.onchange = precio;
    fgz.onchange = precio;
    vdr.onchange = precio;

};

function precio(){
    let muz = document.getElementById("cant1");
    let pys = document.getElementById("cant2");
    let fgz = document.getElementById("cant3");
    let vdr = document.getElementById("cant4");

    let cm = muz.value; 
    let cpys = pys.value;
    let cfgz = fgz.value;
    let cvdr = vdr.value;

    let mp = 1000*cm;
    let pysp = 1250*cpys;
    let fgzp = 1500*cfgz;
    let vdrp = 1250*cvdr;
    let total = 0;

    total += mp + pysp + fgzp + vdrp;
    if (total !== 0){
        document.getElementById("ft").innerHTML= "Precio total: $" + total[0] + "." + total[1,3];
        document.getElementById("ft").style.left = "43%";}
        
    else{
        document.getElementById("ft").innerHTML= "No se seleccionó ninguna pizza";
        document.getElementById("ft").style.left = "40%";}
    
};
