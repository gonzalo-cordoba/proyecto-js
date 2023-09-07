console.table(productos);

let hoy = new Date().getDay();
const diasDeSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
alert(`Espero que estes teniendo un hermoso ${diasDeSemana[hoy-1]}`);

function filtradoPorPrecioMax(precioMaximo) {
    const filtrados = productos.filter((producto) => producto.precio <= precioMaximo);
    

    if (filtrados.length != 0) {
        
        let textoAlert = '';
        filtrados.forEach((producto) => {
            textoAlert += `ID: ${producto.id} - Nombre: ${producto.nombre} - Precio $ ${producto.precio}\n`;
        });
        alert(textoAlert);
    } else {
        alert('Lo sentimos, no encontramos productos por ese precio');
    }
}

let precio = parseFloat(prompt('Ingresa el precio maximo que puedes abonar (0-salir del programa)'));

while (precio != 0) {
    filtradoPorPrecioMax(precio);

    precio = parseFloat(prompt('Ingresa el precio maximo que puedes abonar (0-salir del programa)'));
}

let numAzar = Math.round(Math.random() * (productos.length - 1) + 1);

let productoAzar = productos[numAzar];
alert(`OFERTA DEL MES\n${productoAzar.nombre} ... $ ${productoAzar.precio}`);

