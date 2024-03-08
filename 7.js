class Animal{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    
    descrever(){

      console.log(`O nome do animal é: ${this.nome}, e sua idade é: ${this.idade}` )

    }
}

cachorro = new Animal('Duke', 3);
gato = new Animal('Milks', 10);

cachorro.descrever()
gato.descrever()