<?php
if($_SERVER["REQUEST_METHOD"] == "GET") {
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $mensagem = $_POST['mensagem'];
  
  $para = "rafaellylemosfotografia@gmail.com";
  $assunto = "Mensagem do formulário de contato";
  $corpo = "Nome: " . $nome . "\nEmail: " . $email . "\nMensagem: " . $mensagem;

  if(mail($para, $assunto, $corpo)) {
    echo "Mensagem enviada com sucesso!";
  } else {
    echo "Ocorreu um erro ao enviar a mensagem.";
  }
}
?>