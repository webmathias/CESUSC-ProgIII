let forks = new Array(500000)

async function wait(time) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, time)
    })
}

async function philosoph(name, position) {
    while (true) {
        // console.log(`o filosofo ${name} vai tentar pegar os dois garfos`)
        if (!forks[position]) {
            if (!forks[(position + 1) % 5]) {
                forks[position] = true;
                forks[(position + 1) % 5] = true;
                // console.log(`O filósofo ${name} começou a comer`);
                await wait(Math.round(Math.random() * 50));
                forks[position] = false;
                forks[(position + 1) % 5] = false;
            }
        }
        // console.log(`o filosofo ${name} ta falando`)
        await wait(Math.round(Math.random() * 50));
    }
}



for(let i=0; i <= forks.length; i++){
    philosoph("filosofo"+i, i);
}
