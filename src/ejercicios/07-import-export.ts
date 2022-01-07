import { Producto, calculaISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/





const carritoCompras: Producto[] = [
    {
        descripcion: 'Telefono',
        precio: 100
    },
    {
        descripcion: 'Telefono2',
        precio: 150
    }
];

const [total, isv] = calculaISV( carritoCompras );

console.log( 'Total', total );
console.log( 'ISV', isv );
