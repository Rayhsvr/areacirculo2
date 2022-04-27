function area() {
    try {
    const PI = 3.141592654;
    let radio = document.getElementById("radio").value;
    let r=parseInt(radio);
    if (r >= 1) {
    let areaCirculo = PI*r*r;
    document.getElementById("area").value=areaCirculo;
    return areaCirculo;
    }else{
        window.alert("Proporcione un valor mayor o igual a 1");
    }
    } catch (error) {
        window.alert("Proporcione un valor mayor o igual a 1");
    }
}

function limpiar() {
    document.getElementById("radio").value="";
    document.getElementById("area").value="";
    
}