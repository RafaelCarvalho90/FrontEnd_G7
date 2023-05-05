function enviarFormulario() {
  let nome = document.getElementById('inputNome').value;
  let email = document.getElementById('inputEmail').value;
  let mensagem = document.getElementById('inputMensagem').value;

  if (nome === '' || email === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos');
    return false;
  }

  // validar o campo de e-mail usando regex
  let regexEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido");
    return false;
  }

  let dataHora = new Date().toLocaleString().replace(/[^\d]/g, ''); // pega a data e hora atual e remove os caracteres não-numéricos
  let chave = 'formulario-contato-' + dataHora; // concatena a data e hora formatada ao nome da chave

  let dados = {
    nome: nome,
    email: email,
    mensagem: mensagem
  };

  localStorage.setItem(chave, JSON.stringify(dados)); // salva os dados com a chave única

  alert('O formulário foi enviado com sucesso!');

  document.getElementById('inputNome').value = '';
  document.getElementById('inputEmail').value = '';
  document.getElementById('inputMensagem').value = '';

  return false;
}
