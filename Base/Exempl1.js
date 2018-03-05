var teste1 = "1";
let teste2 = "2";
const teste3 = "3";

let array = [2,4,6,7,8];
array.push(9);
array.pop();
array.splice(0,1);
// For para pegar o indice
for(let i in array){
    console.log(i);
}
// For para pegar o tem
for(let item of array){
    console.log(item);
}


console.log(array);

teste2 = 5;

console.log("Escrevendo Teste3 "+teste3);
console.log("Escrevendo Teste3 ",teste3);
console.log("Escrevendo Teste3 R$%d ", teste3);

console.log("Escrevendo Teste2 ",teste2);
let i = 0;
while(i <10){
    i++;
}
i =0
do{
    i++;
}while(i < 10);

let obj1 = {
    nome:'',
    sobrenome:'',
    rg:'',
    itens: [],
    for:'teste'
};

console.log('obj1:', obj1);
console.log('obj1:', JSON.stringify(obj1));

let json = JSON.parse('{"name":"Mathias"}');

// obj1.name
// obj1['name']
// obj1.for
// array[7]
if(typeof(obj1) == 'object') {
    console.log('É um objeto!!!!!!!');
}