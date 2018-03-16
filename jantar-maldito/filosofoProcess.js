
console.log("inciando", process.argv[2]);
process.send({cmd: "GET",ind: process.argv[3]});
process.on('message', (msg)=>{
   console.log(msg)
    if(msg.garfo){
       console.log("Vou comer");
       process.send({cmd:"PUT", ind:process.argv[3]});
    }
});