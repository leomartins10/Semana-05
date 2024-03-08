//Criando a classe funcionário
class Funcionário{
    //Determina os atributos necessários para a criação de um objeto de classe Funcionário
    constructor(nome, idade, salarioBase){
        //Implementando os atributos da classe
        this.nome = nome
        this.idade = idade
        this.salariobase = salarioBase
    }
    //Implementando o método/função da classe
    calcularSalario(){
    }
}

//Criando a classe Professor
class Professor extends Funcionário{ 
//extends faz com que a classe Professor herde a classe Funcionário
    constructor(nome, idade, salarioBase, disciplina, horasDeAulaPorSemana, valorDaHora){
        //Super herda os atributos da classe Funcionário
        super(nome, idade, salarioBase)
        //Criação de mais 3 atributos da clasee Professor
        this.disciplina = disciplina
        this.horasDeAulaPorSemana = horasDeAulaPorSemana
        this.valorDaHora = valorDaHora
    }
    //Implementando o método/função da classe
    calcularSalario(){
        console.log('O salário do professor Cris é:', this.horasDeAulaPorSemana*this.valorDaHora + this.salariobase)
    }
}


var cris = new Professor('Cristiano', '25', 10000, 'muito disciplinado', 40, 1000);
cris.calcularSalario()

var leo = new Professor('Leo', '18', 500, 'to tentando', 40, 25)
leo.calcularSalario()