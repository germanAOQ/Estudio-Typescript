/*
    ===== Código de TypeScript =====
*/

interface Detalles {
    autor: string;
    año: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        año: 2015
    }
}

const autor = 'Fulano';

const { volumen, segundo, cancion, detalles } = reproductor;
const {autor: autorDetalle} = detalles

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La cancion actual es: ', cancion);
// console.log('El autor actual es: ', autorDetalle);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = dbz;

console.log("Personaje 1 ", p1);
console.log("Personaje 2 ", p2);
console.log("Personaje 3 ", p3);
