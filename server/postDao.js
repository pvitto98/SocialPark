'use strict'

const db = require('./db');



exports.getPosts = function(idUtente) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM post WHERE idUtente IN (SELECT idUtente2 FROM amicizia WHERE idUtente1 == ?)";
        db.all(sql, [idUtente], (err, rows) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(rows);
                resolve(rows);
            }
        });
    });
}


exports.createPost = function(post) {
    return new Promise((resolve, reject) => {
        console.log(post)
        const sql = 'INSERT INTO post(idUtente,titolo, dataPubblicazione, urlFoto, descrizione) VALUES(?,?,?,?,?)';
        db.run(sql, [post.idUtente,post.titolo, post.dataPubblicazione, post.urlFoto, post.descrizione], function (err) {
            if(err){
                console.log(err);
                reject(err);
            }
            else{
                resolve(this.lastID);
            }
        });
    });
  }