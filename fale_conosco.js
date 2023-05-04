
function enviarFormulario() {
    let nome = document.getElementById('inputNome').value;
    let email = document.getElementById('inputEmail').value;
    let mensagem = document.getElementById('inputMensagem').value;
  
    if (nome === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos');
      return false;
    }

    // validar o campo de e-mail usando regex
    let regexEmail = /^\S+@\S+\.\S+$/;
    if (!regexEmail.test(inputEmail)) {
    alert("Por favor, insira um endereço de e-mail válido");
    return;
    }
  
    let dados = {
      nome: nome,
      email: email,
      mensagem: mensagem
    };
  
    localStorage.setItem('formulario-contato', JSON.stringify(dados));
  
    alert('O formulário foi enviado com sucesso!');
  
    document.getElementById('inputNome').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMensagem').value = '';
  
    return false;
  }