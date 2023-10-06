let carrito = [];

// cards de los productos
let articuloCartas = document.getElementById('cartas');
articuloCartas.classList.add('container')
articuloCartas.classList.add('gap-3')


const tablaBody = document.getElementById('tablabody');


for (const producto of productos){
    articuloCartas.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: U$D ${producto.precio}</p>
            <button id="${producto.id}" class="btn btn-primary compra">Agregar al carrito</button>
        </div>
    </div>
    `
};


let botones = document.getElementsByClassName('compra');
for(const boton of botones){
    boton.addEventListener('click', () =>{
        console.log('Hiciste click en el boton cuyo id es '+boton.id)
        const prodAlCarrito = productos.find ((producto) =>producto.id == boton.id);
        console.log(prodAlCarrito);
        //Carga producto en el carrito de compras
        agregarAlCarrito(prodAlCarrito);
    });


    boton.onmouseover = () => boton.classList.replace('btn-primary', 'btn-warning');
    boton.onmouseout = () => boton.classList.replace('btn-warning', 'btn-primary');
}

function agregarAlCarrito(prod){
    carrito.push(prod);
    console.table(carrito);
    alert(`Agregaste ${prod.nombre} al carrito`);

    //agregado de producto a la tabla
    tablaBody.innerHTML += `
        <tr>
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
        </tr>
    `
}

