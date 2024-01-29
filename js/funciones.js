const inactivas = []; //array con celdas inactivas
var reinas = 8; //reinas por colocar

function colocarReina(celda){

    tablero = document.getElementById("js-tablero"); 
    renglon = celda.parentElement.rowIndex;
    columna = celda.cellIndex;

    //poner reina si la celda no esta inactiva y si hay menos de 8 reinas
    if(!celda.classList.contains("reina") && !celda.classList.contains("inactivo") && (8 - reinas) < 8){
        
        celda.classList.add("reina");
        reinas--;

        //desactivar renglon y columna
        for (let i = 1; i < 9; i++) {

            if(columna != i && tablero.rows[renglon].cells[i].classList.contains("celda")){
                tablero.rows[renglon].cells[i].classList.add("inactivo");
                inactivas.push(`${renglon} ${i}`);
            }
            if(renglon != i && tablero.rows[i].cells[columna].classList.contains("celda")){
                tablero.rows[i].cells[columna].classList.add("inactivo");
                inactivas.push(`${i} ${columna}`);
            }
        }
        
        //desactivar diagonales
        for (let i = -6; i < 9; i++) {

            if (renglon + i >= 1 && renglon + i < 9 && columna + i >= 1 && columna + i < 9 && i != 0 && tablero.rows[renglon + i].cells[columna + i].classList.contains("celda")) {
                tablero.rows[renglon + i].cells[columna + i].classList.add("inactivo");
                inactivas.push(`${renglon + i} ${columna + i}`);
            }
            if (renglon - i >= 1 && renglon - i < 9 && columna + i >= 1 && columna + i < 9 && i != 0 && tablero.rows[renglon - i].cells[columna + i].classList.contains("celda")) {
                tablero.rows[renglon - i].cells[columna + i].classList.add("inactivo");
                inactivas.push(`${renglon - i} ${columna + i}`);
            }
        }
    }
    //quitar reina
    else{
        celda.classList.remove("reina");
        reinas++;

        //reactivar renglones y columnas
        for (let i = 1; i < 9; i++) {
            //quitar las coordenadas del array
            if (inactivas.includes(`${i} ${columna}`)) {
                index = inactivas.indexOf(`${i} ${columna}`);
                inactivas.splice(index, 1);
            }
            //quitar la clase de inactivo
            if(!inactivas.includes(`${i} ${columna}`)) {
                tablero.rows[i].cells[columna].classList.remove("inactivo");
            }
            if (inactivas.includes(`${renglon} ${i}`)) {
                index = inactivas.indexOf(`${renglon} ${i}`);
                inactivas.splice(index, 1);
            }
            if(!inactivas.includes(`${renglon} ${i}`)) {
                tablero.rows[renglon].cells[i].classList.remove("inactivo");
            }
        }
        
        //reactivar diagonales
        for (let i = -6; i < 9; i++) {

            if (renglon + i >= 1 && renglon + i < 9 && columna + i >= 1 && columna + i < 9 && i !== 0) {
                if (inactivas.includes(`${renglon + i} ${columna + i}`)) {
                    index = inactivas.indexOf(`${renglon + i} ${columna + i}`);
                    inactivas.splice(index, 1)
                }
                if(!inactivas.includes(`${renglon + i} ${columna + i}`)) {
                    tablero.rows[renglon + i].cells[columna + i].classList.remove("inactivo");
                }
            }
            if (renglon - i >= 1 && renglon - i < 9 && columna + i >= 1 && columna + i < 9 && i !== 0) {
                if (inactivas.includes(`${renglon - i} ${columna + i}`)) {
                    index = inactivas.indexOf(`${renglon - i} ${columna + i}`);
                    inactivas.splice(index, 1)
                }
                if(!inactivas.includes(`${renglon - i} ${columna + i}`)) {
                    tablero.rows[renglon - i].cells[columna + i].classList.remove("inactivo");
                }
            }
        }
    }

    //actualizar contador de reinas
    document.getElementById("js-texto-reinas").innerHTML = `Reinas por colocar: ${reinas}. Reinas colocadas: ${(8-reinas)}.`;

    //iniciar animacion
    if (reinas === 0){
        document.querySelector(".ochoreinas").style.animationPlayState = "running";
    }
}

//refrescar pagina
function restart(){
    window.location.reload();
}