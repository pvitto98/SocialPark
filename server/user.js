class User{    
    constructor(idUtente, nome, cognome, email, hash, proPic) {
        if(idUtente)
            this.idUtente = idUtente;

        this.nome = nome;
        this.cognome=cognome;
        this.email = email;
        this.hash = hash;
        this.proPic = proPic;
    }
}

module.exports = User;