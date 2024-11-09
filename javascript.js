class heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
            this.nomeHeroi = nomeHeroi;
            this.idadeHeroi = idadeHeroi;
            this.tipoHeroi = tipoHeroi;
    }
    tipo() {
        let ataque
        if(this.tipoHeroi === "Mago"){
             ataque = "Magia"
            console.log(`o ${this.tipoHeroi} atacou usando ${ataque}`)
        }
        else if(this.tipoHeroi === "Guerreiro"){
             ataque = "Espada"
            console.log(`o ${this.tipoHeroi} atacou usando ${ataque}`)  
        }
        else if(this.tipoHeroi === "Monge"){
            ataque = "Artes Marciais"
           console.log(`o ${this.tipoHeroi} atacou usando ${ataque}`)  
       }
       else if(this.tipoHeroi === "Ninja"){
        ataque = "Shuriken"
       console.log(`o ${this.tipoHeroi} atacou usando ${ataque}`)  
   }
        
    }

}

let nossoHeroi = new heroi("John", "18", "Guerreiro")


nossoHeroi.tipo()