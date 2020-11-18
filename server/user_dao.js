'use strict';

const User = require('./user');
const db = require('./db');
const bcrypt = require('bcrypt');

/**
 * Function to create a User object from a row of the users table
 * @param {*} row a row of the users table
 */
const createUser = function (row) {
    const idUtente = row.idUtente;
    const nome = row.nome;
    const cognome = row.cognome;
    const email = row.email;
    const hash = row.hash;
    const proPic = row.proPic;
    return new User(idUtente, nome, cognome, email, hash, proPic);
}

exports.getUser = function (email) {
    return new Promise((resolve, reject) => {
        console.log("sono il dao");
        const sql = "SELECT * FROM utente WHERE email = ?"
        db.all(sql, [email], (err, rows) => {
            console.log(rows);
            if (err) {
                console.log(err);
                reject(err);
            }
            else if (rows.length == 0)
                resolve(undefined);
            else{
                const user = createUser(rows[0]);
                console.log(user);
                resolve(user);
            }
        });
    });
  };

exports.getUserById = function (id) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM utente WHERE idUtente = ?"
        db.all(sql, [id], (err, rows) => {
            if (err) 
                reject(err);
            else if (rows.length == 0)
                resolve(undefined);
            else{
                const user = createUser(rows[0]);
                resolve(user);
            }
        });
    });
  };

  
exports.getProfile = function (idUtente) {
    console.log("getProfile");
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM utente, profilo WHERE profilo.idUtente = ? AND profilo.idUtente == utente.idUtente"
        db.all(sql, [idUtente], (err, rows) => {
            console.log(rows);
            if (err) 
        {
            console.log("errore");
            reject(err);

        }
            else if (rows.length == 0){
                console.log("undefined");
                resolve(undefined);
            }
            else{
                console.log(rows);
                resolve({idUtente:rows[0].idUtente, nome:rows[0].nome, cognome:rows[0].cognome, email:rows[0].email, proPic:rows[0].proPic, bio: rows[0].bio});
            }
        });
    });
  };


exports.checkPassword = function(user, password){
    console.log("hash of: " + password);
    let hash = bcrypt.hashSync(password, 10);
    console.log(hash);
    console.log("DONE");
    return bcrypt.compareSync(password, user.hash);
}