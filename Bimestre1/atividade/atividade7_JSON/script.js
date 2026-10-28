// ETAPA 1:O servidor envia os dados como TEXTO
// (o stringify simula o que o servidor faz)

const jsonDados = JSON.stringify([
    {'id':1, 'nome':'Ana Silva', 'email':'ana@email.com'},
    {'id':2, 'nome':'Carlos Souza', 'email':'carlos@email.com'},
    {'id':3, 'nome':'Luís Santos', 'email':'luis@email.com'},
    {'id':4, 'nome':'Maria Pereira', 'email':'maria@email.com'},
    
]);

const dadosCovertidos = JSON.parse(jsonDados);

const corpoTabela = document.getElementById('tbodyCorpoTabela');

dadosCovertidos.forEach(usuario => {
    const linha = document.createElement('tr');

    linha.innerHTML = `<td>${usuario.id}</td><td>${usuario.nome}</td><td>${usuario.email}</td>`;

    corpoTabela.appendChild(linha);
    
});