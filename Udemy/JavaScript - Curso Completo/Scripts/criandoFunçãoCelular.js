// Mode 1

let celular = function(){

    this.cor = "Prata";

    this.ligar = function()
    {

        console.log("Uma ligação!");
        return "ligando";

    }

}

let objeto = new celular();

console.log(objeto.ligar);

// Mode 2

class celular {

    constructor(){

        this.cor = "Prata";

    }
    
    ligar (){

        console.log("Uma ligação");
        return "Ligando";

    }
    
}

let objeto = new celular();

console.log(objeto.ligar());