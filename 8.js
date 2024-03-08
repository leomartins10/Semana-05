class Animal{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    
    descrever(){

      console.log(`O nome do animal é ${this.nome}, e sua idade é: ${this.idade}anos`)

    }
}

class Gato extends Animal{
    constructor(nome, idade, cor){ 
        super(nome, idade)
        this.cor = cor;
    }

    miar(){
        console.log(`O barulho que o ${this.nome} faz é miau`)
    }
}

var cachorro = new Animal('Duke', 3);
var gato = new Gato('Milks', 10, 'cinza');

cachorro.descrever()
gato.descrever(), gato.miar()
