import Cl_articulo from "./Cl_articulo.js";
import Cl_tienda from "./Cl_tienda.js";

let tienda= new Cl_tienda()
    let articulo1= new Cl_articulo(888, 10, 15)
    let articulo2= new Cl_articulo(777, 20, 25)
    let articulo3= new Cl_articulo(999, 15, 25)
    let articulo4= new Cl_articulo(666, 25, 35)
    let articulo5= new Cl_articulo(111, 50, 70)
    let articulo6= new Cl_articulo(333, 40, 50)
    let articulo7= new Cl_articulo(444, 80, 100)
    let articulo8= new Cl_articulo(222, 5, 10)

    tienda.procesararticulo(articulo1)
    tienda.procesararticulo(articulo2)
    tienda.procesararticulo(articulo3)
    tienda.procesararticulo(articulo4)
    tienda.procesararticulo(articulo5)
    tienda.procesararticulo(articulo6)
    tienda.procesararticulo(articulo7)
    tienda.procesararticulo(articulo8)

    document.getElementById("salida")
    salida.innerHTML=`
    <br>Promedio de los precios de venta es: ${tienda.promprecioventa()}
    <br>Cantidad de articulos con precio superior a $65: ${tienda.contpreciosuperior}
    `