let gastoFinal = 0;

function sumaGastoFinal(precioCamisetas){
    gastoFinal = gastoFinal + precioCamisetas;
    console.log('Subtotal hasta el momento $'+gastoFinal);
}

let  idCamisetas=parseInt(prompt('CAMISETAS DE FUTBOL\n1-Camiseta titular Seleccion argentina ... $120\n2-Camiseta Alternativa Seleccion Argentina ... $110\n3-Camiseta titular River plate ... $110\n4-Camiseta Titular Seleccion de Brasil ... $120\n0- PARA FINALIZAR LA CARGA'));

while(idCamisetas != 0){

    switch(idCamisetas){
        case 1:
            alert('Felicitaciones, agregaste Camiseta Titular Seleccion Argentina ... $120 al carro');
            sumaGastoFinal(120);
            break;
        case 2:
            alert('Felicitaciones, agregaste Camiseta Alternativa Seleccion Argentina ... $110 al carro');
            sumaGastoFinal(110);
            break;
        case 3:
            alert('Felicitaciones, agregaste Camiseta Titular River Plate ... $110 al carro');
            sumaGastoFinal(110);
            break;    
        case 4:
            alert('Felicitaciones, agregaste Camiseta Titular Seleccion Brasil ... $120 al carro');
            sumaGastoFinal(120);
            break;    
        default:
            alert('Codigo de compra erroneo');
            break;    
    }
    idCamisetas=parseInt(prompt('CAMISETAS DE FUTBOL\n1-Camiseta titular Seleccion argentina ... $120\n2-Camiseta Alternativa Seleccion Argentina ... $110\n3-Camiseta titular River plate ... $110\n4-Camiseta Titular Seleccion de Brasil ... $120\n0- PARA FINALIZAR LA CARGA'));
}

alert('El total de tu compra es $'+gastoFinal)

