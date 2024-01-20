const inactivas = []; //array con celdas inactivas
var reinas = 8; //reinas por colocar

function colocarReina(celda){

    tablero = document.getElementById("tablero"); 
    renglon = celda.parentElement.rowIndex;
    columna = celda.cellIndex;

    //poner reina si la celda no esta inactiva y si hay menos de 8 reinas
    if(!celda.classList.contains("reina") && !celda.classList.contains("inactivo") && (8 - reinas) < 8){
        
        celda.classList.add("reina");
        reinas--;

        //desactivar renglon y columna
        for (let i = 0; i < 8; i++) {

            if(columna != i){
                tablero.rows[renglon].cells[i].classList.add("inactivo");
                inactivas.push(`${renglon} ${i}`);
            }
            if(renglon != i){
                tablero.rows[i].cells[columna].classList.add("inactivo");
                inactivas.push(`${i} ${columna}`);
            }
        }
        
        //desactivar diagonales
        var r = renglon - 1;
        var c = columna + 1;
        while (r >= 0 && c < 8) {
            tablero.rows[r].cells[c].classList.add("inactivo");
            inactivas.push(`${r} ${c}`);
            r--;
            c++;
        }

        r = renglon + 1;
        c = columna -1;
        while (c >= 0 && r < 8) {
            tablero.rows[r].cells[c].classList.add("inactivo");
            inactivas.push(`${r} ${c}`);
            r++;
            c--;
        }

        r = renglon + 1;
        c = columna + 1;
        while (c < 8 && c >= 0 && r < 8 && r >= 0) {
            tablero.rows[r].cells[c].classList.add("inactivo");
            inactivas.push(`${r} ${c}`);
            r++;
            c++;
        }

        r = renglon -1;
        c = columna -1;
        while(c < 8 && c >= 0 && r < 8 && r >= 0){
            tablero.rows[r].cells[c].classList.add("inactivo");
            inactivas.push(`${r} ${c}`);
            r--;
            c--;
        }
    }
    //quitar reina
    else{
        celda.classList.remove("reina");
        reinas++;

        //reactivar renglones y columnas
        for (let i = 0; i < 8; i++) {
            if (inactivas.includes(`${i} ${columna}`)) {
                index = inactivas.indexOf(`${i} ${columna}`);
                inactivas.splice(index, 1);
            }
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

        var r = renglon;
        var c = columna;
        while (r >= 0 && c < 8) {
            if (inactivas.includes(`${r} ${c}`)) {
                index = inactivas.indexOf(`${r} ${c}`);
                inactivas.splice(index, 1)
            }
            if(!inactivas.includes(`${r} ${c}`)) {
                tablero.rows[r].cells[c].classList.remove("inactivo");
            }
            r--;
            c++;
        }

        r = renglon + 1;
        c = columna -1;
        while (c >= 0 && r < 8) {
            if (inactivas.includes(`${r} ${c}`)) {
                index = inactivas.indexOf(`${r} ${c}`);
                inactivas.splice(index, 1)
            }
            if(!inactivas.includes(`${r} ${c}`)) {
                tablero.rows[r].cells[c].classList.remove("inactivo");
            }
            r++;
            c--;
        }

        r = renglon + 1;
        c = columna + 1;
        while (c < 8 && c >= 0 && r < 8 && r >= 0) {
            if (inactivas.includes(`${r} ${c}`)) {
                index = inactivas.indexOf(`${r} ${c}`);
                inactivas.splice(index, 1)
            }
            if(!inactivas.includes(`${r} ${c}`)) {
                tablero.rows[r].cells[c].classList.remove("inactivo");
            }
            r++;
            c++;
        }

        r = renglon -1;
        c = columna -1;
        while(c < 8 && c >= 0 && r < 8 && r >= 0){
            if (inactivas.includes(`${r} ${c}`)) {
                index = inactivas.indexOf(`${r} ${c}`);
                inactivas.splice(index, 1)
            }
            if(!inactivas.includes(`${r} ${c}`)) {
                tablero.rows[r].cells[c].classList.remove("inactivo");
            }
            r--;
            c--;
        }
    }

    //actualizar contador de reinas
    document.getElementById("textoReinasPorColocar").innerHTML = "Reinas por colocar: " + reinas;
    document.getElementById("textoReinasColocadas").innerHTML = "Reinas colocadas: " + (8 - reinas);
}