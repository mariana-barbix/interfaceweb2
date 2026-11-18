
const jsonDados = JSON.stringify([
    {'id':1, 'nome':'Notebook Gamer', 'preco':'4500.00', 'Status' : 'Disponível em estoque'},
    {'id':2, 'nome':'Mouse sem fio', 'preco':'120.00', 'Status' : 'Esgotado'},
    {'id':3, 'nome':'Teclado Mêcanico', 'preco':'350.00' , 'Status' : 'Disponível em estoque'},
    {'id':4, 'nome':'Headset Wireless', 'preco':'600.00' , 'Status' : 'Disponível em estoque'},
    {'id':5, 'nome':'Mousepad Desk Mat', 'preco':'50.00' , 'Status' : 'Esgotado'},
    
]);

const dadosCovertidos = JSON.parse(jsonDados);

const corpoTabela = document.getElementById('tbodyCorpoTabela');

dadosCovertidos.forEach(usuario => {
    const linha = document.createElement('tr');

    linha.innerHTML = `<td>${usuario.id}</td><td>${usuario.nome}</td><td>${usuario.preco}</td><td>${usuario.Status}</td>`;

    corpoTabela.appendChild(linha);
    
});