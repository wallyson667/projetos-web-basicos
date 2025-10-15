function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date(); // Obtem o objeto de data e hora atual do sistema
  var hora = data.getHours(); // Linha de código para obter a hora real do sistema
  //var hora = 10;  //--> para teste

  // horário atual na div de mensagem
  msg.innerHTML = `Agora são ${hora} Horas.`;
  
  // Condição das horas
  if (hora >= 0 && hora < 12) {
    img.src = "manha.png"; 
    document.body.style.background = "#5292a4";

  } else if (hora >= 12 && hora <= 18) {
    img.src = "tarde.png";
    document.body.style.background = "#d6d63e";

  } else {
    img.src = "noite.png";
    document.body.style.background = "#1e3488";
  }
}