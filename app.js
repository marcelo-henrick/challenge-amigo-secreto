//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];
const $ = id => document.getElementById(id);

const atualizarLista = () => {
  $("listaAmigos").innerHTML = 
    amigos.map(nome => `<li>${nome}</li>`).join('');
};

function adicionarAmigo() {
  const nome = $("amigo").value.trim();
  if (!nome) return alert("Por favor, insira um nome.");
  amigos.push(nome);
  $("amigo").value = '';
  atualizarLista();
}

function sortearAmigo() {
  if (!amigos.length) 
    return alert("Adicione pelo menos um nome antes de sortear.");
  const nome = amigos[Math.floor(Math.random() * amigos.length)];
  $("resultado").innerHTML =
    `<li>🎉 O amigo secreto sorteado foi: <strong>${nome}</strong></li>`;
}

