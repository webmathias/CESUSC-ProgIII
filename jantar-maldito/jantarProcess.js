/**
 * Created by mathias on 3/15/18.
 */
/**
 * Created by mathias on 3/15/18.
 */
// import {fork} from "child_process";
const fork = require("child_process").fork

let garfos = new Array(5);

let fil1 = fork("filósofoProcess.js", ["Pele", 0]);
// let fil2 = fork("filósofoProcess.js", {nome: "Didi", posicao: 1});
// let fil3 = fork("filósofoProcess.js", {nome: "Mussum", posicao: 2});
// let fil4 = fork("filósofoProcess.js", {nome: "Tiririca", posicao: 3});
// let fil5 = fork("filósofoProcess.js", {nome: "Ronaldo", posicao: 4});

fil1.on("message", (msg) => {
    console.log(msg)
    if(msg.cmd === 'GET') {
        if ((!garfos[msg.ind]) && (!garfos[(msg.ind + 1) % 5])) {
            garfos[msg.ind] = true;
            garfos[(msg.ind + 1) % 5] = true;
            fil1.send({garfo: true})
        }
    }
    if(msg.cmd === 'PUT') {
        garfos[msg.ind] = false;
        garfos[(msg.ind + 1) % 5] = false;
    }
    });
console.log("Esperando");