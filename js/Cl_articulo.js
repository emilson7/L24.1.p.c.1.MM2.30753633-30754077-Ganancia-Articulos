export default class Cl_articulo{
    constructor(codigo,costo,precioventa){
        this.codigo=codigo
        this.costo=costo
        this.precioventa=precioventa
    }
    set codigo(cod){
        this._codigo=+cod
    }
    get codigo(){
        return this._codigo
    }
    set costo(cos){
        this._costo=+cos
    }
    get costo(){
        return this._costo
    }
}