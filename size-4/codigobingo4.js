const table = document.querySelector("#tblBingo")
const letter = document.querySelectorAll(".letters-bingo")

const winningPositions = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],

    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],

    [0, 5, 10, 15],
    [3, 6, 9, 12],
]


let arr = Array.apply(null, {length: 51}).map(Number.call, Number);


arr.shift()
shuffle(arr);

function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

let iterator = 0;

for (i = 0; i < 4; i++) {
    let tr = document.createElement("tr")
    table.appendChild(tr)

    for (j = 0; j < 4; j++) {
        let td = document.createElement("td")
        td.id = arr[iterator].toString()
        td.style.height = "20%"
        td.style.width = "20%"
        td.classList.add("main-table-cell")

        let div = document.createElement("div")
        div.classList.add("cell-format")
        div.textContent = arr[iterator].toString()
        td.appendChild(div)
        tr.appendChild(td)
        iterator++;
    }
}

const cell = document.querySelectorAll(".main-table-cell");
let winningIterator = 0
let contadorNumMarcados = 0
cell.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.add("strickout");
        contadorNumMarcados++; 


        if(matchWin()) {
            letter[winningIterator].classList.add("show-bingo");

            winningIterator++;
            if(contadorNumMarcados === 16) {
                alert('¡BINGO!')
                location.reload();
            }
        }
    })
})

function matchWin() {
    const cell = document.querySelectorAll(".main-table-cell");

    return winningPositions.some(combination => {
        let ite = 0;
        combination.forEach(index => {
            if(cell[index].classList.contains("strickout")) ite++;
        })

        if(ite === 4) {
            let indexWin = winningPositions.indexOf(combination);
            winningPositions.splice(indexWin, 1)
        }

        return combination.every(index => {
            return cell[index].classList.contains("strickout")
        })
    })
}

function reiniciarJuego() {
    location.reload();
}


console.log(arr)

let btn1 = document.querySelector('#clickbtn');
let showclicks = document.querySelector('#showdata');
let counter = 0;

function printClick() {
    counter++;
    showclicks.innerHTML = "Turno de juego: " + counter;
    if(counter == 26) {
        alert('SE HA ACABADO EL JUEGO');
        location.reload();
    }
    
} 
btn1.addEventListener('click',printClick);

// "addEventListener" escucha el evento 'click', y cada vez que ese evento pasa, se lleva a cabo la funcion printClick


const numerosPosibles = Array.from({ length: 50 }, (_, i) => i + 1);

// Ordena los números al azar
numerosPosibles.sort(() => (Math.random() > 0.5 ? 1 : -1));

// Función para generar un número y mostrarlo en la página
function generarNumero() {
    if (numerosPosibles.length > 0) {
    const numeroAleatorio = numerosPosibles.pop();
    document.getElementById(
        "numeroGenerado"
    ).textContent = `${numeroAleatorio}`;
    } else {
    document.getElementById("numeroGenerado").textContent =
        "Ya se generaron todos los números.";
    }
}