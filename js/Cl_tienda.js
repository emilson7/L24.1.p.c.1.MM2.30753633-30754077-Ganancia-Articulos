export default class Cl_tienda {
    constructor(){
        this.acumprecio = 0
        this.contpreciosuperior=0
    }
    procesararticulo(art){
        this.acumprecio = this.acumprecio + art.precioventa

        if(art.precioventa>65){
            return this.contpreciosuperior++
        }
    }
    promprecioventa(){
        return this.acumprecio/8
    }
}