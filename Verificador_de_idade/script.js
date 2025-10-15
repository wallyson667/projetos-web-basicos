function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    // res.innerHTML = `Idade calculada: ${idade}`;   //Para calcular a idade
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "bebeM.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "jovemM.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "adultoM.png");
      } else {
        // idoso
        img.setAttribute("src", "idosoM.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "bebeF.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "jovemF.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "adultoF.png");
      } else {
        // idoso
        img.setAttribute("src", "idosoF.png");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
