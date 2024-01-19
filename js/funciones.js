var reinas = 8;

function colocarReina(celda) {

    if (window.getComputedStyle(celda).backgroundImage == "none") {
        
        if ((8 - reinas) < 8) {
            celda.style = "background-image: url(./img/reina.png); background-size: cover;";
            reinas--;
            var renglon = celda.parentElement.rowIndex;
            var columna = celda.cellIndex;
            var tablero = document.getElementById("tablero");
            
            for (let i = 0; i < 8; i++) {
                if (columna != i) {
                    tablero.rows[renglon].cells[i].removeAttribute("onclick");
                    tablero.rows[renglon].cells[i].style.backgroundColor = "#ff0000";
                }
                if (renglon != i) {
                    tablero.rows[i].cells[columna].removeAttribute("onclick");
                    tablero.rows[i].cells[columna].style.backgroundColor = "#ff0000";
                }
            }
            var r = renglon;
            var c = columna;
            while (r >= 0 && c < 8) {
                tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
                r--;
                c++;
            }

            r = renglon + 1;
            c = columna -1;

            while (c >= 0 && r < 8) {
                tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
                r++;
                c--;
            }
            r = renglon + 1;
            c = columna + 1;

            while (c < 8 && r < 8) {
                tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
                r++;
                c++;
            }

            r = renglon -1;
            c = columna -1;

            while(c < 8 && r < 8){
                tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
                r--;
                c--;
            }
        }
    } else {
        celda.style = "background-image: none;";
        reinas++;
        var renglon = celda.parentElement.rowIndex;
        var columna = celda.cellIndex;
        var tablero = document.getElementById("tablero");
            for (let i = 0; i < 8; i++) {
                    tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
                    tablero.rows[renglon].cells[i].style.backgroundColor = "";
                    tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
                    tablero.rows[i].cells[columna].style.backgroundColor = "";
            }
            var r = renglon;
            var c = columna;
            while (r >= 0 && c < 8) {
                tablero.rows[r].cells[c].style.backgroundColor = "";
                r--;
                c++;
            }

            r = renglon + 1;
            c = columna -1;

            while (c >= 0 && r < 8) {
                tablero.rows[r].cells[c].style.backgroundColor = "";
                r++;
                c--;
            }
            r = renglon + 1;
            c = columna + 1;

            while (c < 8 && r < 8) {
                tablero.rows[r].cells[c].style.backgroundColor = "";
                r++;
                c++;
            }

            r = renglon -1;
            c = columna -1;

            while(c < 8 && r < 8){
                tablero.rows[r].cells[c].style.backgroundColor = "";
                r--;
                c--;
            }
    }

    document.getElementById("textoReinasPorColocar").innerHTML = "Reinas por colocar: " + reinas;
    document.getElementById("textoReinasColocadas").innerHTML = "Reinas colocadas: " + (8 - reinas);
}