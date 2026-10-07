const tarefas = [
    'Estudar HTML',
    'Estudar Javascript',
    'Compreender o DOM',
    'Entender o conceito de "for" no Javascript',
    'Entender a função de "addEventListener" do Javascript',
    'Entender a função de "createElement" do Javascript'
];

const container = document.getElementById('divContainer');
const botaoCarregar = document.getElementById('btnCarregar');

const listaUl = document.createElement('ul');

botaoCarregar.addEventListener('click', () => {

for (let i =0; i< tarefas.length; i++){

    const itemLi = document.createElement('li');
}
});