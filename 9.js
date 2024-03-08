class SomadorDeNotas{
    constructor(){
        this.notas = []
        this.totalDasNotas = 0
    }

    adicionarNota(nts, total){
        this.notas.push(nts);
        this.totalDasNotas += total;
    }

    verTotal(){
        return console.log(this.totalDasNotas)

   
    }
}

var somadorDeNotas = new SomadorDeNotas()
var total = 9+9+10+7
somadorDeNotas.adicionarNota([8, 9, 10, 7], total);
somadorDeNotas.verTotal()
