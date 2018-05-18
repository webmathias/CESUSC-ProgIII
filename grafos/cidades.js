const cidades = [
    {
        nome: 'A',
        filhos: [
            { destino: 'D', custo: 10 },
            { destino: 'C', custo: 15 },
            { destino: 'J', custo: 25 }
        ]
    },
    {
        nome: 'B',
        filhos: []
    },
    {
        nome: 'C',
        filhos: [
            { destino: 'E', custo: 1 },
            { destino: 'F', custo: 2 },
        ]
    },
    {
        nome: 'D',
        filhos: [
            { destino: 'B', custo: 6 },
            { destino: 'E', custo: 18 },
        ]
    },
    {
        nome: 'E',
        filhos: [
            { destino: 'B', custo: 4 },
        ]
    },
    {
        nome: 'F',
        filhos: [
            { destino: 'A', custo: 5 },
        ]
    },
    {
        nome: 'J',
        filhos: [
            { destino: 'D', custo: 12 },
            { destino: 'B', custo: 34 },
        ]
    },

]
/** 
 * nodo: {
 *  atual: 
 *  percorridos: []
 * }
*/
let inicio = {
    nome: 'A',
    percorridos: [],
    custo: 0
}
const destino = 'B';

let aPercorrer = [inicio]
let menorDestino = {}
while (aPercorrer.length > 0) {
    // let atual = aPercorrer.pop();
    let atual = aPercorrer[0];
    aPercorrer.splice(0,1);
    console.log('Tamanho Lista:', aPercorrer.length);
    // console.log('atual:', atual);

    // 1 - Validar se é o fim
    if (atual.nome == destino) {
        console.log('Chegue por um caminho');
        console.log(atual.percorridos);
        console.log("Custo Total:", atual.custo);
        menorDestino = {
            percorridos: atual.percorridos,
            custo: atual.custo
        }
    }
    // 2 - Adicionar novos caminhos
    let filhos = cidades.find(c => c.nome == atual.nome).filhos;
    for (let f of filhos) {
        if (atual.percorridos.find(f1 => f1 == f.destino)) {
            console.log('Não adiciona, já percorreu por:', f);
            continue;
        }
        if(menorDestino && atual.custo+f.custo > menorDestino.custo){
            console.log('** - Já tem um caminho mais curto, não olhar mais por aqui: '+(atual.custo+f.custo)+ " > "+menorDestino.custo+ ' >> '+atual.nome+' >> '+f.destino);
            continue;
        }
        aPercorrer.push({
            nome: f.destino,
            percorridos: [...atual.percorridos, atual.nome],
            custo: atual.custo + f.custo
        })
    }
}

